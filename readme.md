# Epstein Network Graph — Neo4j

74 nodes · ~140 relationships · Parsed from `list.txt`

## Quick Start

```bash
# 1. Start Neo4j
docker compose up -d

# 2. Wait for it to be ready
sleep 15

# 3. Install Python driver
pip install -r requirements.txt

# 4. Import the network
python import_list.py

# 5. Open the browser
open http://localhost:7474
```

**Login:** `neo4j` / `epstein2024`

## Node Labels

| Label | Meaning |
|-------|---------|
| `Person` | All nodes |
| `Center` | Jeffrey Epstein |
| `Convicted` | Maxwell, Brunel, Nader |
| `Suspicious` | Named in files / depositions |
| `PossiblyInvolved` | Circumstantial / intelligence-linked |
| `BirthdayBook` | Signed Epstein's birthday book |

## First Query

Paste this in the Neo4j browser:

```cypher
MATCH (n)-[r]->(m) RETURN n, r, m
```

Then switch to **Graph** view. Click any node to see all properties.

## Useful Queries

See `queries.cypher` for 15+ pre-built queries.

## Data Integrity Checks

To ensure all links in the graph are valid, run the following JavaScript code in the browser's console:

```javascript
const nodeIds = new Set(graphData.nodes.map(n => n.id));
graphData.links.forEach((l, i) => {
    if (!nodeIds.has(l.source)) console.log(`Link ${i}: missing source "${l.source}"`);
    if (!nodeIds.has(l.target)) console.log(`Link ${i}: missing target "${l.target}"`);
});
```

This will check each link in the `graphData` and verify that both the source and target nodes exist. Any missing nodes will be logged to the console.