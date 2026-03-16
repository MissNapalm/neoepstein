"""
Parse list.txt (JS graph object) and load nodes + links into Neo4j.
"""

import re
import os
from neo4j import GraphDatabase

NEO4J_URI = "bolt://localhost:7687"
NEO4J_USER = "neo4j"
NEO4J_PASSWORD = "epstein2024"
LIST_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "list.txt")


def parse_list_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        raw = f.read()
    raw = re.sub(r'//.*?\n', '\n', raw)
    nodes_match = re.search(r'nodes:\s*\[(.*)\]\s*,\s*links:', raw, re.DOTALL)
    if not nodes_match:
        raise ValueError("Could not find nodes array")
    links_match = re.search(r'links:\s*\[(.*)\]\s*\}', raw, re.DOTALL)
    if not links_match:
        raise ValueError("Could not find links array")
    nodes = _extract_objects(nodes_match.group(1))
    links = _extract_objects(links_match.group(1))
    print(f"✅ Parsed {len(nodes)} nodes and {len(links)} links")
    return nodes, links


def _extract_objects(text):
    objects = []
    depth = 0
    start = None
    for i, ch in enumerate(text):
        if ch == '{':
            if depth == 0:
                start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and start is not None:
                try:
                    obj = _parse_js_object(text[start:i + 1])
                    if obj:
                        objects.append(obj)
                except Exception as e:
                    print(f"  ⚠️  Parse error: {str(e)[:60]}")
                start = None
    return objects


def _parse_js_object(s):
    s = s.strip()
    if not s.startswith('{') or not s.endswith('}'):
        return None
    inner = s[1:-1]
    result = {}
    i = 0
    n = len(inner)
    while i < n:
        while i < n and inner[i] in ' \t\n\r,':
            i += 1
        if i >= n:
            break
        key, i = _read_key(inner, i)
        if key is None:
            break
        while i < n and inner[i] in ' \t\n\r':
            i += 1
        if i < n and inner[i] == ':':
            i += 1
        while i < n and inner[i] in ' \t\n\r':
            i += 1
        value, i = _read_value(inner, i)
        result[key] = value
    return result


def _read_key(s, i):
    n = len(s)
    while i < n and s[i] in ' \t\n\r':
        i += 1
    if i >= n:
        return None, i
    if s[i] in ('"', "'"):
        return _read_string(s, i)
    start = i
    while i < n and s[i] not in ':, \t\n\r{}':
        i += 1
    return s[start:i], i


def _read_string(s, i):
    quote = s[i]
    i += 1
    parts = []
    n = len(s)
    while i < n:
        if s[i] == '\\' and i + 1 < n:
            nxt = s[i + 1]
            if nxt == quote:
                parts.append(quote)
            elif nxt == 'n':
                parts.append('\n')
            elif nxt == 't':
                parts.append('\t')
            elif nxt == '\\':
                parts.append('\\')
            else:
                parts.append(s[i:i + 2])
            i += 2
        elif s[i] == quote:
            i += 1
            return ''.join(parts), i
        else:
            parts.append(s[i])
            i += 1
    return ''.join(parts), i


def _read_value(s, i):
    n = len(s)
    if i >= n:
        return "", i
    if s[i] in ('"', "'"):
        return _read_string(s, i)
    if s[i:i + 4] == 'true':
        return True, i + 4
    if s[i:i + 5] == 'false':
        return False, i + 5
    if s[i:i + 4] == 'null':
        return None, i + 4
    if s[i] in '0123456789.-':
        start = i
        while i < n and s[i] in '0123456789.eE+-':
            i += 1
        num = s[start:i]
        try:
            return float(num) if '.' in num else int(num), i
        except ValueError:
            return num, i
    start = i
    while i < n and s[i] not in ',}':
        i += 1
    return s[start:i].strip(), i


def write_to_neo4j(nodes, links):
    driver = GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USER, NEO4J_PASSWORD))
    with driver.session() as session:
        print("🗑️  Clearing existing data...")
        session.run("MATCH (n) DETACH DELETE n")
        session.run("CREATE CONSTRAINT IF NOT EXISTS FOR (p:Person) REQUIRE p.id IS UNIQUE")
        session.run("CREATE INDEX IF NOT EXISTS FOR (p:Person) ON (p.name)")
        session.run("CREATE INDEX IF NOT EXISTS FOR (p:Person) ON (p.type)")

        print(f"👤 Creating {len(nodes)} nodes...")
        for node in nodes:
            nid = node.get("id", "")
            if not nid:
                continue
            node_type = node.get("type", "unknown")
            labels = ["Person"]
            label_map = {
                "center": "Center",
                "convicted": "Convicted",
                "suspicious": "Suspicious",
                "possibly": "PossiblyInvolved",
            }
            if node_type in label_map:
                labels.append(label_map[node_type])
            if node.get("birthday_book"):
                labels.append("BirthdayBook")
            label_str = ":".join(labels)
            props = {
                "id": nid,
                "name": node.get("label", nid),
                "type": node_type,
                "radius": node.get("radius", 10),
                "agency": str(node.get("agency", "")),
                "role": str(node.get("role", "")),
                "status": str(node.get("status", "")),
                "networth": str(node.get("networth", "")),
                "intelRole": str(node.get("intelRole", "")),
                "epsteinLink": str(node.get("epsteinLink", "")),
                "significance": str(node.get("significance", "")),
                "description": str(node.get("desc", "")),
                "evidence": str(node.get("evidence", "")),
                "link_note": str(node.get("link", "")),
                "birthday_book": bool(node.get("birthday_book", False)),
            }
            session.run(
                f"CREATE (p:{label_str} $props)",
                props=props,
            )

        print(f"🔗 Creating {len(links)} relationships...")
        created = 0
        missing = 0
        for link in links:
            src = link.get("source", "")
            tgt = link.get("target", "")
            strength = link.get("strength", 0.5)
            if not src or not tgt:
                continue
            result = session.run(
                """
                MATCH (a:Person {id: $src})
                MATCH (b:Person {id: $tgt})
                CREATE (a)-[r:CONNECTED_TO {strength: $strength}]->(b)
                RETURN count(r) AS cnt
                """,
                src=src, tgt=tgt, strength=strength,
            )
            if result.single()["cnt"] > 0:
                created += 1
            else:
                missing += 1
                print(f"  ⚠️  Missing node: {src} → {tgt}")
        print(f"  ✅ {created} created | ⚠️ {missing} failed")

        print("\n" + "=" * 60)
        print("📊 GRAPH STATISTICS")
        print("=" * 60)
        for record in session.run(
            "MATCH (n:Person) RETURN n.type AS type, count(n) AS count ORDER BY count DESC"
        ):
            print(f"  {record['type']:20s} {record['count']:>4d} nodes")
        total = session.run("MATCH ()-[r]->() RETURN count(r) AS c").single()["c"]
        print(f"\n  Total relationships: {total}")
        print("\n🔝 Most Connected:")
        for r in session.run(
            "MATCH (p:Person)-[r]-() RETURN p.name AS name, p.type AS type, count(r) AS c ORDER BY c DESC LIMIT 20"
        ):
            print(f"  {r['name']:35s} {r['type']:15s} {r['c']:>5d}")

    driver.close()
    print(f"\n✅ Done! Open http://localhost:7474")
    print(f"   Login: neo4j / epstein2024")


if __name__ == "__main__":
    print("=" * 60)
    print("  EPSTEIN NETWORK → Neo4j")
    print("=" * 60)
    nodes, links = parse_list_file(LIST_FILE)
    write_to_neo4j(nodes, links)