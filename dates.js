// ═══════════════════════════════════════════════════════
// YEARS ACTIVE PATCH — standalone, does not edit list files
// Load after list.js and list2.js, before main <script>
// ═══════════════════════════════════════════════════════
(function patchYearsActive() {
  const patch = {
    // ── CORE ──
    epstein:            "1974 – 2019",
    maxwell_g:          "1991 – 2020",
    kellen:             "1998 – 2008",
    marcinkova:         "~2000 – 2008",
    groff:              "1990s – 2008",
    brunel:             "1970s – 2020",
    casablancas:        "1972 – 2013",
    alessi:             "1990 – 2002",
    rodriguez:          "~2002 – 2009",
    gerald_marie:       "1980s – 2020",
    zampolli:           "~2000s",

    // ── FINANCE ──
    wexner:             "1991 – 2019",
    black:              "2012 – 2017",
    staley:             "1998 – 2021",
    dimon:              "2005 – 2013",
    hoffenberg:         "1987 – 1993",
    kravis:             "~2000s",
    david_koch:         "~2000s",
    burkle:             "~2000s",
    barrack:            "2016 – 2021",
    dubin:              "~2000s – 2019",
    eva_dubin:          "~1990s – 2019",
    lutnick:            "2011 – 2012",
    diller:             "~2000s",
    mort_z:             "~2000s",
    pritzker:           "~2000s",
    bloomberg:          "~2000s",

    // ── ROTHSCHILD ──
    nat_rothschild:     "2008",
    lynn_rothschild:    "1998 – 2019",

    // ── RUSSIAN ──
    rybolovlev:         "2008",
    deripaska:          "~2005 – 2019",
    lebedev:            "1988 – 1992",
    evgeny_lebedev:     "2009 – 2024",

    // ── LEGAL ──
    dershowitz:         "1996 – 2024",
    starr:              "2006 – 2008",
    boies:              "2006 – 2019",
    acosta:             "2007 – 2008",
    barr_d:             "1974",
    barr_w:             "2019",
    berman:             "2018 – 2020",
    strauss:            "2020 – 2022",
    rosenstein:         "2017 – 2019",
    judge_marra:        "2008 – 2019",

    // ── US POLITICS ──
    trump:              "1987 – 2005",
    clinton:            "1993 – 2003",
    nader:              "2016 – 2020",
    mitchell:           "~2000s",
    richardson:         "~2000s",
    bannon:             "2015 – 2017",
    sandy_berger:       "1997 – 2005",
    john_podesta:       "1998 – 2001",
    lindsey_graham:     "2003 – present",
    schumer:            "~2000s",
    kerry:              "~2000s",
    gore:               "~2000s",
    powell:             "~2000s",
    gingrich:           "~2000s",
    dennis_hastert:     "1979 – 2002",
    shalala:            "1993 – 2001",
    perlmutter:         "~2000s",
    kushner:            "2016 – 2021",
    manafort:           "2005 – 2018",

    // ── UK POLITICS / ESTABLISHMENT ──
    blair:              "2008 – 2015",
    mandelson:          "1990s – 2024",
    boris_johnson:      "2019 – 2022",
    osborne:            "2008 – 2020",
    leon_brittan:       "1979 – 2015",
    cyril_smith:        "1960s – 2010",
    edward_heath:       "1960s – 2005",
    peter_morrison:     "1970s – 1995",
    peter_hayman:       "1960s – 1992",
    michael_hanley:     "1972 – 1978",
    maurice_oldfield:   "1950s – 1981",
    anthony_blunt:      "1930s – 1983",

    // ── UK ABUSE NETWORK ──
    savile:             "1955 – 2011",
    rolf_harris:        "1968 – 1986",
    gary_glitter:       "1975 – 2006",
    max_clifford:       "1977 – 2014",
    chris_denning:      "1967 – 1985",
    peter_righton:      "1970s – 1992",
    sidney_cooke:       "1980s – 1999",
    tony_mcsweeney:     "1970s – 2014",
    john_stingemore:    "1970s – 2000s",

    // ── FRENCH ──
    jack_lang:          "1981 – 2002",
    sarkozy:            "~2000s",

    // ── ROYALS ──
    andrew:             "1999 – 2022",
    king_charles:       "~1970s – present",
    ferguson:           "2010",
    mette_marit:        "2008 – 2010",
    sultan_brunei:      "~1990s",
    sultan_ahmed:       "~2000s",
    juan_carlos:        "1975 – 2020",
    king_carl_xvi:      "~2000s",
    albert_monaco:      "~2000s",

    // ── ISRAELI INTELLIGENCE ──
    robert_maxwell:     "1960s – 1991",
    ben_menashe:        "1977 – 1987",
    ostrovsky:          "1982 – 1986",
    rafi_eitan:         "1950s – 2019",
    nahum_admoni:       "1982 – 1989",
    shabtai_shavit:     "1989 – 1996",
    chaim_herzog:       "1959 – 1993",
    yitzhak_shamir:     "1940s – 1992",
    milchan:            "1960s – 2000s",
    jonathan_pollard:   "1984 – 1985",

    // ── ISRAELI POLITICS ──
    barak:              "1999 – 2019",
    netanyahu:          "1990s – present",
    olmert:             "2006 – 2009",
    peres:              "1960s – 2016",

    // ── WORLD LEADERS ──
    lajcak:             "~2010s",
    kissinger:          "~1970s – 2000s",
    putin:              "~2000s",
    mbs:                "2016 – present",

    // ── US INTELLIGENCE / FBI ──
    robert_hanssen:     "1979 – 2001",
    burns:              "2021 – 2025",
    brennan:            "2013 – 2017",
    petraeus:           "2011 – 2012",
    comey:              "2013 – 2017",
    mueller:            "2001 – 2013",
    freeh:              "1993 – 2013",
    dougan:             "~2000s – 2016",

    // ── PRIVATE INTEL ──
    black_cube:         "2016 – present",
    kroll:              "~1990s – 2000s",

    // ── TECH ──
    gates:              "2011 – 2013",
    musk:               "2014",
    thiel:              "~2000s – 2019",
    brin:               "~2000s",
    zuckerberg:         "~2000s",
    ellison:            "~2000s",
    larry_page:         "~2000s",
    sergey_brin:        "~2000s",
    bezos:              "~2000s",

    // ── ACADEMIA ──
    joi_ito:            "2013 – 2019",
    summers:            "2000s – 2014",
    hoffman:            "2011 – 2015",
    nicholas_neg:       "~2000s",
    minsky:             "~2000s",
    pinker:             "~2000s",
    chomsky:            "2015 – 2016",
    krauss:             "2011 – 2015",
    deepak:             "~2000s",
    nowak:              "2003 – 2019",
    seth_lloyd:         "2011 – 2019",
    church:             "~2000s – 2019",
    lessig:             "~2013 – 2019",
    hawking:            "2006",

    // ── MEDIA / ENTERTAINMENT ──
    murdoch:            "~1990s – 2000s",
    weinstein:          "1980s – 2020",
    lauer:              "~2000s",
    charlie_rose:       "~2000s",
    copperfield:        "~2000s",
    woody:              "post-2008",
    spacey:             "~2000s",
    tucker:             "~2000s",
    naomi:              "~2000s",
    branson:            "~2010s",
    tisch:              "~2000s",
    wasserman:          "2003",
    briatore:           "~2000s",
    ari_emanuel:        "~2000s",
    stroll:             "~2000s",
    blanchett:          "~2000s",
    christy_turlington: "~2000s",
    itzhak_perlman:     "~2000s",
    jagger:             "~2000s",
    willis:             "~2000s",
    fiennes:            "~2000s",
    baldwin:            "~2000s",
    wyclef:             "~2000s",
    handler:            "~2000s",
    chopra:             "~2000s",

    // ── SOCIAL ──
    bronfman_c:         "~2000s",
    bronfman_s:         "~2000s",
    gutfreund:          "~2000s",
    bob_wright:         "~2000s",

    // ── SURVIVORS ──
    giuffre:            "2000 – 2024",

    // ── GULF / KHASHOGGI ──
    khashoggi:          "1980s – 2017",
  };

  function applyPatch(nodeList) {
    if (!Array.isArray(nodeList)) return;
    const map = new Map(nodeList.map(function(n) { return [n.id, n]; }));
    for (var id in patch) {
      if (patch.hasOwnProperty(id)) {
        var node = map.get(id);
        if (node && !node.yearsActive) {
          node.yearsActive = patch[id];
        }
      }
    }
  }

  // Patch both data sources
  if (typeof graphData !== 'undefined' && graphData.nodes) {
    applyPatch(graphData.nodes);
  }
  if (typeof supplementalData !== 'undefined' && supplementalData.nodes) {
    applyPatch(supplementalData.nodes);
  }
})();