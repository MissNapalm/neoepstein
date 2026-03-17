// ═══════════════════════════════════════════════════════
// SUPPLEMENTAL DATA — list2.js
// Only nodes that do NOT already exist in list.js
// ═══════════════════════════════════════════════════════
const supplementalData = {
  nodes: [
// ── EVGENY LEBEDEV (distinct from Alexander Lebedev in list.js) ──
    {id:"evgeny_lebedev", label:"Evgeny Lebedev", type:"possibly", radius:13,
      agency:"EVENING STANDARD / INDEPENDENT / HOUSE OF LORDS",
      role:"Media Baron · Baron Lebedev of Hampton & Castle",
      status:"ACTIVE", networth:"~$500M",
      intelRole:"Son of Alexander Lebedev, confirmed KGB officer stationed at the Soviet Embassy in London (1988–1992). MI5 formally advised against his UK peerage on national security grounds. Boris Johnson overrode the objection. The House of Lords Appointments Commission flagged him as a security risk. Johnson had attended multiple parties at Evgeny's Italian palazzo before awarding the peerage.",
      epsteinLink:"Moved in the same London social circles as Ghislaine Maxwell and Prince Andrew. Hosted Andrew at his Italian palazzo — the same trip where Andrew was photographed with a woman later identified in Epstein-related proceedings. His Evening Standard and Independent newspapers shaped UK media coverage of Epstein-adjacent figures.",
      significance:"Represents the Russian intelligence penetration of British high society that ran parallel to the Epstein/Maxwell operation. His father's KGB posting in London overlapped with Robert Maxwell's final years as a triple agent. The peerage scandal — MI5 warned against it, Johnson awarded it anyway — shows how compromised UK institutional vetting had become.",
      desc:"Russian-British newspaper owner and life peer. Acquired the Evening Standard (2009) and The Independent (2010). Made Baron Lebedev of Hampton and Castle in 2020 despite formal MI5 security objection overruled by Boris Johnson. Son of Alexander Lebedev, former KGB officer. Hosted Boris Johnson at his Umbrian palazzo on multiple occasions before the peerage was awarded.",
      evidence:"MI5 security objection documented (reported by multiple UK outlets). House of Lords Appointments Commission flag documented. Johnson villa visits documented. Andrew Italian trip documented. Evening Standard and Independent ownership confirmed.",
      link:"MI5 said no. Johnson said yes. The House of Lords now contains the son of a KGB officer who hosted the Prime Minister at his Italian villa. The peerage was awarded. No explanation was given."
    },

    // ── DMITRY RYBOLOVLEV ──
    {id:"rybolovlev", label:"Dmitry Rybolovlev", type:"possibly", radius:12,
      agency:"RUSAL / AS MONACO FC",
      role:"Russian oligarch — fertiliser / art / real estate",
      status:"ACTIVE", networth:"~$6.8B",
      epsteinLink:"Bought Donald Trump's Palm Beach mansion in 2008 for $95M — more than double the $41M Trump paid four years earlier, at a time when the Palm Beach real estate market was collapsing. The sale occurred during the same period as Epstein's sweetheart plea deal in the same jurisdiction. Flight-tracking journalists found Rybolovlev's private jet repeatedly in the same cities as Trump's plane during the 2016 campaign, including Charlotte NC and Las Vegas — cities with no obvious business connection for a Russian potash billionaire.",
      significance:"The $54M overpayment on a Palm Beach mansion during a market downturn has never been adequately explained by either party. Palm Beach was simultaneously the epicentre of Epstein's operation and a documented hub for Russian oligarch real estate transactions. The geographic and temporal overlaps are documented; the connection remains officially unestablished.",
      desc:"Russian billionaire who built his fortune in potash fertiliser through Uralkali. President of AS Monaco FC. His $95M purchase of Donald Trump's Maison de L'Amitié in Palm Beach in 2008 — at more than twice the purchase price — remains one of the most scrutinised real estate transactions in recent US political history. The mansion was later demolished. He was later embroiled in a lawsuit with his art dealer over alleged fraud involving paintings by Picasso, Modigliani, and others.",
      evidence:"$95M mansion purchase price documented (public records). Trump purchase price $41M documented. Palm Beach market downturn 2008 documented. Jet tracking data published by multiple outlets during 2016 campaign. No documented direct Epstein link.",
      link:"He paid $54M over market for a Palm Beach mansion at the same moment Epstein was getting his sweetheart deal in the same county. The planes tracked together during the campaign. Nobody has been required to explain any of it."
    },

    // ── BORIS JOHNSON ──
    {id:"boris_johnson", label:"Boris Johnson", type:"possibly", radius:20,
      agency:"UK GOVERNMENT",
      role:"Former Prime Minister · Lebedev Peerage",
      status:"NAMED IN FILES",
      intelRole:"As Prime Minister, overrode MI5's formal security objection to grant Evgeny Lebedev — son of a KGB officer — a UK life peerage. Attended multiple parties at Lebedev's Italian palazzo, including one in April 2021 attended by intelligence-flagged guests, immediately after attending a NATO foreign ministers' summit. UK intelligence services were reportedly not informed of or present at the palazzo event.",
      epsteinLink:"Named in Epstein contact files. Operated in the same British elite social circuit as Maxwell, Andrew, and Lebedev. His decision to award the Lebedev peerage against MI5 advice is the most documented example in the UK of Russian intelligence-adjacent influence overriding the security state.",
      significance:"Johnson awarded a peerage to the son of a KGB officer after attending his parties, overriding formal intelligence objections. This is not circumstantial — it is documented. The Lebedev peerage is the clearest single example of Russian intelligence penetration of the British establishment reaching the highest elected office.",
      desc:"Alexander Boris de Pfeffel Johnson served as Prime Minister of the United Kingdom from 2019 to 2022. He attended multiple parties at Evgeny Lebedev's Italian palazzo, including one in April 2021 immediately following a NATO foreign ministers' summit. He subsequently awarded Lebedev a life peerage in 2020, overriding a formal MI5 security objection. He has declined to answer questions about what was discussed at the palazzo events and who else was present.",
      evidence:"Peerage award documented. MI5 objection documented (multiple UK outlets). Palazzo visits documented. April 2021 NATO summit → palazzo visit timeline documented. Named in Epstein contact files.",
      link:"He went from a NATO summit to Lebedev's Italian villa. Then he gave Lebedev's son a seat in Parliament. MI5 said don't. He did it anyway. He has never explained what was discussed at the villa."
    },

    // ── VIRGINIA GIUFFRE ──
    {id:"giuffre", label:"Virginia Giuffre", type:"possibly", radius:16,
      agency:"SURVIVOR / PLAINTIFF",
      role:"Primary Victim · Sworn Testimony · Civil Plaintiff",
      status:"SETTLED — Andrew £12M · Dershowitz settled",
      intelRole:"The most consequential single witness in the Epstein case. Her sworn federal depositions named Andrew, Dershowitz, Mitchell, Richardson, Barak, and others under oath. Her civil litigation was the mechanism that forced the most document disclosure — including the 2024 unsealing of hundreds of Epstein-related court filings. She recruited other victims into the legal process and sustained a decade-long legal campaign against Maxwell and Epstein's network.",
      epsteinLink:"Recruited into Epstein's operation at age 16 while working as a locker room attendant at Trump's Mar-a-Lago. Trafficked to multiple locations including the Manhattan townhouse, Palm Beach estate, Zorro Ranch, private island, and multiple European locations. Named Epstein and Maxwell as her primary abusers and named over a dozen men she was directed to have contact with.",
      significance:"Without Giuffre's testimony, most of what is publicly known about the network would remain sealed. She is the person who forced the accountability that exists. She named names under oath at personal and financial cost. She was subsequently the target of a coordinated defamation campaign involving Dershowitz and Maxwell's legal teams.",
      desc:"Virginia Giuffre (née Roberts) was recruited into Jeffrey Epstein's trafficking network at age 16 in 2000 while working at Mar-a-Lago. She was trafficked for years across multiple countries. She gave sworn federal depositions naming multiple men. Her civil suit against Ghislaine Maxwell forced the unsealing of hundreds of documents. She settled separate suits with Prince Andrew (reported £12M, 2022) and Alan Dershowitz (2024). She has spoken publicly about her abuse in multiple media appearances and continues to advocate for other trafficking victims.",
      evidence:"Multiple sworn federal depositions. Civil suit against Maxwell (forced document unsealing). Settlement with Andrew £12M (2022). Settlement with Dershowitz (2024). Named Epstein, Maxwell, Andrew, Dershowitz, Mitchell, Richardson, Barak, Minsky, and others under oath. Mar-a-Lago recruitment documented.",
      link:"She was 16 when she was recruited from a Trump resort. She named names under oath for two decades. She settled with a prince and a Harvard professor. The men she named who were not charged are still free."
    },

    // ── GEORGE OSBORNE ──
    {id:"osborne", label:"George Osborne", type:"possibly", radius:14,
      agency:"UK GOVERNMENT / EVENING STANDARD",
      role:"Former Chancellor · Evening Standard Editor",
      status:"NAMED IN FILES",
      epsteinLink:"Present at Nathaniel Rothschild's 2008 Corfu gathering on Deripaska's superyacht alongside Peter Mandelson — who visited Epstein's island — creating a documented connection between UK Conservative Party leadership, Russian oligarch money, and the Mandelson-Maxwell social world. Later appointed Editor of the Evening Standard — the newspaper owned by Evgeny Lebedev.",
      significance:"Osborne connects the Conservative Party (shadow chancellor at the time of the Corfu gathering, later Chancellor of the Exchequer), Russian oligarch money (Deripaska's yacht), and the Lebedev media operation (Evening Standard editor) in a single career arc. The Corfu gathering was itself a documented intelligence concern.",
      desc:"George Osborne served as Chancellor of the Exchequer under David Cameron (2010–2016) and was a leading figure in the Conservative Party. He was present at the 2008 Corfu superyacht gathering hosted by Nathaniel Rothschild that included Oleg Deripaska and Peter Mandelson, generating a major political scandal. He was subsequently appointed Editor of the Evening Standard — owned by Evgeny Lebedev — a position he held from 2017 to 2020 while simultaneously holding multiple other paid roles.",
      evidence:"Corfu gathering presence documented (became a major UK press story). Evening Standard editorship documented. Mandelson and Deripaska presence at gathering confirmed.",
      link:"Shadow Chancellor. Deripaska's yacht. Mandelson. Then Editor of Lebedev's newspaper. The same people, the same money, the same boats."
    },

    // ── PAUL MANAFORT ──
    {id:"manafort", label:"Paul Manafort", type:"possibly", radius:16,
      agency:"TRUMP CAMPAIGN / UKRAINE",
      role:"Trump Campaign Chairman · Convicted · Deripaska Client",
      status:"CONVICTED — pardoned",
      intelRole:"Trump's campaign chairman who owed Oleg Deripaska approximately $19M and offered him 'private briefings' on the campaign during the 2016 election. Ran political consulting operations for pro-Russian political figures in Ukraine for over a decade. His financial relationship with Deripaska — a documented FSB-linked oligarch — while simultaneously chairing the US presidential campaign is the most explicit documented case of Russian financial influence at the top of a US presidential campaign.",
      epsteinLink:"Connected through Deripaska (Epstein network overlap) and Tom Barrack (named in Epstein files, Trump inaugural chair, UAE agent charges). Operated in the same nexus of Gulf money, Russian money, and Trump political infrastructure that intersects with the Epstein network at multiple points.",
      significance:"Manafort is the documented node connecting Russian intelligence money (Deripaska) to the Trump campaign at the chairman level. His conviction confirmed the financial relationship. His pardon by Trump removed the incentive to cooperate further. The full scope of what Deripaska received for his $19M has never been established.",
      desc:"Paul Manafort served as Donald Trump's campaign chairman from March to August 2016. He had previously run political consulting operations for Ukrainian President Viktor Yanukovych and other pro-Russian political figures for over a decade. He owed Oleg Deripaska approximately $19M and sent Deripaska a message offering 'private briefings' on the Trump campaign. He was convicted in 2018 on bank fraud and tax evasion charges and sentenced to 7.5 years. He was pardoned by Trump in May 2020.",
      evidence:"Campaign chairman role confirmed. $19M debt to Deripaska documented (Mueller probe). 'Private briefings' offer documented (Mueller probe exhibits). Ukrainian political consulting documented across decade. Convicted 2018. Pardoned 2020.",
      link:"He owed a Russian oligarch $19M. He ran Trump's campaign. He offered the oligarch private campaign briefings. He was convicted. He was pardoned. The $19M and what Deripaska got for it has never been fully accounted for."
    },

    // ── NATHAN ROTHSCHILD ──
    {id:"nat_rothschild", label:"Nat Rothschild", type:"possibly", radius:14,
      agency:"ATTICUS CAPITAL / ROTHSCHILD BANKING",
      role:"Rothschild Heir · Corfu Connection",
      status:"NAMED IN FILES",
      epsteinLink:"Hosted the 2008 Corfu gathering on Deripaska's superyacht that connected Peter Mandelson (Epstein island visitor), Oleg Deripaska (FSB-linked oligarch), and George Osborne (future Chancellor, later Lebedev newspaper editor). Named in Epstein contact files. His family connection — Lynn Forester de Rothschild is one of Maxwell's closest documented friends — places the Rothschild banking world at the intersection of multiple threads in the network.",
      significance:"The Corfu gathering he hosted connected British politics, Russian intelligence money, and the Maxwell social world in a single documented event. The gathering became a major UK political scandal — not because of what it revealed about intelligence penetration, but because of a relatively minor political donation controversy. The deeper significance was never examined.",
      desc:"Nathaniel Philip Rothschild is the heir to the Rothschild banking dynasty through his father Jacob Rothschild. He is a hedge fund manager and investor. He hosted the 2008 Corfu gathering aboard Oleg Deripaska's superyacht that brought together Peter Mandelson, Deripaska, and George Osborne — generating one of the biggest political scandals of the Gordon Brown era. He is named in Epstein's contact files. His family connection to Lynn Forester de Rothschild — one of Ghislaine Maxwell's closest friends — connects the Rothschild world to the Maxwell operation.",
      evidence:"Corfu gathering hosting documented. Named in Epstein contact files. Mandelson and Deripaska presence confirmed. Lynn Forester de Rothschild-Maxwell friendship documented.",
      link:"He hosted the boat where British politics met Russian oligarch money. Mandelson was there. Deripaska was there. Osborne was there. He is in the contact files. The gathering was scandalous for the wrong reasons."
    },

    // ── LYNNE FORESTER DE ROTHSCHILD ──
    {id:"lynn_rothschild", label:"Lynn Forester de Rothschild", type:"suspicious", radius:16,
      agency:"E.L. ROTHSCHILD / INCLUSIVE CAPITALISM",
      role:"Financier · Maxwell's Closest Friend · Clinton Circle",
      status:"NAMED IN FILES",
      epsteinLink:"One of Ghislaine Maxwell's closest and most documented personal friends. Introduced Maxwell to her future husband Sir Evelyn de Rothschild at the 1998 Bilderberg conference. Clinton wrote her a personal letter from his honeymoon — she is named in Epstein contact files and correspondence extensively. Her social world connects Rothschild banking, Maxwell's operation, the Clinton political network, and British elite society in a single person.",
      significance:"Lynn de Rothschild is the social connective tissue between the Maxwell trafficking operation and the highest levels of Western banking and political power. Her friendship with Maxwell was not casual — it was documented across years and events. The Rothschild name she carries connects the Maxwell social world to one of the most powerful banking dynasties in history.",
      desc:"Lynn Forester de Rothschild is an American-British financier who married Sir Evelyn de Rothschild in 1998, an introduction arranged by Ghislaine Maxwell at a Bilderberg meeting. She runs E.L. Rothschild and the Coalition for Inclusive Capitalism. She was one of Maxwell's closest personal friends, with the relationship documented across multiple years and social contexts. Bill Clinton wrote her a personal letter from his honeymoon. She appears extensively in Epstein's contact files and correspondence.",
      evidence:"Maxwell friendship documented across multiple sources. Bilderberg introduction by Maxwell documented. Clinton honeymoon letter documented. Named extensively in Epstein contact files and correspondence. Coalition for Inclusive Capitalism chairmanship.",
      link:"Maxwell introduced her to the Rothschilds. Clinton wrote from his honeymoon. She is in the files. The social infrastructure connecting Epstein's world to Western banking and political power runs directly through her."
    },

    // ── ALEXANDER ACOSTA already in list.js but SANDY BERGER missing ──
    {id:"sandy_berger", label:"Sandy Berger", type:"possibly", radius:14,
      agency:"US NATIONAL SECURITY COUNCIL",
      role:"National Security Adviser · Stole Classified Documents",
      status:"DECEASED (2015)",
      intelRole:"National Security Adviser to Bill Clinton (1997–2001). In 2005, pleaded guilty to deliberately removing and destroying classified documents from the National Archives — documents relating to the Clinton administration's handling of terrorism, taken during preparation for the 9/11 Commission hearings. The deliberate destruction of classified material by Clinton's NSA, combined with his appearance in Epstein's contact files, places him at the intersection of the Clinton administration and document suppression.",
      epsteinLink:"Named in Epstein contact files. Clinton's National Security Adviser during the peak Clinton-Epstein relationship period. His conviction for deliberately destroying classified documents establishes a pattern of document suppression consistent with the broader network's approach to accountability.",
      significance:"The National Security Adviser who destroyed classified documents is in Epstein's contact files. He committed federal crimes to control what the historical record showed about the Clinton administration's counterterrorism record. That same person appears in Epstein's contact files during the Clinton-Epstein peak years.",
      desc:"Samuel Richard 'Sandy' Berger served as National Security Adviser to President Clinton from 1997 to 2001. In 2005, he pleaded guilty to deliberately removing classified documents from the National Archives and destroying some of them — stuffing them in his socks and pants during multiple visits. The documents related to the Clinton administration's counterterrorism record and were removed during preparation for his 9/11 Commission testimony. He was fined $50,000, sentenced to community service, and had his security clearance revoked. He died in December 2015.",
      evidence:"Named in Epstein contact files. Guilty plea for stealing and destroying classified documents confirmed (2005). Fine and security clearance revocation confirmed. Clinton NSA during peak Epstein-Clinton period. Deceased 2015.",
      link:"Clinton's NSA stole and destroyed classified documents. He is in Epstein's contact files. The same man who controlled Clinton's national security record committed federal crimes to alter that record."
    },

    // ── JUDGE KENNETH MARRA ──
    {id:"judge_marra", label:"Judge Kenneth Marra", type:"possibly", radius:12,
      agency:"US DISTRICT COURT — SDFL",
      role:"Federal Judge · Ruled NPA Illegal",
      status:"ACCOUNTABILITY FIGURE",
      epsteinLink:"The federal judge who ruled in February 2019 that the 2008 Non-Prosecution Agreement violated the Crime Victims' Rights Act — because Epstein's victims were deliberately kept in the dark while the deal was negotiated. His ruling was the first judicial confirmation that the NPA was illegal. Despite ruling it illegal, no remedy was implemented before Epstein's death rendered the question moot.",
      significance:"Marra's ruling established officially and judicially what victims had argued for years: the NPA was a crime against them as well as a gift to Epstein. The ruling came eleven years after the NPA was signed. By the time it was issued, the mechanism to remedy it — reopening the federal case — was effectively blocked by Epstein's continued legal maneuvering, and then eliminated by his death.",
      desc:"Judge Kenneth A. Marra is a US District Judge for the Southern District of Florida. In February 2019, he ruled that the 2008 Non-Prosecution Agreement violated the Crime Victims' Rights Act because prosecutors had secretly negotiated it without informing Epstein's victims as the law required. He ordered prosecutors to consult with victims on next steps. The question became moot when Epstein was re-arrested by SDNY in July 2019 and died in August 2019.",
      evidence:"February 2019 ruling documented. Crime Victims' Rights Act violation finding confirmed. NPA found illegal in federal court. Ruling preceded Epstein's SDNY arrest by five months.",
      link:"He ruled the deal was illegal. Eleven years after it was signed. Five months before Epstein was re-arrested. Four months before Epstein died. The timing ensured the ruling never had a consequence."
    },

    // ── DONNA SHALALA ──
    {id:"shalala", label:"Donna Shalala", type:"possibly", radius:14,
      agency:"US DEPT OF HEALTH AND HUMAN SERVICES",
      role:"HHS Secretary · University President · Congresswoman",
      status:"NAMED IN FILES",
      epsteinLink:"Named in Epstein contact files. Served as Secretary of Health and Human Services under Clinton from 1993 to 2001 — the period of Epstein's peak operational expansion, and the same administration whose senior officials (Gore, Berger, Kerry, Mitchell) appear across the Epstein network.",
      significance:"The cabinet secretary responsible for federal child welfare policy is in the contact files of the country's most documented child sex trafficker, during the same administration whose president flew on Epstein's plane 26 times.",
      desc:"Donna Shalala served as Secretary of Health and Human Services under President Clinton from 1993 to 2001 — the longest-serving HHS Secretary in history. She later served as President of the University of Miami and as a US Representative from Florida (2019–2021). She is named in Epstein's contact files.",
      evidence:"Named in Epstein contact files. HHS Secretary 1993–2001 confirmed. Florida political career. Clinton administration overlap.",
      link:"The person responsible for federal child welfare policy is in the contact book of the man trafficking children during the same administration."
    },

    // ══════════════════════════════════════════
    // BATCH 2 — GOVERNMENT / ESTABLISHMENT
    // ══════════════════════════════════════════

    {id:"dennis_hastert", label:"Dennis Hastert", type:"suspicious", radius:20,
      agency:"US HOUSE OF REPRESENTATIVES",
      role:"Speaker of the House · Convicted Child Predator · Paid Hush Money",
      status:"CONVICTED — 15 months",
      intelRole:"The most senior US official ever convicted of a sex crime. Speaker of the House — third in line to the presidency — paid $3.5M in hush money to cover up decades of child sexual abuse as a wrestling coach. Simultaneously, as Speaker, he controlled the congressional agenda during Epstein's peak operational years and the Palm Beach investigation. No congressional investigation of Epstein was ever opened under his speakership.",
      epsteinLink:"As Speaker of the House (1999–2007), Hastert controlled the congressional agenda during Epstein's peak operational years. No congressional investigation of Epstein was ever opened. He was simultaneously paying hush money to cover his own child abuse. The man who could have called Epstein's network to account was himself a convicted child predator paying for silence.",
      significance:"The Speaker of the House — third in line to the presidency — was a convicted serial child predator paying hush money while simultaneously having authority to investigate Epstein and choosing not to. Protected predators protect each other. This is the system.",
      desc:"Dennis Hastert served as Speaker of the House from 1999 to 2007, one of the most powerful positions in American government. He was simultaneously paying $3.5 million in hush money to cover up decades of child sexual abuse he committed as a high school wrestling coach. Convicted in 2015 of bank structuring to hide the payments — the underlying abuse was past the statute of limitations. The judge called him a 'serial child molester.' He served 13 months. He died in 2023.",
      evidence:"Convicted 2015. $3.5M hush money payments confirmed. Judge's 'serial child molester' statement. Speaker of the House 1999–2007 — entire Epstein peak operation. No congressional Epstein investigation opened. Died 2023.",
      link:"The Speaker of the House was a convicted child predator. He had the power to investigate Epstein. He didn't. That is not a coincidence."
    },

    {id:"leon_brittan", label:"Leon Brittan", type:"possibly", radius:16,
      agency:"UK HOME OFFICE / CABINET",
      role:"Home Secretary · Abuse Allegations · Lost Dossier",
      status:"DECEASED (2015) — died before investigation",
      intelRole:"Home Secretary under Thatcher (1983–1985) with direct oversight of MI5 and the Metropolitan Police. A 114-page dossier of child abuse allegations was handed to him personally in 1984 — he claimed to pass it on. It was never found. Files relating to VIP abuse from the 1970s–80s were systematically lost by the Home Office. Multiple witnesses alleged direct abuse by Brittan. He died in January 2015, days after being told he would be interviewed under caution.",
      epsteinLink:"Operated in the same British establishment circles as Maxwell. The systematic destruction of VIP abuse files during his Home Office tenure is the UK institutional analog of the Epstein NPA — state protection of powerful abusers at the highest government level.",
      significance:"As Home Secretary he controlled MI5. The dossier was lost. The files were gone. He died before the interview. The pattern — powerful man, missing evidence, death before accountability — is identical to Epstein. The British state invented this playbook.",
      desc:"Leon Brittan served as Home Secretary and later as a European Commissioner. Multiple witnesses alleged child sexual abuse. A 114-page police dossier compiled in 1984 was handed to him and disappeared. He died January 2015, days after being informed he would be interviewed under caution by police.",
      evidence:"Home Secretary 1983–1985. 1984 dossier received and lost — confirmed. Multiple abuse witnesses. Operation Fairbank investigation. IICSA examination. Died before police interview.",
      link:"He got the dossier. He lost it. He died before the interview. The files were gone. The Home Secretary was the institution that was supposed to protect children."
    },

    {id:"cyril_smith", label:"Cyril Smith", type:"suspicious", radius:14,
      agency:"UK PARLIAMENT",
      role:"Liberal MP · Posthumously Confirmed Serial Abuser · MI5 Protected",
      status:"DECEASED (2010) — posthumously exposed",
      intelRole:"Liberal MP for Rochdale (1972–1992). A 144-page abuse dossier was compiled by Lancashire Police in 1970 and passed to the DPP — who declined to prosecute. MI5 is confirmed to have held files on Smith. Those files were used not to prosecute but to manage him as a controlled asset. He was knighted in 1988. He abused children for twenty more years after the dossier was filed.",
      epsteinLink:"Cyril Smith is the earliest documented UK case of intelligence using knowledge of establishment abuse as a control mechanism rather than for prosecution — the precise methodology the Epstein operation used at scale. MI5 had the evidence. They chose leverage over accountability.",
      significance:"MI5 knew. The DPP knew. He got a knighthood. He abused children for twenty more years. This is not the Epstein model importing American dysfunction into Britain. This is Britain inventing the model.",
      desc:"Cyril Smith was Liberal MP for Rochdale and one of British politics' most recognisable figures. A 1970 police file documenting his abuse was suppressed. MI5 held confirming files. He was knighted in 1988. After his death in 2010, full exposure confirmed he was a serial abuser of boys across multiple institutions over decades.",
      evidence:"144-page Lancashire Police dossier (1970). DPP decision not to prosecute. MI5 files confirmed by Intelligence and Security Committee. Knighted 1988. Posthumous exposure confirmed serial abuse.",
      link:"MI5 had the file. He got a knighthood. The file was leverage. That is Epstein's model, invented in Rochdale, twenty years earlier."
    },

    {id:"edward_heath", label:"Edward Heath", type:"possibly", radius:22,
      agency:"UK GOVERNMENT",
      role:"Prime Minister · Operation Conifer · Yacht Allegations",
      status:"DECEASED (2005) — Operation Conifer found sufficient evidence",
      intelRole:"Prime Minister 1970–1974. Subject of Operation Conifer (Wiltshire Police, 2015–2017), which concluded there was sufficient evidence to interview Heath under caution had he been alive. Multiple witnesses alleged abuse on his yacht Morning Cloud and at other locations. Special Branch protection officers reportedly received complaints that were not formally recorded.",
      epsteinLink:"Heath's yacht Morning Cloud was alleged as an abuse location — a private vessel beyond shore jurisdiction, directly parallel to Epstein's private island. Both used maritime isolation and jurisdictional complexity to protect abuse. Operation Conifer found the evidence. Heath was dead. The files are with the NCA.",
      significance:"A formal police investigation concluded a British Prime Minister would have been interviewed under caution for child abuse had he been alive. The yacht, the isolation, the dead witness, the sealed files — it is the Epstein pattern with a British accent.",
      desc:"Edward Heath served as Prime Minister 1970–1974. Operation Conifer concluded in 2017 with a finding that sufficient evidence existed to warrant interviewing Heath under caution. Allegations included abuse on his yacht Morning Cloud, connections to Jersey care homes, and suppressed Special Branch complaints. Files are held by the National Crime Agency.",
      evidence:"Operation Conifer (2015–2017). Conclusion: sufficient evidence to interview under caution. Multiple witnesses. Morning Cloud yacht allegations. Jersey care home connections. NCA file custody.",
      link:"A formal police investigation said there was enough to charge a Prime Minister. He was dead. The files are sealed. The yacht was his island."
    },

    {id:"john_podesta", label:"John Podesta", type:"possibly", radius:18,
      agency:"WHITE HOUSE / CLINTON FOUNDATION",
      role:"Clinton Chief of Staff · Obama Counsellor · 2016 Campaign Chair",
      status:"NAMED IN FILES",
      epsteinLink:"Named in Epstein contact files. Served as Clinton's Chief of Staff (1998–2001) — the period of peak Clinton-Epstein contact, including 26+ documented flights. The Chief of Staff controls the President's schedule and access. His presence in the files during this period is not incidental. His 2016 email archive referenced figures across the Epstein network.",
      desc:"John Podesta served as Chief of Staff to President Clinton from 1998 to 2001, then as Counsellor to President Obama, then as Chair of Hillary Clinton's 2016 presidential campaign. Named in Epstein contact files. His tenure as Chief of Staff coincides exactly with Clinton's documented Epstein flight period.",
      evidence:"Named in Epstein contact files. Clinton Chief of Staff 1998–2001. Clinton Epstein flight period overlap. 2016 WikiLeaks email archive.",
      link:"Clinton's gatekeeper is in Epstein's contact files during the years Clinton was on Epstein's plane."
    },

    {id:"lindsey_graham", label:"Lindsey Graham", type:"possibly", radius:18,
      agency:"US SENATE",
      role:"Senator · Senate Judiciary Committee",
      status:"NAMED IN FILES",
      epsteinLink:"Named in Epstein contact files. Senior member of the Senate Judiciary Committee — the committee with direct oversight over the DOJ and FBI. The committee that could have investigated Acosta's NPA, the FBI's decade of inaction, and Epstein's death in federal custody. It never did. Graham was there throughout.",
      desc:"Lindsey Graham has been a US Senator and senior Judiciary Committee member since 2003. Named in Epstein contact files. The Judiciary Committee — his committee — has jurisdiction over the DOJ and FBI and has never opened a formal investigation into the Epstein prosecution failures.",
      evidence:"Named in Epstein contact files. Senate Judiciary Committee membership. DOJ/FBI oversight jurisdiction. No Epstein investigation opened.",
      link:"On the committee that oversees the prosecutors who gave Epstein the deal. In the files. No investigation."
    },

    {id:"robert_hanssen", label:"Robert Hanssen", type:"suspicious", radius:16,
      agency:"FEDERAL BUREAU OF INVESTIGATION",
      role:"FBI Agent · Russian Spy · 22 Years Inside Counterintelligence",
      status:"CONVICTED — died in prison 2023",
      intelRole:"FBI counterintelligence agent who spied for Soviet and Russian intelligence from 1979 to 2001 — 22 years, the longest-running Russian penetration of US federal law enforcement in history. He worked inside the FBI's counterintelligence division while passing intelligence to Moscow. His operation ran simultaneously with Robert Maxwell's confirmed KGB work and the establishment of Epstein's network. The FBI that failed to detect Hanssen for 22 years is the same FBI that failed to act on Epstein evidence for a decade.",
      epsteinLink:"Hanssen's penetration of FBI counterintelligence means Russian intelligence had visibility into FBI surveillance operations during the period Maxwell was running as a KGB asset and Epstein was establishing his network. If Moscow knew what the FBI knew about Maxwell's operations, they knew the FBI was not a threat. Hanssen is the mechanism.",
      significance:"The FBI had a Russian spy inside counterintelligence for 22 years. Maxwell was a confirmed KGB asset. The FBI took no action on Epstein for a decade. All three facts are true simultaneously. The institutional failure is not random.",
      desc:"Robert Hanssen joined the FBI in 1976 and began spying for Soviet intelligence in 1979. He worked in counterintelligence — the division specifically responsible for detecting foreign spies — for 22 years while passing intelligence to Moscow. He revealed the identities of multiple US assets, most of whom were executed. Caught in 2001. Life sentence. Died in prison June 2023.",
      evidence:"Convicted 2001. Life sentence. 22-year FBI counterintelligence penetration confirmed. Multiple executed US assets. Operation ran 1979–2001. Died in prison June 2023.",
      link:"Russia had a spy inside FBI counterintelligence for 22 years. Maxwell worked for the KGB during the same period. The FBI never investigated Epstein. The overlap is not comfortable."
    },

    {id:"jonathan_pollard", label:"Jonathan Pollard", type:"suspicious", radius:14,
      agency:"US NAVY INTELLIGENCE",
      role:"Naval Intelligence Analyst · Mossad Asset · Largest US Intel Breach",
      status:"CONVICTED — released to Israel 2020",
      intelRole:"US Navy intelligence analyst who passed an estimated 800,000 classified documents to Israel 1984–1985 — one of the largest intelligence breaches in US history. Confirmed Mossad asset. His handler was Rafi Eitan. His operation ran simultaneously with Robert Maxwell's confirmed Mossad activities. Two parallel Mossad operations running against the United States simultaneously under the same intelligence service.",
      epsteinLink:"Pollard confirms the Mossad was running active deep-penetration espionage against the United States at the exact same time Maxwell was a confirmed Mossad asset allegedly recruiting Epstein. One operation collected documents. One collected people. Same service. Same period.",
      significance:"Mossad ran a spy inside US Navy intelligence. Mossad ran Maxwell. Maxwell ran Epstein. Three operations, one service, overlapping timelines. Israel's intelligence appetite for penetrating US institutions during this period is not theoretical. It is convicted.",
      desc:"Jonathan Pollard was a civilian US Navy intelligence analyst recruited by Israeli intelligence in 1984. He passed approximately 800,000 pages of classified documents to Israel. Convicted 1985. Sentenced to life. Released 2015 after 30 years. Emigrated to Israel 2020. His handler Rafi Eitan later became an Israeli government minister.",
      evidence:"Convicted 1985. 800,000 classified pages confirmed. Mossad handler Rafi Eitan confirmed. Released 2015. Emigrated to Israel 2020 — welcomed as hero.",
      link:"Mossad ran a spy inside the US Navy. Mossad ran Maxwell. The same service, the same period, the same target country."
    },

    {id:"rafi_eitan", label:"Rafi Eitan", type:"suspicious", radius:16,
      agency:"MOSSAD / LAKAM / ISRAELI GOVERNMENT",
      role:"Mossad Operations · Pollard Handler · Israeli Minister",
      status:"DECEASED (2019)",
      intelRole:"One of the most consequential operational figures in Mossad history. Captured Adolf Eichmann in Argentina. Headed LAKAM — Israeli scientific intelligence unit. Ran Jonathan Pollard inside US Navy intelligence. Later became an Israeli government minister. His career spans the entire intelligence infrastructure that produced Maxwell and the Epstein operation.",
      epsteinLink:"As handler of Pollard and head of LAKAM, Eitan ran Israeli intelligence operations that directly penetrated US institutions during the Maxwell-Epstein period. LAKAM's methodology — identifying and running assets inside US institutions — is structurally identical to what Ben-Menashe describes as the Maxwell-Epstein operation.",
      desc:"Rafi Eitan led the Mossad team that captured Eichmann in 1960. Headed LAKAM, Israel's scientific espionage unit. Ran Jonathan Pollard as a US Navy intelligence asset. Later served as minister in Ariel Sharon's government. Died March 2019, four months before Epstein's re-arrest.",
      evidence:"Eichmann capture confirmed. LAKAM directorship confirmed. Pollard handler confirmed. Israeli government minister confirmed. Died March 2019.",
      link:"He captured Eichmann. He ran a spy inside the US Navy. He served in the Israeli cabinet. He is the operational face of the intelligence infrastructure the network inhabited."
    },

    {id:"nahum_admoni", label:"Nahum Admoni", type:"possibly", radius:12,
      agency:"MOSSAD",
      role:"Mossad Director · Attended Maxwell's Funeral",
      status:"RETIRED",
      intelRole:"Director of Mossad from 1982 to 1989. Attended Robert Maxwell's state funeral in Israel in November 1991. The head of Mossad attending a private businessman's funeral is only explicable if that businessman was a valued Mossad asset. Admoni's attendance is the single most documented institutional confirmation of the Maxwell-Mossad relationship.",
      epsteinLink:"His presence at Maxwell's funeral is the primary institutional confirmation that Maxwell was a Mossad asset — the foundational connection of the entire Epstein intelligence thread.",
      desc:"Nahum Admoni served as Director of Mossad 1982–1989. He attended Robert Maxwell's Israeli state funeral in November 1991 alongside other senior Israeli intelligence figures, providing the clearest single confirmation that Maxwell's intelligence relationship with Israel was at the directorate level.",
      evidence:"Mossad Director 1982–1989. Maxwell funeral attendance documented. Funeral attended by heads of Mossad, Aman, and Shin Bet.",
      link:"The Director of Mossad came to the funeral. That is the confirmation. Everything else flows from it."
    },

    
    {id:"juan_carlos", label:"King Juan Carlos", type:"possibly", radius:24,
      agency:"KINGDOM OF SPAIN",
      role:"King of Spain · Fled to Abu Dhabi · Maxwell Circle",
      status:"EXILED — abdicated 2014, fled Spain 2020",
      intelRole:"King of Spain 1975–2014. Fled to Abu Dhabi in 2020 under investigation for receiving €100M in hidden commissions from Saudi Arabia for infrastructure contracts. Documented member of Ghislaine Maxwell's social circle. His self-exile to a Gulf monarchy — the same Gulf world that runs through Nader, Barrack, and MBS — is a convergence of the European royal thread and the Gulf intelligence thread in a single person.",
      epsteinLink:"Documented in Maxwell's social circle. Named in Epstein contact files. Fled to Abu Dhabi — a Gulf monarchy with documented Epstein network connections — during active corruption investigation. His Saudi commission payments connect European royalty to Gulf intelligence money.",
      significance:"A reigning monarch in Maxwell's social circle and Epstein's files who subsequently fled to a Gulf monarchy to avoid prosecution. The European royal thread and the Gulf money thread converge in one exiled king.",
      desc:"Juan Carlos I reigned as King of Spain from 1975 to 2014. Documented Maxwell social circle member. Named in Epstein contact files. In 2020, under investigation for €100M in hidden Saudi commissions, he fled Spain for Abu Dhabi. Spanish prosecutors subsequently closed the investigation citing royal immunity during his reign.",
      evidence:"Named in Epstein contact files. Maxwell social circle documented photographically. Abdicated 2014. Fled to Abu Dhabi 2020. €100M Saudi commission investigation. Prosecution closed on immunity grounds.",
      link:"In Maxwell's circle. In the files. Fled to a Gulf monarchy. The same Gulf money runs through his Saudi commissions and through Nader and Barrack. A king who ran away."
    },

    {id:"king_carl_xvi", label:"King Carl XVI Gustaf", type:"possibly", radius:16,
      agency:"KINGDOM OF SWEDEN",
      role:"King of Sweden · Named in Elite Sex Party Allegations",
      status:"NAMED IN FILES",
      epsteinLink:"Named in Epstein contact files. Allegations in a 2010 Swedish book described his presence at private sex parties organised through European elite circuits. His social world overlaps with Maxwell's European royal network. Eva Andersson-Dubin — the Swedish former model who dated Epstein and later allowed him access to her children — connects the Swedish royal world to the Epstein network directly.",
      desc:"Carl XVI Gustaf has been King of Sweden since 1973. Named in Epstein contact files. A 2010 Swedish book alleged his attendance at private sex parties through elite social circuits — allegations he denied. His social world overlaps with Maxwell's European royal network.",
      evidence:"Named in Epstein contact files. 2010 Swedish allegations (denied). Maxwell European royal circuit overlap. Eva Andersson-Dubin Swedish connection.",
      link:"Another European monarch in the contact files. The Maxwell European royal penetration was systematic — UK, Norway, Denmark, Spain, Monaco, Sweden."
    },

  ],

  links: [
// ── EVGENY LEBEDEV ──
    {source:"evgeny_lebedev", target:"andrew", strength:0.7},
    {source:"evgeny_lebedev", target:"maxwell_g", strength:0.4},
    {source:"evgeny_lebedev", target:"murdoch", strength:0.5},
    {source:"evgeny_lebedev", target:"blair", strength:0.5},
    {source:"evgeny_lebedev", target:"mandelson", strength:0.6},
    {source:"evgeny_lebedev", target:"lebedev", strength:0.9},
    {source:"evgeny_lebedev", target:"boris_johnson", strength:0.8},
    {source:"evgeny_lebedev", target:"deripaska", strength:0.4},
    {source:"evgeny_lebedev", target:"ferguson", strength:0.4},
    {source:"evgeny_lebedev", target:"osborne", strength:0.7},

    // ── RYBOLOVLEV ──
    {source:"rybolovlev", target:"trump", strength:0.6},
    {source:"rybolovlev", target:"epstein", strength:0.2},
    {source:"rybolovlev", target:"deripaska", strength:0.4},

    // ── BORIS JOHNSON ──
    {source:"boris_johnson", target:"evgeny_lebedev", strength:0.8},
    {source:"boris_johnson", target:"lebedev", strength:0.5},
    {source:"boris_johnson", target:"blair", strength:0.4},
    {source:"boris_johnson", target:"mandelson", strength:0.4},
    {source:"boris_johnson", target:"epstein", strength:0.2},

    // ── VIRGINIA GIUFFRE ──
    {source:"giuffre", target:"epstein", strength:0.9},
    {source:"giuffre", target:"maxwell_g", strength:0.9},
    {source:"giuffre", target:"andrew", strength:0.8},
    {source:"giuffre", target:"dershowitz", strength:0.7},
    {source:"giuffre", target:"mitchell", strength:0.6},
    {source:"giuffre", target:"richardson", strength:0.6},
    {source:"giuffre", target:"barak", strength:0.6},
    {source:"giuffre", target:"minsky", strength:0.5},
    {source:"giuffre", target:"dubin", strength:0.5},
    {source:"giuffre", target:"trump", strength:0.4},

    // ── OSBORNE ──
    {source:"osborne", target:"nat_rothschild", strength:0.6},
    {source:"osborne", target:"deripaska", strength:0.5},
    {source:"osborne", target:"mandelson", strength:0.6},
    {source:"osborne", target:"evgeny_lebedev", strength:0.7},

    // ── MANAFORT ──
    {source:"manafort", target:"deripaska", strength:0.8},
    {source:"manafort", target:"trump", strength:0.7},
    {source:"manafort", target:"barrack", strength:0.5},
    {source:"manafort", target:"nader", strength:0.4},

    // ── NAT ROTHSCHILD ──
    {source:"nat_rothschild", target:"deripaska", strength:0.7},
    {source:"nat_rothschild", target:"mandelson", strength:0.7},
    {source:"nat_rothschild", target:"osborne", strength:0.6},
    {source:"nat_rothschild", target:"lynn_rothschild", strength:0.6},
    {source:"nat_rothschild", target:"epstein", strength:0.3},

    // ── LYNN ROTHSCHILD ──
    {source:"lynn_rothschild", target:"maxwell_g", strength:0.8},
    {source:"lynn_rothschild", target:"epstein", strength:0.6},
    {source:"lynn_rothschild", target:"clinton", strength:0.6},
    {source:"lynn_rothschild", target:"nat_rothschild", strength:0.6},
    {source:"lynn_rothschild", target:"blair", strength:0.5},

    // ── SANDY BERGER ──
    {source:"sandy_berger", target:"clinton", strength:0.7},
    {source:"sandy_berger", target:"epstein", strength:0.3},
    {source:"sandy_berger", target:"kerry", strength:0.5},
    {source:"sandy_berger", target:"gore", strength:0.5},

    // ── JUDGE MARRA ──
    {source:"judge_marra", target:"epstein", strength:0.5},
    {source:"judge_marra", target:"acosta", strength:0.6},
    {source:"judge_marra", target:"berman", strength:0.5},

    // ── SHALALA ──
    {source:"shalala", target:"clinton", strength:0.6},
    {source:"shalala", target:"epstein", strength:0.3},
    {source:"shalala", target:"gore", strength:0.4},

    // ── GIUFFRE connections to judge ──
    {source:"giuffre", target:"judge_marra", strength:0.6},

    // ── BATCH 2 LINKS ──

    // Hastert
    {source:"dennis_hastert", target:"epstein", strength:0.4},
    {source:"dennis_hastert", target:"acosta", strength:0.4},
    {source:"dennis_hastert", target:"mueller", strength:0.4},
    {source:"dennis_hastert", target:"dershowitz", strength:0.3},

    // UK establishment
    {source:"leon_brittan", target:"epstein", strength:0.3},
    {source:"leon_brittan", target:"maxwell_g", strength:0.4},
    {source:"leon_brittan", target:"king_charles", strength:0.5},
    {source:"leon_brittan", target:"edward_heath", strength:0.6},
    {source:"leon_brittan", target:"cyril_smith", strength:0.5},
    {source:"cyril_smith", target:"leon_brittan", strength:0.5},
    {source:"cyril_smith", target:"edward_heath", strength:0.4},
    {source:"cyril_smith", target:"epstein", strength:0.2},
    {source:"edward_heath", target:"epstein", strength:0.3},
    {source:"edward_heath", target:"maxwell_g", strength:0.4},
    {source:"edward_heath", target:"leon_brittan", strength:0.6},
    {source:"edward_heath", target:"king_charles", strength:0.5},

    // US political
    {source:"john_podesta", target:"clinton", strength:0.8},
    {source:"john_podesta", target:"epstein", strength:0.4},
    {source:"john_podesta", target:"sandy_berger", strength:0.7},
    {source:"lindsey_graham", target:"epstein", strength:0.3},
    {source:"lindsey_graham", target:"acosta", strength:0.4},
    {source:"lindsey_graham", target:"mueller", strength:0.4},

    // Intelligence
    {source:"robert_hanssen", target:"epstein", strength:0.3},
    {source:"robert_hanssen", target:"robert_maxwell", strength:0.4},
    {source:"robert_hanssen", target:"putin", strength:0.5},
    {source:"robert_hanssen", target:"mueller", strength:0.5},
    {source:"robert_hanssen", target:"freeh", strength:0.5},
    {source:"jonathan_pollard", target:"epstein", strength:0.3},
    {source:"jonathan_pollard", target:"robert_maxwell", strength:0.5},
    {source:"jonathan_pollard", target:"netanyahu", strength:0.5},
    {source:"jonathan_pollard", target:"rafi_eitan", strength:0.9},
    {source:"jonathan_pollard", target:"barak", strength:0.4},
    {source:"rafi_eitan", target:"jonathan_pollard", strength:0.9},
    {source:"rafi_eitan", target:"netanyahu", strength:0.6},
    {source:"rafi_eitan", target:"barak", strength:0.6},
    {source:"rafi_eitan", target:"robert_maxwell", strength:0.5},
    {source:"rafi_eitan", target:"epstein", strength:0.3},
    {source:"rafi_eitan", target:"ben_menashe", strength:0.5},
    {source:"nahum_admoni", target:"robert_maxwell", strength:0.9},
    {source:"nahum_admoni", target:"maxwell_g", strength:0.5},
    {source:"nahum_admoni", target:"epstein", strength:0.3},
    {source:"nahum_admoni", target:"netanyahu", strength:0.5},
    {source:"nahum_admoni", target:"rafi_eitan", strength:0.6},

    // Royals
    {source:"juan_carlos", target:"epstein", strength:0.4},
    {source:"juan_carlos", target:"maxwell_g", strength:0.6},
    {source:"juan_carlos", target:"albert_monaco", strength:0.6},
    {source:"juan_carlos", target:"mbs", strength:0.5},
    {source:"juan_carlos", target:"king_charles", strength:0.5},
    {source:"juan_carlos", target:"andrew", strength:0.5},
    {source:"king_carl_xvi", target:"epstein", strength:0.3},
    {source:"king_carl_xvi", target:"maxwell_g", strength:0.4},
    {source:"king_carl_xvi", target:"mette_marit", strength:0.4},
    {source:"king_carl_xvi", target:"eva_dubin", strength:0.3},
  ]
};