-- filepath: /Users/missnapalm/Downloads/epsteinwebrecords/queries.cypher

-- ═══ FULL NETWORK ═══
MATCH (n)-[r]->(m) RETURN n, r, m;

-- ═══ EPSTEIN'S DIRECT CONNECTIONS (color by type in browser) ═══
MATCH (e:Center)-[r]->(p)
RETURN e, r, p;

-- ═══ STRONGEST CONNECTIONS (strength >= 0.7) ═══
MATCH (a)-[r:CONNECTED_TO]->(b)
WHERE r.strength >= 0.7
RETURN a.name, r.strength, b.name
ORDER BY r.strength DESC;

-- ═══ MOST CONNECTED PEOPLE ═══
MATCH (p:Person)-[r]-()
RETURN p.name, p.type, p.status, count(r) AS connections
ORDER BY connections DESC
LIMIT 25;

-- ═══ CONVICTED + THEIR NETWORK ═══
MATCH (c:Convicted)-[r]-(p)
RETURN c, r, p;

-- ═══ BIRTHDAY BOOK INNER CIRCLE ═══
MATCH (b:BirthdayBook)-[r]-(p)
RETURN b, r, p;

-- ═══ INTELLIGENCE CLUSTER ═══
MATCH (p:Person)
WHERE p.intelRole CONTAINS 'Mossad' OR p.intelRole CONTAINS 'CIA'
   OR p.intelRole CONTAINS 'KGB' OR p.intelRole CONTAINS 'OSS'
   OR p.intelRole CONTAINS 'intelligence'
MATCH (p)-[r]-(q)
RETURN p, r, q;

-- ═══ NAMED UNDER OATH BY GIUFFRE ═══
MATCH (p:Person)
WHERE p.status CONTAINS 'NAMED' OR p.status CONTAINS 'SETTLED'
RETURN p.name, p.status, p.role, p.evidence;

-- ═══ SHORTEST PATH BETWEEN ANY TWO PEOPLE ═══
MATCH path = shortestPath(
  (a:Person {name:'Bill Clinton'})-[*]-(b:Person {name:'Ehud Barak'})
)
RETURN path;

-- ═══ ROBERT MAXWELL → EPSTEIN → BARAK → NETANYAHU ═══
MATCH path = (a:Person {name:'Robert Maxwell'})-[:CONNECTED_TO*1..3]-(b:Person {name:'Benjamin Netanyahu'})
RETURN path;

-- ═══ WHO RECEIVED IMMUNITY? ═══
MATCH (p:Person)
WHERE p.status CONTAINS 'IMMUNITY'
RETURN p.name, p.role, p.evidence;

-- ═══ DEAD BEFORE TESTIFYING ═══
MATCH (p:Person)
WHERE p.status CONTAINS 'DECEASED' OR p.status CONTAINS 'DIED'
RETURN p.name, p.status, p.significance;

-- ═══ FINANCIAL CONNECTIONS (networth > "") ═══
MATCH (p:Person)-[r:CONNECTED_TO]->(q:Person)
WHERE p.networth <> "" AND q.networth <> ""
RETURN p.name, p.networth, r.strength, q.name, q.networth
ORDER BY r.strength DESC;

-- ═══ THE BARR FAMILY CHAIN ═══
MATCH path = (d:Person {name:'Donald Barr'})-[*1..3]-(e:Person {name:'Jeffrey Epstein'})
RETURN path;

-- ═══ TRUMP CLUSTER ═══
MATCH (t:Person {name:'Donald Trump'})-[r]-(p)
RETURN t, r, p;

-- ═══ SEARCH BY KEYWORD IN EVIDENCE ═══
MATCH (p:Person)
WHERE p.evidence CONTAINS 'flight log'
RETURN p.name, p.evidence;