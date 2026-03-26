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

    // ─── BILL BURNS ───────────────────────────────────────
    {
      id: "burns",
      label: "Bill Burns",
      type: "suspicious",
      radius: 18,
      agency: "CIA — Director (2021–2025)",
      role: "CIA Director during Epstein file suppression period",
      status: "RESIGNED 2025",
      desc: "William Joseph Burns served as CIA Director from March 2021 to January 2025. Career diplomat and intelligence official who led the agency during the period when the most significant Epstein-related disclosures occurred — the Maxwell trial (2021), the Virgin Islands lawsuit (2022–2023), and the partial document unsealing (2024) — yet the CIA produced no declassified assessment of the Epstein operation's intelligence dimensions despite overwhelming public evidence of multi-national intelligence involvement.",
      intelRole: "Burns inherited the CIA directorship at the exact moment the Epstein network's intelligence architecture was being exposed through civil litigation. As Director, he had access to whatever the CIA knew about Epstein's intelligence affiliations — including any files related to the Acosta statement ('belonged to intelligence'), the Mossad handler chain through the Maxwells, and the surveillance infrastructure at Epstein's properties. He produced no public disclosure. He initiated no known declassification review. He made no known referral to the DOJ based on CIA holdings. The agency's silence during the most active disclosure period in the case's history is itself an intelligence posture — it is the posture of an agency protecting its equities in the operation or protecting allied services whose equities are at stake.",
      epsteinLink: "No direct personal connection documented. Burns' relevance is institutional: he ran the CIA during the window when judicial proceedings, civil lawsuits, and congressional pressure created the maximum opportunity for intelligence community disclosure — and no disclosure occurred. The CIA has never confirmed or denied any relationship with Epstein. It has never responded to the Acosta statement. It has never addressed the documented Mossad handler chain. It has never explained why a confirmed intelligence asset (Robert Maxwell) and his daughter (Ghislaine Maxwell, convicted sex trafficker) operated freely in the United States for decades without CIA counterintelligence intervention. Burns' directorship is the period during which these questions were most publicly asked and most conspicuously unanswered.",
      significance: "Burns represents the institutional continuity of CIA silence across the Epstein case. Seven CIA directors span the operational period: Webster, Gates, Woolsey, Deutch, Tenet, Goss, Hayden, Panetta, Petraeus, Brennan, Pompeo, Haspel, Burns. Not one has ever made a public statement about the Epstein operation's intelligence dimensions. Burns — a diplomat by training, known for careful institutional management — maintained this silence during the period of maximum public scrutiny. His tenure demonstrates that CIA non-disclosure is not a failure of individual leadership but a consistent institutional policy sustained across administrations of both parties.",
      evidence: "CIA FOIA responses to Epstein-related requests have been minimal and heavily redacted. No CIA officer has testified before Congress about agency knowledge of the Epstein operation. Burns made no public statement about the intelligence dimensions of the case during his four-year tenure. The agency's Office of Inspector General has not published any review of CIA interactions with or knowledge of the Epstein network.",
      link: "The CIA Director who says nothing about a confirmed intelligence operation is making a statement. The statement is: this operation is still protected."
    },

    // ─── STEVE HOFFENBERG ─────────────────────────────────
    {
      id: "hoffenberg",
      label: "Steven Hoffenberg",
      type: "convicted",
      radius: 20,
      agency: "Towers Financial Corporation",
      role: "Epstein's first known business partner; convicted Ponzi scheme operator",
      status: "DECEASED — August 2022",
      networth: "Negative (post-conviction)",
      desc: "Steven Jude Hoffenberg was a New York financier who ran Towers Financial Corporation, a debt-collection firm that was in reality a $475 million Ponzi scheme — one of the largest in US history at the time of its collapse in 1993. Hoffenberg recruited Jeffrey Epstein as a consultant and partner in the late 1980s. The two worked together on a hostile takeover attempt of Pan American World Airways and on the New York Post acquisition bid. Hoffenberg was convicted in 1995 and sentenced to 20 years in federal prison. Epstein was never charged, never named as an unindicted co-conspirator, and was never called to testify — despite Hoffenberg's repeated, public, on-the-record statements that Epstein was his full partner in the fraud.",
      intelRole: "Hoffenberg is the Rosetta Stone for understanding Epstein's legal immunity. The Towers Financial fraud was a $475 million crime. Hoffenberg stated publicly and repeatedly — in interviews with journalists, in documentary appearances, and in written statements — that Epstein was his equal partner in designing and executing the scheme. He named Epstein specifically. He described Epstein's role in detail. He said Epstein helped structure the fraudulent financial instruments. Despite this, the DOJ did not charge Epstein. Did not depose him. Did not name him. Did not investigate him. A $475 million Ponzi scheme had two architects, and only one went to prison. The other became a billionaire. This is the earliest documented instance of the legal immunity that would define Epstein's entire career — and it predates the sex trafficking operation, suggesting that the intelligence protection was already in place by the late 1980s, consistent with the timeline of Robert Maxwell's recruitment of Epstein into Israeli intelligence operations.",
      epsteinLink: "Direct business partnership from approximately 1987 to 1993. Hoffenberg hired Epstein as a financial consultant at Towers Financial. Together they pursued the Pan Am takeover (which would have given them control of a major international airline with global route access — a significant intelligence asset) and the New York Post acquisition (which would have given them control of a major media outlet — another significant intelligence asset). When Towers collapsed, Hoffenberg took the full criminal liability. Epstein walked away with the financial knowledge, the contacts, and — critically — the demonstrated proof that he could commit a major federal crime and not be prosecuted. This proof of immunity is itself a recruitment tool: it signals to potential intelligence partners that Epstein is protected, which makes him a credible vehicle for operations that require legal cover.",
      significance: "Hoffenberg's case establishes three critical facts about the Epstein operation: (1) Epstein's legal immunity predates the sex trafficking — he was protected from prosecution for a $475M fraud in the early 1990s, meaning the intelligence cover was operational before the kompromat infrastructure was built. (2) The DOJ's willingness to ignore a named co-conspirator in a major federal fraud case demonstrates that the 2008 NPA was not an anomaly — it was a continuation of a pattern of prosecutorial protection that spans decades. (3) Hoffenberg's death in August 2022 — found dead in his Connecticut apartment at age 77, shortly after giving extensive interviews about Epstein's role in Towers Financial — adds another node to the pattern of key witnesses dying before full depositions could be taken. His death was ruled natural. No autopsy results have been made public.",
      evidence: "Towers Financial Corporation SEC filings and DOJ indictment (1993). Hoffenberg's federal conviction and 20-year sentence (1995). Multiple on-camera interviews in which Hoffenberg names Epstein as his partner (various, 2019–2022). Hoffenberg's written statement to the FBI detailing Epstein's role. Pan American Airways hostile takeover bid documentation. New York Post acquisition bid records. Hoffenberg found dead August 23, 2022, Derby, Connecticut.",
      link: "Hoffenberg did 18 years in federal prison for a crime he said Epstein helped him commit. Epstein did 13 months in a county jail with work release for raping children. The American justice system's priorities are documented in the sentencing disparity."
    },

    // ─── CHAIM HERZOG ─────────────────────────────────────
    {
      id: "chaim_herzog",
      label: "Chaim Herzog",
      type: "suspicious",
      radius: 18,
      agency: "ISRAELI MILITARY INTELLIGENCE / PRESIDENCY",
      role: "President of Israel · Former Aman Director · Robert Maxwell's Handler Chain",
      status: "DECEASED (1997)",
      intelRole: "Head of Aman (Israeli military intelligence) 1959–1962. President of Israel 1983–1993. Born in Belfast, educated in London and Cambridge, served in British Army intelligence during WWII before emigrating to Palestine. His dual British-Israeli intelligence career made him a natural bridge between MI6 and Mossad — the exact operational corridor the Maxwell family occupied. As President during the 1980s, he presided over the state during the peak of Robert Maxwell's usefulness to Israeli intelligence, the Pollard spy scandal, and the early period of Epstein's emergence as a financial figure in New York. He delivered Robert Maxwell's eulogy at his state funeral on the Mount of Olives in November 1991 — a funeral attended by heads of Mossad, Aman, and Shin Bet. A sitting President of Israel eulogising a newspaper publisher is only explicable if that publisher was a strategic intelligence asset.",
      epsteinLink:"Herzog's eulogy at Robert Maxwell's funeral is one of the most significant single pieces of evidence confirming Maxwell's intelligence status. The President of Israel does not eulogise private businessmen. He eulogises assets of the state. Herzog's presence and words at the funeral — alongside Nahum Admoni (Mossad director), heads of Aman and Shin Bet, and senior government officials — constitutes an institutional state acknowledgment of Maxwell's intelligence role. Maxwell's intelligence role is the foundation of the Epstein operation: Maxwell recruited Epstein, Maxwell's daughter Ghislaine ran the trafficking, and the entire operation functioned as an intelligence collection mechanism. Herzog's eulogy is the state seal on that chain.",
      significance: "A former military intelligence chief who became President eulogised Robert Maxwell with full state honours. That eulogy is the single clearest institutional confirmation that Maxwell was a state intelligence asset — not a businessman who happened to know people in government, but an asset whose loss warranted presidential mourning. Everything downstream — Ghislaine's role, Epstein's immunity, the surveillance infrastructure, the kompromat architecture — flows from the fact that the operation was state-sponsored. Herzog's eulogy is the proof.",
      desc: "Chaim Herzog (1918–1997) was born in Belfast, son of the Chief Rabbi of Ireland. Educated at Cambridge and Lincoln's Inn. Served in British Army intelligence during WWII, participating in the liberation of Bergen-Belsen. Emigrated to Palestine. Became head of Aman (military intelligence) 1959–1962. Served as Israel's Ambassador to the UN 1975–1978, where he famously tore up the 'Zionism is Racism' resolution. Elected President of Israel 1983, served until 1993. Delivered Robert Maxwell's eulogy at his state funeral on the Mount of Olives, November 1991. His son Isaac Herzog is the current President of Israel (2021–present).",
      evidence: "Aman directorship 1959–1962 confirmed. Israeli presidency 1983–1993 confirmed. British Army intelligence service WWII confirmed. Maxwell funeral eulogy November 1991 — documented, photographed, reported by multiple international outlets. Funeral attended by Nahum Admoni, heads of Aman and Shin Bet. Son Isaac Herzog currently President of Israel.",
      link: "The President of Israel eulogised him. The heads of Mossad, Aman, and Shin Bet attended the funeral. If Robert Maxwell was just a newspaper publisher, none of them would have been there. They were there because he was theirs. Herzog's eulogy said so."
    },

    // ─── YITZHAK SHAMIR ───────────────────────────────────
    {
      id: "yitzhak_shamir",
      label: "Yitzhak Shamir",
      type: "suspicious",
      radius: 20,
      agency: "MOSSAD / LEHI / ISRAELI GOVERNMENT",
      role: "Prime Minister of Israel · Former Mossad Operations Chief",
      status: "DECEASED (2012)",
      intelRole: "One of the most consequential intelligence figures in Israeli history before becoming Prime Minister. Leader of Lehi (the Stern Gang) during the British Mandate — an underground paramilitary organisation that carried out assassinations, including the 1944 murder of Lord Moyne (British Minister of State) and the 1948 assassination of UN mediator Count Folke Bernadotte. After Israeli independence, recruited directly into Mossad, where he served as head of the European operations department through the 1950s and early 1960s — running agents across Europe during the foundational period of Israeli intelligence. As Prime Minister (1983–1984, 1986–1992), he presided over the government during the peak of Robert Maxwell's intelligence activities, the Pollard affair fallout, and the critical period when Epstein was being established in New York. His government was in power when Maxwell was at maximum utility to Israeli intelligence and when the Epstein operation was being seeded.",
      epsteinLink: "Shamir's premiership overlaps precisely with the period when Robert Maxwell's intelligence utility was at its peak and when Epstein was transitioning from Hoffenberg's Towers Financial fraud into his own operation. As a former Mossad operations chief, Shamir understood agent-running at the operational level — he was not a politician who inherited an intelligence relationship, he was a spymaster who became a politician. His government authorised or permitted the intelligence activities that Maxwell conducted, including the alleged recruitment and deployment of Epstein. The Pollard affair (1985) — which exposed Israeli intelligence's willingness to run aggressive espionage operations against the United States — occurred under Shamir's watch. Maxwell's role in attempting to negotiate Pollard's release further confirms the Maxwell-Israeli intelligence nexus that Shamir's government managed.",
      significance: "Shamir is the missing link between Israel's founding-era intelligence culture and the modern operation that produced Epstein. Like other Israeli leadership figures, he attended Robert Maxwell's funeral. He personally transitioned from underground paramilitary assassination to Mossad operations to Prime Minister — carrying the operational mentality of covert action into the highest elected office. His premiership during the Maxwell peak period means the Israeli government's intelligence relationship with Maxwell — and by extension with the emerging Epstein operation — was managed by a man who had personally run agents, personally ordered operations, and personally understood the value of a kompromat network targeting Western elites. This was not a politician being briefed by intelligence. This was intelligence running the government.",
      desc: "Yitzhak Shamir (1915–2012) was born Yitzhak Yezernitsky in the Russian Empire (now Belarus). Emigrated to Palestine in 1935. Became a leader of Lehi (Stern Gang), the most radical of the pre-state paramilitary organisations. After independence, joined Mossad and headed European operations through the 1950s–60s. Entered politics. Served as Speaker of the Knesset, Foreign Minister, and twice as Prime Minister (1983–84 and 1986–92). His second premiership covered the period of maximum Robert Maxwell intelligence activity, the aftermath of the Pollard affair, and the establishment of Epstein's New York financial operation. He was known for extreme secrecy, minimal public statements, and absolute loyalty to the intelligence establishment that formed him.",
      evidence: "Lehi leadership confirmed — including responsibility for Bernadotte assassination (1948). Mossad European operations chief confirmed by multiple Israeli intelligence historians. Prime Minister 1983–1984, 1986–1992 confirmed. Premiership overlaps with Maxwell peak intelligence period (1980s), Pollard affair (1985), and Epstein's emergence (late 1980s). Maxwell's attempted Pollard negotiation documented. Shamir's Mossad career documented by Ronen Bergman, Ian Black, and Benny Morris.",
      link: "An assassin became a spy chief became a Prime Minister. He ran agents in Europe for Mossad. Then he ran the country while Maxwell ran agents in America. The operational culture that produced Epstein was not an aberration. It was the founding culture of the state, carried forward by a man who embodied it."
    },

    {
      id: "shabtai_shavit",
      label: "Shabtai Shavit",
      type: "suspicious",
      radius: 16,
      agency: "MOSSAD",
      role: "Mossad Director 1989–1996 · Maxwell Funeral Attendee · Private Intelligence",
      status: "RETIRED — active in private intelligence sector",
      intelRole: "Director of Mossad from 1989 to 1996 — the most operationally critical period for the Maxwell-Epstein timeline. He took over from Nahum Admoni in 1989, assumed directorship during Robert Maxwell's peak intelligence utility, was serving as Director when Maxwell died in November 1991, attended Maxwell's state funeral on the Mount of Olives, and continued as Director through the mid-1990s as Epstein was establishing his independent financial and social operation in New York. Shavit's directorship covers the exact period when the Epstein operation transitioned from Maxwell's direct management to its own autonomous structure. If the Epstein operation was a Mossad asset — as Ben-Menashe, Ostrovsky, and the circumstantial evidence indicate — then Shavit was the Director who managed that transition after Maxwell's death. He inherited the operation. He decided what happened to it. Under his watch, Ghislaine Maxwell moved to New York and became Epstein's partner. That is not a coincidence managed by junior officers. That is a directorate-level decision.",
      epsteinLink: "Shavit was Mossad Director during the most critical transition in the Epstein operation: the death of Robert Maxwell (November 1991) and the subsequent establishment of Ghislaine Maxwell as Epstein's operational partner in New York. Maxwell's death created an intelligence crisis — their primary asset was gone, and the network he managed was at risk of exposure. Someone at the directorate level made the decision to continue the operation through Ghislaine. That someone was the Mossad Director. Shavit's attendance at Maxwell's funeral — alongside Admoni, Herzog, Shamir, and the heads of Aman and Shin Bet — confirms his personal involvement in the Maxwell intelligence relationship. His subsequent career in private intelligence consulting, including work with firms connected to Israeli security exports, places him in the same post-service ecosystem as Ehud Barak's Carbyne911 and Black Cube's corporate intelligence operations.",
      significance: "Shavit is the Mossad Director who bridged the Maxwell era and the Epstein era. He attended Maxwell's funeral. He ran Mossad during the years Ghislaine moved to New York and embedded herself as Epstein's partner. He was the institutional authority who would have authorised, permitted, or managed the continuation of any Mossad operation that Maxwell had been running — including the kompromat collection programme that Ben-Menashe describes. Every other Director is either before (Admoni) or after (Halevy, Dagan) the critical transition window. Shavit is the one who was sitting in the chair when Maxwell died and Ghislaine took over.",
      desc: "Shabtai Shavit served as Director of Mossad from 1989 to 1996. Born in Israel in 1939. Rose through Mossad's operational ranks. Took over from Nahum Admoni. His directorship covered: Robert Maxwell's death (1991), the Maxwell state funeral, Ghislaine Maxwell's relocation to New York, Epstein's establishment of his independent financial operation, and the mid-1990s expansion of Epstein's social network. After leaving Mossad, he became active in private intelligence and security consulting, serving on boards of Israeli defence and intelligence firms. He has given public interviews defending Mossad's operational culture and has spoken about intelligence ethics — without ever addressing the Maxwell or Epstein matters.",
      evidence: "Mossad Director 1989–1996 confirmed. Maxwell funeral attendance documented (November 1991). Directorship covers entire Maxwell death → Ghislaine transition period. Post-service private intelligence career documented. Public interviews and speeches on intelligence matters — no Maxwell/Epstein commentary.",
      link: "He was Mossad Director when Maxwell died. He was Mossad Director when Ghislaine moved to New York. He was Mossad Director when Epstein's operation went independent. He attended the funeral. He has never said a word about any of it."
    },

    // ── JUAN CARLOS I ──
    {id:"juan_carlos", label:"Juan Carlos I", type:"possibly", radius:24,
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

    // ── KING CARL XVI GUSTAF ──
    {id:"king_carl_xvi", label:"King Carl XVI Gustaf", type:"possibly", radius:16,
      agency:"KINGDOM OF SWEDEN",
      role:"King of Sweden · Named in Elite Sex Party Allegations",
      status:"NAMED IN FILES",
      epsteinLink:"Named in Epstein contact files. Allegations in a 2010 Swedish book described his presence at private sex parties organised through European elite circuits. His social world overlaps with Maxwell's European royal network. Eva Andersson-Dubin — the Swedish former model who dated Epstein and later allowed him access to her children — connects the Swedish royal world to the Epstein network directly.",
      desc:"Carl XVI Gustaf has been King of Sweden since 1973. Named in Epstein contact files. A 2010 Swedish book alleged his attendance at private sex parties through elite social circuits — allegations he denied. His social world overlaps with Maxwell's European royal network.",
      evidence:"Named in Epstein contact files. 2010 Swedish allegations (denied). Maxwell European royal circuit overlap. Eva Andersson-Dubin Swedish connection.",
      link:"Another European monarch in the contact files. The Maxwell European royal penetration was systematic — UK, Norway, Denmark, Spain, Monaco, Sweden."
    },

    // ─── ARNON MILCHAN ────────────────────────────────────
    {
      id: "milchan",
      label: "Arnon Milchan",
      type: "suspicious",
      radius: 18,
      agency: "MOSSAD / LAKAM / HOLLYWOOD",
      role: "Hollywood Producer · Self-Confirmed Mossad Asset · Nuclear Procurement",
      status: "ACTIVE — Israeli citizen",
      networth: "~$4B",
      intelRole: "Self-confirmed Israeli intelligence operative. In a 2013 Israeli TV interview, Milchan publicly admitted he was recruited by LAKAM (the same unit Rafi Eitan ran) and spent years procuring nuclear triggers, krytrons, and other restricted technologies for Israel's clandestine nuclear weapons programme — committing serial violations of US export law. He also confirmed running covert operations and acting as an agent of influence in Hollywood and Washington. His handler was Benjamin Blumberg, head of LAKAM's technology division. He worked alongside Rafi Eitan and in the same operational ecosystem as Jonathan Pollard. Despite publicly admitting to decades of espionage against the United States on Israeli television, he was never charged by the DOJ.",
      epsteinLink: "Milchan operates in the same Israeli intelligence infrastructure as the Maxwell-Epstein operation. LAKAM — the unit that ran Pollard and recruited Milchan — is the same operational ecosystem that Ben-Menashe describes as the origin of the Epstein kompromat programme. Milchan's Hollywood position gave him access to the entertainment and media world that intersects with Epstein's social network. His close personal relationship with Netanyahu — which became central to Netanyahu's corruption trial (Case 1000: gifts of champagne and cigars) — connects the Milchan intelligence thread directly to the Israeli political leadership that managed the Maxwell relationship. Shimon Peres personally recruited Milchan. Netanyahu personally benefited from him. The same state that ran Maxwell ran Milchan.",
      significance: "Milchan is the proof that Israel ran long-term intelligence assets inside the United States who committed serious federal crimes — nuclear proliferation, export violations, espionage — and were never prosecuted. He admitted it on television. The DOJ did nothing. This is the same DOJ that gave Epstein the NPA. The same DOJ that never charged Epstein for the Towers Financial fraud. The pattern of non-prosecution for Israeli intelligence assets operating on US soil is not speculation. It is Milchan's public confession plus the DOJ's public silence.",
      desc: "Arnon Milchan is an Israeli billionaire and Hollywood producer (Pretty Woman, Fight Club, JFK, L.A. Confidential, 12 Years a Slave, The Revenant, Bohemian Rhapsody). Born in Israel in 1944. Recruited by LAKAM in the 1960s. Spent decades procuring restricted nuclear technology for Israel while building a Hollywood career. Publicly confirmed his intelligence role on Israeli TV in 2013. Central figure in Netanyahu's corruption trial (Case 1000) for providing gifts worth hundreds of thousands of dollars. Close to Shimon Peres, who recruited him, and Netanyahu, who benefited from him. Never charged by the United States despite public admission of espionage.",
      evidence: "Self-confirmed Mossad/LAKAM asset on Israeli TV (2013 interview with Ilana Dayan). Nuclear procurement operations documented by Grant Smith (Institute for Research: Middle Eastern Policy). Krytron export violations documented. Netanyahu Case 1000 — gifts confirmed, trial ongoing. Peres recruitment confirmed in Milchan's own statements. Hollywood career and filmography confirmed. Never charged by US DOJ.",
      link: "He admitted on television that he was an Israeli spy who stole nuclear technology from America for decades. The DOJ never charged him. The same DOJ gave Epstein the deal. The pattern is not subtle."
    },

    // ─── JIMMY SAVILE ────────────────────────────────────
    {id:"savile", label:"Jimmy Savile", type:"suspicious", radius:20,
      agency:"BBC / NHS / UK GOVERNMENT",
      role:"Serial Predator · BBC Presenter · NHS Volunteer · Royal Access · MI5 Protected",
      status:"DECEASED (2011) — POSTHUMOUSLY EXPOSED",
      networth:"~$10M",
      desc:"Sir James Wilson Vincent Savile OBE KCSG (1926–2011) was a BBC television presenter, DJ, and charity fundraiser who, after his death, was revealed to be one of Britain's most prolific sexual predators in recorded history. Operation Yewtree identified over 450 victims, ranging in age from 5 to 75, spanning five decades from the 1950s to 2009. He assaulted victims at BBC studios, NHS hospitals (including Broadmoor, Stoke Mandeville, and Leeds General Infirmary), children's homes, and his own residences. He was given keys to Broadmoor psychiatric hospital and Leeds General Infirmary — institutional access to the most vulnerable people in the country. He was knighted in 1990. He received a papal knighthood. He was a close friend of Prince Charles and a regular guest at royal residences. Multiple police forces received complaints about him during his lifetime — none resulted in prosecution. MI5 held files on him. The institutional cover was total.",
      intelRole:"Savile represents the UK domestic parallel to the Epstein operation. Both men used philanthropy and celebrity as cover for industrial-scale sexual abuse. Both had institutional protection — Savile from the BBC, NHS, police, and MI5; Epstein from the DOJ, FBI, and intelligence services. Both had access to heads of state (Savile to Thatcher, Charles, and the Royal Family; Epstein to Clinton, Trump, and multiple world leaders). Both operated for decades in plain sight. The key difference: Savile was exposed only after death. Epstein was arrested, and the institutional cover operation became visible. MI5 held files on Savile's abuse and did not act — the same pattern as the FBI's handling of Epstein. The UK establishment's failure to stop Savile is the template for understanding how Epstein operated with impunity.",
      epsteinLink:"No direct documented link to Epstein. The connection is structural and methodological: both men operated the same model — celebrity philanthropist cover, institutional access, elite social networks, intelligence agency awareness without intervention, decades of abuse in plain sight. Savile's operation within UK institutions (BBC, NHS, royal household) mirrors Epstein's operation within US institutions (finance, academia, government). Both networks overlapped with Prince Andrew. The UK institutional failures that protected Savile are the same institutional failures that protected the UK side of the Epstein network — Leon Brittan lost the Westminster dossier, Cyril Smith was protected by MI5, Edward Heath had Operation Conifer findings. It is the same system.",
      significance:"450+ victims. Five decades. Every institution in Britain — the BBC, the NHS, the police, the intelligence services, the monarchy — knew or should have known, and none of them stopped him. Savile proves that the Epstein model is not an anomaly. It is a pattern. Powerful men who abuse children are protected by institutions that value their own reputation over the safety of children. Every time. In every country. The only variable is whether they die before the cover breaks.",
      evidence:"Operation Yewtree: 450+ identified victims (2012–2013). Dame Janet Smith Review (BBC): institutional failures documented across decades. NHS investigations at Broadmoor, Stoke Mandeville, Leeds General Infirmary. Metropolitan Police: multiple complaints received during lifetime, none prosecuted. MI5 files confirmed. Knighted 1990. Papal knighthood KCSG. Regular guest at Chequers (Thatcher) and Highgrove/Clarence House (Prince Charles). BBC filmed at locations where abuse occurred. Died 29 October 2011 — exposure began within 12 months.",
      link:"Four hundred and fifty victims. Every institution in Britain protected him. He died in his bed, with his knighthood, and his papal honour, and his keys to the hospital. They gave him keys to the hospital."
    },

    // ── BRANSON ──
    {id:"branson", label:"Richard Branson", type:"suspicious", radius:16,
      agency:"VIRGIN GROUP",
      role:"Billionaire · Necker Island · Flight Logs · Named in Files",
      status:"NAMED IN FILES",
      networth:"~$3B",
      desc:"Sir Richard Charles Nicholas Branson is the founder of the Virgin Group. Epstein visited Branson's private Caribbean island, Necker Island, and Branson is named in Epstein's contact files. Flight logs document travel connections. Branson's ownership of a private Caribbean island — used for elite social gatherings — mirrors the operational model Epstein used with Little St. James. Multiple Epstein-connected figures visited Necker Island across the operational period.",
      intelRole:"Branson's private island in the British Virgin Islands provided another node in the Caribbean private island infrastructure that the Epstein network used. The BVI's offshore financial architecture — minimal regulation, opaque corporate structures, British Crown jurisdiction — is the same legal environment that sheltered Epstein's financial operations. Branson's social network overlaps extensively with Epstein's at the billionaire philanthropist level.",
      epsteinLink:"Epstein visited Necker Island. Branson is named in Epstein's contact files. Flight log connections documented. His Caribbean island is in the same island chain as Epstein's Little St. James — the British and US Virgin Islands share waters and social infrastructure. Multiple figures from the Epstein network visited Necker across the years of the operation.",
      significance:"Another billionaire with a private Caribbean island in the contact files. The private island model — isolation, jurisdiction shopping, controlled access, no witnesses — was not unique to Epstein. It was a methodology shared across the network.",
      evidence:"Named in Epstein contact files. Epstein Necker Island visit documented. Flight log connections. BVI private island ownership. Multiple Epstein network figures visited Necker.",
      link:"Two billionaires. Two private islands. Same island chain. Same contact files. Same guests."
    },

    // ─── JACK LANG ───────────────────────────────────────
    {
      id: "jack_lang",
      label: "Jack Lang",
      type: "suspicious",
      radius: 16,
      agency: "FRENCH GOVERNMENT",
      role: "Minister of Culture · Minister of Education · Named in Files",
      status: "NAMED IN FILES",
      desc: "Jack Lang served as France's Minister of Culture (1981–1986, 1988–1993) and Minister of Education (1992–1993, 2000–2002) under President Mitterrand and Prime Minister Jospin. He is named in Epstein's contact files. He was one of the most powerful cultural figures in France during the period when Jean-Luc Brunel was operating his modelling agencies as a trafficking pipeline from Paris to New York. Lang's Ministry of Culture had oversight of the fashion and modelling industry that Brunel exploited. He was photographed with Epstein in Paris. His social world overlapped extensively with the French cultural elite that provided Brunel's operation with social legitimacy.",
      intelRole: "As Minister of Culture and later Minister of Education, Lang had institutional authority over two of the sectors most exploited by the Epstein-Brunel trafficking pipeline: the fashion/modelling industry and the education system. France's modelling industry — which Brunel used to recruit and traffic girls — operated under Lang's ministry. His appearance in Epstein's contact files during this period places the French government official responsible for cultural industry oversight in the contact book of the man whose operation exploited those industries.",
      epsteinLink: "Named in Epstein's contact files. Photographed with Epstein in Paris. His ministry had oversight of the French fashion and modelling industry during the peak of Brunel's trafficking operation. Lang's social world in Paris overlapped with Brunel's — the same parties, the same cultural institutions, the same elite circles that gave the trafficking pipeline its cover of legitimacy.",
      significance: "The French Minister of Culture — responsible for the fashion industry — is in the contact book of the man whose operation trafficked girls through the French fashion industry. Brunel operated under Lang's ministry. Lang is in Epstein's files. The institutional failure is not abstract — it has a name and a ministry.",
      evidence: "Named in Epstein contact files. Photographed with Epstein in Paris. Minister of Culture during Brunel's peak operational period. Minister of Education during operational period. French fashion/modelling industry under his ministry's oversight.",
      link: "The man responsible for France's fashion industry is in the files of the man who trafficked girls through France's fashion industry. The ministry that should have protected them was run by a man in the contact book."
    },

    // ─── ROLF HARRIS ─────────────────────────────────────
    {id:"rolf_harris", label:"Rolf Harris", type:"suspicious", radius:16,
      agency:"BBC / ENTERTAINMENT",
      role:"Entertainer · Convicted Yewtree · Indecent Assaults on Children",
      status:"CONVICTED (2014) — DECEASED (2023)",
      networth:"~$20M",
      desc:"Rolf Harris CBE (1930–2023) was an Australian-British entertainer, musician, and television presenter. In 2014, he was convicted under Operation Yewtree of 12 counts of indecent assault against four girls, the youngest aged 7 or 8, spanning from 1968 to 1986. He was sentenced to five years and nine months. He painted the Queen's portrait. He performed at the Queen's Diamond Jubilee concert. He had unrestricted access to children's television for decades. He was stripped of his CBE, his BAFTA fellowship, and his honours in Australia following conviction.",
      intelRole:"Harris operated within the same BBC institutional structure that protected Savile. His conviction under Operation Yewtree confirmed what the BBC's internal culture had enabled: predatory access to children through the machinery of children's entertainment. His case demonstrated that Savile was not an anomaly — the BBC's institutional failures were systemic.",
      epsteinLink:"No direct Epstein connection. Harris is part of the UK institutional abuse network that operated in parallel — the same BBC, the same era, the same institutional protection. The overlap is systemic: the institutions that failed to stop Harris are the same institutions that failed to stop Savile, and the same establishment that protected the Westminster paedophile network.",
      significance:"Convicted. Twelve counts. Children as young as 7. He painted the Queen. The institution that gave him access to children gave him access for decades after complaints were known.",
      evidence:"Convicted June 2014, Southwark Crown Court. 12 counts indecent assault. Operation Yewtree. Victims aged 7/8 to 19. Offences 1968–1986. Sentenced 5 years 9 months. Died 10 May 2023.",
      link:"He painted the Queen's portrait. He assaulted children for decades. The BBC gave him both platforms."
    },

    // ─── GARY GLITTER ────────────────────────────────────
    {id:"gary_glitter", label:"Gary Glitter", type:"suspicious", radius:16,
      agency:"ENTERTAINMENT / MUSIC INDUSTRY",
      role:"Pop Star · Serial Child Sex Offender · Multiple Convictions",
      status:"CONVICTED (1999, 2006, 2015)",
      networth:"~$0",
      desc:"Paul Francis Gadd (born 1944), known as Gary Glitter, is a convicted serial child sex offender. He was first convicted in 1999 for downloading thousands of images of child sexual abuse. In 2006, he was convicted in Vietnam of child sexual abuse against two girls aged 10 and 11, sentenced to three years. In 2015, under Operation Yewtree, he was convicted of one count of attempted rape of a girl under 10, four counts of indecent assault, and one count of sexual intercourse with a girl under 13 — offences committed between 1975 and 1980. He was sentenced to 16 years. Released February 2023 on licence, recalled to prison within weeks.",
      intelRole:"Glitter's pattern — convicted, released, reoffended internationally, convicted again — demonstrates the systemic failure to permanently incapacitate serial predators. His Vietnam conviction shows the international dimension: when UK institutions finally acted, predators moved to jurisdictions with weaker protections. The same pattern Brunel and Epstein used.",
      epsteinLink:"No direct Epstein connection. Part of the UK entertainment-industry abuse network exposed by Operation Yewtree. The same institutional culture that protected him protected Savile and Harris.",
      significance:"Three separate convictions across three decades. Downloaded child abuse material. Convicted in Vietnam. Convicted under Yewtree. Released. Recalled. The system had every warning and every opportunity.",
      evidence:"Convicted 1999: child abuse images. Convicted 2006 Vietnam: abuse of girls 10 and 11. Convicted 2015 Yewtree: attempted rape under 10, indecent assault, sex with child under 13. Sentenced 16 years. Released Feb 2023, recalled to prison.",
      link:"Three convictions. Three decades. Two countries. They kept letting him out."
    },

    // ─── MAX CLIFFORD ────────────────────────────────────
    {id:"max_clifford", label:"Max Clifford", type:"suspicious", radius:14,
      agency:"PR / MEDIA",
      role:"PR Mogul · Convicted Yewtree · Indecent Assault",
      status:"CONVICTED (2014) — DECEASED (2017)",
      networth:"~$10M",
      desc:"Max Clifford (1943–2017) was Britain's most powerful celebrity publicist. He represented some of the biggest names in entertainment and controlled media narratives for decades. In 2014, he was convicted under Operation Yewtree of eight counts of indecent assault against four women and girls aged 15 to 19, committed between 1977 and 1984. He was sentenced to eight years. He died in prison in December 2017. His role as a PR fixer meant he had intimate knowledge of celebrity misconduct — he both suppressed and weaponised scandal for profit. He claimed to have buried stories about other predators.",
      intelRole:"Clifford's role was uniquely dangerous: he was the suppression mechanism. As the most powerful celebrity PR in Britain, he controlled what stories reached the press and what stories were killed. He boasted of burying scandals. His conviction revealed that the man responsible for managing public narratives about celebrities was himself a predator — and that his knowledge of others' misconduct gave him leverage to continue operating.",
      epsteinLink:"No direct Epstein connection. Clifford operated the UK media suppression infrastructure — the same machinery that kept Savile's crimes out of the press for decades. His role as fixer-predator mirrors the dual function of figures in the Epstein network who both participated in and helped conceal abuse.",
      significance:"The man who buried celebrity scandals for a living was convicted of assault. He knew where the bodies were buried because he buried them. He died in prison knowing things that died with him.",
      evidence:"Convicted May 2014, Southwark Crown Court. 8 counts indecent assault. Victims aged 15–19. Offences 1977–1984. Sentenced 8 years. Died HMP Littlehey, 10 December 2017.",
      link:"He was the fixer. He buried the stories. He was one of them the whole time."
    },

    // ─── CHRIS DENNING ───────────────────────────────────
    {id:"chris_denning", label:"Chris Denning", type:"suspicious", radius:14,
      agency:"BBC",
      role:"BBC DJ · Serial Child Sex Offender · Multiple Convictions",
      status:"CONVICTED (MULTIPLE) — IMPRISONED",
      networth:"~$0",
      desc:"Christopher Denning (born 1941) was a BBC Radio 1 DJ and one of the original presenters when the station launched in 1967. He is one of Britain's most prolific convicted paedophiles. He has been convicted of child sexual offences multiple times: in the UK (1974, 1985, 1996, 2014), in the Czech Republic (arrest), and in Slovakia. In 2014, under Operation Yewtree, he was convicted of 21 offences of indecent assault and four of inciting a child to commit an act of gross indecency, against 11 boys aged 8 to 14 between 1967 and 1985. He was sentenced to 13 years. He remains imprisoned.",
      intelRole:"Denning's case is the clearest demonstration that the BBC harboured multiple serial predators simultaneously. He was convicted in 1974 — twenty years before Yewtree. He was convicted again in 1985. Again in 1996. The BBC's institutional response to each conviction was silence. He continued to have industry connections. The institution that employed him when he began offending never publicly acknowledged the pattern until Yewtree forced it.",
      epsteinLink:"No direct Epstein connection. Part of the BBC institutional abuse network. Active simultaneously with Savile. The BBC employed both of them at the same time, in the same building, with the same access to children.",
      significance:"Convicted in 1974. 1985. 1996. 2014. Four decades of convictions. The BBC employed him. The system convicted him and let him continue. He is still in prison.",
      evidence:"Convicted 1974, 1985, 1996 UK. Convicted 2014 Yewtree: 21 counts indecent assault, 4 counts inciting gross indecency. 11 victims aged 8–14. Offences 1967–1985. Sentenced 13 years. Currently imprisoned.",
      link:"Four convictions across four decades. The BBC hired him. The courts convicted him. Nobody stopped him."
    },

    // ─── PETER RIGHTON ────────────────────────────────────
    {id:"peter_righton", label:"Peter Righton", type:"suspicious", radius:16,
      agency:"UK GOVERNMENT / SOCIAL WORK",
      role:"Government Adviser · Child Protection Expert · International Trafficking Network",
      status:"CONVICTED (1992) — DECEASED (2007)",
      networth:"~$0",
      desc:"Peter Righton (1926–2007) was a senior social worker and government adviser on residential childcare. He was a consultant to the National Children's Bureau and lectured at the National Institute for Social Work. He was the UK government's expert on children's homes. In 1992, he was convicted of importing child pornography. Police who raided his home found correspondence linking him to an international paedophile network that included figures in children's homes, schools, and institutions across the UK and Europe. His personal papers — seized by police and later examined by journalists — contained letters discussing the procurement and sharing of children between abusers in positions of institutional authority.",
      intelRole:"Righton represents the most dangerous category of predator: one placed at the centre of child protection policy. He advised the government on how children's homes should operate — while running a network that exploited children in those same homes. His papers revealed the structure: institutional abusers in positions of authority, sharing access to children across organisations and borders. This is the infrastructure that the Westminster paedophile dossier was attempting to document before it was lost.",
      epsteinLink:"No direct Epstein connection. Righton operated the UK domestic institutional trafficking infrastructure — children's homes as procurement sites. His network overlaps with the allegations in the Waterhouse Inquiry (North Wales), the Grafton Close investigations, and the broader Westminster paedophile network. The methodology is identical to Epstein's: institutional access, controlled environments, networked abuse.",
      significance:"The government's own expert on protecting children in care was running a network that trafficked them. His papers proved the network existed. The full investigation was never completed.",
      evidence:"Convicted 1992: importing child pornography. Police seizure of correspondence documenting international paedophile network. Papers examined by Channel 4 Dispatches and investigative journalists. Links to children's homes network. Government adviser on residential childcare. National Children's Bureau consultant. Died 2007.",
      link:"They asked him how to protect the children. He was trafficking them. His papers proved the network. Nobody followed the trail to the end."
    },

    // ─── SIDNEY COOKE ────────────────────────────────────
    {id:"sidney_cooke", label:"Sidney Cooke", type:"suspicious", radius:16,
      agency:"CRIMINAL NETWORK",
      role:"Serial Child Rapist · Convicted Murderer · Supplier to VIP Abuse Networks",
      status:"CONVICTED — IMPRISONED (LIFE)",
      networth:"~$0",
      desc:"Sidney Cooke (born 1927) is a convicted serial child rapist and the ringleader of a paedophile gang responsible for the kidnap, rape, and murder of Jason Swift, aged 14, in 1985. He was convicted of Swift's manslaughter in 1989. He was released in 1998 despite public outcry, then re-arrested and convicted of further child sex offences in 1999, receiving two life sentences. Multiple witnesses and investigators have alleged that Cooke supplied children to organised abuse parties attended by prominent individuals. These allegations were investigated under Operation Fairbank and Operation Midland but were never fully resolved.",
      intelRole:"Cooke represents the supply side of organised VIP abuse. Multiple sources — including former police officers and social workers — have alleged that his network supplied children to parties where prominent figures were present. The allegation is not that Cooke moved in elite circles — he did not. The allegation is that his network provided children to those who did. This is the procurement infrastructure that connects street-level predators to institutional power.",
      epsteinLink:"No direct Epstein connection. Cooke's alleged role as a supplier of children to VIP abuse parties is the UK domestic equivalent of Epstein's trafficking operation — procurement infrastructure serving powerful clients. The methodology differs (Cooke targeted vulnerable street children; Epstein targeted teenagers through modelling and massage recruitment) but the structural function is identical: providing children to powerful men.",
      significance:"Convicted child rapist and murderer. Multiple allegations of supplying children to VIP parties. Two life sentences. The allegations about his network's VIP clients were never fully investigated.",
      evidence:"Convicted 1989: manslaughter of Jason Swift (14). Released 1998. Convicted 1999: multiple child sex offences. Two life sentences. Operation Fairbank/Midland investigated VIP supply allegations. Currently imprisoned.",
      link:"He supplied the children. The question of who he supplied them to was never fully answered."
    },

    // ─── TONY MCSWEENEY ──────────────────────────────────
    {id:"tony_mcsweeney", label:"Tony McSweeney", type:"suspicious", radius:12,
      agency:"CATHOLIC CHURCH",
      role:"Catholic Priest · Convicted · Grafton Close Children's Home",
      status:"CONVICTED (2014)",
      networth:"~$0",
      desc:"Father Tony McSweeney was a Catholic priest convicted in 2014 of making indecent images of children. He was linked to Grafton Close children's home in London, a Catholic-run home where systematic abuse occurred. His conviction was part of a broader investigation into abuse at Grafton Close, which also involved the home's manager John Stingemore. The home was operated by the Catholic Crusade of Rescue.",
      intelRole:"McSweeney's conviction connects the Catholic institutional abuse infrastructure to the children's home network. Grafton Close — a Catholic-run children's home — was a site where children in state care were abused by those entrusted with their protection. The Catholic Church's role in running children's homes placed it at the intersection of state childcare and institutional abuse.",
      epsteinLink:"No direct Epstein connection. Part of the UK institutional abuse network operating through children's homes. The Catholic Church's management of children's homes created the same conditions Epstein exploited: captive vulnerable populations controlled by authority figures with institutional protection.",
      significance:"A priest convicted of child abuse imagery, linked to a Catholic children's home where systematic abuse occurred. The institution that ran the home — the Catholic Church — had global form for exactly this.",
      evidence:"Convicted 2014: making indecent images of children. Linked to Grafton Close children's home investigation. Catholic Crusade of Rescue operated the home.",
      link:"The Church ran the home. The priest made the images. The children had nowhere to go."
    },

    // ─── JOHN STINGEMORE ─────────────────────────────────
    {id:"john_stingemore", label:"John Stingemore", type:"suspicious", radius:12,
      agency:"GRAFTON CLOSE CHILDREN'S HOME",
      role:"Home Manager · Died Before Trial · Systematic Abuse",
      status:"DECEASED — DIED BEFORE TRIAL",
      networth:"~$0",
      desc:"John Stingemore was the manager of Grafton Close children's home in London, run by the Catholic Crusade of Rescue. He was under investigation for the systematic sexual abuse of children in his care when he died before he could be brought to trial. Survivors described organised abuse at the home during his management. His death meant no criminal accountability for the institutional abuse that occurred under his authority.",
      intelRole:"Stingemore's death before trial follows the pattern that recurs throughout the UK institutional abuse investigations: key suspects dying before accountability. Leon Brittan died before interview under caution. Cyril Smith died before the full exposure. Savile died before any investigation. The pattern is so consistent it functions as a structural feature of the system rather than coincidence.",
      epsteinLink:"No direct Epstein connection. Part of the children's home abuse infrastructure. His death before trial mirrors the pattern of key Epstein network figures dying before full accountability — Epstein himself, Brunel, and multiple UK establishment figures.",
      significance:"Manager of a children's home where systematic abuse occurred. Died before trial. No accountability. The children he was responsible for protecting were the children who were abused.",
      evidence:"Manager of Grafton Close children's home. Under investigation for child sexual abuse. Died before trial. Linked to Tony McSweeney investigation. Catholic Crusade of Rescue operated the home.",
      link:"He ran the home. He died before trial. The children got nothing."
    },

    // ─── PETER HAYMAN ────────────────────────────────────
    {id:"peter_hayman", label:"Peter Hayman", type:"suspicious", radius:16,
      agency:"UK DIPLOMATIC SERVICE / PIE",
      role:"Senior Diplomat · Paedophile Information Exchange Member · Protected by Establishment",
      status:"DECEASED (1992) — PROTECTED DURING LIFETIME",
      networth:"~$0",
      desc:"Sir Peter Hayman KCMG CVO MBE (1914–1992) was a senior British diplomat who served as High Commissioner to Canada and held senior positions in the Foreign Office. In 1978, a package of child pornography was found on a London bus, traced to Hayman. He was a member of the Paedophile Information Exchange (PIE) — an organisation that openly campaigned for the legalisation of sex with children — under a false name. Despite the evidence, he was given a formal warning rather than prosecuted. His identity was protected by an injunction until Geoffrey Dickens MP named him under parliamentary privilege in 1983. The Attorney General at the time, Sir Michael Havers, had personally intervened to prevent prosecution.",
      intelRole:"Hayman's case is the clearest documented example of establishment protection of a paedophile. A senior diplomat — a knight, a High Commissioner — was caught with child pornography and was a member of an organisation campaigning to legalise child abuse. The Attorney General personally intervened to prevent prosecution. His identity was protected by court order. This is not alleged cover-up — it is documented, on the parliamentary record, protection of a predator by the machinery of the state.",
      epsteinLink:"No direct Epstein connection. Hayman's case demonstrates the UK establishment's documented willingness to protect paedophiles in positions of power — the same institutional culture that enabled the Epstein network's UK connections to operate without accountability. The Attorney General who protected Hayman occupied the same office that would later fail to pursue the Westminster paedophile dossier.",
      significance:"Caught with child pornography. Member of PIE. The Attorney General stopped the prosecution. A court order hid his identity. An MP had to use parliamentary privilege to name him. This is documented. This is on the record. The system protected him.",
      evidence:"1978: child pornography found on London bus, traced to Hayman. PIE membership confirmed under false name. Attorney General Sir Michael Havers intervened to prevent prosecution. Given formal warning only. Identity protected by injunction. Named by Geoffrey Dickens MP under parliamentary privilege 1983. KCMG, CVO, MBE — honours retained. Died 1992.",
      link:"They caught him on a bus with child pornography. The Attorney General said don't prosecute. They gave him a warning and a court order to hide his name. He kept his knighthood."
    },

    // ─── MAURICE OLDFIELD ────────────────────────────────
    {id:"maurice_oldfield", label:"Maurice Oldfield", type:"suspicious", radius:16,
      agency:"MI6 (SIS)",
      role:"Director of MI6 · Named in Operation Midland Allegations",
      status:"DECEASED (1981) — SECURITY CLEARANCE REVOKED POSTHUMOUSLY",
      networth:"~$0",
      desc:"Sir Maurice Oldfield GCMG CBE (1915–1981) was the Chief of the Secret Intelligence Service (MI6) from 1973 to 1978 — Britain's most senior intelligence officer. After his death, Margaret Thatcher confirmed in Parliament that his positive vetting (security clearance) had been revoked after he admitted to homosexual encounters — illegal at the time in the contexts involved. Subsequent allegations placed him at Kincora Boys' Home in Belfast, where systematic abuse of boys occurred. He was named in Operation Midland allegations regarding VIP abuse. His name has appeared in multiple investigations into establishment paedophilia, though he died before any could reach conclusion.",
      intelRole:"The Director of MI6 — the head of British foreign intelligence — with revoked security clearance and allegations linking him to a boys' home where systematic abuse occurred. Kincora was not just a site of abuse — it was alleged to be an intelligence-run entrapment operation, where boys were abused and the abuse was used to generate kompromat on political figures in Northern Ireland. If the allegations are true, the head of MI6 was compromised by the same methodology his own service allegedly operated.",
      epsteinLink:"No direct Epstein connection. The Kincora allegations represent the UK intelligence parallel to the Epstein honeytrap thesis: an institution deliberately facilitating abuse to generate compromising material on powerful figures. If MI6 ran Kincora as a kompromat operation — as multiple investigators have alleged — then the methodology is identical to what intelligence analysts believe Epstein's operation was designed to achieve.",
      significance:"The head of MI6 had his security clearance revoked after admitting compromising behaviour. He was linked to a boys' home alleged to be an intelligence-run entrapment operation. He died before any investigation could question him. The man responsible for protecting Britain's secrets may have been the most compromised person in the building.",
      evidence:"MI6 Chief 1973–1978. Security clearance revoked posthumously — confirmed by Thatcher in Parliament. Kincora Boys' Home allegations. Named in Operation Midland. GCMG, CBE. Died 11 March 1981.",
      link:"The head of MI6 had his clearance revoked. He was linked to a boys' home that may have been an intelligence operation. He died before anyone could ask him under oath."
    },

    // ─── MICHAEL HANLEY ──────────────────────────────────
    {id:"michael_hanley", label:"Michael Hanley", type:"suspicious", radius:14,
      agency:"MI5 (SECURITY SERVICE)",
      role:"Director General of MI5 · Named in Operation Midland Allegations",
      status:"DECEASED (2001)",
      networth:"~$0",
      desc:"Sir Michael Bowen Hanley KCB (1918–2001) was the Director General of MI5 from 1972 to 1978. He was named in Operation Midland allegations regarding VIP child abuse. The allegations placed senior intelligence figures at gatherings where children were abused. Hanley headed MI5 during the same period Maurice Oldfield headed MI6 — both intelligence chiefs named in the same cluster of allegations. He died in 2001, long before Operation Midland began.",
      intelRole:"The Director General of MI5 and the Chief of MI6, serving simultaneously, both named in the same cluster of VIP abuse allegations. If both heads of British intelligence were compromised, the question becomes: compromised by whom? The agencies they led were responsible for identifying exactly this kind of vulnerability in others. The possibility that both were compromised simultaneously suggests either catastrophic internal failure or deliberate external operation.",
      epsteinLink:"No direct Epstein connection. Named in the same Operation Midland allegations as Maurice Oldfield. The simultaneous compromise of MI5 and MI6 leadership — if the allegations are accurate — represents the ultimate intelligence failure: the two people responsible for protecting the state from exactly this kind of compromise were themselves compromised.",
      significance:"The head of MI5 and the head of MI6, at the same time, both named in VIP abuse allegations. Both died before any investigation. Both services held files on other abusers and chose not to act.",
      evidence:"Director General MI5 1972–1978. Named in Operation Midland allegations. Served simultaneously with Maurice Oldfield (MI6 Chief). KCB. Died 2001.",
      link:"MI5 and MI6. Both directors. Same period. Same allegations. Both dead before anyone asked."
    },

    // ─── PETER MORRISON ──────────────────────────────────
    {id:"peter_morrison", label:"Peter Morrison", type:"suspicious", radius:14,
      agency:"UK CONSERVATIVE PARTY / GOVERNMENT",
      role:"Deputy Chairman Conservative Party · Thatcher Aide · Welsh Children's Home Allegations",
      status:"DECEASED (1995)",
      networth:"~$0",
      desc:"Sir Peter Morrison (1944–1995) was a Conservative MP, Parliamentary Private Secretary to Margaret Thatcher, and deputy chairman of the Conservative Party. He was widely rumoured within Westminster to be involved in the sexual abuse of boys. Edwina Currie wrote in her published diaries that 'ichild abuse was alleged of Peter Morrison. The whips knew about it.' His name appeared in connection with investigations into abuse at children's homes in North Wales — the subject of the Waterhouse Inquiry. He died in 1995 of a heart attack, before the Waterhouse Inquiry published its findings.",
      intelRole:"Morrison's case demonstrates the whips' office function: the party apparatus knew about the allegations and used the knowledge for political management rather than child protection. Edwina Currie's diary entry confirms institutional knowledge. The Conservative whips' office maintained files on MPs' vulnerabilities — including sexual misconduct — as leverage for party discipline. Morrison's alleged abuse was known, documented internally, and used politically rather than reported to police.",
      epsteinLink:"No direct Epstein connection. Morrison is part of the Westminster paedophile network — the cluster of Conservative politicians and establishment figures alleged to have abused children, particularly through the children's home system. The whips' office knowledge-and-leverage model mirrors the intelligence kompromat model that analysts believe Epstein's operation served.",
      significance:"Thatcher's aide. The whips knew. Edwina Currie published it. Connected to North Wales children's homes. Died before the inquiry reported. The party used the knowledge as leverage instead of protecting the children.",
      evidence:"Conservative MP. PPS to Thatcher. Deputy chairman Conservative Party. Edwina Currie diary: whips knew of child abuse allegations. Linked to North Wales children's home investigations. Waterhouse Inquiry context. Died 1995.",
      link:"The whips knew. Edwina Currie wrote it down. He died before the inquiry. The party protected itself, not the children."
    },

    // ─── ANTHONY BLUNT ───────────────────────────────────
    {id:"anthony_blunt", label:"Anthony Blunt", type:"suspicious", radius:16,
      agency:"MI5 / SOVIET INTELLIGENCE / ROYAL HOUSEHOLD",
      role:"MI5 Officer · Confirmed Soviet Spy · Surveyor of the Queen's Pictures · Elm Guest House Allegations",
      status:"DECEASED (1983) — EXPOSED 1979",
      networth:"~$0",
      desc:"Anthony Frederick Blunt (1907–1983) was an art historian, MI5 officer during WWII, Surveyor of the Queen's Pictures, and a confirmed member of the Cambridge Five Soviet spy ring. He passed British and American intelligence secrets to the Soviet Union for decades. He was secretly granted immunity from prosecution in 1964 in exchange for his confession, and his treachery was only publicly revealed by Margaret Thatcher in 1979. He was stripped of his knighthood. Subsequent allegations placed him at the Elm Guest House in Barnes, London — a venue alleged to have been used for the organised sexual abuse of children, attended by prominent figures. He retained his position in the Royal Household for 15 years after MI5 knew he was a Soviet spy.",
      intelRole:"Blunt represents the intersection of every thread: Soviet intelligence penetration, royal household access, MI5 institutional protection, and alleged involvement in organised child abuse. He was a confirmed traitor who was granted immunity and allowed to remain in the Queen's household. If the Elm Guest House allegations are accurate, he was also a participant in organised child abuse — meaning the Queen's art adviser was simultaneously a Soviet spy and an alleged child abuser, and MI5 knew about the espionage and chose to protect him rather than expose either. The immunity deal that protected a traitor may also have protected a predator.",
      epsteinLink:"No direct Epstein connection. Blunt embodies the kompromat thesis in its purest form: a man compromised on multiple axes — espionage, sexuality (illegal at the time), and allegedly child abuse — who was protected by the state because exposure would damage the institution more than concealment. This is exactly the mechanism that analysts believe Epstein's operation was designed to exploit.",
      significance:"Soviet spy. MI5 officer. Queen's art adviser. Given immunity. Allegedly attended a venue where children were abused. Every institution that knew about him chose to protect itself rather than act. He kept his position in the Palace for fifteen years after they knew he was a traitor.",
      evidence:"Confirmed Cambridge Five member. MI5 officer WWII. Surveyor of the Queen's Pictures 1945–1972. Immunity granted 1964. Publicly exposed by Thatcher 1979. Knighthood stripped. Elm Guest House allegations — multiple witness accounts. Died 26 March 1983.",
      link:"Soviet spy. Queen's art adviser. MI5 knew and kept him in the Palace. If the Elm Guest House allegations are true, the immunity deal that protected a traitor also protected a child abuser. The system chose itself over the children. Every time."
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

    // Burns
    { source: "burns", target: "epstein", strength: 0.3 },
    { source: "burns", target: "brennan", strength: 0.4 },
    { source: "burns", target: "petraeus", strength: 0.4 },
    { source: "burns", target: "barr_w", strength: 0.3 },
    { source: "burns", target: "comey", strength: 0.3 },
    { source: "burns", target: "mueller", strength: 0.3 },

    // Hoffenberg
    { source: "hoffenberg", target: "epstein", strength: 0.9 },
    { source: "hoffenberg", target: "wexner", strength: 0.3 },
    { source: "hoffenberg", target: "black", strength: 0.3 },

    // Chaim Herzog
    { source: "chaim_herzog", target: "robert_maxwell", strength: 0.9 },
    { source: "chaim_herzog", target: "nahum_admoni", strength: 0.7 },
    { source: "chaim_herzog", target: "rafi_eitan", strength: 0.5 },
    { source: "chaim_herzog", target: "maxwell_g", strength: 0.4 },
    { source: "chaim_herzog", target: "epstein", strength: 0.3 },
    { source: "chaim_herzog", target: "netanyahu", strength: 0.5 },
    { source: "chaim_herzog", target: "peres", strength: 0.6 },
    { source: "chaim_herzog", target: "yitzhak_shamir", strength: 0.7 },
    { source: "chaim_herzog", target: "barak", strength: 0.4 },

    // Yitzhak Shamir
    { source: "yitzhak_shamir", target: "robert_maxwell", strength: 0.8 },
    { source: "yitzhak_shamir", target: "nahum_admoni", strength: 0.8 },
    { source: "yitzhak_shamir", target: "rafi_eitan", strength: 0.7 },
    { source: "yitzhak_shamir", target: "jonathan_pollard", strength: 0.5 },
    { source: "yitzhak_shamir", target: "chaim_herzog", strength: 0.7 },
    { source: "yitzhak_shamir", target: "peres", strength: 0.6 },
    { source: "yitzhak_shamir", target: "netanyahu", strength: 0.6 },
    { source: "yitzhak_shamir", target: "epstein", strength: 0.3 },
    { source: "yitzhak_shamir", target: "ben_menashe", strength: 0.5 },
    { source: "yitzhak_shamir", target: "milchan", strength: 0.4 },
    { source: "yitzhak_shamir", target: "barak", strength: 0.5 },

    // Milchan
    { source: "milchan", target: "netanyahu", strength: 0.8 },
    { source: "milchan", target: "peres", strength: 0.7 },
    { source: "milchan", target: "rafi_eitan", strength: 0.7 },
    { source: "milchan", target: "robert_maxwell", strength: 0.4 },
    { source: "milchan", target: "epstein", strength: 0.3 },
    { source: "milchan", target: "ben_menashe", strength: 0.4 },
    { source: "milchan", target: "jonathan_pollard", strength: 0.4 },
    { source: "milchan", target: "nahum_admoni", strength: 0.5 },

    // Shabtai Shavit
    { source: "shabtai_shavit", target: "robert_maxwell", strength: 0.8 },
    { source: "shabtai_shavit", target: "nahum_admoni", strength: 0.8 },
    { source: "shabtai_shavit", target: "maxwell_g", strength: 0.6 },
    { source: "shabtai_shavit", target: "epstein", strength: 0.4 },
    { source: "shabtai_shavit", target: "chaim_herzog", strength: 0.6 },
    { source: "shabtai_shavit", target: "yitzhak_shamir", strength: 0.6 },
    { source: "shabtai_shavit", target: "rafi_eitan", strength: 0.6 },
    { source: "shabtai_shavit", target: "barak", strength: 0.5 },
    { source: "shabtai_shavit", target: "netanyahu", strength: 0.5 },
    { source: "shabtai_shavit", target: "peres", strength: 0.5 },
    { source: "shabtai_shavit", target: "ben_menashe", strength: 0.4 },
    { source: "shabtai_shavit", target: "black_cube", strength: 0.4 },
    { source: "shabtai_shavit", target: "milchan", strength: 0.4 },

    { source: "savile", target: "andrew", strength: 0.5 },
    { source: "savile", target: "king_charles", strength: 0.6 },
    { source: "savile", target: "cyril_smith", strength: 0.5 },
    { source: "savile", target: "leon_brittan", strength: 0.4 },
    { source: "savile", target: "edward_heath", strength: 0.5 },
    { source: "savile", target: "murdoch", strength: 0.3 },
    { source: "savile", target: "blair", strength: 0.3 },

    // Rolf Harris
    { source: "rolf_harris", target: "savile", strength: 0.5 },
    { source: "rolf_harris", target: "chris_denning", strength: 0.3 },
    { source: "rolf_harris", target: "king_charles", strength: 0.3 },

    // Gary Glitter
    { source: "gary_glitter", target: "savile", strength: 0.5 },
    { source: "gary_glitter", target: "chris_denning", strength: 0.4 },
    { source: "gary_glitter", target: "max_clifford", strength: 0.3 },

    // Max Clifford
    { source: "max_clifford", target: "savile", strength: 0.4 },
    { source: "max_clifford", target: "murdoch", strength: 0.5 },
    { source: "max_clifford", target: "rolf_harris", strength: 0.3 },

    // Chris Denning
    { source: "chris_denning", target: "savile", strength: 0.6 },
    { source: "chris_denning", target: "gary_glitter", strength: 0.4 },

    // Peter Righton
    { source: "peter_righton", target: "john_stingemore", strength: 0.6 },
    { source: "peter_righton", target: "tony_mcsweeney", strength: 0.4 },
    { source: "peter_righton", target: "sidney_cooke", strength: 0.5 },
    { source: "peter_righton", target: "cyril_smith", strength: 0.4 },
    { source: "peter_righton", target: "peter_hayman", strength: 0.5 },

    // Sidney Cooke
    { source: "sidney_cooke", target: "peter_righton", strength: 0.5 },
    { source: "sidney_cooke", target: "cyril_smith", strength: 0.4 },
    { source: "sidney_cooke", target: "leon_brittan", strength: 0.3 },

    // Tony McSweeney
    { source: "tony_mcsweeney", target: "john_stingemore", strength: 0.7 },
    { source: "tony_mcsweeney", target: "peter_righton", strength: 0.4 },

    // John Stingemore
    { source: "john_stingemore", target: "tony_mcsweeney", strength: 0.7 },
    { source: "john_stingemore", target: "peter_righton", strength: 0.6 },

    // Peter Hayman
    { source: "peter_hayman", target: "cyril_smith", strength: 0.5 },
    { source: "peter_hayman", target: "leon_brittan", strength: 0.5 },
    { source: "peter_hayman", target: "peter_righton", strength: 0.5 },
    { source: "peter_hayman", target: "peter_morrison", strength: 0.4 },
    { source: "peter_hayman", target: "anthony_blunt", strength: 0.4 },

    // Maurice Oldfield
    { source: "maurice_oldfield", target: "michael_hanley", strength: 0.6 },
    { source: "maurice_oldfield", target: "edward_heath", strength: 0.5 },
    { source: "maurice_oldfield", target: "leon_brittan", strength: 0.4 },
    { source: "maurice_oldfield", target: "anthony_blunt", strength: 0.4 },

    // Michael Hanley
    { source: "michael_hanley", target: "maurice_oldfield", strength: 0.6 },
    { source: "michael_hanley", target: "cyril_smith", strength: 0.4 },
    { source: "michael_hanley", target: "leon_brittan", strength: 0.4 },

    // Peter Morrison
    { source: "peter_morrison", target: "edward_heath", strength: 0.5 },
    { source: "peter_morrison", target: "cyril_smith", strength: 0.5 },
    { source: "peter_morrison", target: "leon_brittan", strength: 0.5 },
    { source: "peter_morrison", target: "peter_hayman", strength: 0.4 },

    // Anthony Blunt
    { source: "anthony_blunt", target: "king_charles", strength: 0.5 },
    { source: "anthony_blunt", target: "maurice_oldfield", strength: 0.4 },
    { source: "anthony_blunt", target: "peter_hayman", strength: 0.4 },
    { source: "anthony_blunt", target: "andrew", strength: 0.3 },
    { source: "anthony_blunt", target: "leon_brittan", strength: 0.3 },

  ]
};