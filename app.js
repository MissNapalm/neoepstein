'use strict';

/* ═══════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════ */
const SIM_SETTLE_MS    = 5000;
const BASE_SCALE       = 0.40;
const ZOOM_MIN         = 0.1;
const ZOOM_MAX         = 8;
const WHEEL_IN         = 1.05;
const WHEEL_OUT        = 0.9524;
const CLICK_MAX_PX     = 5;
const CLICK_MAX_MS     = 300;
const OPACITY_LERP     = 0.12;
const OPACITY_FLOOR    = 0.01;
const OPACITY_VISIBLE  = 0.9;
const LABEL_FONT_MIN   = 6;
const PULL_CLOSE_SET   = new Set(['perlman', 'lang']);
const PULL_CLOSE_STR   = 0.15;

/* ═══════════════════════════════════════════════════════
   DATA INITIALISATION — merge supplemental + filter
   ═══════════════════════════════════════════════════════ */
if (typeof supplementalData !== 'undefined') {
  const existingIds   = new Set(graphData.nodes.map(n => n.id));
  const existingLinks = new Set(graphData.links.map(l => `${l.source}→${l.target}`));
  for (const n of supplementalData.nodes) {
    if (!existingIds.has(n.id)) { graphData.nodes.push(n); existingIds.add(n.id); }
  }
  for (const l of supplementalData.links) {
    const key = `${l.source}→${l.target}`;
    if (!existingLinks.has(key)) { graphData.links.push(l); existingLinks.add(key); }
  }
}

const REMOVED_NODES = new Set([
  'king_charles','osborne','leon_brittan','cyril_smith','edward_heath','savile',
  'maurice_oldfield','michael_hanley','anthony_blunt','peter_morrison','peter_hayman',
  'rolf_harris','gary_glitter','max_clifford','chris_denning','peter_righton',
  'sidney_cooke','tony_mcsweeney','john_stingemore','weinstein','boies',
  'black_cube','blanchett'
]);

graphData.nodes = graphData.nodes.filter(n => !REMOVED_NODES.has(n.id));
graphData.links = graphData.links.filter(l => {
  const s = nodeId(l.source), t = nodeId(l.target);
  return !REMOVED_NODES.has(s) && !REMOVED_NODES.has(t);
});

/* ═══════════════════════════════════════════════════════
   CATEGORIES & CLASSIFICATION
   ═══════════════════════════════════════════════════════ */
const categories = {
  operational: ['epstein','maxwell_g','kellen','marcinkova','groff','brunel','alessi','rodriguez','casablancas','gerald_marie','zampolli','wexner'],
  financial:   ['epstein','wexner','black','staley','dimon','hoffenberg','kravis','david_koch','burkle','pritzker','lutnick','bloomberg','mort_z','diller','barrack','dubin','eva_dubin'],
  legal:       ['dershowitz','acosta','starr','barr_d','barr_w','rosenstein','berman','strauss','freeh','mueller','comey'],
  intel:       ['epstein','maxwell_g','robert_maxwell','ben_menashe','ostrovsky','barak','netanyahu','black_cube','wexner','dershowitz','kroll','peres','olmert','barr_d','barr_w','brennan','petraeus','freeh','mueller','comey','acosta','rosenstein','berman','dougan','andrew','ferguson','blair','murdoch','mandelson','putin','deripaska','khashoggi','nader','mbs','sultan_ahmed','sultan_brunei','barrack','trump'],
  intel_il:    ['epstein','maxwell_g','robert_maxwell','ben_menashe','ostrovsky','barak','netanyahu','wexner','dershowitz','thiel','peres','olmert'],
  intel_us:    ['epstein','barr_d','barr_w','brennan','petraeus','freeh','mueller','comey','acosta','rosenstein','berman','dougan'],
  intel_uk:    ['robert_maxwell','maxwell_g','andrew','ferguson','blair','lebedev','mandelson'],
  intel_ru:    ['robert_maxwell','deripaska','putin','dougan'],
  intel_ae:    ['khashoggi','nader','mbs','sultan_ahmed','sultan_brunei','barrack','trump'],
  confirmed:   ['epstein','maxwell_g','brunel','nader','dershowitz','andrew','dubin','minsky','richardson','mitchell','clinton','barak','trump','branson','sultan_brunei','sultan_ahmed','nowak','musk','gerald_marie','casablancas','krauss','spacey','woody','lauer','charlie_rose','marcinkova','copperfield','staley'],
  named:       ['andrew','mitchell','richardson','dubin','minsky','dershowitz','barak','clinton','trump','nader'],
  cover:       ['epstein','maxwell_g','wexner','black','minsky','krauss','nowak','pinker','church','seth_lloyd','chomsky','joi_ito','gates','summers','woody','charlie_rose','lauer','spacey','copperfield','deepak','naomi','branson'],
  uncertain:   ['thiel','brin','bloomberg','murdoch','pritzker','burkle','diller','mort_z','deepak']
};

const catNames = {
  operational:'Operational', financial:'Financial',      legal:'Legal Shield',
  intel:'Intelligence',       intel_il:'🇮🇱 Mossad/IL', intel_us:'🇺🇸 CIA/FBI',
  intel_uk:'🇬🇧 MI5/MI6',   intel_ru:'🇷🇺 KGB/FSB',   intel_ae:'🇦🇪 Gulf',
  named:'Named by Victims',   cover:'Social Cover',       uncertain:'Uncertain',
  confirmed:'⚠ Confirmed'
};

const SCRAMBLE_CAT_NAMES = {
  operational:'Wetwork Division', financial:'Gold Cabal',     legal:'Shield Matrix',
  intel:'Shadow Bureau',           intel_il:'🇮🇱 Unit Aleph', intel_us:'🇺🇸 Sector 7',
  intel_uk:'🇬🇧 Ghost Wing',      intel_ru:'🇷🇺 Frost Cell',  intel_ae:'🇦🇪 Oasis Ring',
  named:'Exposed Vectors',         cover:'Mirage Layer',        uncertain:'Fog Zone',
  confirmed:'⚠ Locked On'
};

const Clight  = { center:'rgba(255,42,42,0.1)',    convicted:'rgba(255,42,42,0.1)',    suspicious:'rgba(255,140,0,0.1)',    possibly:'rgba(59,130,246,0.1)' };
const Cborder = { center:'rgba(255,42,42,0.25)',   convicted:'rgba(255,42,42,0.25)',   suspicious:'rgba(255,140,0,0.25)',   possibly:'rgba(59,130,246,0.25)' };
const typeLabel = { center:'PRINCIPAL TARGET', convicted:'CONVICTED', suspicious:'SUSPICIOUS', possibly:'POSSIBLY INVOLVED' };

/* Precomputed category membership for O(1) dossier / tooltip lookups */
const nodeCatsMap = new Map();

const coreSet = new Set(categories.operational);
coreSet.add('perlman');
coreSet.add('lang');

/* ═══════════════════════════════════════════════════════
   COLOR THEMES
   ═══════════════════════════════════════════════════════ */
const COLOR_THEMES = {
  default: {
    name:'Default', bg:'#0f172a', isLight:false,
    red:'#ff2a2a',   orange:'#ff8c00', blue:'#3b82f6', white:'#e8e0f0',
    strokeRed:'rgba(255,42,42,0.4)',      strokeOrange:'rgba(255,140,0,0.4)',
    strokeBlue:'rgba(59,130,246,0.4)',    strokeWhite:'rgba(192,168,224,0.4)',
    labelRed:'#fca5a5', labelOrange:'#fdba74', labelBlue:'#93c5fd', labelWhite:'#d4c8e8',
    linkRGB:[[239,68,68],[251,146,60],[100,116,139],[71,85,105]],
    linkAlpha:[0.22,0.12,0.06,0.03],
    dotCenter:'#ff2a2a', dotConvicted:'#ff2a2a', dotSuspicious:'#ff6b1a', dotPossibly:'#e8e0f0'
  },
  ice: {
    name:'Ice', bg:'#0f172a', isLight:false,
    red:'#60a5fa',   orange:'#93c5fd', blue:'#3b82f6', white:'#e0f2fe',
    strokeRed:'rgba(96,165,250,0.4)',     strokeOrange:'rgba(147,197,253,0.4)',
    strokeBlue:'rgba(59,130,246,0.4)',    strokeWhite:'rgba(224,242,254,0.35)',
    labelRed:'#bfdbfe', labelOrange:'#dbeafe', labelBlue:'#93c5fd', labelWhite:'#e0f2fe',
    linkRGB:[[96,165,250],[147,197,253],[59,130,246],[148,163,184]],
    linkAlpha:[0.25,0.15,0.08,0.04],
    dotCenter:'#60a5fa', dotConvicted:'#60a5fa', dotSuspicious:'#93c5fd', dotPossibly:'#e0f2fe'
  },
  mono: {
    name:'Mono', bg:'#0f172a', isLight:false,
    red:'#f1f5f9',   orange:'#cbd5e1', blue:'#94a3b8', white:'#64748b',
    strokeRed:'rgba(241,245,249,0.35)',   strokeOrange:'rgba(203,213,225,0.3)',
    strokeBlue:'rgba(148,163,184,0.3)',   strokeWhite:'rgba(100,116,139,0.25)',
    labelRed:'#f1f5f9', labelOrange:'#e2e8f0', labelBlue:'#cbd5e1', labelWhite:'#94a3b8',
    linkRGB:[[203,213,225],[148,163,184],[100,116,139],[71,85,105]],
    linkAlpha:[0.18,0.10,0.06,0.03],
    dotCenter:'#f1f5f9', dotConvicted:'#f1f5f9', dotSuspicious:'#cbd5e1', dotPossibly:'#64748b'
  },
  heat: {
    name:'Heat', bg:'#0f172a', isLight:false,
    red:'#ef4444',   orange:'#f97316', blue:'#eab308', white:'#fbbf24',
    strokeRed:'rgba(239,68,68,0.4)',      strokeOrange:'rgba(249,115,22,0.4)',
    strokeBlue:'rgba(234,179,8,0.35)',    strokeWhite:'rgba(251,191,36,0.3)',
    labelRed:'#fca5a5', labelOrange:'#fdba74', labelBlue:'#fde047', labelWhite:'#fef08a',
    linkRGB:[[239,68,68],[249,115,22],[234,179,8],[161,98,7]],
    linkAlpha:[0.25,0.15,0.08,0.04],
    dotCenter:'#ef4444', dotConvicted:'#ef4444', dotSuspicious:'#f97316', dotPossibly:'#fbbf24'
  },
  light: {
    name:'Light', bg:'#f8fafc', isLight:true,
    red:'#dc2626',   orange:'#ea580c', blue:'#2563eb', white:'#64748b',
    strokeRed:'rgba(220,38,38,0.3)',      strokeOrange:'rgba(234,88,12,0.3)',
    strokeBlue:'rgba(37,99,235,0.3)',     strokeWhite:'rgba(100,116,139,0.25)',
    labelRed:'#991b1b', labelOrange:'#9a3412', labelBlue:'#1e40af', labelWhite:'#475569',
    linkRGB:[[220,38,38],[234,88,12],[100,116,139],[148,163,184]],
    linkAlpha:[0.18,0.12,0.07,0.04],
    dotCenter:'#dc2626', dotConvicted:'#dc2626', dotSuspicious:'#ea580c', dotPossibly:'#64748b'
  }
};

let currentTheme = 'default';
function getTheme() { return COLOR_THEMES[currentTheme]; }

/* ═══════════════════════════════════════════════════════
   CLASSIFICATION — node colour helpers
   ═══════════════════════════════════════════════════════ */
const RED_SET = new Set([
  'epstein','maxwell_g','brunel','nader','dershowitz',
  'andrew','dubin','minsky','richardson','mitchell',
  'marcinkova','kellen','groff','alessi','rodriguez',
  'copperfield','gerald_marie','casablancas',
  'spacey','woody','lauer','charlie_rose',
  'sultan_brunei','sultan_ahmed','krauss','nowak',
  'staley','eva_dubin'
]);

const ORANGE_SET = new Set([
  'trump','clinton','musk','branson','barak',
  'wexner','mbs','joi_ito','barr_w','gates'
]);

function nColor(d) {
  const t = getTheme();
  if (RED_SET.has(d.id))    return t.red;
  if (ORANGE_SET.has(d.id)) return t.orange;
  if (d.type === 'possibly') return t.white;
  return t.blue;
}

function nColorTier(d) {
  if (RED_SET.has(d.id))    return 0;
  if (ORANGE_SET.has(d.id)) return 1;
  if (d.type === 'possibly') return 2;
  return 3;
}

/* ─── tiny utility: resolve D3 link source/target to id string ─── */
function nodeId(x) { return typeof x === 'object' ? x.id : x; }

/* ═══════════════════════════════════════════════════════
   CANVAS & VIEWPORT
   ═══════════════════════════════════════════════════════ */
const canvas = document.getElementById('graph');
const ctx    = canvas.getContext('2d', { alpha: false });
const DPR    = Math.min(devicePixelRatio, 2);
let W = window.innerWidth, H = window.innerHeight;

function resizeCanvas() {
  canvas.width        = W * DPR;
  canvas.height       = H * DPR;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  /* ctx.setTransform is called at the top of draw() — no need to scale here */
}
resizeCanvas();

window.addEventListener('resize', () => {
  const prevW = W, prevH = H;
  W = window.innerWidth;
  H = window.innerHeight;
  /* Shift the pan offset so the same graph centre stays on screen */
  tx += (W - prevW) / 2;
  ty += (H - prevH) / 2;
  resizeCanvas();
  scheduleRedraw();
});

let tx = 0, ty = 0, scale = 1;

function syncZoomSlider() {
  const v = Math.round(scale * 100);
  DOM.zoomSlider.value  = v;
  DOM.zv.textContent    = v;
}

/* ═══════════════════════════════════════════════════════
   GRAPH DATA STRUCTURES
   ═══════════════════════════════════════════════════════ */
const nodes     = graphData.nodes.map(d => ({ ...d }));
const links     = graphData.links.map(d => ({ ...d }));
const nodeMap   = new Map(nodes.map(n  => [n.id, n]));
const nodeIndex = new Map(nodes.map((n, i) => [n.id, i]));

let S = BASE_SCALE;

/* Typed arrays for hot render loop — avoid property lookups per frame */
const lSrcIds = new Array(links.length);
const lTgtIds = new Array(links.length);
const lStr    = new Float32Array(links.map(l => l.strength || 0.5));

/* Adjacency — used for hover highlighting */
const adjIndex = new Map();
for (const n of nodes) adjIndex.set(n.id, new Set([n.id]));

/* Backup real labels before scramble can overwrite them */
const realLabelBackup = new Map();
for (const n of nodes) realLabelBackup.set(n.id, n.label);

/* Build per-node category membership once (O(1) lookups in dossier/tooltip) */
for (const n of nodes) {
  nodeCatsMap.set(n.id, Object.keys(categories).filter(k => categories[k].includes(n.id)));
}

/* 2nd-degree adjacency cache for hover dimming */
const adj2Cache = new Map();
function build2ndDegreeCache() {
  adj2Cache.clear();
  for (const [id, s1] of adjIndex) {
    const s2 = new Set(s1);
    for (const fid of s1) {
      const f2 = adjIndex.get(fid);
      if (f2) for (const sid of f2) s2.add(sid);
    }
    adj2Cache.set(id, s2);
  }
}

/* Spread initial positions so simulation has room to separate */
nodes.forEach((d, i) => {
  if (i === 0) { d.x = W / 2; d.y = H / 2; return; }
  const angle = i * 2.399963;
  const ring  = Math.sqrt(i / nodes.length);
  const dist  = 90 + ring * Math.min(W, H) * 0.35;
  d.x = W / 2 + Math.cos(angle) * dist;
  d.y = H / 2 + Math.sin(angle) * dist;
});

/* Resolve link ids and build adjacency */
for (let i = 0; i < links.length; i++) {
  const l = links[i];
  const s = nodeId(l.source), t = nodeId(l.target);
  adjIndex.get(s)?.add(t);
  adjIndex.get(t)?.add(s);
  lSrcIds[i] = s;
  lTgtIds[i] = t;
}

build2ndDegreeCache();

/* ═══════════════════════════════════════════════════════
   DOM CACHE — one getElementById call per element, ever
   ═══════════════════════════════════════════════════════ */
const DOM = {
  ctrlTitle:    document.getElementById('ctrl-title'),
  ctrlSub:      document.getElementById('ctrl-sub'),
  search:       document.getElementById('search'),
  stats:        document.getElementById('stats'),
  sv:           document.getElementById('sv'),
  zv:           document.getElementById('zv'),
  nsv:          document.getElementById('nsv'),
  labels:       document.getElementById('labels'),
  orphans:      document.getElementById('orphans'),
  zoomSlider:   document.getElementById('zoom-slider'),
  strSlider:    document.getElementById('str'),
  nodeSizeSlider: document.getElementById('node-size-slider'),
  scrambleToggle: document.getElementById('scramble-toggle'),
  tip:          document.getElementById('tip'),
  dos:          document.getElementById('dos'),
  dosBanner:    document.getElementById('dos-banner'),
  dosName:      document.getElementById('dos-name'),
  dosRole:      document.getElementById('dos-role'),
  dosStatus:    document.getElementById('dos-status'),
  dosNw:        document.getElementById('dos-nw'),
  dosBody:      document.getElementById('dos-body'),
  dosX:         document.getElementById('dos-x'),
  catButtons:   document.querySelectorAll('#cat-buttons .cat-btn'),
  themeButtons: document.querySelectorAll('#theme-buttons .theme-btn'),
  typeFilters:  document.querySelectorAll('.tf'),
  dotCenter:    document.querySelector('.dot-center'),
  dotConvicted: document.querySelector('.dot-convicted'),
  dotSuspicious:document.querySelector('.dot-suspicious'),
  dotPossibly:  document.querySelector('.dot-possibly'),
};

/* ═══════════════════════════════════════════════════════
   PRE-COMPUTED RENDER CACHES
   ═══════════════════════════════════════════════════════ */
let linkNormalStroke = [];

function rebuildLinkStrokes() {
  const t = getTheme();
  linkNormalStroke = t.linkRGB.map(([r, g, b], ti) => {
    const a = t.linkAlpha[ti] ?? 0.03;
    return `rgba(${r},${g},${b},${a})`;
  });
}

const nodeColorCache  = new Array(nodes.length);
const nodeLabelColor  = new Array(nodes.length);
const nodeBorderVariant = new Int8Array(nodes.length);

function rebuildColorCache() {
  for (let i = 0; i < nodes.length; i++) nodeColorCache[i] = nColor(nodes[i]);
}

function rebuildLabelColors() {
  const t = getTheme();
  for (let i = 0; i < nodes.length; i++) {
    const tier = nColorTier(nodes[i]);
    nodeLabelColor[i] = tier === 0 ? t.labelRed
                       : tier === 1 ? t.labelOrange
                       : tier === 2 ? t.labelWhite
                       : t.labelBlue;
  }
}

function rebuildBorderVariants() {
  for (let i = 0; i < nodes.length; i++) {
    const tier = nColorTier(nodes[i]);
    nodeBorderVariant[i] = tier === 0 ? 2 : tier === 1 ? 3 : tier === 2 ? 4 : 1;
  }
}

function getNodeStroke(bv) {
  const t = getTheme();
  if (bv === 2) return t.strokeRed;
  if (bv === 3) return t.strokeOrange;
  if (bv === 4) return t.strokeWhite;
  if (bv === 1) return t.strokeBlue;
  return 'rgba(255,255,255,0.12)';
}

function updateDotColors() {
  const t = getTheme();
  DOM.dotCenter.style.background    = t.dotCenter;
  DOM.dotConvicted.style.background = t.dotConvicted;
  DOM.dotSuspicious.style.background = t.dotSuspicious;
  DOM.dotPossibly.style.background  = t.dotPossibly;
}

const linkColorTiers = new Int8Array(links.length);
function rebuildLinkTiers() {
  for (let i = 0; i < links.length; i++) {
    const s = lStr[i];
    linkColorTiers[i] = s >= 0.8 ? 0 : s >= 0.6 ? 1 : s >= 0.4 ? 2 : 3;
  }
}

/* Run all cache rebuilds (called on theme change + init) */
function rebuildAllCaches() {
  rebuildLinkStrokes();
  rebuildColorCache();
  rebuildLabelColors();
  rebuildBorderVariants();
  rebuildLinkTiers();
  updateDotColors();
}

rebuildAllCaches();

/* ═══════════════════════════════════════════════════════
   THEME APPLICATION
   ═══════════════════════════════════════════════════════ */
function applyTheme(name) {
  currentTheme = name;
  const t = getTheme();
  document.body.classList.toggle('light-mode', t.isLight);
  rebuildAllCaches();
  scheduleRedraw();
}

/* ═══════════════════════════════════════════════════════
   SCRAMBLE MODE
   ═══════════════════════════════════════════════════════ */
let scrambleMode = false;
const scrambleMap = new Map();
let scrambleSubstitutions = []; // [{pattern, replacement}] — compiled once per activation

const SCRAMBLE_ADJECTIVES = [
  'Shadow','Phantom','Crimson','Velvet','Neon','Cosmic','Quantum','Hollow',
  'Silent','Frozen','Dark','Electric','Midnight','Crystal','Iron','Golden',
  'Ghost','Void','Obsidian','Chrome','Acid','Binary','Plasma','Turbo',
  'Hyper','Ultra','Omega','Apex','Nova','Rogue','Feral','Savage',
  'Stealth','Cipher','Toxic','Chaos','Storm','Thunder','Glitch','Pixel',
  'Astral','Nebula','Flux','Prism','Echo','Mirage','Zenith','Viper',
  'Onyx','Raven','Serpent','Wolf','Falcon','Lynx','Sphinx','Titan',
  'Coral','Amber','Scarlet','Azure','Emerald','Cobalt','Indigo','Violet',
  'Wicked','Dire','Grim','Swift','Blaze','Frost','Smog','Haze',
  'Razor','Dagger','Bullet','Skull','Hex','Wraith','Specter','Banshee'
];

const SCRAMBLE_NOUNS = [
  'Orchid','Mantis','Jackal','Lotus','Vortex','Basilisk','Hydra','Condor',
  'Kraken','Ocelot','Cobra','Panther','Scorpion','Phoenix','Dragon','Raptor',
  'Mongoose','Barracuda','Chimera','Centaur','Cyclops','Griffin','Pegasus','Minotaur',
  'Wraith','Specter','Revenant','Golem','Djinn','Banshee','Shade','Ghoul',
  'Matrix','Node','Vertex','Vector','Tensor','Nexus','Cipher','Protocol',
  'Meridian','Parallax','Catalyst','Reactor','Pulsar','Quasar','Horizon','Eclipse',
  'Obsidian','Monolith','Obelisk','Prism','Abyss','Rift','Fracture','Shard',
  'Nomad','Vagabond','Outcast','Heretic','Pariah','Renegade','Fugitive','Exile',
  'Frostbite','Nightfall','Daybreak','Sunspot','Starfall','Moonrise','Duskwalker','Dawntreader',
  'Switchblade','Gauntlet','Warhammer','Crossbow','Trebuchet','Ballista','Stiletto','Claymore'
];

const SCRAMBLE_TITLES = [
  'Galactic Overlord','Noodle Baron','Rogue Wizard','Turbo Shaman','Disco Warlord',
  'Crypto Monk','Interdimensional Fencer','Quantum Plumber','Hypnotic Accountant',
  'Astral Lifeguard','Shadow Librarian','Phantom Barista','Time-Traveling Sommelier',
  'Undercover Botanist','Professional Cloud Watcher','Retired Time Lord','Senior Chaos Engineer',
  'Unlicensed Alchemist','Void Architect','Meme Archaeologist','Digital Shaman',
  'Paranormal Auditor','Covert Pastry Chef','Nuclear Florist','Rogue Cartographer',
  'Interdimensional Customs Agent','Sentient Algorithm','Subterranean DJ',
  'Freelance Necromancer','Orbital Janitor','Quantum Entanglement Therapist',
  'Holographic Dentist','Pan-Galactic Intern','Temporal Mechanic','Existential Barber'
];

const SCRAMBLE_STATUSES = [
  'ASCENDED','DIMENSION-HOPPING','POLYMORPHED','BUFFERING','REBOOTING',
  'QUANTUM SUPERPOSITION','ASTRAL PROJECTING','GLITCHED','IN THE MATRIX',
  'GONE FISHING','VIBING','DEFRAGMENTING','LOADING…','AFK','404 NOT FOUND',
  'PRESTIGE MODE','NEW GAME+','RESPAWNING','IDLE','CAFFEINATED'
];

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
  return h;
}

function generateScrambleName() {
  const adj  = SCRAMBLE_ADJECTIVES[Math.floor(Math.random() * SCRAMBLE_ADJECTIVES.length)];
  const noun = SCRAMBLE_NOUNS[Math.floor(Math.random() * SCRAMBLE_NOUNS.length)];
  return adj + ' ' + noun;
}

function buildScrambleMap() {
  scrambleMap.clear();
  const used = new Set();
  for (const n of nodes) {
    let name;
    do { name = generateScrambleName(); } while (used.has(name));
    used.add(name);
    scrambleMap.set(n.id, name);
  }
  /* Precompile regex substitutions once — avoids rebuilding RegExp in hot path */
  scrambleSubstitutions = [];
  for (const n of nodes) {
    const real = realLabelBackup.get(n.id);
    const code = scrambleMap.get(n.id);
    if (real && code) {
      scrambleSubstitutions.push({
        pattern: new RegExp(real.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
        replacement: code
      });
    }
  }
}

function scrambleText(text) {
  if (!text) return text;
  let out = text;
  for (const { pattern, replacement } of scrambleSubstitutions) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

function scrambleCatName(c) {
  return scrambleMode ? (SCRAMBLE_CAT_NAMES[c] || catNames[c]) : catNames[c];
}

function getDisplayLabel(d)  { return (scrambleMode && scrambleMap.has(d.id)) ? scrambleMap.get(d.id) : (realLabelBackup.get(d.id) || d.label); }
function getDisplayRole(d)   { return scrambleMode ? SCRAMBLE_TITLES[Math.abs(hashStr(d.id))    % SCRAMBLE_TITLES.length]  : (d.role   || ''); }
function getDisplayStatus(d) { return scrambleMode ? SCRAMBLE_STATUSES[Math.abs(hashStr(d.id + '-s')) % SCRAMBLE_STATUSES.length] : (d.status || ''); }

function activateScramble() {
  scrambleMode = true;
  buildScrambleMap();
  for (const n of nodes) n.label = scrambleMap.get(n.id) || n.label;
  for (let i = 0; i < nodes.length; i++) nodeLabelLC[i] = nodes[i].label.toLowerCase();
  DOM.ctrlTitle.textContent = '☢ SCRAMBLED NET';
  DOM.ctrlSub.textContent   = 'All identities randomized';
  DOM.dosBanner.textContent = 'SCRAMBLED DOSSIER — NOTHING TO SEE HERE';
  DOM.search.placeholder    = 'Search codenames…';
  scheduleRedraw();
}

function deactivateScramble() {
  scrambleMode = false;
  for (const n of nodes) n.label = realLabelBackup.get(n.id) || n.label;
  for (let i = 0; i < nodes.length; i++) nodeLabelLC[i] = nodes[i].label.toLowerCase();
  DOM.ctrlTitle.textContent = 'Epstein Network';
  DOM.ctrlSub.textContent   = 'Interactive intelligence graph';
  DOM.dosBanner.textContent = 'NETWORK INTELLIGENCE DOSSIER — RESTRICTED';
  DOM.search.placeholder    = 'Search by name…';
  scheduleRedraw();
}

/* ═══════════════════════════════════════════════════════
   SIMULATION — force helpers
   ═══════════════════════════════════════════════════════ */
function makePullCloseForce() {
  let ns;
  function force(alpha) {
    const ep = nodeMap.get('epstein');
    if (!ep) return;
    for (const d of ns) {
      if (!PULL_CLOSE_SET.has(d.id)) continue;
      d.vx += (ep.x - d.x) * PULL_CLOSE_STR * alpha;
      d.vy += (ep.y - d.y) * PULL_CLOSE_STR * alpha;
    }
  }
  force.initialize = function(nodes_) { ns = nodes_; };
  return force;
}

/* Full default forces — used for initial layout and after category resets */
function applyDefaultForces(sim) {
  sim
    .force('link', d3.forceLink(links).id(d => d.id)
      .distance(d => 60 + (1 - (d.strength || 0.5)) * 100)
      .strength(d => (d.strength || 0.5) * 0.45))
    .force('charge', d3.forceManyBody().strength(-220).distanceMin(15).distanceMax(600))
    .force('center', d3.forceCenter(W / 2, H / 2).strength(0.06))
    .force('collision', d3.forceCollide().radius(d => d.radius * S + 10).strength(0.85).iterations(3))
    .force('x', d3.forceX(W / 2).strength(0.035))
    .force('y', d3.forceY(H / 2).strength(0.035))
    .force('pullClose', makePullCloseForce());
}

/* Density-aware forces used when reflowing a category filter subset */
function applyRefitForces(sim, vis, cx, cy) {
  const vc  = vis.size;
  const chargeStr = vc < 10 ? -380 : vc < 20 ? -300 : vc < 40 ? -260 : -220;
  const collRad   = vc < 20 ? 14   : vc < 40 ? 12   : 10;
  const linkDist  = vc < 20 ? 90   : vc < 40 ? 75   : 60;
  const centerStr = vc < 15 ? 0.09 : vc < 40 ? 0.07 : 0.035;

  sim
    .force('link', d3.forceLink(links).id(d => d.id)
      .distance(d => {
        const s = nodeId(d.source), t = nodeId(d.target);
        return vis.has(s) && vis.has(t) ? linkDist + (1 - (d.strength || 0.5)) * 100 : 0;
      })
      .strength(d => {
        const s = nodeId(d.source), t = nodeId(d.target);
        return vis.has(s) && vis.has(t) ? (d.strength || 0.5) * 0.45 : 0;
      }))
    .force('center', d3.forceCenter(cx, cy).strength(0.06))
    .force('charge', d3.forceManyBody()
      .strength(d => vis.has(d.id) ? chargeStr : 0)
      .distanceMin(15).distanceMax(600))
    .force('collision', d3.forceCollide()
      .radius(d => vis.has(d.id) ? d.radius * S + collRad : 0)
      .strength(0.85).iterations(3))
    .force('x', d3.forceX(cx).strength(d => vis.has(d.id) ? centerStr : 0))
    .force('y', d3.forceY(cy).strength(d => vis.has(d.id) ? centerStr : 0));
}

/* Simulation instance */
const sim = d3.forceSimulation(nodes).velocityDecay(0.6).alphaDecay(0.01).alphaMin(0.001).alphaTarget(0).alpha(1).on('tick', scheduleRedraw);
applyDefaultForces(sim);

/* Pin Epstein to centre and pull key nodes close */
const epInit = nodeMap.get('epstein');
if (epInit) { epInit.x = W / 2; epInit.y = H / 2; epInit.fx = W / 2; epInit.fy = H / 2; }

for (const id of PULL_CLOSE_SET) {
  const n = nodeMap.get(id);
  if (n) { const a = Math.random() * Math.PI * 2; n.x = W / 2 + Math.cos(a) * 35; n.y = H / 2 + Math.sin(a) * 35; }
}

/* Let layout settle, then freeze */
setTimeout(() => { sim.stop(); freezeAllNodes(); scheduleRedraw(); }, SIM_SETTLE_MS);

function freezeAllNodes() {
  for (const d of nodes) { d.vx = 0; d.vy = 0; }
}

/* ═══════════════════════════════════════════════════════
   SIMULATION — refit on category change
   ═══════════════════════════════════════════════════════ */
let simRunning = false;
let refitTimer = null;

function stopSim() {
  if (refitTimer) { clearTimeout(refitTimer); refitTimer = null; }
  simRunning = false;
  sim.stop();
  sim.on('tick.r', null).on('end.r', null);
}

function refitVis() {
  if (refitTimer) clearTimeout(refitTimer);
  refitTimer = setTimeout(() => {
    const vis = getVisibleSet();
    if (!vis.size) return;
    stopSim();
    for (const d of nodes) { d.fx = null; d.fy = null; }
    if (activeCat === 'all') {
      const ep = nodeMap.get('epstein');
      if (ep) { ep.fx = W / 2; ep.fy = H / 2; ep.x = W / 2; ep.y = H / 2; }
    }
    const cx = W / 2, cy = H / 2;
    applyRefitForces(sim, vis, cx, cy);
    for (const d of nodes) { if (!vis.has(d.id)) { d.x = cx; d.y = cy; } }
    sim.on('tick.r', () => scheduleRedraw());
    simRunning = true;
    sim.velocityDecay(0.6).alpha(1).alphaTarget(0).alphaDecay(0.01).restart();
    setTimeout(() => {
      sim.stop();
      sim.on('tick.r', null).on('end.r', null);
      freezeAllNodes();
      if (activeCat === 'all') {
        const ep = nodeMap.get('epstein');
        if (ep) { ep.fx = W / 2; ep.fy = H / 2; }
      }
      applyDefaultForces(sim);
      scheduleRedraw();
    }, SIM_SETTLE_MS);
  }, 80);
}

/* ═══════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════ */
let activeCat    = 'all';
let hoveredNode  = null;
let searchQuery  = '';
let showLabels   = true;
let minStrength  = 0;
let showOrphans  = true;

const nodeOpacity = new Float32Array(nodes.length).fill(0);
const nodeLabelLC = nodes.map(n => n.label.toLowerCase());

let _visCache = null;
let visSet    = new Set();

function invalidateVis() { _visCache = null; }

function getVisibleSet() {
  if (_visCache) return _visCache;
  const activeTypes = new Set();
  for (const el of DOM.typeFilters) { if (el.checked) activeTypes.add(el.value); }
  const catSet    = activeCat !== 'all' ? new Set(categories[activeCat] || []) : null;
  let linkedSet   = null;
  if (!showOrphans) {
    linkedSet = new Set();
    for (let i = 0; i < links.length; i++) {
      if (lStr[i] >= minStrength) { linkedSet.add(lSrcIds[i]); linkedSet.add(lTgtIds[i]); }
    }
  }
  const vis = new Set();
  for (const d of nodes) {
    if (!activeTypes.has(d.type))            continue;
    if (catSet && !catSet.has(d.id))         continue;
    if (linkedSet && !linkedSet.has(d.id))   continue;
    vis.add(d.id);
  }
  _visCache = vis;
  return vis;
}

/* ═══════════════════════════════════════════════════════
   RENDER PIPELINE
   ═══════════════════════════════════════════════════════ */
let rafId = null;

function scheduleRedraw() {
  if (!rafId) rafId = requestAnimationFrame(draw);
}

/* Reusable coordinate object — avoids heap allocation on every mousemove */
const _g = { x: 0, y: 0 };
function toGraph(cx, cy) {
  _g.x = (cx - tx) / scale;
  _g.y = (cy - ty) / scale;
  return _g;
}

function draw() {
  rafId = null;
  const t = getTheme();

  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.fillStyle = t.bg;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.translate(tx, ty);
  ctx.scale(scale, scale);

  const hov   = hoveredNode;
  const conn  = hov ? (adjIndex.get(hov.id)  || null) : null;
  const conn2 = hov ? (adj2Cache.get(hov.id) || null) : null;
  const showWeak = scale >= 0.5, showMed = scale >= 0.3;
  const minR4lbl = scale < 0.3 ? 22 : scale < 0.5 ? 15 : scale < 0.8 ? 10 : 0;
  const linkRGB  = t.linkRGB;

  /* ── links ── */
  ctx.lineWidth = 1;
  for (let i = 0; i < links.length; i++) {
    const str = lStr[i];
    if (str < minStrength)                     continue;
    if (!showWeak && str < 0.4)                continue;
    if (!showMed  && str < 0.6)                continue;
    const l   = links[i];
    const src = l.source, tgt = l.target;
    const sid = lSrcIds[i], tid = lTgtIds[i];
    if (!visSet.has(sid) || !visSet.has(tid))  continue;

    if (conn) {
      if (sid !== hov.id && tid !== hov.id)    continue;
      const alpha = 0.5 + str * 0.4;
      const lineW = Math.max(1, str * 2.5);
      const c     = linkRGB[linkColorTiers[i]];
      ctx.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha.toFixed(2)})`;
      ctx.lineWidth   = lineW;
    } else {
      ctx.strokeStyle = linkNormalStroke[linkColorTiers[i]];
      ctx.lineWidth   = Math.max(0.3, str);
    }

    ctx.beginPath();
    ctx.moveTo(src.x, src.y);
    ctx.lineTo(tgt.x, tgt.y);
    ctx.stroke();
  }

  /* ── nodes ── */
  ctx.lineWidth = 1.2;
  for (let i = 0; i < nodes.length; i++) {
    const d  = nodes[i];
    if (!visSet.has(d.id)) continue;
    const op = nodeOpacity[i];
    if (op <= OPACITY_FLOOR) continue;
    const r     = d.radius * S;
    const color = nodeColorCache[i];

    let fop;
    if (conn) {
      if      (d.id === hov.id)                     fop = op;
      else if (conn.has(d.id))                       fop = op * 0.95;
      else if (conn2 && conn2.has(d.id))             fop = op * 0.25;
      else                                           fop = op * 0.06;
    } else {
      fop = (searchQuery && !nodeLabelLC[i].includes(searchQuery)) ? op * 0.1 : op;
    }

    ctx.globalAlpha = fop;
    const isHovered = hov && d.id === hov.id;
    const isConn    = conn && conn.has(d.id) && !isHovered;
    const bv        = nodeBorderVariant[i];
    const dr        = isConn ? r * 1.08 : bv === 4 ? r * 0.7 : r;

    /* drop shadow in light mode */
    if (t.isLight) {
      ctx.globalAlpha = fop * 0.6;
      ctx.beginPath(); ctx.arc(d.x + 1, d.y + 1.5, dr, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.fill();
      ctx.globalAlpha = fop;
    }

    /* soft aura for "possibly" nodes */
    if (bv === 4) {
      ctx.globalAlpha = fop * 0.12;
      ctx.beginPath(); ctx.arc(d.x, d.y, dr + 4, 0, Math.PI * 2);
      ctx.fillStyle = t.isLight ? 'rgba(100,116,139,0.12)' : 'rgba(168,130,220,0.25)'; ctx.fill();
      ctx.globalAlpha = fop * 0.1;
      ctx.beginPath(); ctx.arc(d.x, d.y, dr + 2, 0, Math.PI * 2);
      ctx.fillStyle = t.isLight ? 'rgba(100,116,139,0.15)' : 'rgba(192,160,240,0.3)'; ctx.fill();
      ctx.globalAlpha = fop;
    }

    ctx.beginPath(); ctx.arc(d.x, d.y, dr, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
    ctx.strokeStyle = getNodeStroke(bv); ctx.stroke();

    if (isHovered) {
      ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.stroke();
      ctx.globalAlpha = fop * 0.25;
      ctx.beginPath(); ctx.arc(d.x, d.y, dr + 3, 0, Math.PI * 2);
      ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
      ctx.globalAlpha = fop;
      ctx.lineWidth = 1.2;
    }
  }
  ctx.globalAlpha = 1;

  /* ── labels ── */
  if (showLabels) {
    const fs      = Math.max(LABEL_FONT_MIN, Math.min(9, 7 / Math.sqrt(Math.max(0.3, scale))));
    ctx.font      = `500 ${fs}px -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';

    for (let i = 0; i < nodes.length; i++) {
      const d  = nodes[i];
      if (!visSet.has(d.id)) continue;
      const op = nodeOpacity[i];
      if (op <= OPACITY_FLOOR) continue;
      if (d.radius < minR4lbl && !(conn && conn.has(d.id))) continue;

      let lop;
      if (conn) {
        if      (d.id === hov.id)                   lop = 1;
        else if (conn.has(d.id))                    lop = 0.9;
        else if (conn2 && conn2.has(d.id))          lop = 0.15;
        else                                        lop = 0;
      } else {
        lop = (searchQuery && !nodeLabelLC[i].includes(searchQuery)) ? 0.05 : 0.85;
      }
      if (lop <= OPACITY_FLOOR) continue;

      ctx.globalAlpha = op * lop;
      ctx.fillStyle   = nodeLabelColor[i];
      ctx.fillText(d.label, d.x, d.y + d.radius * S + 3);
    }
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

/* ═══════════════════════════════════════════════════════
   OPACITY ANIMATION
   ═══════════════════════════════════════════════════════ */
const opTgt   = new Float32Array(nodes.length).fill(0);
let animating = false;

function tickOpacity() {
  let moving = false;
  for (let i = 0; i < nodes.length; i++) {
    const delta = opTgt[i] - nodeOpacity[i];
    if (Math.abs(delta) > OPACITY_FLOOR) {
      nodeOpacity[i] += delta * OPACITY_LERP;
      moving = true;
    } else {
      nodeOpacity[i] = opTgt[i];
    }
  }
  scheduleRedraw();
  if (moving) requestAnimationFrame(tickOpacity);
  else        animating = false;
}

function setOpTgt() {
  for (let i = 0; i < nodes.length; i++) opTgt[i] = visSet.has(nodes[i].id) ? OPACITY_VISIBLE : 0;
  if (!animating) { animating = true; requestAnimationFrame(tickOpacity); }
}

/* ═══════════════════════════════════════════════════════
   FILTERS & STATS
   ═══════════════════════════════════════════════════════ */
function applyFilters() {
  invalidateVis();
  visSet = getVisibleSet();
  setOpTgt();
  updateStats();
}

function updateStats() {
  let vl = 0;
  for (let i = 0; i < links.length; i++) {
    if (lStr[i] >= minStrength && visSet.has(lSrcIds[i]) && visSet.has(lTgtIds[i])) vl++;
  }
  DOM.stats.innerHTML = scrambleMode
    ? `${visSet.size} of ${nodes.length} entities · ${vl} of ${links.length} entanglements<br>🎲 Scramble active · All codenames randomized`
    : `${visSet.size} of ${nodes.length} nodes · ${vl} of ${links.length} links<br>Scroll to zoom · Drag to pan · Click for dossier`;
}

/* ═══════════════════════════════════════════════════════
   HIT TEST
   ═══════════════════════════════════════════════════════ */
function hitTest(gx, gy) {
  for (let i = nodes.length - 1; i >= 0; i--) {
    const d = nodes[i];
    if (!visSet.has(d.id)) continue;
    const r = d.radius * S + 2, dx = gx - d.x, dy = gy - d.y;
    if (dx * dx + dy * dy <= r * r) return d;
  }
  return null;
}

/* ═══════════════════════════════════════════════════════
   TOOLTIP
   ═══════════════════════════════════════════════════════ */
function showTip(d, cx, cy) {
  const tipColor     = nColor(d);
  const displayRole  = scrambleMode ? getDisplayRole(d)   : (d.role   || '');
  const displayStatus = scrambleMode ? getDisplayStatus(d) : (d.status || '');
  const cats         = nodeCatsMap.get(d.id) || [];

  let h = `<div class="name" style="color:${tipColor}">${d.label}</div>`;
  if (displayRole)   h += `<div><span class="lbl">${scrambleMode ? 'Cover' : 'Role'}: </span>${displayRole}</div>`;
  if (displayStatus) h += `<div><span class="lbl">${scrambleMode ? 'Signal' : 'Status'}: </span>${displayStatus}</div>`;
  if (cats.length && !scrambleMode) h += `<div style="margin-top:4px;color:#64748b;font-size:10px">${cats.map(c => catNames[c]).join(' · ')}</div>`;
  if (scrambleMode)  h += `<div style="margin-top:4px;color:#f59e0b;font-size:10px">🎲 Identity scrambled</div>`;
  h += `<div class="hint">${scrambleMode ? 'Click to decode dossier →' : 'Click to open dossier →'}</div>`;

  DOM.tip.innerHTML = h;
  DOM.tip.style.display   = 'block';
  DOM.tip.style.transform = `translate3d(${cx + 14}px,${cy - 10}px,0)`;
}

/* ═══════════════════════════════════════════════════════
   DOSSIER
   ═══════════════════════════════════════════════════════ */
function openDossier(d) {
  DOM.tip.style.display = 'none';

  const color  = nColor(d);
  const light  = Clight[d.type]  || 'rgba(59,130,246,0.1)';
  const border = Cborder[d.type] || 'rgba(59,130,246,0.25)';

  const displayRole   = scrambleMode ? getDisplayRole(d)   : (d.role   || '');
  const displayStatus = scrambleMode ? getDisplayStatus(d) : (d.status || '');

  /* ── header ── */
  DOM.dosName.textContent  = d.label;
  DOM.dosName.style.color  = color;
  DOM.dosRole.textContent  = displayRole;
  DOM.dosRole.style.display = displayRole ? 'block' : 'none';

  const stEl = DOM.dosStatus;
  if (displayStatus) {
    stEl.textContent    = displayStatus;
    stEl.style.display  = 'inline-block';
    if (scrambleMode) {
      stEl.style.background = 'rgba(245,158,11,0.1)';
      stEl.style.color      = '#f59e0b';
      stEl.style.border     = '1px solid rgba(245,158,11,0.2)';
    } else {
      const dead = /DECEASED|DIED/.test(displayStatus);
      const conv = /CONVICTED/.test(displayStatus);
      const fled = /FLED/.test(displayStatus);
      const imm  = /IMMUNITY/.test(displayStatus);
      stEl.style.background = dead ? 'rgba(100,116,139,0.1)' : conv ? 'rgba(248,113,113,0.1)' : fled ? 'rgba(251,146,60,0.1)' : imm ? 'rgba(250,204,21,0.1)' : light;
      stEl.style.color      = dead ? '#64748b' : conv ? '#f87171' : fled ? '#fb923c' : imm ? '#facc15' : color;
      stEl.style.border     = '1px solid ' + (dead ? 'rgba(100,116,139,0.2)' : conv ? 'rgba(248,113,113,0.2)' : fled ? 'rgba(251,146,60,0.2)' : imm ? 'rgba(250,204,21,0.2)' : border);
    }
  } else {
    stEl.style.display = 'none';
  }

  const nwEl = DOM.dosNw;
  if (scrambleMode) {
    const fakeNW = ['∞ Stardust','42 Quatloos','₿ NaN','$0.69','π Zorkmids','1M Galactic Credits','0xDEADBEEF','420.69 Doge'][Math.abs(hashStr(d.id + 'nw')) % 8];
    nwEl.textContent   = fakeNW;
    nwEl.style.display = 'inline-block';
  } else {
    nwEl.textContent   = d.networth || '';
    nwEl.style.display = d.networth ? 'inline-block' : 'none';
  }

  /* ── body ── */
  const parts = [];
  const cats  = nodeCatsMap.get(d.id) || [];

  if (scrambleMode) {
    parts.push(`<div class="cal" style="background:rgba(245,158,11,0.08);border-left-color:#f59e0b;color:#fbbf24;margin-bottom:14px">🎲 SCRAMBLE MODE ACTIVE — All identifiers randomized. Real identity redacted.</div>`);
  }

  if (!scrambleMode && categories.uncertain.includes(d.id) && !categories.named.includes(d.id)) {
    parts.push(`<div class="cal gray" style="margin-bottom:14px">⚠ Documented connection — role uncertain.</div>`);
  }

  if (d.intelRole)    parts.push(`<div class="ds"><h3>${scrambleMode ? 'Astral Assessment' : 'Intel Assessment'}</h3><div class="cal red">${scrambleMode ? scrambleText(d.intelRole) : d.intelRole}</div></div>`);
  if (d.epsteinLink)  parts.push(`<div class="ds"><h3>${scrambleMode ? 'Nexus Entanglement' : 'Epstein Connection'}</h3><div class="cal">${scrambleMode ? scrambleText(d.epsteinLink) : d.epsteinLink}</div></div>`);
  if (d.significance) parts.push(`<div class="ds"><h3>${scrambleMode ? 'Cosmic Significance' : 'Why This Matters'}</h3><div class="cal blue">${scrambleMode ? scrambleText(d.significance) : d.significance}</div></div>`);
  if (d.desc)         parts.push(`<div class="ds"><h3>${scrambleMode ? 'Decoded Transmission' : 'Summary'}</h3><p>${scrambleMode ? scrambleText(d.desc) : d.desc}</p></div>`);
  if (d.evidence)     parts.push(`<div class="ds"><h3>${scrambleMode ? 'Intercepted Data' : 'Evidence'}</h3><p>${scrambleMode ? scrambleText(d.evidence) : d.evidence}</p></div>`);
  if (d.link)         parts.push(`<div class="ds"><h3>${scrambleMode ? 'Oracle Note' : 'Analyst Note'}</h3><p style="color:#64748b;font-style:italic">${scrambleMode ? scrambleText(d.link) : d.link}</p></div>`);

  if (cats.length) {
    parts.push(`<div class="ds"><h3>${scrambleMode ? 'Dimensional Role' : 'Network Role'}</h3><div>${cats.map(c => `<span class="ctag">${scrambleCatName(c)}</span>`).join('')}</div></div>`);
  }

  /* Extract year range from text */
  const txt  = [(d.desc || ''), (d.evidence || ''), (d.epsteinLink || ''), (d.intelRole || '')].join(' ');
  const ym   = [...new Set((txt.match(/\b(19[6-9]\d|20[0-3]\d)\b/g) || []))].map(Number).sort((a, b) => a - b);

  const scrambledType   = scrambleMode ? ['OMEGA ENTITY','GAMMA ASSET','DELTA VECTOR','SIGMA NODE'][Math.abs(hashStr(d.id + 't')) % 4] : (typeLabel[d.type] || d.type);
  const hexId           = '0x' + Math.abs(hashStr(d.id)).toString(16).toUpperCase().padStart(8, '0');

  parts.push(`<div class="ds"><h3>${scrambleMode ? 'Entity Profile' : 'Profile'}</h3>
    <div class="df"><div class="fl">${scrambleMode ? 'CODEX' : 'ID'}</div><div class="fv" style="font-family:monospace;color:${color}">${scrambleMode ? hexId : d.id.toUpperCase()}</div></div>
    <div class="df"><div class="fl">${scrambleMode ? 'Threat Class' : 'Classification'}</div><div class="fv">${scrambledType}</div></div>
    ${(!scrambleMode && d.networth) ? `<div class="df"><div class="fl">Net Worth</div><div class="fv">${d.networth}</div></div>` : ''}
    ${(ym.length >= 2 && !scrambleMode) ? `<div class="df"><div class="fl">Years</div><div class="fv">${ym[0]}–${ym[ym.length - 1]}</div></div>` : ''}</div>`);

  /* Connections list */
  const conns = [];
  for (const l of links) {
    const sid = nodeId(l.source), tid = nodeId(l.target);
    if (sid === d.id) { const t2 = nodeMap.get(tid); if (t2) conns.push({ node: t2, strength: l.strength || 0.5, dir: '→' }); }
    if (tid === d.id) { const s2 = nodeMap.get(sid); if (s2) conns.push({ node: s2, strength: l.strength || 0.5, dir: '←' }); }
  }
  conns.sort((a, b) => b.strength - a.strength);

  parts.push(`<div class="ds"><h3>${scrambleMode ? 'Entanglements' : 'Connections'} (${conns.length})</h3><ul class="cl">${
    conns.map(c => {
      const sc         = c.strength >= 0.7 ? 'sh' : c.strength >= 0.4 ? 'sm' : 'sl';
      return `<li data-id="${c.node.id}"><span class="cn"><span style="color:${nColor(c.node)}">●</span> ${c.dir} ${c.node.label}</span><span class="cs ${sc}">${Math.round(c.strength * 100)}%</span></li>`;
    }).join('')
  }</ul></div>`);

  /* Threat assessment */
  const tl = d.type === 'center' ? 'CRITICAL' : d.type === 'convicted' ? 'HIGH' : coreSet.has(d.id) ? 'HIGH' : conns.length > 10 ? 'ELEVATED' : conns.length > 5 ? 'MODERATE' : 'LOW';
  const scrambledThreat = scrambleMode ? ['SUPERNOVA','HYPERCRITICAL','SPICY','MEH','CHILL'][Math.abs(hashStr(d.id + 'th')) % 5] : tl;
  const tC = { CRITICAL:'#f87171', HIGH:'#fb923c', ELEVATED:'#fbbf24', MODERATE:'#818cf8', LOW:'#475569', SUPERNOVA:'#f87171', HYPERCRITICAL:'#fb923c', SPICY:'#fbbf24', MEH:'#818cf8', CHILL:'#475569' };
  const tB = { CRITICAL:'rgba(248,113,113,0.1)', HIGH:'rgba(251,146,60,0.1)', ELEVATED:'rgba(251,191,36,0.1)', MODERATE:'rgba(129,140,248,0.1)', LOW:'rgba(71,85,105,0.1)', SUPERNOVA:'rgba(248,113,113,0.1)', HYPERCRITICAL:'rgba(251,146,60,0.1)', SPICY:'rgba(251,191,36,0.1)', MEH:'rgba(129,140,248,0.1)', CHILL:'rgba(71,85,105,0.1)' };

  parts.push(`<div class="ds"><h3>${scrambleMode ? 'Threat Vibe' : 'Assessment'}</h3><span class="tb" style="background:${tB[scrambledThreat] || tB.LOW};color:${tC[scrambledThreat] || tC.LOW};border:1px solid ${(tC[scrambledThreat] || tC.LOW)}30">${scrambledThreat}</span><div style="margin-top:7px;color:#475569;font-size:11px">${conns.length} ${scrambleMode ? 'entanglements' : 'connections'} · ${scrambleMode ? 'power' : 'weight'}: ${d.radius}</div></div>`);

  DOM.dosBody.innerHTML = parts.join('');

  /* Event delegation for connection list clicks */
  DOM.dosBody.querySelector('.cl')?.addEventListener('click', e => {
    const li = e.target.closest('li[data-id]');
    if (!li) return;
    const t2 = nodeMap.get(li.dataset.id);
    if (t2) openDossier(t2);
  });

  DOM.dos.classList.add('open');
}

/* ═══════════════════════════════════════════════════════
   MOUSE & TOUCH INPUT
   ═══════════════════════════════════════════════════════ */
let isPanning = false, panSX = 0, panSY = 0, panSTx = 0, panSTy = 0;
let dragNode  = null,  dragSX = 0, dragSY = 0, mdX = 0, mdY = 0, mdT = 0;

canvas.addEventListener('mousedown', e => {
  if (e.button !== 0) return;
  mdX = e.clientX; mdY = e.clientY; mdT = Date.now();
  const g   = toGraph(e.clientX, e.clientY);
  const hit = hitTest(g.x, g.y);
  if (hit) {
    dragNode = hit; dragSX = e.clientX; dragSY = e.clientY;
    hit.fx = hit.x; hit.fy = hit.y;
  } else {
    isPanning = true; panSX = e.clientX; panSY = e.clientY; panSTx = tx; panSTy = ty;
  }
});

canvas.addEventListener('mousemove', e => {
  if (dragNode) {
    const g = toGraph(e.clientX, e.clientY);
    dragNode.fx = dragNode.x = g.x;
    dragNode.fy = dragNode.y = g.y;
    scheduleRedraw();
    return;
  }
  if (isPanning) {
    tx = panSTx + (e.clientX - panSX);
    ty = panSTy + (e.clientY - panSY);
    scheduleRedraw();
    return;
  }
  const g   = toGraph(e.clientX, e.clientY);
  const hit = hitTest(g.x, g.y);
  if (hit !== hoveredNode) { hoveredNode = hit; scheduleRedraw(); }
  if (hit) {
    showTip(hit, e.clientX, e.clientY);
    canvas.style.cursor = 'pointer';
  } else {
    DOM.tip.style.display = 'none';
    canvas.style.cursor   = 'default';
  }
});

canvas.addEventListener('mouseup', e => {
  if (dragNode) {
    const moved   = Math.hypot(e.clientX - dragSX, e.clientY - dragSY);
    const elapsed = Date.now() - mdT;
    if (moved < CLICK_MAX_PX && elapsed < CLICK_MAX_MS) openDossier(dragNode);
    dragNode.fx = null; dragNode.fy = null;
    if (dragNode.id === 'epstein' && activeCat === 'all') { dragNode.fx = W / 2; dragNode.fy = H / 2; }
    dragNode = null;
    scheduleRedraw();
  }
  if (isPanning) {
    isPanning = false;
    if (Math.hypot(e.clientX - mdX, e.clientY - mdY) < CLICK_MAX_PX) {
      DOM.dos.classList.remove('open');
    }
  }
});

canvas.addEventListener('mouseleave', () => {
  if (dragNode) {
    dragNode.fx = null; dragNode.fy = null;
    if (dragNode.id === 'epstein' && activeCat === 'all') { dragNode.fx = W / 2; dragNode.fy = H / 2; }
    dragNode = null;
  }
  hoveredNode = null; isPanning = false;
  DOM.tip.style.display = 'none';
  scheduleRedraw();
});

canvas.addEventListener('wheel', e => {
  e.preventDefault();
  const f  = e.deltaY < 0 ? WHEEL_IN : WHEEL_OUT;
  const ns = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, scale * f));
  tx = e.clientX - (e.clientX - tx) * (ns / scale);
  ty = e.clientY - (e.clientY - ty) * (ns / scale);
  scale = ns;
  syncZoomSlider();
  scheduleRedraw();
}, { passive: false });

/* Touch support */
let ltd = 0, tpx = 0, tpy = 0;

canvas.addEventListener('touchstart', e => {
  if (e.touches.length === 2) {
    ltd = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
  } else {
    tpx = e.touches[0].clientX; tpy = e.touches[0].clientY; panSTx = tx; panSTy = ty;
  }
}, { passive: true });

canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  if (e.touches.length === 2) {
    const d  = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    const f  = d / ltd;
    const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    const ns = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, scale * f));
    tx = mx - (mx - tx) * (ns / scale); ty = my - (my - ty) * (ns / scale);
    scale = ns; ltd = d;
    syncZoomSlider();
  } else {
    tx = panSTx + (e.touches[0].clientX - tpx);
    ty = panSTy + (e.touches[0].clientY - tpy);
  }
  scheduleRedraw();
}, { passive: false });

/* ═══════════════════════════════════════════════════════
   CONTROL EVENT LISTENERS
   ═══════════════════════════════════════════════════════ */
DOM.search.addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase();
  if (searchQuery.length >= 2) {
    /* O(n) — uses nodeIndex, not indexOf */
    const m = nodes.find(n => visSet.has(n.id) && nodeLabelLC[nodeIndex.get(n.id)].includes(searchQuery));
    hoveredNode = m || null;
  } else {
    hoveredNode = null;
  }
  invalidateVis();
  visSet = getVisibleSet();
  scheduleRedraw();
});

DOM.dosX.addEventListener('click', () => DOM.dos.classList.remove('open'));

DOM.labels.addEventListener('change', e => { showLabels = e.target.checked; scheduleRedraw(); });
DOM.orphans.addEventListener('change', e => { showOrphans = e.target.checked; applyFilters(); });

DOM.zoomSlider.addEventListener('input', e => {
  const ns = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, (+e.target.value) / 100));
  const cx = W / 2, cy = H / 2;
  tx = cx - (cx - tx) * (ns / scale);
  ty = cy - (cy - ty) * (ns / scale);
  scale = ns;
  DOM.zv.textContent = Math.round(scale * 100);
  scheduleRedraw();
});

DOM.strSlider.addEventListener('input', e => {
  minStrength = +e.target.value;
  DOM.sv.textContent = minStrength.toFixed(1);
  applyFilters();
});

DOM.nodeSizeSlider.addEventListener('input', e => {
  const pct = +e.target.value;
  DOM.nsv.textContent = pct;
  S = BASE_SCALE * (pct / 100);
  const collForce = sim.force('collision');
  if (collForce) collForce.radius(d => d.radius * S + 10);
  scheduleRedraw();
});

for (const cb of DOM.typeFilters) cb.addEventListener('change', () => applyFilters());

DOM.scrambleToggle.addEventListener('change', e => {
  if (e.target.checked) activateScramble();
  else                  deactivateScramble();
  updateStats();
});

for (const btn of DOM.themeButtons) {
  btn.addEventListener('click', () => {
    for (const b of DOM.themeButtons) b.classList.remove('active');
    btn.classList.add('active');
    applyTheme(btn.dataset.theme);
  });
}

for (const btn of DOM.catButtons) {
  btn.addEventListener('click', () => {
    for (const b of DOM.catButtons) b.classList.remove('active');
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    stopSim();
    for (const d of nodes) { d.fx = null; d.fy = null; d.x = d._ox ?? d.x; d.y = d._oy ?? d.y; }
    if (activeCat === 'all') {
      const ep = nodeMap.get('epstein');
      if (ep) { ep.x = W / 2; ep.y = H / 2; ep.fx = W / 2; ep.fy = H / 2; }
    }
    applyFilters();
    refitVis();
  });
}

/* ═══════════════════════════════════════════════════════
   INITIALISATION
   ═══════════════════════════════════════════════════════ */

/* Uncheck "Possibly Involved" by default */
for (const el of DOM.typeFilters) { if (el.value === 'possibly') el.checked = false; }

applyFilters();

/* Auto-fit initial viewport to the visible graph */
{
  const vn = nodes.filter(d => visSet.has(d.id));
  if (vn.length) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const d of vn) {
      if (d.x < x0) x0 = d.x; if (d.y < y0) y0 = d.y;
      if (d.x > x1) x1 = d.x; if (d.y > y1) y1 = d.y;
    }
    const gw = x1 - x0 || 1, gh = y1 - y0 || 1;
    const gcx = (x0 + x1) / 2,  gcy = (y0 + y1) / 2;
    scale = Math.min(W / (gw + 200), H / (gh + 200), 1.5);
    tx = W / 2 - gcx * scale;
    ty = H / 2 - gcy * scale;
    syncZoomSlider();
  }
}

/* Store original positions for category-reset pan restoration */
for (const d of nodes) { d._ox = d.x; d._oy = d.y; }

scheduleRedraw();
