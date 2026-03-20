// ═══════════════════════════════════════════════════════
// YEARS ACTIVE PATCH + DOSSIER EXPANSIONS — standalone
// Load after list.js and list2.js, before main <script>
// ═══════════════════════════════════════════════════════
(function patchNodes() {
  var patch = {
    // ── CORE ──
    epstein:            { yearsActive: "1974 – 2019" },
    maxwell_g:          { yearsActive: "1991 – 2020" },
    kellen:             { yearsActive: "1998 – 2008" },
    marcinkova:         { yearsActive: "~2000 – 2008" },
    groff:              { yearsActive: "1990s – 2008" },
    brunel:             { yearsActive: "1970s – 2020" },
    casablancas:        { yearsActive: "1972 – 2013" },
    alessi:             { yearsActive: "1990 – 2002" },
    rodriguez:          { yearsActive: "~2002 – 2009" },
    gerald_marie:       { yearsActive: "1980s – 2020" },
    zampolli:           { yearsActive: "~2000s" },

    // ── FINANCE ──
    wexner:             { yearsActive: "1991 – 2019" },
    black:              { yearsActive: "2012 – 2017" },
    staley:             { yearsActive: "1998 – 2021" },
    dimon:              { yearsActive: "2005 – 2013" },
    hoffenberg:         { yearsActive: "1987 – 1993" },
    kravis:             { yearsActive: "~2000s" },
    david_koch:         { yearsActive: "~2000s" },
    burkle:             { yearsActive: "~2000s" },
    barrack:            { yearsActive: "2016 – 2021" },
    dubin:              { yearsActive: "~2000s – 2019" },
    eva_dubin:          { yearsActive: "~1990s – 2019" },
    lutnick:            { yearsActive: "2011 – 2012" },
    diller:             { yearsActive: "~2000s" },
    mort_z:             { yearsActive: "~2000s" },
    pritzker:           { yearsActive: "~2000s" },
    bloomberg:          { yearsActive: "~2000s" },

    // ── ROTHSCHILD ──
    nat_rothschild:     { yearsActive: "2008" },
    lynn_rothschild:    { yearsActive: "1998 – 2019" },

    // ── RUSSIAN ──
    rybolovlev:         { yearsActive: "2008" },
    deripaska:          { yearsActive: "~2005 – 2019" },
    lebedev:            { yearsActive: "1988 – 1992" },
    evgeny_lebedev:     { yearsActive: "2009 – 2024" },

    // ── LEGAL ──
    dershowitz:         { yearsActive: "1996 – 2024" },
    starr:              { yearsActive: "2006 – 2008" },
    boies:              { yearsActive: "2006 – 2019" },
    acosta:             { yearsActive: "2007 – 2008" },
    barr_d:             { yearsActive: "1974" },
    barr_w:             { yearsActive: "2019" },
    berman:             { yearsActive: "2018 – 2020" },
    strauss:            { yearsActive: "2020 – 2022" },
    rosenstein:         { yearsActive: "2017 – 2019" },
    judge_marra:        { yearsActive: "2008 – 2019" },

    // ── US POLITICS ──
    trump:              { yearsActive: "1987 – 2005" },
    clinton:            { yearsActive: "1993 – 2003" },
    nader:              { yearsActive: "2016 – 2020" },
    mitchell:           { yearsActive: "~2000s" },
    richardson:         { yearsActive: "~2000s" },
    bannon:             { yearsActive: "2015 – 2017" },
    sandy_berger:       { yearsActive: "1997 – 2005" },
    john_podesta:       { yearsActive: "1998 – 2001" },
    lindsey_graham:     { yearsActive: "2003 – present" },
    schumer:            { yearsActive: "~2000s" },
    kerry:              { yearsActive: "~2000s" },
    gore:               { yearsActive: "~2000s" },
    powell:             { yearsActive: "~2000s" },
    gingrich:           { yearsActive: "~2000s" },
    dennis_hastert:     { yearsActive: "1979 – 2002" },
    shalala:            { yearsActive: "1993 – 2001" },
    perlmutter:         { yearsActive: "~2000s" },
    kushner:            { yearsActive: "2016 – 2021" },
    manafort:           { yearsActive: "2005 – 2018" },

    // ── UK POLITICS / ESTABLISHMENT ──
    blair:              { yearsActive: "2008 – 2015" },
    mandelson:          { yearsActive: "1990s – 2024" },
    boris_johnson:      { yearsActive: "2019 – 2022" },
    osborne:            { yearsActive: "2008 – 2020" },
    leon_brittan:       { yearsActive: "1979 – 2015" },
    cyril_smith:        { yearsActive: "1960s – 2010" },
    edward_heath:       { yearsActive: "1960s – 2005" },
    peter_morrison:     { yearsActive: "1970s – 1995" },
    peter_hayman:       { yearsActive: "1960s – 1992" },
    michael_hanley:     { yearsActive: "1972 – 1978" },
    maurice_oldfield:   { yearsActive: "1950s – 1981" },
    anthony_blunt:      { yearsActive: "1930s – 1983" },

    // ── UK ABUSE NETWORK ──
    savile:             { yearsActive: "1955 – 2011" },
    rolf_harris:        { yearsActive: "1968 – 1986" },
    gary_glitter:       { yearsActive: "1975 – 2006" },
    max_clifford:       { yearsActive: "1977 – 2014" },
    chris_denning:      { yearsActive: "1967 – 1985" },
    peter_righton:      { yearsActive: "1970s – 1992" },
    sidney_cooke:       { yearsActive: "1980s – 1999" },
    tony_mcsweeney:     { yearsActive: "1970s – 2014" },
    john_stingemore:    { yearsActive: "1970s – 2000s" },

    // ── FRENCH ──
    jack_lang:          { yearsActive: "1981 – 2002" },
    sarkozy:            { yearsActive: "~2000s" },

    // ── ROYALS ──
    andrew:             { yearsActive: "1999 – 2022" },
    king_charles:       { yearsActive: "~1970s – present" },
    ferguson:           { yearsActive: "2010" },
    mette_marit:        { yearsActive: "2008 – 2010" },
    sultan_ahmed:       { yearsActive: "~2000s" },
    juan_carlos:        { yearsActive: "1975 – 2020" },
    king_carl_xvi:      { yearsActive: "~2000s" },
    albert_monaco:      { yearsActive: "~2000s" },

    // ── SULTAN OF BRUNEI — EXPANDED ──
    sultan_brunei: {
      yearsActive: "~1990s – present",
      role: "Sultan of Brunei · Absolute monarch · Net worth ~$30B",
      agency: "Brunei Royal Household / Gulf Intelligence Network",
      desc: "Sultan Hassanal Bolkiah presided over a royal household where the systematic procurement and trafficking of girls and young women was an open practice for decades. His brother Prince Jefri Bolkiah operated a harem system that sourced victims through international modelling agencies — the same pipeline used by Jean-Luc Brunel and Jeffrey Epstein. Former Miss USA Shannon Marketic sued in 1997, alleging she and other women were lured to Brunei, had their passports confiscated, and were sexually coerced. The case was dismissed on sovereign immunity grounds — establishing legal precedent that Gulf royals are untouchable in US courts.",
      intelRole: "The Brunei procurement operation used <strong>identical methodology to Epstein's network</strong>: modelling scouts recruited girls as young as 14–15 under the guise of career opportunities. Victims were flown to private compounds, had travel documents confiscated, and were isolated from any support system. The modelling pipeline that supplied girls to the Brunei palace — through agencies in Paris, Milan, and New York — overlapped directly with Jean-Luc Brunel's MC2 network and the agencies connected to John Casablancas, Gerald Marie, and Paolo Zampolli. Whether this constitutes a shared operation or parallel operations drawing from the same supply chain, the result is identical: children were trafficked across international borders to service powerful men who faced zero legal consequences.",
      epsteinLink: "The Sultan exists in the Epstein network through <strong>shared infrastructure</strong>, not necessarily direct personal contact. The modelling agencies that supplied Brunel's pipeline also supplied the Brunei palace. The financial advisors, fixers, and social gatekeepers who enabled Epstein's access to powerful figures operated in the same Gulf-monarchy orbit. George Nader — convicted child sex offender and key Epstein-adjacent figure — served as a liaison between Gulf royals and Western political figures, creating a bridge between the UAE/Gulf procurement networks and the Epstein operation. Prince Andrew's connections to both Epstein and Gulf monarchies further demonstrate the overlap.",
      significance: "The Brunei case establishes three critical precedents for understanding the Epstein network:<br><br><strong>1. Sovereign immunity as a shield for trafficking.</strong> The Marketic lawsuit's dismissal proved that heads of state can traffic with impunity in the US legal system. This precedent protects MBS, the Sultan of Dubai, and every other Gulf royal credibly accused of exploitation.<br><br><strong>2. The modelling pipeline is the trafficking pipeline.</strong> The same agencies, the same scouts, the same methods — 'modelling recruitment' was the cover story for an international child trafficking operation that served multiple clients across multiple continents.<br><br><strong>3. Western intelligence services chose geopolitical alliance over child protection.</strong> Brunei hosts a major British military base (the British Forces Brunei garrison). The UK has maintained close defence ties with Brunei since independence in 1984. MI6 would have been aware of the procurement operation — it was not a secret within intelligence circles — and chose strategic partnership over intervention. The same calculation was made regarding Epstein's Israeli intelligence connections, MBS's Saudi operations, and the UAE's use of George Nader.",
      evidence: "Shannon Marketic's 1997 federal lawsuit (dismissed on sovereign immunity). Prince Jefri's own legal disputes revealed spending of $15 billion from state funds, including maintenance of multiple properties used for the harem operation. Jillian Lauren's memoir <em>Some Girls: My Life in a Harem</em> (2010) documented her experience being recruited at age 18 to the Brunei palace. Multiple former employees and security personnel have provided accounts of the procurement system. British Foreign Office cables (partially declassified) reference concerns about the royal household's practices. The modelling agency connections to Brunel's network are documented through court filings in the Epstein/Maxwell cases.",
      link: "The Sultan of Brunei node connects the Gulf monarchy cluster to the modelling/trafficking pipeline cluster. His sovereign immunity dismissal created the legal framework that continues to protect powerful abusers. The fact that Prince Jefri embezzled $15 billion — much of it funding the trafficking operation — without criminal prosecution in any jurisdiction demonstrates that the system is not broken. It is functioning exactly as designed: wealth and geopolitical value purchase impunity."
    },

    // ── ISRAELI INTELLIGENCE ──
    robert_maxwell:     { yearsActive: "1960s – 1991" },
    ben_menashe:        { yearsActive: "1977 – 1987" },
    ostrovsky:          { yearsActive: "1982 – 1986" },
    rafi_eitan:         { yearsActive: "1950s – 2019" },
    nahum_admoni:       { yearsActive: "1982 – 1989" },
    shabtai_shavit:     { yearsActive: "1989 – 1996" },
    chaim_herzog:       { yearsActive: "1959 – 1993" },
    yitzhak_shamir:     { yearsActive: "1940s – 1992" },
    milchan:            { yearsActive: "1960s – 2000s" },
    jonathan_pollard:   { yearsActive: "1984 – 1985" },

    // ── ISRAELI POLITICS ──
    barak:              { yearsActive: "1999 – 2019" },
    netanyahu:          { yearsActive: "1990s – present" },
    olmert:             { yearsActive: "2006 – 2009" },
    peres:              { yearsActive: "1960s – 2016" },

    // ── WORLD LEADERS ──
    lajcak:             { yearsActive: "~2010s" },
    kissinger:          { yearsActive: "~1970s – 2000s" },
    putin:              { yearsActive: "~2000s" },
    mbs:                { yearsActive: "2016 – present" },

    // ── US INTELLIGENCE / FBI ──
    robert_hanssen:     { yearsActive: "1979 – 2001" },
    burns:              { yearsActive: "2021 – 2025" },
    brennan:            { yearsActive: "2013 – 2017" },
    petraeus:           { yearsActive: "2011 – 2012" },
    comey:              { yearsActive: "2013 – 2017" },
    mueller:            { yearsActive: "2001 – 2013" },
    freeh:              { yearsActive: "1993 – 2013" },
    dougan:             { yearsActive: "~2000s – 2016" },

    // ── PRIVATE INTEL ──
    black_cube:         { yearsActive: "2016 – present" },
    kroll:              { yearsActive: "~1990s – 2000s" },

    // ── TECH ──
    gates:              { yearsActive: "2011 – 2013" },
    musk:               { yearsActive: "2014" },
    thiel:              { yearsActive: "~2000s – 2019" },
    brin:               { yearsActive: "~2000s" },
    zuckerberg:         { yearsActive: "~2000s" },
    ellison:            { yearsActive: "~2000s" },
    larry_page:         { yearsActive: "~2000s" },
    sergey_brin:        { yearsActive: "~2000s" },
    bezos:              { yearsActive: "~2000s" },

    // ── ACADEMIA ──
    joi_ito:            { yearsActive: "2013 – 2019" },
    summers:            { yearsActive: "2000s – 2014" },
    hoffman:            { yearsActive: "2011 – 2015" },
    nicholas_neg:       { yearsActive: "~2000s" },
    minsky:             { yearsActive: "~2000s" },
    pinker:             { yearsActive: "~2000s" },
    chomsky:            { yearsActive: "2015 – 2016" },
    krauss:             { yearsActive: "2011 – 2015" },
    deepak:             { yearsActive: "~2000s" },
    nowak:              { yearsActive: "2003 – 2019" },
    seth_lloyd:         { yearsActive: "2011 – 2019" },
    church:             { yearsActive: "~2000s – 2019" },
    lessig:             { yearsActive: "~2013 – 2019" },
    hawking:            { yearsActive: "2006" },

    // ── MEDIA / ENTERTAINMENT ──
    murdoch:            { yearsActive: "~1990s – 2000s" },
    weinstein:          { yearsActive: "1980s – 2020" },
    lauer:              { yearsActive: "~2000s" },
    charlie_rose:       { yearsActive: "~2000s" },
    copperfield:        { yearsActive: "~2000s" },
    woody:              { yearsActive: "post-2008" },
    spacey:             { yearsActive: "~2000s" },
    tucker:             { yearsActive: "~2000s" },
    naomi:              { yearsActive: "~2000s" },
    branson:            { yearsActive: "~2010s" },
    tisch:              { yearsActive: "~2000s" },
    wasserman:          { yearsActive: "2003" },
    briatore:           { yearsActive: "~2000s" },
    ari_emanuel:        { yearsActive: "~2000s" },
    stroll:             { yearsActive: "~2000s" },
    blanchett:          { yearsActive: "~2000s" },
    christy_turlington: { yearsActive: "~2000s" },
    itzhak_perlman:     { yearsActive: "~2000s" },
    jagger:             { yearsActive: "~2000s" },
    willis:             { yearsActive: "~2000s" },
    fiennes:            { yearsActive: "~2000s" },
    baldwin:            { yearsActive: "~2000s" },
    wyclef:             { yearsActive: "~2000s" },
    handler:            { yearsActive: "~2000s" },
    chopra:             { yearsActive: "~2000s" },

    // ── SOCIAL ──
    bronfman_c:         { yearsActive: "~2000s" },
    bronfman_s:         { yearsActive: "~2000s" },
    gutfreund:          { yearsActive: "~2000s" },
    bob_wright:         { yearsActive: "~2000s" },

    // ── SURVIVORS ──
    giuffre:            { yearsActive: "2000 – 2024" },

    // ── GULF / KHASHOGGI ──
    khashoggi:          { yearsActive: "1980s – 2017" },
  };

  function applyPatch(nodeList) {
    if (!Array.isArray(nodeList)) return;
    var map = new Map(nodeList.map(function(n) { return [n.id, n]; }));
    for (var id in patch) {
      if (patch.hasOwnProperty(id)) {
        var node = map.get(id);
        if (node) {
          var p = patch[id];
          for (var key in p) {
            if (p.hasOwnProperty(key) && !node[key]) {
              node[key] = p[key];
            }
          }
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