// Node types: "center", "convicted", "suspicious", "possibly"
// Single source of truth — index.html reads from this file

const graphData = {
    nodes: [
        // ═══════════════════════════════════════════════════════
        // CORE OPERATIONS RING
        // ═══════════════════════════════════════════════════════

        {id:"epstein",label:"Jeffrey Epstein",type:"center",radius:32,
            agency:"CENTRAL NODE",role:"Financier · Sex Trafficker · Intelligence Asset",status:"DECEASED — FOUND DEAD IN CELL",networth:"$577M (at death)",
            intelRole:"Convicted sex offender and suspected intelligence asset who ran a multi-decade sexual blackmail operation. Former US Attorney Alexander Acosta was told that Epstein 'belonged to intelligence' and to 'leave it alone.' Properties contained hidden cameras. His wealth had no traceable legitimate origin.",
            epsteinLink:"He is the center. Every node connects through documented visits, financial transfers, court filings, flight logs, or victim testimony.",
            significance:"Despite hundreds of victims and dozens of men named under oath, only Epstein and Maxwell were ever prosecuted. The 2008 Non-Prosecution Agreement immunized all co-conspirators by name. His death in federal custody — with broken cameras and sleeping guards — ensured he never testified.",
            desc:"Jeffrey Epstein was a college dropout hired at 20 to teach math at the elite Dalton School by OSS officer Donald Barr. He moved to Bear Stearns, then into private finance under the sole patronage of Les Wexner, who gave him power of attorney, a $77M Manhattan townhouse, and control of ~$1.4B in assets. He operated from properties in Manhattan, Palm Beach, New Mexico, Paris, and his private island (Little St. James, USVI). He cultivated relationships with heads of state, royalty, billionaires, intelligence officials, and scientists — offering access, funding, and underage girls. Victims numbered in the hundreds.",
            evidence:"Convicted 2008 Florida (secret NPA). Re-arrested July 2019 federal sex trafficking charges. Found dead Aug 10, 2019 MCC New York — ruled suicide, disputed by Dr. Michael Baden (findings consistent with homicidal strangulation). Hidden cameras in multiple properties. Black book with 1,500+ names. Flight logs documenting hundreds of passengers. $577M estate. Shell companies across multiple jurisdictions. Over 40 victims identified by FBI.",
            link:"Every investigation into Epstein was blocked, delayed, or neutered. The 2008 NPA was illegal under the Crime Victims' Rights Act. The SDNY case was terminated by his death. No client list has ever been released. His financial records remain sealed."},

        {id:"maxwell_g",label:"Ghislaine Maxwell",type:"center",radius:24,
            agency:"EPSTEIN ORGANIZATION / TERRAMAR PROJECT",role:"Co-Conspirator · Primary Recruiter · Convicted",status:"CONVICTED — 20yr sentence",
            intelRole:"Daughter of confirmed triple intelligence agent Robert Maxwell (Mossad/KGB/MI6). Primary operator of Epstein's recruitment and grooming pipeline. Convicted December 2021 on five federal counts including sex trafficking of a minor.",
            epsteinLink:"Epstein's most intimate partner and operational co-conspirator from approximately 1991 until his death. She recruited, groomed, and delivered victims. She maintained the social cover that gave Epstein access to elite circles.",
            significance:"The only person besides Epstein ever criminally charged. Her trial was notable for what was NOT allowed — the defense was barred from presenting an intelligence defense, and the client list was never entered into evidence. She has never named names.",
            desc:"Ghislaine Maxwell is the youngest daughter of Robert Maxwell, the media baron confirmed as a Mossad, KGB, and MI6 asset who died under mysterious circumstances in 1991. After her father's death and the collapse of his empire, she moved to New York and began her relationship with Epstein. She served as his social fixer, introducing him to Prince Andrew, Bill Clinton, and dozens of other powerful figures. Multiple victims testified she directly participated in abuse, recruited girls as young as 14, and trained victims in how to service Epstein and his associates.",
            evidence:"Convicted Dec 2021 on five federal counts. Victim testimony from Annie Farmer, Kate, Jane, Carolyn, and Virginia Giuffre. Photographs with victims. Flight logs showing hundreds of trips. Property records (Epstein purchased homes for her). TerraMar Project (ocean charity) used as cover. Found hiding in New Hampshire under alias.",
            link:"Maxwell is the firewall. She knows every name, every visit, every transaction. Her silence — maintained through conviction and sentencing — suggests either extraordinary loyalty or extraordinary leverage being applied."},

       {id:"kellen",label:"Sarah Kellen",type:"center",radius:22,
            agency:"EPSTEIN ORGANIZATION",role:"Executive Assistant · Scheduler · Named Co-Conspirator",status:"GRANTED IMMUNITY — never charged",
            intelRole:"Operational nerve center of the trafficking enterprise. Scheduled victims across four properties and two continents. Named federal co-conspirator. Granted full immunity. Has never spoken publicly or been deposed.",
            epsteinLink:"Managed Epstein's daily abuse schedule, maintained the black book, coordinated all flight manifests, and was physically present during abuse. Palm Beach PD identified her as the person who most frequently arranged underage girls' visits. Phone records showed hundreds of calls to victims, many minors.",
            significance:"The most important living witness who has never been compelled to testify. Her immunity ensured that the person with the most granular operational knowledge could never be forced to name Epstein's clients. The immunity didn't protect Kellen. It protected everyone she could name.",
            desc:"Sarah Kellen ran the schedule. For nearly a decade she called the girls, told them when to come, what to wear, which room. She did this across Manhattan, Palm Beach, New Mexico, and the island. Hundreds of calls to victims — many minors — confirmed by phone records.\n\nShe maintained the black book. She coordinated every flight. She was physically present during abuse. Multiple victims confirmed this under oath.\n\nThe US government named her a co-conspirator and gave her immunity in the same document. The 2008 NPA made her testimony legally unobtainable — no prosecutor could threaten her with prison, so no prosecutor could compel her to talk. Judge Marra ruled the NPA illegal in 2019. Nothing changed. No one revoked the immunity. No grand jury was convened.\n\nShe married NASCAR driver Brian Vickers in 2013. She now designs luxury apartments in Manhattan under the name Sarah Kellen Vickers.\n\nShe has never made a public statement. She has never been deposed. She could reconstruct the complete client list from memory — every name, every date, every property. That was her job. The immunity deal ensured she would never have to. That was its purpose.",
            evidence:"Named co-conspirator in 2008 NPA. Victim testimony from multiple women describing scheduling role (Palm Beach PD records, federal filings). Phone records: hundreds of calls to victims including minors. Black book custodian. Flight manifest coordinator. Physically present during abuse per victim statements. Immunity signed by Acosta's office. NPA ruled illegal by Judge Marra (2019). Never arrested, charged, deposed, or compelled to testify. Married Brian Vickers 2013. Operates SLK Interiors, New York.",
            link:"She scheduled children for rape. She kept the master list. She managed every flight. She was in the room. The government called her a co-conspirator and gave her immunity in the same document. She now designs luxury apartments in Manhattan. The immunity was ruled illegal. No one has revoked it. She has never been asked a single question."},

        {id:"marcinkova",label:"Nadia Marcinkova",type:"center",radius:14,
            agency:"EPSTEIN ORGANIZATION",role:"Trafficked Victim Turned Participant · Named Co-Conspirator",status:"GRANTED IMMUNITY",
            intelRole:"Originally trafficked from Eastern Europe as a teenager, allegedly 'purchased' by Epstein from her family. Transitioned from victim to participant in the abuse of other girls. Named co-conspirator granted immunity.",
            epsteinLink:"Brought into Epstein's orbit as a minor, reportedly purchased from her family in the former Yugoslavia. Victims testified she participated in their abuse at Epstein's direction.",
            significance:"Marcinkova represents the most disturbing aspect of the grooming pipeline — a trafficked child who was conditioned into becoming a perpetrator. Her immunity deal ensured this pattern was never fully investigated.",
            desc:"Nadia Marcinkova (now Nadia Marcinko) was brought to the United States from the former Yugoslavia as a teenager. Epstein reportedly told others he had 'purchased' her from her family. Multiple victims testified that Marcinkova was present during and participated in their abuse. She was named as a co-conspirator in federal documents but received immunity under the 2008 NPA. She subsequently obtained a pilot's license, became a licensed pilot, and changed her name. She has never publicly discussed her time with Epstein.",
            evidence:"Named co-conspirator in NPA. Multiple victim depositions describing her participation. Immigration records. Epstein's own statements about 'purchasing' her. Changed identity post-immunity. Currently operates as a pilot.",
            link:"Marcinkova's trajectory — from purchased child to immunized co-conspirator to free woman with a new identity — encapsulates how the system protected everyone except the victims."},

        {id:"groff",label:"Lesley Groff",type:"center",radius:14,
            agency:"EPSTEIN ORGANIZATION",role:"Executive Assistant · Logistics · Named Co-Conspirator",status:"GRANTED IMMUNITY",
            intelRole:"Managed all travel logistics, property coordination, and flight bookings for Epstein's operation across multiple continents. Named co-conspirator who had complete visibility into the movement of victims and associates.",
            epsteinLink:"Epstein's longest-serving assistant. Booked every flight on the Lolita Express, managed every property, coordinated every visit. She was the logistical infrastructure of the trafficking operation.",
            significance:"Groff is the person who could reconstruct the complete timeline — who went where, when, with whom. Her immunity ensures that reconstruction never happens through compelled testimony.",
            desc:"Lesley Groff served as Epstein's executive assistant for over two decades, managing the logistical infrastructure that enabled his trafficking operation. She booked flights on his Boeing 727 and Gulfstream, coordinated staff at his Manhattan townhouse, Palm Beach estate, New Mexico ranch, Paris apartment, and private island. She managed guest lists, travel arrangements, and property access. Victims described interacting with her as part of the scheduling apparatus.",
            evidence:"Named co-conspirator in 2008 NPA. Flight booking records across decades. Property management documents. Staff coordination records. Victim testimony. Immunity deal.",
            link:"Groff booked the flights. She knows every passenger on every trip to every property for twenty years. That information has never been compelled from her."},

        {id:"brunel",label:"Jean-Luc Brunel",type:"center",radius:16,
            agency:"MC2 MODEL MANAGEMENT",role:"Modeling Agent · European Recruiter · Charged",status:"DIED BEFORE TRIAL — found hanged in cell",
            intelRole:"French modeling agent who served as Epstein's primary European recruitment pipeline. Used the modeling industry to identify, recruit, and deliver young women and girls. MC2 Model Management was directly funded by Epstein.",
            epsteinLink:"Epstein bankrolled MC2 Model Management, which Brunel used to recruit models — many underage — from South America, Eastern Europe, and France. Brunel had his own apartment in Epstein's Manhattan townhouse. Flight logs show extensive travel together.",
            significance:"Brunel's death in a Paris prison cell — by hanging, before trial, with the same camera and guard failures as Epstein — is either an extraordinary coincidence or evidence that the pattern of silencing witnesses extends beyond US jurisdiction.",
            desc:"Jean-Luc Brunel was one of the most powerful modeling agents in the world, running MC2 Model Management with direct financial backing from Epstein. He was accused of using the modeling industry as a pipeline to recruit young women and girls for Epstein. Brunel had been accused of sexual assault by models since the 1980s. He was arrested in France in December 2020 on charges of rape of minors and sexual harassment. He was found hanged in his prison cell on February 19, 2022, before his trial could begin.",
            evidence:"MC2 funded by Epstein ($1M+ documented). Flight logs showing hundreds of shared trips. Victim testimony from Virginia Giuffre and others. French criminal charges. Multiple modeling industry complaints dating to 1980s. Apartment in Epstein's townhouse. Found dead in cell — same pattern as Epstein.",
            link:"Two key witnesses in the same case, in two different countries, both found hanged in their cells before they could testify. Both with surveillance failures. The statistical probability of this coincidence has never been formally assessed."},

        {id:"casablancas",label:"John Casablancas",type:"suspicious",radius:15,
            agency:"ELITE MODEL MANAGEMENT",role:"Modeling Mogul · Pipeline Architect",status:"DECEASED",
            intelRole:"Founder of Elite Model Management, the world's most powerful modeling agency. Documented history of sexual relationships with underage models. Close business partner of Jean-Luc Brunel. Together they built the modeling industry pipeline that fed victims into the Epstein network.",
            epsteinLink:"Business partner and close associate of Jean-Luc Brunel, who ran MC2 with Epstein's money. Casablancas and Brunel operated in the same modeling circles and shared the same pattern of targeting underage girls.",
            significance:"Casablancas represents the systemic use of the modeling industry as a trafficking pipeline — a pattern that predated Epstein and was industrialized by his funding of MC2.",
            desc:"John Casablancas founded Elite Model Management in 1972 and built it into the world's most powerful modeling agency. He had documented sexual relationships with models as young as 15. He was Jean-Luc Brunel's mentor and business partner. The modeling industry pipeline — using the promise of careers to recruit vulnerable young women from developing countries — became a core recruitment mechanism for Epstein's network. Casablancas died in 2013.",
            evidence:"Documented underage relationships including with Stephanie Seymour (age 16). Brunel business partnership. Elite Model Management complaints. Industry-wide pattern of exploitation.",
            link:"The modeling industry was not incidental to Epstein's operation — it was structural infrastructure. Casablancas and Brunel built the pipeline that Epstein funded and weaponized."},


        {id:"wexner", label:"Les Wexner", type:"suspicious", radius:22,
            agency:"L BRANDS / WEXNER FOUNDATION / MEGA GROUP",
            role:"Epstein's sole patron · Power of Attorney · Mega Group co-founder · Israeli intelligence pipeline",
            status:"NAMED IN FILES — never charged",
            networth:"~$4.8B",
            intelRole:"The single most important financial and institutional node connecting Epstein to Israeli intelligence infrastructure. Co-founded the Mega Group in 1991 with Charles Bronfman — an informal network of wealthy Jewish-American donors that functioned as a pro-Israel lobby with documented contacts with Israeli intelligence. The Mega Group inspired Birthright Israel and sought to influence US foreign policy in the Middle East. Wexner's foundation created the Wexner Israel Fellowship at Harvard's Kennedy School, which has trained over 280 senior Israeli public officials — generals, directors-general of government ministries, and top advisers to prime ministers. This is not philanthropy. This is a pipeline that places Israeli security-state officials inside America's most elite policy institution, funded by the same man who gave Epstein power of attorney over his entire financial life. Paid Ehud Barak — former Israeli PM, former head of Aman (military intelligence), and documented Epstein associate — over $2 million through the foundation for 'leadership studies.' Married Abigail Koppel in 1993, whose father Yehuda Koppel commanded a special-operations unit of the Haganah — the paramilitary force that became the IDF. His wife's family is literally rooted in the founding military infrastructure of the Israeli state.",
            epsteinLink:"Gave Jeffrey Epstein power of attorney — one of the most extreme legal instruments in existence — granting him total control over Wexner's financial affairs. Transferred a $77 million Manhattan townhouse (9 East 71st Street) to Epstein. New emails reported in 2025 showed Epstein played a far larger role in Wexner's pro-Israel philanthropy than the foundation had previously acknowledged — Epstein was named trustee of the Wexner philanthropic foundation and supervised operations for years, meaning Epstein had direct operational control over the institution that was training Israeli military and intelligence officials at Harvard. Between 2003 and 2018, the Wexners donated $128.4 million to Israeli and Jewish charitable causes — making them the third-largest donors to such causes in the US. Epstein's role in managing this money means a convicted sex trafficker was directing the flow of over $100 million into Israeli institutional infrastructure. Wexner later claimed Epstein 'misappropriated' his funds but never sued, never pressed charges, never sought recovery, and never explained why.",
            significance:"Wexner is the bridge between American wealth, Israeli state intelligence, and the Epstein operation. He gave Epstein power of attorney. He co-founded the Mega Group — a pro-Israel influence network with intelligence contacts. He funded a pipeline that placed 280+ Israeli security officials inside Harvard. He paid Ehud Barak $2M+ through the same foundation Epstein managed. He married into a Haganah special-operations family. His $128.4M in donations to Israeli causes were partially managed by a man who raped children. Every thread — money, intelligence, institutional access, political influence — runs through Wexner. He is not a peripheral figure who got conned. He is the infrastructure.",
            desc:"Leslie Herbert Wexner built L Brands (Victoria's Secret, Bath & Body Works, The Limited) into a retail empire. Co-founded the Mega Group with Charles Bronfman in 1991. Created the Wexner Israel Fellowship at Harvard Kennedy School, training 280+ senior Israeli officials. Donated $128.4M to Israeli and Jewish causes (2003–2018), third-largest US donor. Married Abigail Koppel — daughter of Haganah special-operations commander Yehuda Koppel — in 1993. Gave Epstein power of attorney and a $77M Manhattan townhouse. 2025 reporting revealed Epstein served as trustee of the Wexner Foundation and played a far larger role in pro-Israel philanthropy operations than previously disclosed. Paid Ehud Barak $2M+ for 'leadership studies.' In 2023, the foundation cut ties with Harvard over its response to October 7, stating its Israel Fellows felt 'abandoned.' Israeli National Security Minister Ben-Gvir ordered police to stop cooperating with the foundation in 2023, alleging ties to left-wing movements — though critics noted the real controversy was the Barak payments and Epstein overlap.",
            evidence:"Power of attorney to Epstein documented. $77M townhouse transfer documented (property records). Mega Group co-founding 1991 documented. Wexner Israel Fellowship — 280+ Israeli officials trained at Harvard confirmed. $128.4M in donations (2003–2018) confirmed by Drop Site News investigation. Epstein as foundation trustee confirmed (2025 reporting). Barak $2M+ payments confirmed. Abigail Koppel marriage 1993 confirmed. Yehuda Koppel Haganah special-operations command confirmed. Ben-Gvir police cooperation order 2023 confirmed. Harvard cut 2023 confirmed.",
            link:"He gave a college dropout power of attorney over his billions. He let that man run the foundation training Israeli generals at Harvard. He paid the former head of Israeli military intelligence $2M through the same foundation. He married into Haganah special ops. He never sued. He never pressed charges. He never explained. Because explaining would require saying out loud what the foundation actually was."
        },

        {id:"black",label:"Leon Black",type:"suspicious",radius:22,
            agency:"APOLLO GLOBAL MANAGEMENT",role:"Private Equity Billionaire · $158M in Fees",status:"STEPPED DOWN AS CEO",networth:"$14B",
            intelRole:"Paid Epstein $158 million in 'advisory fees' — a sum so extraordinary it defies any legitimate financial explanation. This was the single largest documented payment to Epstein from any individual. Stepped down as Apollo CEO after an independent review confirmed the payments.",
            epsteinLink:"$158M in fees paid to Epstein over approximately five years, primarily after Epstein's 2008 conviction. Black maintained the relationship was legitimate financial and tax advice. Independent review by Dechert LLP confirmed the payments but found 'no evidence' Black participated in criminal activity.",
            significance:"$158M is not an advisory fee. No financial advisor in history has commanded that rate. The Dechert review was commissioned by Apollo's board — the same board Black controlled. The question of what Black was actually paying for has never been independently investigated.",
            desc:"Leon Black co-founded Apollo Global Management, one of the world's largest private equity firms managing over $500B in assets. He paid Jeffrey Epstein approximately $158 million in advisory and tax planning fees, primarily between 2012 and 2017 — years after Epstein's conviction. The payments were structured through various entities and were not publicly disclosed until reported by the New York Times in 2019. An independent review by law firm Dechert LLP, commissioned by Apollo's board, confirmed the payment amount but found no evidence Black knew of or participated in Epstein's criminal activities. Black stepped down as Apollo CEO in March 2021 but remained as chairman before fully departing.",
            evidence:"$158M confirmed by Dechert LLP review. New York Times reporting. Apollo board investigation. Stepped down as CEO 2021. Estate planning and tax work cited as justification. Epstein visits to Apollo offices documented.",
            link:"You don't pay $158 million for tax advice. You pay $158 million for something you can't put on an invoice. Black has never been questioned under oath about what he received in exchange."},

         {id:"staley",label:"Jes Staley",type:"center",radius:24,
            agency:"JPMORGAN CHASE / BARCLAYS",role:"Senior Banker · Epstein's Primary Banking Relationship · Barclays CEO",status:"RESIGNED — FCA investigation",networth:"$120M",
            intelRole:"Human proof that the global banking system knowingly financed child sex trafficking. Maintained Epstein as a JPMorgan client through and after his conviction. ~1,200 emails. Prison visit. Yacht visit. 'Snow White' email never explained. When Staley left JPMorgan, the bank dropped Epstein immediately — one man kept the account alive.",
            epsteinLink:"~1,200 emails. Oversaw JPMorgan private banking during Epstein relationship (1998-2013). Overrode compliance flags. Prison visit. Yacht visit. 'Snow White' email. Account exited only when Staley departed. Later CEO of Barclays; resigned after FCA found he misrepresented the relationship.",
            significance:"$365M in JPMorgan settlements confirms the bank knew. 1,200 emails is not a banking relationship. 'Snow White' has never been decoded. The full email archive remains sealed.",
            desc:"Jes Staley ran JPMorgan's private banking division. Epstein was his client from 1998 to 2013 — fifteen years that continued uninterrupted through arrest, conviction, and sex offender registration.\n\nCompliance flagged the account multiple times. Every flag was overridden. The account stayed open.\n\nIn 2023 litigation, ~1,200 emails between Staley and Epstein were disclosed. The tone was not banker-to-client. It was intimate, familiar, enmeshed. Staley visited Epstein in jail. Epstein visited Staley on his yacht. One email references 'Snow White.' It has never been explained.\n\nWhen Staley left JPMorgan in 2013, the bank exited Epstein within months. Fifteen years of overridden compliance flags — then the one man who championed the relationship left, and Epstein was gone instantly. He was the relationship.\n\nDeutsche Bank picked Epstein up and later paid $150M in fines.\n\nStaley was then made CEO of Barclays. The FCA found he lied to Barclays' board about the Epstein relationship. He resigned. JPMorgan paid $365M in settlements — $290M to victims, $75M to the USVI.\n\nStaley has never been criminally charged. The full email archive remains sealed. 'Snow White' remains unexplained.",
            evidence:"~1,200 emails disclosed in 2023 JPMorgan litigation. Prison visit confirmed. Yacht visit confirmed. 'Snow White' email never explained. Compliance flags overridden. Account maintained 2008-2013 post-conviction. Staley departure triggered Epstein exit. Deutsche Bank took Epstein ($150M fine). Barclays CEO 2015. FCA investigation. Resigned Barclays Nov 2021. JPMorgan $290M victim settlement. $75M USVI settlement. $365M combined. No criminal charges. Full archive not public.",
            link:"1,200 emails. A prison visit. A yacht visit. 'Snow White.' Compliance said stop — he said continue. When he left, the bank dropped Epstein instantly. Then he was made CEO of another bank. $365M in settlements confirms JPMorgan knew. The emails have never been released."},

        {id:"dimon",label:"Jamie Dimon",type:"suspicious",radius:26,
            agency:"JPMORGAN CHASE",role:"CEO · Institutional Enabler",status:"NAMED IN FILES",networth:"$2.6B",
            intelRole:"CEO of JPMorgan Chase, which maintained Epstein as a private banking client from 1998 to 2013 — including five years after his 2008 sex offender conviction. Internal emails showed senior leadership was aware of Epstein's criminal history. JPMorgan paid $365M in settlements related to the Epstein relationship.",
            epsteinLink:"Oversaw JPMorgan during entire Epstein banking relationship. Internal compliance flagged the Epstein account multiple times. Epstein was not exited as client until 2013. Dimon testified he had no personal relationship with Epstein but could not explain why compliance flags were overridden.",
            significance:"JPMorgan is the largest bank in the world. Its decision to keep banking Epstein after his conviction — overriding internal compliance — required senior-level authorization. The $365M in settlements (victims + USVI) is the largest financial consequence any institution has faced for enabling Epstein, and it confirms institutional knowledge.",
            desc:"Jamie Dimon has been CEO of JPMorgan Chase since 2005. Under his leadership, the bank maintained Jeffrey Epstein as a private banking client from 1998 through 2013, including five years after Epstein's 2008 conviction. Internal compliance staff flagged the Epstein relationship multiple times, but the account was maintained. Jes Staley, then head of private banking, managed the relationship directly. In 2023, JPMorgan paid $290M to settle a class action by Epstein victims and $75M to settle with the US Virgin Islands — a combined $365M that represents the bank's admission it enabled the trafficking operation through financial services.",
            evidence:"$290M victim settlement (2023). $75M USVI settlement. Internal compliance flags documented in litigation. Epstein account maintained 2008-2013 post-conviction. Dimon deposition testimony. Staley email trail showing institutional knowledge.",
            link:"The largest bank in the world kept a convicted child sex trafficker as a client for five years after his conviction, overriding its own compliance department. $365M in settlements confirms they knew."},

        {id:"hoffenberg",label:"Steven Hoffenberg",type:"suspicious",radius:14,
            agency:"TOWERS FINANCIAL CORPORATION",role:"Early Business Partner · Ponzi Scheme Co-Architect",status:"DECEASED (2022)",
            intelRole:"Epstein's first known business partner and the co-architect of the $475M Towers Financial Ponzi scheme — one of the largest financial frauds of its era. Hoffenberg served 18 years in federal prison. Epstein was never charged despite being named as co-architect. Hoffenberg publicly stated Epstein was protected by intelligence agencies.",
            epsteinLink:"Business partners at Towers Financial in the late 1980s. Co-architected the $475M Ponzi scheme. Hoffenberg took sole criminal responsibility while Epstein walked free. Hoffenberg later stated publicly that Epstein was an intelligence asset and was protected from prosecution.",
            significance:"The Towers Financial case is the origin story of Epstein's legal immunity. A $475M fraud — and only one partner went to prison. This established the pattern that would repeat with the 2008 NPA: Epstein was untouchable. Hoffenberg's claim that Epstein was intelligence-protected is corroborated by Acosta's 'belonged to intelligence' statement.",
            desc:"Steven Hoffenberg was a New York financier who partnered with Epstein at Towers Financial Corporation in the late 1980s. Together they orchestrated a $475 million Ponzi scheme that defrauded thousands of investors. When the scheme collapsed, Hoffenberg was arrested, tried, and sentenced to 18 years in federal prison. Epstein — despite being co-architect of the fraud — was never charged, never arrested, and never named as a defendant. Hoffenberg served his full sentence and, after release, publicly stated that Epstein was protected from prosecution because he was an intelligence asset. Hoffenberg was found dead in his apartment in August 2022 at age 77.",
            evidence:"$475M Ponzi scheme documented in SEC filings and federal case. Hoffenberg's 18-year sentence. Epstein never charged. Hoffenberg's public statements naming Epstein as co-architect. Hoffenberg's claims of intelligence protection. Found dead 2022.",
            link:"In a $475M fraud, one man got 18 years and the other got nothing. That's not luck. That's protection."},

        {id:"dershowitz",label:"Alan Dershowitz",type:"center",radius:22,
            agency:"HARVARD LAW SCHOOL",role:"Attorney · NPA Architect · Named by Victim",status:"SETTLED SUIT WITH GIUFFRE",networth:"$50M",
            intelRole:"Harvard Law professor who served as Epstein's personal attorney and was instrumental in negotiating the 2008 Non-Prosecution Agreement — the deal that gave immunity to all named co-conspirators and was later ruled to have violated the Crime Victims' Rights Act. Named by Virginia Giuffre under oath as a direct participant in abuse. Settled defamation lawsuit with Giuffre in 2024.",
            epsteinLink:"Defense attorney who negotiated the 2008 NPA with Alexander Acosta. The NPA immunized all co-conspirators — a provision Dershowitz personally advocated for. Named under oath by Virginia Giuffre as having abused her on Epstein's island and at other locations. Flight logs confirm travel on Epstein's planes. Settled with Giuffre in 2024, later claimed to 'regret' the settlement.",
            significance:"Dershowitz is simultaneously Epstein's lawyer and an accused participant — a dual role that represents an extraordinary conflict of interest. He designed the legal instrument (the NPA) that prevented prosecution of everyone in the network including, potentially, himself.",
            desc:"Alan Dershowitz represented Epstein during the 2008 federal investigation and was instrumental in negotiating the Non-Prosecution Agreement — the deal that gave Epstein 13 months in county jail with work release and granted immunity to all named and unnamed co-conspirators.\n\nVirginia Giuffre named Dershowitz under oath as having sexually abused her on multiple occasions at Epstein's properties. Flight logs confirm travel on Epstein's planes. Dershowitz vigorously denied all allegations and countersued.\n\nIn 2024, he settled the defamation suit with Giuffre. Then he publicly said he regretted settling.\n\nThe NPA was later ruled to have violated the Crime Victims' Rights Act by Judge Kenneth Marra. The immunity provision Dershowitz personally advocated for — protecting all co-conspirators — may have protected Dershowitz himself. an FBI informant stated that Dershowitz told then-US Attorney Alex Acosta that Epstein belonged to intelligence — and specifically that Mossad would contact Dershowitz after his phone calls with Epstein.",
            evidence:"Negotiated 2008 NPA (documented in federal records). Named under oath by Virginia Giuffre. Flight logs showing travel on Epstein planes. Settled defamation suit 2024. Publicly confirmed close relationship with Epstein. NPA later ruled to have violated Crime Victims' Rights Act by Judge Kenneth Marra.",
            link:"The man who designed the legal shield that protected Epstein's entire network was simultaneously accused by a victim of being a participant. He built the lock and may have needed it for himself."},

        {id:"starr",label:"Ken Starr",type:"suspicious",radius:16,
            agency:"KIRKLAND & ELLIS / BAYLOR UNIVERSITY",role:"Former Solicitor General · Epstein Defense Attorney",status:"DECEASED (2022)",
            intelRole:"Hired by Epstein as defense attorney. Used political connections to help secure the 2008 Non-Prosecution Agreement. Previously led the Clinton-Lewinsky investigation as Independent Counsel.",
            epsteinLink:"Part of Epstein's defense team alongside Dershowitz. Lobbied the DOJ and helped negotiate the NPA that shielded Epstein's co-conspirators from federal prosecution.",
            significance:"The man who investigated a president over a consensual affair later defended a sex trafficker and helped him escape federal prosecution. Later removed as Baylor president during a sexual assault scandal.",
            desc:"Ken Starr was a former US Solicitor General and Independent Counsel best known for the Clinton-Lewinsky investigation. He was hired by Epstein as part of his elite defense team and used his political connections to lobby for the 2008 NPA. He later became president of Baylor University, where he was removed during a sexual assault scandal involving the football program.",
            evidence:"Part of Epstein defense team (court records). Lobbied DOJ for NPA alongside Dershowitz. Clinton investigation background. Removed from Baylor over sexual assault scandal oversight failures. Deceased September 2022.",
            link:"The prosecutor who nearly impeached a president over a consensual affair then defended a man who trafficked children — and helped get him the deal of the century."},

        {id:"boies",label:"David Boies",type:"suspicious",radius:16,
            agency:"BOIES SCHILLER FLEXNER",role:"Attorney · Represented Both Epstein and Giuffre's Side",status:"NAMED IN FILES",networth:"$100M+",
            intelRole:"One of America's most prominent trial lawyers who represented both sides of the Epstein case at different points — an extraordinary conflict. His firm also hired Black Cube, the Israeli private intelligence firm staffed by former Mossad agents, to investigate Epstein's accusers on behalf of Harvey Weinstein.",
            epsteinLink:"Represented Epstein in legal matters. Later, his firm was involved in cases adverse to Epstein. Hired Black Cube (ex-Mossad operatives) to surveil and discredit accusers in the Weinstein case — the same playbook used against Epstein's victims.",
            significance:"Boies operated on both sides of the predator-accountability divide. His firm's use of Black Cube against accusers reveals how elite legal infrastructure was weaponized to protect powerful abusers.",
            desc:"David Boies is the chairman of Boies Schiller Flexner LLP and one of the most famous lawyers in America (Bush v. Gore, US v. Microsoft). He had legal relationships touching both Epstein and victims at different times. His firm hired Black Cube — a private intelligence firm founded by former Mossad and CIA operatives — to investigate and discredit Harvey Weinstein's accusers, demonstrating the overlap between elite legal defense and intelligence tradecraft.",
            evidence:"Legal representation documented in court filings. Black Cube hiring documented in Ronan Farrow's reporting. Conflict of interest spanning both sides of Epstein-related litigation. Boies Schiller involvement in Maxwell-adjacent matters.",
            link:"The same lawyer who fought for justice in Bush v. Gore hired Israeli spies to intimidate rape victims. The legal system doesn't protect victims — it protects whoever can pay."},

        {id:"barr_d",label:"Donald Barr",type:"center",radius:15,
            agency:"DALTON SCHOOL / OSS",role:"OSS Officer · Headmaster · Hired Epstein",status:"DECEASED (2004)",
            intelRole:"Office of Strategic Services (OSS) officer — the World War II predecessor to the CIA. As headmaster of the Dalton School, he hired 20-year-old Jeffrey Epstein, a college dropout with no degree, to teach calculus and physics to the children of New York's elite. This hire is the origin point of Epstein's access to the upper class.",
            epsteinLink:"Hired Epstein at Dalton School in 1974 despite Epstein having no college degree. Dalton's student body included the children of New York's wealthiest families. Father of future AG Bill Barr.",
            significance:"An intelligence officer placing a young man with no qualifications into the most elite prep school in New York is consistent with a recruitment pattern. This is how intelligence agencies create assets — by giving them access and watching what they do with it.",
            desc:"Donald Barr served in the Office of Strategic Services (OSS) during World War II — the predecessor organization to the CIA. He later became headmaster of the Dalton School, one of the most elite private schools in Manhattan. In 1974, he hired 20-year-old Jeffrey Epstein — a college dropout from Coney Island with no degree — to teach calculus and physics. Dalton's students included the children of New York's financial and social elite. This position gave Epstein his first access to the world he would later exploit. Donald Barr also wrote a science fiction novel, 'Space Relations' (1973), about a planet where the elite kidnap and sexually enslave people. His son William Barr would later serve as US Attorney General during Epstein's death in federal custody.",
            evidence:"OSS service documented. Dalton School headmaster confirmed. Epstein hire confirmed (no degree). 'Space Relations' novel (1973) with sexual slavery plot. Father of AG Bill Barr. Epstein's Dalton position gave him access to Bear Stearns (parent of Dalton student hired him).",
            link:"The first domino. An intelligence officer hired a nobody into the elite. That nobody built a sexual blackmail empire. The intelligence officer's son oversaw the prison where it all ended. Coincidence requires faith."},

        {id:"acosta",label:"Alexander Acosta",type:"center",radius:17,
            agency:"US DEPARTMENT OF LABOR / SDFL",role:"US Attorney · Labor Secretary · NPA Signatory",status:"RESIGNED",
            intelRole:"As US Attorney for Southern District of Florida, signed the 2008 Non-Prosecution Agreement that gave Epstein a 13-month county jail sentence with work release and immunized all co-conspirators. Was told by unnamed parties during the original investigation that Epstein 'belonged to intelligence' and to 'leave it alone.' Later explained this to the Trump transition team when his role in the NPA was questioned during vetting for Labor Secretary.",
            epsteinLink:"Signed the NPA. Was told Epstein 'belonged to intelligence' during the original Florida investigation. Explained this to Trump transition team during vetting. Appointed Labor Secretary despite his role in the NPA. Resigned July 2019 after Epstein re-arrest.",
            significance:"Acosta's account — that he was told Epstein was intelligence-protected and to back off — is the closest any US official has come to confirming Epstein was a shielded intelligence asset. Rather than being disqualified by the NPA, he was rewarded with a cabinet position. The question is who told him to leave it alone.",
            desc:"Alexander Acosta served as US Attorney for the Southern District of Florida when his office negotiated the 2008 Non-Prosecution Agreement with Epstein's defense team. The NPA gave Epstein a 13-month county jail sentence with 12 hours/day work release, required registration as a sex offender, and — critically — granted immunity to all named and unnamed co-conspirators. The deal was later ruled to have violated the Crime Victims' Rights Act because victims were not notified. During vetting for the Labor Secretary position, Acosta explained to the Trump transition team that he had been told during the original investigation that Epstein 'belonged to intelligence' and to 'leave it alone' — offering this as context for why the NPA was structured the way it was. Trump appointed Acosta as Secretary of Labor in 2017. Acosta resigned in July 2019 after Epstein's re-arrest brought renewed scrutiny to the NPA.",
            evidence:"NPA document signed by Acosta. 'Belonged to intelligence' account reported by Vicky Ward — Acosta was told this during the investigation and later relayed it to Trump transition team during vetting. Crime Victims' Rights Act violation ruling by Judge Marra. Resigned July 2019. Trump appointment despite NPA role.",
            link:"The prosecutor was told Epstein belonged to intelligence and to leave it alone. He complied. He signed the deal that freed everyone. Then he explained it during vetting and got a cabinet position anyway. The question no one has answered: who told him to back off?"},

        {id:"barr_w",label:"William Barr",type:"center",radius:28,
            agency:"US DEPARTMENT OF JUSTICE",role:"Attorney General · Oversaw Prison During Death",status:"NAMED IN FILES",
            intelRole:"US Attorney General during Epstein's death at MCC New York on August 10, 2019. His father Donald Barr hired Epstein at Dalton School. Previously served as AG under George H.W. Bush. Oversaw the Bureau of Prisons when cameras failed and guards fell asleep.",
            epsteinLink:"AG during Epstein death. Father hired Epstein. Oversaw BOP. Previously worked at CIA during college. Kirkland & Ellis connection (same firm as Acosta and Starr).",
            significance:"The Attorney General whose father gave Epstein his start oversaw the prison where Epstein died under impossible circumstances. He declared it a suicide before any investigation was complete.",
            desc:"William Barr served as US Attorney General under Trump when Jeffrey Epstein was found dead in his cell at the Metropolitan Correctional Center on August 10, 2019. His father, Donald Barr, had hired Epstein at the Dalton School in 1974. Barr previously worked at the CIA during college and served as AG under George H.W. Bush. Under his oversight of the Bureau of Prisons, both cameras outside Epstein's cell malfunctioned, both guards assigned to check on Epstein fell asleep and falsified records, and Epstein — who had been on suicide watch — was taken off watch days before his death. Barr declared Epstein's death a suicide before the investigation concluded.",
            evidence:"AG during Epstein death. Father hired Epstein at Dalton. CIA employment during college. Cameras failed. Guards slept. Suicide watch removed. Declared suicide pre-investigation. Kirkland & Ellis ties.",
            link:"His father hired Epstein. He oversaw the prison where Epstein died. The cameras broke. The guards slept. He called it suicide before the investigation started."},

        {id:"robert_maxwell",label:"Robert Maxwell",type:"center",radius:26,
            agency:"MOSSAD / KGB / MI6 / MAXWELL COMMUNICATIONS",role:"Media Baron · Triple Agent · Ghislaine's Father",status:"DECEASED (1991)",
            intelRole:"Confirmed intelligence asset for Mossad, KGB, and MI6 simultaneously. Built a media empire used as cover for intelligence operations. His death in 1991 — falling from his yacht, the Lady Ghislaine — preceded the collapse of his financial empire and the revelation that he had looted £440M from employee pension funds.",
            epsteinLink:"Father of Ghislaine Maxwell. Ari Ben-Menashe identified Robert Maxwell as the person who recruited Epstein to Israeli intelligence. The Maxwell-Epstein-Mossad pipeline is the foundational intelligence connection of the entire network.",
            significance:"Robert Maxwell is the origin of the intelligence architecture. Without his Mossad connections, there is no Epstein intelligence operation. His daughter inherited both his social network and his operational role.",
            desc:"Robert Maxwell (born Ján Ludvík Hyman Binyamin Hoch) was a Czech-born British media baron who built Maxwell Communications Corporation into a global empire. He was confirmed as an asset of Mossad, KGB, and MI6 — a triple agent operating across Cold War lines. He used his media properties as cover for intelligence operations and maintained relationships with heads of state globally. He died on November 5, 1991, after falling from his yacht (named Lady Ghislaine) near the Canary Islands. His death was ruled accidental drowning, though murder and suicide theories persist. After his death, it emerged he had stolen approximately £440 million from his companies' pension funds. He received a state funeral in Israel attended by Israeli intelligence officials. Ari Ben-Menashe, a former Israeli military intelligence officer, has publicly stated that Maxwell recruited Epstein into Mossad operations.",
            evidence:"Confirmed Mossad asset (multiple intelligence sources). KGB asset (Mitrokhin Archive). MI6 connections documented. State funeral in Israel. £440M pension theft. Ben-Menashe testimony on Epstein recruitment. Lady Ghislaine yacht death.",
            link:"A confirmed triple agent for Mossad, KGB, and MI6 who recruited Epstein into intelligence. Given a state funeral in Israel. His daughter continued the operation."},

        {id:"eva_dubin",label:"Eva Dubin",type:"suspicious",radius:14,
            agency:"MODELING / PHILANTHROPY",role:"Former Model · Epstein Ex-Girlfriend · Dubin Family",status:"NAMED IN FILES",
            intelRole:"Swedish former model and physician who dated Epstein before marrying hedge fund billionaire Glenn Dubin. Maintained close relationship with Epstein after marriage. Allowed Epstein unsupervised access to their children according to court documents.",
            epsteinLink:"Dated Epstein. Married Glenn Dubin. Continued Epstein relationship post-marriage. Court documents indicate Epstein had unsupervised access to their children.",
            significance:"A former girlfriend who maintained the relationship after marriage and allegedly allowed a known predator access to her own children. This suggests either extraordinary naivety or a deeper entanglement.",
            desc:"Eva Andersson-Dubin is a Swedish-born former model and physician who dated Jeffrey Epstein before marrying hedge fund billionaire Glenn Dubin. She and her husband maintained an unusually close relationship with Epstein for years after. Court documents from the Virginia Giuffre litigation revealed that Epstein had unsupervised access to the Dubin children. A former household employee provided testimony about the nature of the ongoing relationship.",
            evidence:"Dating history documented. Continued post-marriage relationship. Court documents on child access. Household employee testimony. Named in Giuffre litigation.",
            link:"She dated the predator, married a billionaire, and let the predator near her children. That's not a social relationship."},

        {id:"dubin",label:"Glenn Dubin",type:"suspicious",radius:18,
            agency:"HIGHBRIDGE CAPITAL MANAGEMENT",role:"Hedge Fund Billionaire",status:"NAMED IN FILES",networth:"$2.9B",
            intelRole:"Hedge fund billionaire whose wife dated Epstein. Named by Virginia Giuffre under oath. Household employee Rinaldo Rizzo provided testimony about Epstein's role in the Dubin household. Maintained relationship with Epstein through and after conviction.",
            epsteinLink:"Named by Giuffre under oath. Wife's ex-boyfriend was Epstein. Epstein had access to Dubin home and children per court documents. Rizzo testimony. Post-conviction relationship maintained.",
            significance:"Named under oath by a trafficking victim. His household employee corroborated the relationship. Yet no investigation was ever opened.",
            desc:"Glenn Dubin is the co-founder of Highbridge Capital Management, a major hedge fund. His wife Eva previously dated Epstein. Virginia Giuffre named Dubin under oath as someone she was directed to have sexual contact with. Rinaldo Rizzo, a former Dubin household employee, provided testimony about Epstein sending a young woman to the Dubin residence. The Dubins maintained their relationship with Epstein after his 2008 conviction.",
            evidence:"Named under oath by Giuffre. Rizzo employee testimony. Post-conviction relationship. Eva Dubin dating history. Court documents on Epstein access to Dubin children.",
            link:"Named under oath. Employee corroborated. Never investigated."},

        {id:"nader",label:"George Nader",type:"center",radius:16,
            agency:"MIDDLE EAST BACKCHANNEL",role:"Convicted Pedophile · UAE-Saudi-Trump Backchannel",status:"CONVICTED — 10yr sentence",
            intelRole:"Lebanese-American businessman who served as backchannel between the UAE, Saudi Arabia, and the Trump campaign/administration. Key Mueller probe witness. Convicted of possessing child pornography and transporting a minor for sex. Previous 1991 child pornography conviction. Connected Bannon, Barrack, MBS, and Trump orbit.",
            epsteinLink:"Operated in the same nexus of intelligence, politics, and child exploitation. Mueller probe revealed his role as Middle East backchannel. His conviction profile — a repeat child sex offender operating at the highest levels of international diplomacy — mirrors the Epstein pattern of protected predators.",
            significance:"A twice-convicted pedophile served as the primary diplomatic backchannel between Gulf states and the US presidency. His continued access despite known criminal history demonstrates the same institutional protection pattern as Epstein.",
            desc:"George Nader is a Lebanese-American businessman who served as a key backchannel between the United Arab Emirates, Saudi Arabia, and the Trump campaign and administration. He was a key cooperating witness in the Mueller investigation. He was convicted in 1991 of transporting child pornography. Despite this conviction, he maintained access to heads of state, intelligence services, and the White House. In 2020, he was sentenced to 10 years in federal prison for possessing child pornography and transporting a 14-year-old boy from Europe for sex.",
            evidence:"Mueller probe testimony. UAE-Saudi backchannel role documented. 1991 child pornography conviction. 2020 conviction (10 years). Connected to Bannon, Barrack, MBS. Continued government access despite conviction.",
            link:"A twice-convicted child sex offender was the primary diplomatic channel between Gulf monarchies and the American presidency. He had more access to power after his first conviction than before it."},

         {id:"comey",label:"James Comey",type:"possibly",radius:22,
            agency:"FEDERAL BUREAU OF INVESTIGATION",role:"Former FBI Director",status:"NAMED IN FILES",
            intelRole:"FBI Director 2013-2017. Bureau possessed Epstein evidence from Palm Beach investigation throughout his tenure. Daughter Maurene Comey assigned to SDNY Epstein prosecution team.",
            epsteinLink:"FBI had evidence from 2006-2008 Palm Beach investigation during Comey's directorship. No federal action taken. Daughter later assigned to SDNY case.",
            significance:"The FBI sat on Epstein evidence for a decade. The Director's daughter ended up on the prosecution team. The suspect died before trial.",
            desc:"James Comey served as FBI Director from 2013 to 2017. During his tenure, the FBI possessed extensive evidence from the original Palm Beach Epstein investigation — victim interviews, flight logs, witness testimony — yet no federal action was taken. After Epstein's 2019 arrest and death, Comey's daughter Maurene Comey was assigned as a prosecutor on the SDNY case.",
            evidence:"FBI Director during period of Bureau inaction on Epstein. FBI possessed Palm Beach investigation evidence. Daughter Maurene Comey on SDNY prosecution team. No conflict review documented.",
            link:"The FBI had the evidence for over a decade. The Director's daughter ended up on the case. The suspect died before trial."},


        // ═══════════════════════════════════════════════════════
        // POLITICAL FIGURES
        // ═══════════════════════════════════════════════════════

        {id:"trump",label:"Donald Trump",type:"suspicious",radius:42,
            agency:"TRUMP ORGANIZATION / US PRESIDENCY",role:"Real Estate · US President · Mar-a-Lago",status:"NAMED IN FILES",networth:"$2.6B",
            intelRole:"Known Epstein associate from early 1980s through mid-2000s. Virginia Giuffre was recruited from Mar-a-Lago. 1992 video shows Trump and Epstein partying together at Mar-a-Lago with cheerleaders.",
            epsteinLink:"1992 video. 2002 NY Magazine quote: 'He likes beautiful women as much as I do, and many of them are on the younger side.' Address book entry with 14 phone numbers. Giuffre recruited from Mar-a-Lago. Fell out mid-2000s reportedly over Palm Beach real estate dispute. Appointed Acosta as Labor Secretary. AG Barr oversaw prison during Epstein death.",
            significance:"Trump's Epstein connections span decades. His appointment of Acosta (who gave Epstein the NPA) and Barr (whose father hired Epstein) to cabinet positions places Epstein-connected figures at the highest levels of the DOJ.",
            desc:"Donald Trump and Jeffrey Epstein were social associates in New York and Palm Beach from the early 1980s through the mid-2000s. A 1992 video shows them partying together at Mar-a-Lago. In 2002, Trump told New York Magazine: 'I've known Jeff for fifteen years. Terrific guy. He's a lot of fun to be with. It is even said that he likes beautiful women as much as I do, and many of them are on the younger side.' Virginia Giuffre was recruited into Epstein's operation while working as a locker room attendant at Mar-a-Lago. Trump and Epstein reportedly fell out in the mid-2000s over a Palm Beach real estate dispute. Trump later appointed Alexander Acosta — who gave Epstein the NPA — as Labor Secretary.",
            evidence:"1992 party video. 2002 NY Magazine quote. Giuffre recruited from Mar-a-Lago. Address book with 14 numbers. Acosta appointment. Barr appointment. Palm Beach real estate dispute.",
            link:"His resort was the recruitment site. His Labor Secretary signed the sweetheart deal. His AG oversaw the prison death. His address was listed 14 times in the black book."},

        {id:"clinton",label:"Bill Clinton",type:"suspicious",radius:38,
            agency:"US PRESIDENCY / CLINTON FOUNDATION",role:"US President · 26+ Flights",status:"NAMED IN FILES",
            intelRole:"26+ documented flights on Epstein's Boeing 727. Virginia Giuffre stated she saw Clinton on Epstein's private island. Secret Service detail reportedly declined on some flights.",
            epsteinLink:"26+ flights on Lolita Express per pilot logs. Giuffre island statement. Epstein visited Clinton White House. Secret Service detail declined on some trips.",
            significance:"A sitting US president flew 26 times on a convicted sex trafficker's private plane, sometimes without Secret Service protection. No investigation has ever been opened.",
            desc:"Bill Clinton took at least 26 documented flights on Epstein's Boeing 727, known as the 'Lolita Express,' according to pilot flight logs. Virginia Giuffre stated under oath that she saw Clinton on Epstein's private island. Clinton's Secret Service protection was reportedly declined on some flights. Epstein visited the Clinton White House. Clinton has acknowledged flights but denied visiting the island or having knowledge of any criminal activity.",
            evidence:"26+ flights in pilot logs. Giuffre island statement. Secret Service records showing declined protection. White House visitor logs. Epstein's post-conviction comments about Clinton friendship.",
            link:"26 flights. No Secret Service on some trips. A victim saw him on the island. No investigation."},

        {id:"andrew",label:"Prince Andrew",type:"suspicious",radius:30,
            agency:"BRITISH ROYAL FAMILY",role:"Duke of York · Named by Victim",status:"SETTLED SUIT — stripped of titles",
            intelRole:"Photographed with arm around 17-year-old Virginia Giuffre at Maxwell's London home. Named under oath as direct participant in abuse. Settled civil suit for reported £12M. Stripped of military titles and royal patronages.",
            epsteinLink:"Introduced by Maxwell. Photo with Giuffre (age 17). Named under oath. Flight logs. Stayed at Epstein properties. £12M settlement.",
            significance:"A member of the British royal family was photographed with a trafficking victim, named under oath, and paid £12M to settle rather than face trial. The monarchy's institutional response was damage control, not accountability.",
            desc:"Prince Andrew, Duke of York, was introduced to Epstein by Ghislaine Maxwell. He was photographed with his arm around 17-year-old Virginia Giuffre at Maxwell's London townhouse. Giuffre named Andrew under oath as having sexually abused her on multiple occasions. Andrew gave a disastrous BBC interview in which he denied the allegations and claimed he could not sweat. He settled Giuffre's civil lawsuit for a reported £12 million and was stripped of his military titles and royal patronages by Queen Elizabeth II.",
            evidence:"Photo with Giuffre (age 17). Named under oath. £12M settlement. Flight logs. BBC interview. Stripped of titles. Maxwell introduction documented.",
            link:"Photographed. Named under oath. Paid £12M. And still never faced criminal charges in any jurisdiction."},

        {id:"barak",label:"Ehud Barak",type:"suspicious",radius:28,
            agency:"ISRAELI GOVERNMENT / IDF",role:"Former PM · Defense Minister · Carbyne911",status:"NAMED IN FILES",networth:"$10M+",
            intelRole:"Former Israeli Prime Minister and Defense Minister. 36+ documented visits to Epstein's NYC townhouse. Photographed entering and shielding his face. Received $2.3M from Wexner Foundation and $5M from Epstein-linked fund. Co-invested in Carbyne911 surveillance startup with Epstein funding.",
            epsteinLink:"36+ visits photographed. $2.3M Wexner Foundation. $5M Epstein fund. Carbyne911 co-investment. Named by Giuffre.",
            significance:"A former head of Israeli military intelligence visiting a sex trafficker's home 36 times while receiving millions from Epstein-linked entities. The Carbyne911 connection links Epstein to surveillance technology. This is the state-intelligence nexus made visible.",
            desc:"Ehud Barak served as Israeli Prime Minister (1999-2001) and Defense Minister (2007-2013), with direct oversight of Israeli military intelligence. He was photographed at least 36 times entering Epstein's Manhattan townhouse, sometimes shielding his face. He received $2.3M from the Wexner Foundation and $5M from a fund connected to Epstein. He co-invested with Epstein in Carbyne911, a surveillance technology startup. Virginia Giuffre named Barak in her depositions.",
            evidence:"36+ visits photographed by press. $2.3M Wexner Foundation documented. $5M Epstein fund. Carbyne911 investment records. Giuffre deposition naming. Photographed with young women at townhouse.",
            link:"Thirty-six visits to a sex trafficker's home by a man who ran Israeli military intelligence. Millions in payments. A joint investment in surveillance tech. This is not a social acquaintance."},

        {id:"mitchell",label:"George Mitchell",type:"suspicious",radius:20,
            agency:"US SENATE",role:"Senate Majority Leader",status:"NAMED IN SUIT",
            intelRole:"Former US Senate Majority Leader named by Virginia Giuffre under oath.",
            desc:"Named by Giuffre in sworn deposition.",evidence:"Sworn deposition.",
            link:"A Senate Majority Leader named under oath by a trafficking victim. No investigation opened."},

        {id:"richardson",label:"Bill Richardson",type:"suspicious",radius:18,
            agency:"STATE OF NEW MEXICO / DOE",role:"Governor · Energy Secretary",status:"DECEASED (2023)",
            intelRole:"Former New Mexico Governor named by Giuffre. Epstein's Zorro Ranch was in New Mexico.",
            desc:"Former Governor named under oath by Giuffre. Epstein operated Zorro Ranch in New Mexico during Richardson's governorship.",
            evidence:"Named in sworn deposition. Zorro Ranch in his state.",
            link:"The governor of the state where Epstein had a ranch, named under oath. Died before any investigation."},

        {id:"blair",label:"Tony Blair",type:"suspicious",radius:28,
            agency:"UK GOVERNMENT / QUARTET ON THE MIDDLE EAST",role:"Former UK Prime Minister",status:"NAMED IN FILES",
            intelRole:"Prime Minister of the United Kingdom 1997–2007. One of the most internationally connected former heads of government in the world. After leaving office, Blair became a Middle East peace envoy (the 'Quartet Representative'), consultant to JPMorgan Chase, and the founder of the Tony Blair Institute for Global Change — an organisation with substantial funding from Gulf states. His post-office connections created an extensive overlap with the financial and geopolitical world Epstein navigated. Named in Epstein's contact files. Documented post-office contact with Epstein.",
            epsteinLink:"Named in Epstein contact files. Post-office meetings with Epstein documented. Relationship with Ghislaine Maxwell through shared social circles — Maxwell was a regular figure in British elite society during and after Blair's premiership. JPMorgan Chase (Epstein's bank, which paid $365M in Epstein-related settlements) hired Blair as a senior adviser post-office. Blair's Middle East Quartet role overlapped geographically and politically with Epstein-connected figures including Ehud Barak, MBS, and Gulf royalty.",
            significance:"Blair is the connective tissue between the British political world (Mandelson, Andrew), the American financial world (JPMorgan), and the Middle East intelligence world (Barak, Gulf royalty) — three of the principal axes of the Epstein network. His post-office consulting work brought him into direct institutional contact with JPMorgan Chase at the same time the bank was banking Epstein and overriding its own compliance department. The question of what Blair knew about JPMorgan's Epstein relationship during his advisory tenure has never been asked publicly.",
            desc:"Tony Blair served as UK Prime Minister from 1997 to 2007, winning three consecutive general elections. His premiership defined a generation of British politics. After leaving office, he became a consultant, envoy, and global operator of extraordinary reach — described by critics as having built a post-office empire that monetized his connections to an unprecedented degree.\n\nHis institutional connections are the story. JPMorgan Chase hired Blair as a senior adviser beginning in 2008 — the same year Epstein received his sweetheart non-prosecution agreement, the same year JPMorgan's compliance department was raising flags about the Epstein account that Jes Staley was overriding. Blair was an adviser to the institution that was, simultaneously, knowingly banking a convicted sex trafficker. Whether Blair was aware of the Epstein relationship at JPMorgan, or whether he was deliberately kept away from it, has never been explored.\n\nBlair is named in Epstein's contact files. He had post-office contact with Epstein. His close political ally Peter Mandelson visited Epstein's island. His government's culture of secrecy — the same culture that buried the Hutton Report and the Iraq WMD intelligence — created the institutional environment in which figures like Mandelson operated without public accountability.\n\nThe Tony Blair Institute receives significant funding from Gulf states, including the UAE and Saudi Arabia — the same states whose backchannel to the Trump administration was convicted pedophile George Nader. Blair's Middle East Quartet work brought him into sustained contact with Ehud Barak, who visited Epstein's townhouse 36 times and received millions from Epstein-linked entities.\n\nHe has never publicly addressed his contact with Epstein or explained the nature of their relationship.",
            evidence:"Named in Epstein contact files. Post-office meetings with Epstein documented. JPMorgan Chase senior adviser from 2008 (bank paid $365M in Epstein settlements). Middle East Quartet role — overlap with Barak. Gulf state funding for Blair Institute — overlap with MBS/UAE/Nader nexus. Peter Mandelson (Blair's closest political ally) visited Epstein's island. No public accounting of Epstein relationship.",
            link:"He took JPMorgan's money while JPMorgan was banking a sex trafficker. His closest political ally visited the island. He met Epstein after he left office. He has never explained any of it."},

        {id:"mandelson",label:"Peter Mandelson",type:"suspicious",radius:20,
            agency:"UK GOVERNMENT / EU COMMISSION",role:"Former Cabinet Minister · EU Commissioner · UK Ambassador to US",status:"NAMED IN FILES",
            intelRole:"One of the most powerful figures in British politics over three decades. Served as Secretary of State for Northern Ireland and Business, President of the Board of Trade, and European Commissioner for Trade. Appointed UK Ambassador to the United States by Keir Starmer in 2024. His documented connections to Epstein — through Maxwell's social world and his own visits — create an acute conflict of interest in that role: the man representing British interests in Washington has personal exposure to the most significant American intelligence scandal in decades.",
            epsteinLink:"Photographed with Epstein. Visited Epstein's private island per flight logs. Close personal friend of Ghislaine Maxwell, described in multiple accounts as a fixture in Maxwell's social circle. Named in contact files. At least one documented island visit. Twice forced to resign from cabinet positions under Blair for conduct unrelated to Epstein — suggesting a broader pattern of concealment and damage control.",
            significance:"Mandelson is Britain's most connected political operator — described as 'the Prince of Darkness' by the British press. His appointment as UK Ambassador to the United States in 2024, while his name remained in the Epstein files and his island visit remained unexplained, was met with minimal media scrutiny. An ambassador with undisclosed personal exposure to an intelligence blackmail operation is a counterintelligence liability of the first order. The British public has never been given a full account of his connection to Epstein or Maxwell.",
            desc:"Peter Mandelson is one of the principal architects of New Labour, the political strategist who helped make Tony Blair prime minister, and a figure who survived two cabinet resignations to remain at the center of British power for thirty years. He served as a European Commissioner for Trade (2004–2010), where he wielded significant influence over EU economic policy, and was later made a life peer (Baron Mandelson of Foy). His relationship with Ghislaine Maxwell was social and sustained — he was a regular presence in her circle, which overlapped with the Epstein network throughout the 1990s and 2000s.\n\nFlight logs confirm at least one visit to Epstein's private island in the US Virgin Islands. He is named in Epstein's contact files. He has never provided a full public account of either connection.\n\nIn 2024, Prime Minister Keir Starmer appointed Mandelson as UK Ambassador to the United States — placing a man with documented Epstein connections at the head of Britain's most important diplomatic post, representing British interests in the country where the Epstein prosecution originated, died, and remains unresolved. The appointment attracted controversy in Parliament but was not blocked. Mandelson has described his connection to Epstein as a social acquaintance, nothing more. The island visit has not been publicly explained.",
            evidence:"Named in Epstein contact files. Flight logs showing island visit. Documented close friendship with Ghislaine Maxwell — multiple press accounts and photographs. Appointed UK Ambassador to the US 2024 despite file exposure. Two prior cabinet resignations under Blair. Named in parliamentary questions. Island visit not publicly explained.",
            link:"He visited the island. He was in the files. He was Maxwell's friend. Then he was made the UK's Ambassador to Washington. Nobody in power seems to think that's a problem."},


        {id:"sultan_brunei",label:"Sultan of Brunei",type:"suspicious",radius:30,
            agency:"BRUNEI",role:"Head of State",status:"NAMED IN FILES",
            desc:"Documented trafficking allegations in Marketic lawsuit (1997). Appears in Epstein files.",
            evidence:"Marketic lawsuit 1997. Named in Epstein contact files.",
            link:"A head of state with independent trafficking allegations in the same network."},

        {id:"sultan_ahmed",label:"Ahmed bin Sulayem",type:"suspicious",radius:16,
            agency:"UAE",role:"UAE Royal",status:"NAMED IN FILES",
            desc:"UAE royal named in Epstein files.",evidence:"Named in contact files."},


        {id:"ferguson",label:"Sarah Ferguson",type:"suspicious",radius:18,
            agency:"BRITISH ROYAL FAMILY",role:"Duchess of York",status:"NAMED IN FILES",
            intelRole:"Ex-wife of Prince Andrew, through whom she was introduced to Epstein and Maxwell. After her 1992 divorce from Andrew, Ferguson faced severe financial difficulties — a vulnerability that the Epstein network demonstrably exploited. Accepted £15,000 from Epstein in 2010, two years after his conviction, funneled through Prince Andrew. The payment was framed as assistance with her debts. It came from a registered sex offender.",
            epsteinLink:"Introduced to Epstein through Prince Andrew. £15,000 payment from Epstein in 2010 — post-conviction — channeled through Andrew. Photographed with Epstein. Named in contact files. Her financial distress created obvious leverage for a man whose entire operation was built on cultivating obligation and dependency in powerful people.",
            significance:"The £15,000 payment is a forensic record of exactly how Epstein's operation worked: identify financial vulnerability in someone connected to royalty, offer help, create obligation. Ferguson's acceptance of money from a convicted sex offender — regardless of how it was framed — placed a member of the royal orbit in debt to a man who collected secrets from precisely such relationships. Andrew's role as conduit deepened both their exposure.",
            desc:"Sarah Ferguson, Duchess of York, was married to Prince Andrew from 1986 to 1996. Her post-divorce years were marked by well-documented financial chaos — she accumulated significant debts and sold royal memorabilia to pay them, at one point reportedly owing over £4 million. This vulnerability was visible and exploited.\n\nIn 2010 — two years after Epstein's conviction on prostitution charges involving a minor — Epstein paid £15,000 toward Ferguson's debts. The payment was made through Prince Andrew, who admitted arranging it. Ferguson later described it as a terrible mistake and said she was 'not a close friend' of Epstein. The timing makes this framing difficult to sustain: you do not accept debt relief from a man you barely know who has just been convicted of sex crimes involving a child.\n\nShe is named in Epstein's contact files. She has been photographed with him. Her explanation — that she was in a desperate financial situation and made a poor judgment — is probably partly true. That is precisely how the operation worked: desperate people were helped, obligations were created, and the help was remembered.\n\nPrince Andrew's role as the conduit for the payment means that, at minimum, a member of the royal family facilitated a financial relationship between his ex-wife and a convicted sex offender. That connection has never been subject to any formal investigation.",
            evidence:"£15,000 payment from Epstein (2010) confirmed — Andrew admitted arranging it. Named in contact files. Photographed with Epstein. Post-conviction payment timing. Own public admission of payment. No investigation opened.",
            link:"A convicted sex offender paid a duchess's debts. Her ex-husband arranged it. Two years after his conviction. That's not charity. That's cultivation."},


        {id:"mette_marit",label:"Crown Princess Mette-Marit",type:"suspicious",radius:18,
            agency:"NORWEGIAN ROYAL FAMILY",role:"Norwegian Crown Princess",status:"NAMED IN FILES",
            desc:"Met Epstein multiple times after his 2008 conviction.",
            evidence:"Post-conviction meetings documented.",link:"European royalty maintaining post-conviction contact."},

        {id:"lajcak",label:"Miroslav Lajcak",type:"suspicious",radius:13,
            agency:"UNITED NATIONS",role:"UN General Assembly President",status:"NAMED IN FILES",
            desc:"UN General Assembly President named in files.",evidence:"Named in contact files."},

        {id:"kissinger",label:"Henry Kissinger",type:"possibly",radius:34,
            agency:"US STATE DEPARTMENT",role:"Former Secretary of State",status:"DECEASED (2023)",
            desc:"Listed in Epstein's black book. Cold War intelligence figure.",
            evidence:"Listed in black book.",link:"The architect of Cold War foreign policy in a sex trafficker's contact book."},

        {id:"king_charles",label:"King Charles III",type:"possibly",radius:40,
            agency:"BRITISH ROYAL FAMILY",role:"King of United Kingdom",status:"NAMED IN FILES",
            desc:"Brother Prince Andrew's Epstein connections. Close friendship with Jimmy Savile documented through FOI correspondence.",
            evidence:"Andrew connection. Savile correspondence released under FOI.",
            link:"Connected to both Epstein (through Andrew) and Savile (directly). Two of the most prolific predators of the 20th century."},

        {id:"putin",label:"Vladimir Putin",type:"possibly",radius:44,
            agency:"RUSSIAN FEDERATION / FSB",role:"President of Russia",status:"NAMED IN FILES",
            desc:"Robert Maxwell was a confirmed KGB asset. Kompromat pattern consistent with Russian intelligence tradecraft.",
            evidence:"Maxwell confirmed KGB ties. Kompromat pattern.",
            link:"Maxwell worked for the KGB. Epstein's operation was a kompromat factory. Russia had institutional access to the product."},

        {id:"mbs",label:"Mohammed bin Salman",type:"possibly",radius:36,
            agency:"SAUDI ARABIA",role:"Crown Prince",status:"NAMED IN FILES",
            desc:"Saudi intelligence connections. CIA assessed MBS ordered Khashoggi murder. Nader served as backchannel.",
            evidence:"CIA assessment on Khashoggi. Nader backchannel.",
            link:"The crown prince whose backchannel to Trump was a convicted child sex offender."},

        {id:"netanyahu",label:"Benjamin Netanyahu",type:"possibly",radius:32,
            agency:"STATE OF ISRAEL",role:"Prime Minister",status:"NAMED IN FILES",
            desc:"Controlled Mossad during Epstein's peak years. Barak connection. Wexner/Mega Group ties.",
            evidence:"Barak connection. Wexner/Mega Group. Mossad oversight.",
            link:"The PM who oversaw the intelligence service most linked to the Epstein operation."},

        {id:"lutnick",label:"Howard Lutnick",type:"suspicious",radius:20,
            agency:"CANTOR FITZGERALD / US COMMERCE DEPT",role:"CEO · Commerce Secretary",status:"NAMED IN FILES",networth:"$1.5B",
            intelRole:"Trump's Commerce Secretary. December 2012 island visit emails directly contradict his public claim of cutting ties 'decades ago.'",
            epsteinLink:"2012 island visit by yacht with wife and children confirmed by emails. 2011 correspondence about drinks and building project.",
            significance:"A sitting US Cabinet member whose public statements are directly contradicted by his own emails.",
            desc:"Howard Lutnick is the former chairman of Cantor Fitzgerald and currently serves as Trump's Secretary of Commerce. Emails in the 2026 DOJ release show Lutnick and his wife accepted an invitation to visit Epstein's private island in December 2012, arriving by yacht with children. He had previously claimed he cut ties 'decades ago.'",
            evidence:"2012 island visit emails. 2011 correspondence. Public statements contradicted.",
            link:"The Commerce Secretary who lied about visiting the island. His own emails prove it."},

        {id:"burkle",label:"Ron Burkle",type:"suspicious",radius:16,
            agency:"YUCAIPA COMPANIES",role:"Supermarket Billionaire · Clinton Associate",status:"NAMED IN FILES",networth:"$2B",
            desc:"Clinton associate named in contact files.",evidence:"Named in contact files. Clinton overlap."},

        {id:"barrack",label:"Tom Barrack",type:"suspicious",radius:16,
            agency:"COLONY CAPITAL",role:"Trump Inaugural Chair · UAE Agent Charges",status:"NAMED IN FILES",
            desc:"Trump inaugural committee chair. Charged as unregistered UAE foreign agent (acquitted). Nader connection.",
            evidence:"Named in files. Nader overlap. UAE agent charges."},

         {id:"bannon",label:"Steve Bannon",type:"suspicious",radius:22,
            agency:"WHITE HOUSE / BREITBART / GOLDMAN SACHS",role:"Chief Strategist · Navy Intelligence · Goldman Sachs",status:"NAMED IN FILES",networth:"$20M",
            intelRole:"Former US Navy officer with intelligence-adjacent background. Goldman Sachs investment banker. Breitbart News executive chairman. White House Chief Strategist (2017). Connected to the Epstein network through George Nader and the UAE backchannel documented in the Mueller probe. Named in Epstein files.",
            epsteinLink:"Named in Epstein files. Connected through the Trump-Nader-UAE backchannel documented in the Mueller investigation. Bannon was central to the nexus that included Tom Barrack (charged as UAE agent) and George Nader (convicted pedophile, UAE backchannel). Bannon-aligned media had access to Epstein-related information that was selectively deployed for political warfare rather than victim accountability.",
            significance:"Bannon represents the political weaponization of the Epstein network — the use of connections and information as leverage rather than evidence. His Navy intelligence background, Goldman Sachs career, and White House role place him at the convergence of military intelligence, elite finance, and political power — the same intersection where Epstein operated. Breitbart and aligned media selectively released Epstein information to damage political opponents while ignoring connections to allies.",
            desc:"Steve Bannon served in the US Navy with an intelligence-adjacent role at the Pentagon, worked as an investment banker at Goldman Sachs, produced media in Hollywood, built Breitbart News into a major political force, and served as Trump's White House Chief Strategist in 2017. He is named in Epstein files. His connection to the Epstein-adjacent network runs through George Nader — the twice-convicted pedophile who served as the UAE and Saudi Arabia's backchannel to the Trump administration — and Tom Barrack, Trump's inaugural committee chair who was charged as an unregistered UAE foreign agent. Bannon-aligned media outlets had access to Epstein-related intelligence that was deployed selectively as a political weapon: connections to opponents were amplified, connections to allies were buried. After leaving the White House, Bannon was convicted of contempt of Congress and of fraud related to the 'We Build the Wall' campaign (later pardoned by Trump).",
            evidence:"Named in Epstein files. Nader connection documented in Mueller probe. Barrack connection. Navy background. Goldman Sachs career. Selective media deployment of Epstein information. Contempt of Congress conviction. Fraud conviction (pardoned).",
            link:"Navy intelligence. Goldman Sachs. The White House. Connected to a convicted pedophile serving as Gulf backchannel. Named in the files. His media machine weaponized Epstein information for politics — not for justice."},



        // ═══════════════════════════════════════════════════════
        // INTELLIGENCE
        // ═══════════════════════════════════════════════════════

        {id:"ben_menashe",label:"Ari Ben-Menashe",type:"suspicious",radius:14,
            agency:"ISRAELI MILITARY INTELLIGENCE",role:"Former Intelligence Officer · Whistleblower",status:"WHISTLEBLOWER",
            intelRole:"Former Israeli military intelligence officer who named Robert Maxwell as the person who recruited Epstein into intelligence operations. His testimony provides the clearest public account of the intelligence architecture behind the Epstein network.",
            desc:"Published intelligence account naming Maxwell-Epstein recruitment chain for Mossad sexual blackmail operations.",
            evidence:"Published account. Intelligence service background confirmed. Named recruitment chain.",
            link:"The intelligence officer who told us what Epstein really was."},

        {id:"khashoggi",label:"Adnan Khashoggi",type:"suspicious",radius:20,
            agency:"SAUDI INTELLIGENCE / ARMS DEALING",role:"Arms Dealer · Iran-Contra",status:"DECEASED (2017)",
            desc:"Saudi arms dealer. Iran-Contra figure. Robert Maxwell associate.",
            evidence:"Intelligence ties. Iran-Contra. Maxwell association.",
            link:"The Saudi arms dealer who connected the intelligence worlds that produced Epstein."},

        {id:"dougan",label:"John Dougan",type:"suspicious",radius:12,
            agency:"PALM BEACH COUNTY SHERIFF",role:"Former Deputy · Fled to Russia",status:"FLED TO RUSSIA",
            desc:"Claims to have copied Epstein investigation files. Fled to Russia.",
            evidence:"Claims possession of investigation files.",
            link:"A cop who says he has the files, living in Russia."},

        {id:"brennan",label:"John Brennan",type:"possibly",radius:24,
            agency:"CENTRAL INTELLIGENCE AGENCY",role:"Former CIA Director",status:"NAMED IN FILES",
            desc:"CIA Director 2013-2017.",evidence:"Named in contact files."},

        {id:"petraeus",label:"David Petraeus",type:"possibly",radius:22,
            agency:"CIA / US ARMY",role:"Former CIA Director",status:"NAMED IN FILES",
            desc:"Former CIA Director named in contact files.",evidence:"Named in contact files."},

        // ═══════════════════════════════════════════════════════
        // FINANCE
        // ═══════════════════════════════════════════════════════

        {id:"gates",label:"Bill Gates",type:"suspicious",radius:36,
            agency:"MICROSOFT / GATES FOUNDATION",role:"Tech Billionaire · Post-Conviction Meetings",status:"NAMED IN FILES",networth:"$128B",
            intelRole:"Multiple documented meetings with Epstein 2011-2013, all after conviction. Boris Nikolic named in Epstein's will. Melinda Gates cited Epstein in divorce.",
            epsteinLink:"Multiple post-conviction meetings at Epstein's townhouse. Flight on Epstein's plane. Nikolic in will. $2M donation to MIT routed through Epstein. Divorce filing cited relationship.",
            significance:"The world's richest man repeatedly met with a convicted sex offender. What Epstein offered or held over Gates has never been disclosed.",
            desc:"Bill Gates maintained contact with Epstein years after his 2008 conviction. The relationship extended to plans for Epstein to manage a Gates charitable fund. Gates Foundation chief scientific adviser Boris Nikolic was named as backup executor of Epstein's will without his knowledge. Melinda Gates warned her husband. The Epstein connection was cited in the Gates divorce.",
            evidence:"Multiple townhouse meetings 2011-2013. Nikolic named in will. Melinda Gates warnings. Divorce proceedings. $2M MIT donation via Epstein. Flight on Epstein plane.",
            link:"Gates met a convicted sex offender repeatedly, was warned by his wife, and considered giving Epstein control of a fund. What Epstein offered or held over Gates has never been disclosed."},

        {id:"musk", label:"Elon Musk", type:"suspicious", radius:14,
      agency:"TESLA / SPACEX / X (TWITTER)",
      role:"CEO · Begged to Visit Island · Massage Arranged · Enabled CSAM Flood",
      status:"NAMED IN FILES",
      networth:"~$230B",
      desc:"Elon Reeve Musk is the world's richest person. Email threads in Epstein's Jmail archive show Musk actively sought to visit Epstein's island and that a massage was arranged for him through Epstein's scheduling assistant. He was photographed with Ghislaine Maxwell at a 2014 Vanity Fair Oscar party. After acquiring Twitter (now X) in 2022, he gutted the platform's trust and safety team, resulting in what the National Center for Missing & Exploited Children, the Internet Watch Foundation, and multiple researchers documented as a historic flood of child sexual abuse material on the platform. Reports of CSAM on X increased by over 200% following the staff cuts. He simultaneously amplified conspiracy theories about child trafficking while his platform became a primary vector for its distribution.",
      intelRole:"The Jmail email thread arranging a massage for Musk through Epstein's operation is documented in the unsealed files. He did not passively appear in a contact book — he actively pursued access to the island and had services arranged for him through Epstein's infrastructure. His subsequent acquisition of Twitter and dismantling of child safety systems created the largest single increase in CSAM distribution on any major platform in internet history. The man who sought Epstein's services now runs the platform that enables the distribution of the abuse those services produced.",
      epsteinLink:"Jmail email thread documents Musk requesting to visit Epstein's island. A massage was arranged for him through Epstein's assistant. Photographed with Ghislaine Maxwell at 2014 Vanity Fair event. After acquiring Twitter/X, gutted trust and safety teams — NCMEC reported a historic increase in CSAM on the platform. He amplifies anti-trafficking rhetoric while running the platform with the worst child safety record of any major social network.",
      significance:"The world's richest man sought access to Epstein's island, had a massage arranged through Epstein's operation, and now runs a platform that has become the largest vector for child sexual abuse material on the mainstream internet. The email evidence is documented. The CSAM explosion is documented. The hypocrisy is architectural.",
      evidence:"Jmail email thread arranging island visit and massage — unsealed court documents. 2014 Ghislaine Maxwell photograph — Getty Images. Twitter/X trust and safety team gutting — documented by former staff and SEC filings. NCMEC CSAM report increase post-acquisition — published statistics. Internet Watch Foundation reports. Stanford Internet Observatory analysis.",
      link:"He emailed to get to the island. They arranged a massage. He bought the platform and let the child abuse material flood in. The richest man in the world, connected to both the production and distribution side of the same crime."
    },

        {id:"kravis",label:"Henry Kravis",type:"suspicious",radius:20,
            agency:"KKR & CO",role:"Private Equity Billionaire",status:"NAMED IN FILES",networth:"$10B",
            desc:"KKR co-founder. Signed Epstein birthday book.",evidence:"Signed birthday book."},

        {id:"david_koch",label:"David Koch",type:"suspicious",radius:22,
            agency:"KOCH INDUSTRIES",role:"Billionaire Industrialist",status:"DECEASED (2019)",networth:"$42B (at death)",
            desc:"Signed Epstein birthday book.",evidence:"Signed birthday book."},

        {id:"murdoch",label:"Rupert Murdoch",type:"possibly",radius:34,
            agency:"NEWS CORP / FOX",role:"Media Mogul",status:"NAMED IN FILES",networth:"$17B",
            desc:"Listed in black book. Allegations of killing Epstein stories. Robert Maxwell was his direct rival.",
            evidence:"Black book. Media suppression allegations. Maxwell rivalry.",
            link:"Controlled media that could have exposed Epstein. Robert Maxwell was his rival. Stories were killed."},

        // ═══════════════════════════════════════════════════════
        // TECH / ACADEMIA
        // ═══════════════════════════════════════════════════════

        {id:"joi_ito",label:"Joi Ito",type:"suspicious",radius:16,
            agency:"MIT MEDIA LAB",role:"Director · Concealed Donations",status:"RESIGNED",
            desc:"Concealed $7.5M in Epstein donations to MIT. Labeled Epstein as 'anonymous' donor. Exposed by Ronan Farrow. Resigned September 2019.",
            evidence:"$7.5M concealed donations. Farrow New Yorker exposé. Internal MIT emails. Resigned.",
            link:"$7.5M in hidden money from a convicted sex offender funneled through MIT."},

        {id:"summers",label:"Larry Summers",type:"suspicious",radius:22,
            agency:"US TREASURY / HARVARD",role:"Treasury Secretary · Harvard President",status:"NAMED IN FILES",
            desc:"Harvard accepted $9.1M+ from Epstein. Multiple post-conviction meetings.",
            evidence:"$9.1M Harvard donations. Post-conviction meetings. Flight logs.",
            link:"Harvard took $9.1M. Its president met with Epstein after conviction."},

        {id:"hoffman",label:"Reid Hoffman",type:"suspicious",radius:18,
            agency:"LINKEDIN / GREYLOCK",role:"Tech Billionaire · Introduced Ito to Epstein",status:"NAMED IN FILES",networth:"$2.5B",
            desc:"Introduced Joi Ito to Epstein. Post-conviction meetings. Fundraiser at Epstein's home.",
            evidence:"Ito introduction. Post-conviction meetings. Fundraiser at Epstein residence.",
            link:"Introduced the MIT Media Lab director to a convicted sex offender."},

        {id:"thiel",label:"Peter Thiel",type:"suspicious",radius:24,
            agency:"PALANTIR / FOUNDERS FUND",role:"Tech Billionaire · CIA-Linked",status:"NAMED IN FILES",networth:"$9.4B",
            desc:"Named in files. Palantir co-founded with CIA seed money. Investment network overlap.",
            evidence:"Named in files. Palantir CIA connection. Barak co-investment overlap.",
            link:"CIA-funded surveillance tech billionaire in the Epstein contact network."},

        {id:"brin",label:"Sergey Brin",type:"suspicious",radius:28,
            agency:"GOOGLE / ALPHABET",role:"Google Co-Founder",status:"NAMED IN FILES",networth:"$110B",
            desc:"Named in files. Maxwell social circle overlap.",evidence:"Named in files. Maxwell overlap."},

        {id:"zuckerberg",label:"Mark Zuckerberg",type:"suspicious",radius:32,
            agency:"META",role:"Meta CEO",status:"NAMED IN FILES",networth:"$170B",
            desc:"Named in contact files.",evidence:"Named in contact files."},

        {id:"ellison",label:"Larry Ellison",type:"possibly",radius:30,
            agency:"ORACLE",role:"Oracle Founder",status:"NAMED IN FILES",networth:"$158B",
            desc:"Epstein visited his private Hawaiian island (Lanai).",evidence:"Lanai visit documented."},

        {id:"nicholas_neg",label:"Nicholas Negroponte",type:"suspicious",radius:15,
            agency:"MIT MEDIA LAB",role:"Founder · MIT-Epstein Ties",status:"NAMED IN FILES",
            desc:"MIT Media Lab founder. Part of MIT-Epstein institutional pipeline.",evidence:"MIT-Epstein connection."},

        {id:"minsky",label:"Marvin Minsky",type:"suspicious",radius:16,
            agency:"MIT",role:"AI Pioneer",status:"DECEASED (2016)",
            desc:"Virginia Giuffre alleged she was directed to have sex with Minsky on Epstein's island.",
            evidence:"Giuffre sworn statement.",link:"An AI pioneer, named under oath, on the island."},

        {id:"pinker",label:"Steven Pinker",type:"suspicious",radius:14,
            agency:"HARVARD",role:"Psychologist",status:"NAMED IN FILES",
            desc:"Flew on Lolita Express. Introduced to Epstein by Dershowitz.",
            evidence:"Flight logs. Dershowitz introduction."},

        {id:"chomsky",label:"Noam Chomsky",type:"suspicious",radius:18,
            agency:"MIT",role:"Linguist",status:"NAMED IN FILES",
            desc:"Multiple documented meetings with Epstein after conviction.",
            evidence:"Multiple post-conviction meetings."},

        {id:"krauss",label:"Lawrence Krauss",type:"suspicious",radius:15,
            agency:"ARIZONA STATE UNIVERSITY",role:"Physicist",status:"NAMED IN FILES",
            desc:"Traveled with Epstein post-conviction. Publicly defended Epstein. Own misconduct allegations.",
            evidence:"Post-conviction travel. Public defense. Own allegations."},

        {id:"deepak",label:"Deepak Chopra",type:"suspicious",radius:15,
            agency:"PERSONAL",role:"Author",status:"NAMED IN FILES",
            desc:"Named in contact files.",evidence:"Named in contact files."},

        // ═══════════════════════════════════════════════════════
        // MEDIA / CELEBRITY
        // ═══════════════════════════════════════════════════════

        {id:"copperfield",label:"David Copperfield",type:"suspicious",radius:18,
            agency:"ENTERTAINMENT",role:"Illusionist",status:"NAMED IN FILES",
            desc:"Named by multiple Epstein victims as present at events.",evidence:"Named by Giuffre and others. Flight logs."},

        {id:"woody",label:"Woody Allen",type:"suspicious",radius:20,
            agency:"ENTERTAINMENT",role:"Director",status:"NAMED IN FILES",
            desc:"Dinner with Epstein after conviction. Photographed with Maxwell.",evidence:"Post-conviction dinner. Maxwell photographs."},

        {id:"spacey",label:"Kevin Spacey",type:"suspicious",radius:18,
            agency:"ENTERTAINMENT",role:"Actor",status:"NAMED IN FILES",
            desc:"Flew on Lolita Express with Clinton per flight logs. Multiple separate assault allegations.",evidence:"Flight logs with Clinton."},

        {id:"tucker",label:"Chris Tucker",type:"suspicious",radius:14,
            agency:"ENTERTAINMENT",role:"Actor",status:"NAMED IN FILES",
            desc:"Flew on Lolita Express with Clinton per flight logs.",evidence:"Flight logs."},

        {id:"naomi",label:"Naomi Campbell",type:"suspicious",radius:18,
            agency:"MODELING",role:"Supermodel · Maxwell Circle",status:"NAMED IN FILES",
            desc:"Maxwell social circle. Brunel and Briatore connections.",evidence:"Maxwell connection. Brunel/Briatore ties."},

        {id:"branson",label:"Richard Branson",type:"suspicious",radius:24,
            agency:"VIRGIN GROUP",role:"Billionaire Entrepreneur",status:"NAMED IN FILES",networth:"$3B",
            desc:"2013 email from Epstein: 'bring your harem.' Advised Gates on reputation rehab.",
            evidence:"2013 'bring your harem' email. Gates advice.",link:"'Bring your harem' — Epstein's own words."},

        {id:"tisch",label:"Steven Tisch",type:"suspicious",radius:18,
            agency:"NFL / ENTERTAINMENT",role:"Giants Co-Owner",status:"NAMED IN FILES",
            desc:"400+ mentions in Epstein files. 'Pro or civilian?' email exchange.",
            evidence:"400+ file mentions. 'Pro or civilian?' email.",link:"400 mentions. 'Pro or civilian?' — what does that mean?"},

        {id:"wasserman",label:"Casey Wasserman",type:"suspicious",radius:16,
            agency:"WASSERMAN MEDIA / LA 2028",role:"LA Olympics Head",status:"NAMED IN FILES",
            desc:"2003 flirtatious emails with Maxwell.",evidence:"2003 Maxwell emails."},

        {id:"mort_z",label:"Mort Zuckerman",type:"suspicious",radius:18,
            agency:"NY DAILY NEWS / US NEWS",role:"Media Mogul",status:"NAMED IN FILES",
            desc:"Media mogul named in contact files.",evidence:"Named in contact files."},

        {id:"pritzker",label:"Tom Pritzker",type:"suspicious",radius:20,
            agency:"HYATT HOTELS",role:"Hyatt Chairman",status:"NAMED IN FILES",networth:"$3.5B",
            desc:"Extensive documented correspondence in files.",evidence:"Extensive correspondence."},

        {id:"briatore",label:"Flavio Briatore",type:"suspicious",radius:15,
            agency:"F1 / ENTERTAINMENT",role:"Former F1 Boss",status:"NAMED IN FILES",
            desc:"Signed Epstein birthday book.",evidence:"Signed birthday book."},

        {id:"ari_emanuel",label:"Ari Emanuel",type:"suspicious",radius:20,
            agency:"ENDEAVOR / WME",role:"Hollywood Super-Agent",status:"NAMED IN FILES",
            desc:"Signed Epstein birthday book.",evidence:"Signed birthday book."},

        {id:"stroll",label:"Lawrence Stroll",type:"suspicious",radius:16,
            agency:"ASTON MARTIN F1",role:"F1 Team Owner",status:"NAMED IN FILES",
            desc:"Signed Epstein birthday book.",evidence:"Signed birthday book."},

        {id:"blanchett",label:"Cate Blanchett",type:"suspicious",radius:16,
            agency:"ENTERTAINMENT",role:"Actress",status:"NAMED IN FILES",
            desc:"Signed Epstein birthday book.",evidence:"Signed birthday book."},

        {id:"christy_turlington",label:"Christy Turlington",type:"suspicious",radius:13,
            agency:"MODELING",role:"Supermodel",status:"NAMED IN FILES",
            desc:"Signed Epstein birthday book.",evidence:"Signed birthday book."},

        {id:"itzhak_perlman",label:"Itzhak Perlman",type:"suspicious",radius:14,
            agency:"MUSIC",role:"Violinist",status:"NAMED IN FILES",
            desc:"Signed Epstein birthday book.",evidence:"Signed birthday book."},

        // ═══════════════════════════════════════════════════════
        // OPERATIONAL STAFF
        // ═══════════════════════════════════════════════════════

        {id:"alessi",label:"Juan Alessi",type:"center",radius:13,
            agency:"EPSTEIN ORGANIZATION",role:"Palm Beach Estate Manager",status:"TESTIFIED",
            intelRole:"Managed Epstein's Palm Beach estate for over a decade. Testified in detail about the parade of young girls, Maxwell's hands-on role, and the operational routine of the household.",
            epsteinLink:"Estate manager who witnessed daily operations. Testified about cleaning sex toys after visits, driving girls to the house, and Maxwell's direct involvement in grooming.",
            significance:"One of the few insiders who actually testified. His account confirms the industrial scale of the operation and Maxwell's central role.",
            desc:"Juan Alessi managed Epstein's Palm Beach estate from the early 1990s through 2002. He testified in the Maxwell trial about driving young girls to the property, cleaning up after abuse sessions, and receiving instructions from both Epstein and Maxwell. He described a household manual that instructed staff to 'see nothing, hear nothing, say nothing.' He estimated hundreds of girls came through the property during his tenure.",
            evidence:"Maxwell trial testimony. Household manual. Estimated hundreds of victims at Palm Beach property. Drove victims to estate. Described operational routine in detail.",
            link:"He drove the girls. He cleaned the rooms. He followed the manual that said see nothing. Then he testified."},

        {id:"rodriguez",label:"Alfredo Rodriguez",type:"center",radius:12,
            agency:"EPSTEIN ORGANIZATION",role:"Palm Beach Butler · Stole Black Book",status:"DECEASED — died in prison",
            intelRole:"Epstein's Palm Beach butler who stole the black book and tried to sell it for $50,000. The book contained circled names indicating participants. He was convicted of obstruction — not Epstein. He died in prison of mesothelioma.",
            epsteinLink:"Household staff with direct access. Stole the most important piece of evidence in the case. Circled names of men he witnessed with underage girls.",
            significance:"The butler tried to get the evidence out. The system put him in prison for it. He died there. The men whose names he circled are free.",
            desc:"Alfredo Rodriguez served as Epstein's Palm Beach butler. He stole Epstein's black book — the master contact directory — and attempted to sell it for $50,000, reportedly because he believed law enforcement would not act. He had circled names of men he personally witnessed with underage girls at the property. Rodriguez was convicted of obstruction of justice and sentenced to 18 months. He died in prison of mesothelioma in 2015. The circled names have never been fully investigated.",
            evidence:"Stole black book. Circled names of participants. Convicted of obstruction. Sentenced 18 months. Died in prison 2015. Circled names never investigated.",
            link:"The butler stole the evidence and circled the names of the guilty. He went to prison. He died there. The men he named are free."},

        // ═══════════════════════════════════════════════════════
        // ADDITIONAL POLITICAL — US
        // ═══════════════════════════════════════════════════════

        {id:"schumer",label:"Chuck Schumer",type:"possibly",radius:22,
            agency:"US SENATE",role:"Senate Majority Leader",status:"NAMED IN BLACK BOOK",
            desc:"Named in Epstein's black book.",evidence:"Black book entry.",
            link:"The Senate Majority Leader in the black book."},

        {id:"kerry",label:"John Kerry",type:"possibly",radius:22,
            agency:"US STATE DEPARTMENT",role:"Secretary of State · Senator",status:"NAMED IN FILES",
            desc:"Named in Epstein contact files.",evidence:"Named in contact files.",
            link:"Secretary of State in the contact files."},

        {id:"gore",label:"Al Gore",type:"possibly",radius:26,
            agency:"US VICE PRESIDENCY",role:"Vice President",status:"NAMED IN FILES",
            desc:"Named in Epstein contact files.",evidence:"Named in contact files.",
            link:"The Vice President in the contact files."},

        {id:"powell",label:"Colin Powell",type:"possibly",radius:26,
            agency:"US STATE DEPARTMENT",role:"Secretary of State · General",status:"DECEASED (2021)",
            desc:"Named in Epstein's black book.",evidence:"Black book entry.",
            link:"Secretary of State and four-star general in the black book."},

        {id:"gingrich",label:"Newt Gingrich",type:"possibly",radius:20,
            agency:"US HOUSE",role:"Speaker of the House",status:"NAMED IN FILES",
            desc:"Named in Epstein contact files.",evidence:"Named in contact files.",
            link:"The Speaker of the House in the contact files."},

        {id:"bloomberg",label:"Michael Bloomberg",type:"suspicious",radius:30,
            agency:"BLOOMBERG LP",role:"NYC Mayor · Media Billionaire",status:"NAMED IN BLACK BOOK",networth:"$106B",
            desc:"Named in Epstein's black book. NYC mayor during period Epstein operated freely in Manhattan.",
            evidence:"Black book entry. Mayor during Epstein's NYC operations.",
            link:"The mayor of the city where Epstein trafficked children, in the black book."},

        {id:"perlmutter",label:"Ike Perlmutter",type:"suspicious",radius:18,
            agency:"MARVEL / PALM BEACH",role:"Marvel Chairman · Trump Advisor",status:"NAMED IN FILES",networth:"$5B",
            desc:"Marvel chairman. Palm Beach neighbor of Epstein and Trump. Secretive Trump advisor on VA affairs. Same Palm Beach social circuit.",
            evidence:"Named in files. Palm Beach proximity. Trump advisory role.",
            link:"Marvel chairman operating in the same Palm Beach circle as Epstein and Trump."},

        // ═══════════════════════════════════════════════════════
        // ADDITIONAL POLITICAL — INTERNATIONAL
        // ═══════════════════════════════════════════════════════

        {id:"sarkozy",label:"Nicolas Sarkozy",type:"suspicious",radius:28,
            agency:"FRENCH REPUBLIC",role:"Former President of France",status:"NAMED IN FILES",
            desc:"Named in Epstein files. Maxwell maintained extensive Paris social circle. Brunel operated MC2 from Paris.",
            evidence:"Named in contact files. Paris connection. Maxwell/Brunel Paris operations.",
            link:"The French president whose country was a primary operational base for Epstein's European pipeline."},

        {id:"albert_monaco",label:"Prince Albert of Monaco",type:"suspicious",radius:22,
            agency:"MONACO",role:"Sovereign Prince",status:"NAMED IN FILES",
            desc:"Maxwell social circle. Named in contact files.",
            evidence:"Named in contact files. Maxwell overlap.",
            link:"Another sovereign in the Maxwell social circle."},

        {id:"olmert",label:"Ehud Olmert",type:"suspicious",radius:20,
            agency:"STATE OF ISRAEL",role:"Former PM of Israel",status:"NAMED IN FILES",
            desc:"Israeli PM 2006-2009. Wexner/Mega Group connections. In office during Epstein's 2008 NPA. Attended Robert Maxwell's funeral.",
            evidence:"Wexner/Mega Group ties. PM during NPA period.",
            link:"The Israeli PM in office when Epstein got his sweetheart deal."},

        {id:"peres",label:"Shimon Peres",type:"suspicious",radius:24,
            agency:"STATE OF ISRAEL",role:"Former President · PM of Israel",status:"DECEASED (2016)",
            desc:"Attended Robert Maxwell's state funeral in Israel. Israeli president and PM with direct Mossad oversight. Named in files.",
            evidence:"Robert Maxwell funeral attendance. State-level intelligence connections. Named in files.",
            link:"He attended the funeral of the man who recruited Epstein into Mossad."},

        // ═══════════════════════════════════════════════════════
        // MODELING PIPELINE
        // ═══════════════════════════════════════════════════════

        {id:"gerald_marie",label:"Gerald Marie",type:"suspicious",radius:16,
            agency:"ELITE MODEL MANAGEMENT",role:"European Director · Multiple Assault Allegations",status:"UNDER INVESTIGATION",
            desc:"Ran Elite Model Management's European operations under Casablancas. Multiple sexual assault allegations from models spanning decades. French investigation opened 2020. Brunel's direct colleague in the modeling pipeline.",
            evidence:"Elite Model Management Europe. Assault allegations from multiple models. French investigation 2020. Casablancas/Brunel connection.",
            link:"Casablancas built the agency. Marie ran Europe. Brunel ran MC2 with Epstein's money. The same pipeline."},

        {id:"zampolli",label:"Paolo Zampolli",type:"suspicious",radius:13,
            agency:"ID MODEL MANAGEMENT",role:"Model Agent · Introduced Melania to Trump",status:"NAMED IN FILES",
            desc:"Italian model agent who introduced Melania Knauss to Donald Trump. Operated in the same New York modeling circles as Brunel and Casablancas. Epstein social circle.",
            evidence:"Named in files. Modeling industry overlap. Introduced Melania to Trump.",
            link:"The model agent who connected Trump to his future wife operated in the same circles as Epstein's recruiters."},

        // ═══════════════════════════════════════════════════════
        // ADDITIONAL MEDIA / CELEBRITY
        // ═══════════════════════════════════════════════════════

        {id:"diller",label:"Barry Diller",type:"suspicious",radius:22,
            agency:"IAC / EXPEDIA",role:"Media Mogul",status:"NAMED IN FILES",networth:"$4B",
            desc:"Named in Epstein files. Maxwell social circle. Major media/internet figure.",
            evidence:"Named in files. Maxwell social overlap.",
            link:"Another media billionaire in the Maxwell circle."},

        {id:"weinstein",label:"Harvey Weinstein",type:"center",radius:24,
            agency:"MIRAMAX / WEINSTEIN COMPANY",role:"Convicted Predator · Parallel Operation",status:"CONVICTED",
            intelRole:"Convicted sex offender who ran a parallel predator operation using the same infrastructure: elite legal teams, private intelligence (Black Cube), media suppression, and the modeling/entertainment pipeline. Maxwell social overlap. Shared attorney David Boies.",
            epsteinLink:"Parallel operation with shared infrastructure. Both used Boies Schiller. Both used Black Cube (ex-Mossad). Maxwell attended Weinstein events. Same modeling industry pipeline. Same media suppression playbook.",
            significance:"Weinstein proves the Epstein pattern was not unique — it was a template. Elite predators used the same lawyers, the same spies, and the same media kill mechanisms.",
            desc:"Harvey Weinstein was convicted of sexual assault in both New York (2020) and Los Angeles (2022). His operation shared remarkable structural overlap with Epstein's: he employed Boies Schiller Flexner as attorneys, who hired Black Cube (ex-Mossad) to surveil and discredit accusers. Maxwell attended Weinstein events. The same modeling and entertainment industry that fed Epstein's pipeline was Weinstein's hunting ground. His decades of impunity demonstrate the same institutional protection pattern.",
            evidence:"Convicted NY 2020, LA 2022. Black Cube hired through Boies. Maxwell social overlap. Shared legal infrastructure. Modeling/entertainment pipeline overlap. Media suppression documented by Ronan Farrow.",
            link:"Same lawyers. Same spies. Same industry. Same impunity — until there wasn't."},

        {id:"lauer",label:"Matt Lauer",type:"suspicious",radius:16,
            agency:"NBC",role:"TV Anchor",status:"NAMED IN FILES",
            desc:"Named in Epstein files. Fired from NBC for sexual misconduct. NBC killed Ronan Farrow's Weinstein exposé.",
            evidence:"Named in files. NBC misconduct. NBC killed Farrow story.",
            link:"Named in the files. His network killed the story that could have exposed the predator network."},

        {id:"charlie_rose",label:"Charlie Rose",type:"suspicious",radius:15,
            agency:"CBS / PBS",role:"TV Anchor",status:"NAMED IN FILES",
            desc:"Named in Epstein contact files. Fired from CBS for sexual harassment.",
            evidence:"Named in contact files. Own misconduct allegations.",
            link:"Another anchor in the files with his own misconduct history."},

            // ═══════════════════════════════════════════════════════
        // ADDITIONAL TECH / ACADEMIA
        // ═══════════════════════════════════════════════════════

        {id:"nowak",label:"Martin Nowak",type:"suspicious",radius:14,
            agency:"HARVARD",role:"Evolutionary Biologist",status:"NAMED IN FILES",
            desc:"Ran Harvard's Program for Evolutionary Dynamics, which received $6.5M from Epstein. Maintained relationship post-conviction. Named his institute's building after Epstein donor.",
            evidence:"$6.5M Epstein donation to Harvard program. Post-conviction relationship. Named building.",
            link:"$6.5M from a convicted sex offender to study evolution. The building was named after the donor."},

        {id:"seth_lloyd",label:"Seth Lloyd",type:"suspicious",radius:13,
            agency:"MIT",role:"Quantum Computing Pioneer",status:"NAMED IN FILES",
            desc:"MIT physicist who accepted $225K from Epstein post-conviction. Visited Epstein in jail. Later apologized.",
            evidence:"$225K post-conviction funding. Prison visit. Public apology.",
            link:"He visited Epstein in jail and took his money. Then he apologized."},

        {id:"church",label:"George Church",type:"suspicious",radius:15,
            agency:"HARVARD",role:"Geneticist",status:"NAMED IN FILES",
            desc:"Harvard geneticist who attended Epstein dinners post-conviction. Discussions about eugenics and genetic engineering documented. Epstein was interested in 'seeding the human race' from his New Mexico ranch.",
            evidence:"Post-conviction dinner attendance. Eugenics discussions documented. Epstein's breeding program interest.",
            link:"A Harvard geneticist discussing eugenics at dinner with a sex trafficker who wanted to seed the human race."},

        {id:"lessig",label:"Lawrence Lessig",type:"suspicious",radius:14,
            agency:"HARVARD LAW",role:"Law Professor",status:"NAMED IN FILES",
            desc:"Accepted Epstein money routed through Joi Ito and MIT. Later disclosed and apologized.",
            evidence:"Epstein money through MIT/Ito pipeline. Public disclosure and apology.",
            link:"The money laundered through MIT reached Harvard Law."},

        // ═══════════════════════════════════════════════════════
        // US INTELLIGENCE / DOJ / FBI
        // ═══════════════════════════════════════════════════════

        {id:"mueller",label:"Robert Mueller",type:"suspicious",radius:26,
            agency:"FEDERAL BUREAU OF INVESTIGATION",role:"FBI Director 2001-2013",status:"NAMED IN FILES",
            intelRole:"FBI Director during the entire Palm Beach investigation and 2008 NPA. The Bureau possessed extensive evidence of Epstein's trafficking operation — victim interviews, flight logs, surveillance — and took no meaningful action for years.",
            epsteinLink:"FBI Director while Bureau sat on Palm Beach evidence. No federal prosecution during his tenure despite overwhelming evidence. FBI's inaction enabled the NPA.",
            significance:"The FBI under Mueller had everything needed to prosecute Epstein federally and did nothing. The question is whether this was incompetence or instruction.",
            desc:"Robert Mueller served as FBI Director from 2001 to 2013, spanning the entire period of the Palm Beach investigation and the 2008 NPA. The FBI had extensive evidence — victim testimony, flight logs, surveillance records — and took no meaningful federal action. Epstein received a county-level plea deal while the FBI sat on federal-level evidence of an international trafficking operation.",
            evidence:"FBI Director during Palm Beach investigation. Bureau possessed evidence. No federal action taken. NPA signed during tenure.",
            link:"The FBI had everything. The FBI Director did nothing. For twelve years."},

        {id:"freeh",label:"Louis Freeh",type:"suspicious",radius:22,
            agency:"FBI / FREEH GROUP",role:"Former FBI Director · Epstein's Private Contractor",status:"NAMED IN FILES",
            intelRole:"FBI Director 1993-2001, during Epstein's peak operational years. After leaving the FBI, was hired by Epstein as a private security consultant. A former FBI Director on a sex trafficker's payroll.",
            epsteinLink:"FBI Director during Epstein's rise. Later hired by Epstein as private security contractor. Paid by Epstein post-conviction.",
            significance:"The former head of the FBI was on Epstein's payroll. This is not a coincidence — it's a protection racket.",
            desc:"Louis Freeh served as FBI Director from 1993 to 2001. After leaving office, he founded the Freeh Group and was hired by Epstein as a private security and investigative consultant. The former director of the agency that should have been investigating Epstein was instead working for him.",
            evidence:"FBI Director 1993-2001. Freeh Group hired by Epstein. Post-FBI employment by Epstein documented.",
            link:"The FBI Director became the sex trafficker's private security consultant. That's not a revolving door — it's a protection service."},

        {id:"berman",label:"Geoffrey Berman",type:"suspicious",radius:16,
            agency:"SDNY",role:"US Attorney · Re-Arrested Epstein",status:"FIRED BY BARR",
            intelRole:"SDNY US Attorney who authorized the 2019 re-arrest of Epstein on federal charges. Fired by AG Barr during the investigation. Wrote a book describing Barr's interference.",
            epsteinLink:"Authorized Epstein's 2019 federal arrest. Fired by Barr mid-investigation. Described DOJ interference in his book.",
            significance:"The prosecutor who actually arrested Epstein was fired by the AG whose father hired Epstein. Berman's account describes active interference from the top of the DOJ.",
            desc:"Geoffrey Berman served as US Attorney for SDNY and authorized the July 2019 re-arrest of Jeffrey Epstein on federal sex trafficking charges. Attorney General William Barr attempted to fire Berman in June 2020 — during the ongoing investigation into Epstein's network. Berman initially refused to leave and was removed by Trump. In his book 'Holding the Line,' Berman described Barr's attempts to interfere with SDNY investigations.",
            evidence:"Authorized 2019 Epstein arrest. Fired by Barr June 2020. Book 'Holding the Line' documenting interference. Trump removal.",
            link:"He arrested Epstein. He was fired by Epstein's protector's son. He wrote a book about the interference."},

        {id:"strauss",label:"Audrey Strauss",type:"suspicious",radius:13,
            agency:"SDNY",role:"Acting US Attorney",status:"CLOSED CASE",
            desc:"Replaced Berman at SDNY. Oversaw Maxwell arrest but no further co-conspirator charges. Case effectively closed after Maxwell conviction.",
            evidence:"Replaced Berman. Maxwell arrest. No additional charges.",
            link:"She replaced the fired prosecutor and charged exactly one more person. Then it stopped."},

        {id:"rosenstein",label:"Rod Rosenstein",type:"possibly",radius:18,
            agency:"US DEPARTMENT OF JUSTICE",role:"Deputy Attorney General",status:"NAMED IN FILES",
            desc:"Deputy AG under Barr. Oversaw SDNY during critical Epstein period. Kirkland & Ellis connection.",
            evidence:"DAG during Epstein period. Kirkland & Ellis ties.",
            link:"Another Kirkland & Ellis lawyer at the top of the DOJ during the Epstein case."},

        // ═══════════════════════════════════════════════════════
        // FOREIGN INTELLIGENCE
        // ═══════════════════════════════════════════════════════

        {id:"ostrovsky",label:"Victor Ostrovsky",type:"suspicious",radius:14,
            agency:"MOSSAD",role:"Former Mossad Officer · Whistleblower",status:"WHISTLEBLOWER",
            desc:"Former Mossad case officer who wrote 'By Way of Deception' exposing Mossad operations. Corroborates the Maxwell-Mossad connection and the use of sexual blackmail as intelligence tradecraft.",
            evidence:"Published accounts. Mossad background confirmed. Corroborates Ben-Menashe account.",
            link:"A second Mossad officer confirming what Ben-Menashe said."},

        {id:"lebedev",label:"Alexander Lebedev",type:"suspicious",radius:18,
            agency:"RUSSIAN INTELLIGENCE / MEDIA",role:"Oligarch · KGB Officer · Media Owner",status:"NAMED IN FILES",
            desc:"Former KGB officer turned oligarch. Owns the Evening Standard and Independent newspapers. Maxwell social circle. His son Evgeny was given a UK peerage by Boris Johnson despite MI5 concerns.",
            evidence:"KGB background. Maxwell social overlap. UK media ownership. Peerage controversy.",
            link:"A KGB officer in the Maxwell social circle who now owns British newspapers."},

        {id:"deripaska",label:"Oleg Deripaska",type:"suspicious",radius:20,
            agency:"RUSSIAN INTELLIGENCE / RUSAL",role:"Oligarch · Manafort Connection",status:"NAMED IN FILES",
            desc:"Russian oligarch with documented intelligence connections. Paul Manafort's business partner. FBI informant. Intersects with the Epstein network through the Russia-Maxwell-intelligence nexus.",
            evidence:"Intelligence connections. Manafort partnership. FBI informant. Maxwell network overlap.",
            link:"Russian intelligence, American politics, and the Maxwell network all in one oligarch."},

        // ═══════════════════════════════════════════════════════
        // PRIVATE INTELLIGENCE
        // ═══════════════════════════════════════════════════════

        {id:"black_cube",label:"Black Cube",type:"suspicious",radius:16,
            agency:"PRIVATE INTELLIGENCE",role:"Ex-Mossad Firm · Hired to Surveil Accusers",status:"OPERATIONAL",
            intelRole:"Israeli private intelligence firm founded by former Mossad and Aman (military intelligence) operatives. Hired by Boies Schiller on behalf of Harvey Weinstein to surveil and discredit accusers. The same tradecraft used against Epstein's victims.",
            desc:"Black Cube is a private intelligence firm staffed by former Mossad and Israeli military intelligence operatives. Hired through David Boies's firm to investigate and undermine Harvey Weinstein's accusers — using fake identities, surveillance, and psychological manipulation. Exposed by Ronan Farrow. Represents the privatization of intelligence tradecraft to protect predators.",
            evidence:"Boies Schiller hiring documented. Farrow New Yorker exposé. Ex-Mossad staffing. Weinstein operation. Accusers surveilled.",
            link:"Former Mossad agents hired by an American law firm to stalk rape victims. This is the infrastructure of impunity."},

        {id:"kroll",label:"Jules Kroll",type:"suspicious",radius:15,
            agency:"KROLL ASSOCIATES",role:"Private Intelligence Pioneer",status:"NAMED IN FILES",
            desc:"Founded Kroll Associates, the world's largest private intelligence firm. Maxwell used Kroll's services. The firm operated at the intersection of corporate intelligence and state espionage.",
            evidence:"Maxwell connection. Private intelligence firm. Intelligence-adjacent operations.",
            link:"The private intelligence firm the Maxwells used."},

    ],

    // ═══════════════════════════════════════════════════════
    // ALL LINKS
    // ═══════════════════════════════════════════════════════
    links: [
        // Epstein → Core Ring
        {source:"epstein", target:"maxwell_g", strength:1.0},
        {source:"epstein", target:"kellen", strength:0.9},
        {source:"epstein", target:"marcinkova", strength:0.8},
        {source:"epstein", target:"groff", strength:0.8},
        {source:"epstein", target:"brunel", strength:0.8},
        {source:"epstein", target:"wexner", strength:0.9},
        {source:"epstein", target:"black", strength:0.7},
        {source:"epstein", target:"staley", strength:0.8},
        {source:"epstein", target:"dimon", strength:0.5},
        {source:"epstein", target:"hoffenberg", strength:0.6},
        {source:"epstein", target:"dershowitz", strength:0.8},
        {source:"epstein", target:"acosta", strength:0.7},
        {source:"epstein", target:"starr", strength:0.7},
        {source:"epstein", target:"boies", strength:0.6},
        {source:"epstein", target:"barr_d", strength:0.4},
        {source:"epstein", target:"barr_w", strength:0.5},
        {source:"epstein", target:"robert_maxwell", strength:0.7},
        {source:"epstein", target:"eva_dubin", strength:0.5},
        {source:"epstein", target:"dubin", strength:0.6},
        {source:"epstein", target:"nader", strength:0.4},
        {source:"epstein", target:"casablancas", strength:0.5},

        // Epstein → Operational Staff
        {source:"epstein", target:"alessi", strength:0.7},
        {source:"epstein", target:"rodriguez", strength:0.6},

        // Epstein → Politics
        {source:"epstein", target:"trump", strength:0.7},
        {source:"epstein", target:"clinton", strength:0.8},
        {source:"epstein", target:"andrew", strength:0.7},
        {source:"epstein", target:"barak", strength:0.7},
        {source:"epstein", target:"mitchell", strength:0.5},
        {source:"epstein", target:"richardson", strength:0.5},
        {source:"epstein", target:"blair", strength:0.4},
        {source:"epstein", target:"mandelson", strength:0.7},
        {source:"epstein", target:"sultan_brunei", strength:0.4},
        {source:"epstein", target:"sultan_ahmed", strength:0.3},
        {source:"epstein", target:"ferguson", strength:0.4},
        {source:"epstein", target:"mette_marit", strength:0.5},
        {source:"epstein", target:"lajcak", strength:0.3},
        {source:"epstein", target:"kissinger", strength:0.5},
        {source:"epstein", target:"lutnick", strength:0.6},
        {source:"epstein", target:"burkle", strength:0.4},
        {source:"epstein", target:"barrack", strength:0.5},
        {source:"epstein", target:"bannon", strength:0.5},
        {source:"epstein", target:"king_charles", strength:0.4},
        {source:"epstein", target:"putin", strength:0.3},
        {source:"epstein", target:"mbs", strength:0.3},
        {source:"epstein", target:"netanyahu", strength:0.3},
        {source:"epstein", target:"schumer", strength:0.3},
        {source:"epstein", target:"kerry", strength:0.3},
        {source:"epstein", target:"gore", strength:0.3},
        {source:"epstein", target:"powell", strength:0.3},
        {source:"epstein", target:"gingrich", strength:0.3},
        {source:"epstein", target:"bloomberg", strength:0.4},
        {source:"epstein", target:"perlmutter", strength:0.4},
        {source:"epstein", target:"sarkozy", strength:0.4},
        {source:"epstein", target:"albert_monaco", strength:0.3},
        {source:"epstein", target:"olmert", strength:0.3},
        {source:"epstein", target:"peres", strength:0.3},

        // Epstein → Finance
        {source:"epstein", target:"gates", strength:0.7},
        {source:"epstein", target:"musk", strength:0.6},
        {source:"epstein", target:"kravis", strength:0.4},
        {source:"epstein", target:"david_koch", strength:0.4},
        {source:"epstein", target:"branson", strength:0.6},
        {source:"epstein", target:"ellison", strength:0.4},

        // Epstein → Tech/Academia
        {source:"epstein", target:"joi_ito", strength:0.6},
        {source:"epstein", target:"summers", strength:0.5},
        {source:"epstein", target:"hoffman", strength:0.5},
        {source:"epstein", target:"thiel", strength:0.6},
        {source:"epstein", target:"brin", strength:0.4},
        {source:"epstein", target:"zuckerberg", strength:0.4},
        {source:"epstein", target:"nicholas_neg", strength:0.4},
        {source:"epstein", target:"minsky", strength:0.4},
        {source:"epstein", target:"pinker", strength:0.3},
        {source:"epstein", target:"chomsky", strength:0.3},
        {source:"epstein", target:"krauss", strength:0.5},
        {source:"epstein", target:"deepak", strength:0.3},
        {source:"epstein", target:"nowak", strength:0.5},
        {source:"epstein", target:"seth_lloyd", strength:0.4},
        {source:"epstein", target:"church", strength:0.4},
        {source:"epstein", target:"lessig", strength:0.3},

        // Epstein → Media/Celebrity
        {source:"epstein", target:"copperfield", strength:0.5},
        {source:"epstein", target:"woody", strength:0.4},
        {source:"epstein", target:"spacey", strength:0.4},
        {source:"epstein", target:"tucker", strength:0.3},
        {source:"epstein", target:"naomi", strength:0.3},
        {source:"epstein", target:"tisch", strength:0.6},
        {source:"epstein", target:"wasserman", strength:0.4},
        {source:"epstein", target:"mort_z", strength:0.4},
        {source:"epstein", target:"pritzker", strength:0.5},
        {source:"epstein", target:"briatore", strength:0.4},
        {source:"epstein", target:"ari_emanuel", strength:0.4},
        {source:"epstein", target:"stroll", strength:0.3},
        {source:"epstein", target:"diller", strength:0.4},
        {source:"epstein", target:"lauer", strength:0.3},
        {source:"epstein", target:"charlie_rose", strength:0.3},

        // Epstein → Intelligence
        {source:"epstein", target:"ben_menashe", strength:0.3},
        {source:"epstein", target:"khashoggi", strength:0.4},
        {source:"epstein", target:"dougan", strength:0.2},
        {source:"epstein", target:"brennan", strength:0.3},
        {source:"epstein", target:"petraeus", strength:0.3},
        {source:"epstein", target:"murdoch", strength:0.4},
        {source:"epstein", target:"freeh", strength:0.5},

        // Epstein → DOJ/FBI
        {source:"epstein", target:"mueller", strength:0.4},
        {source:"epstein", target:"berman", strength:0.5},

        // Epstein → Modeling Pipeline
        {source:"epstein", target:"gerald_marie", strength:0.4},
        {source:"epstein", target:"zampolli", strength:0.3},

        // Epstein → Private Intelligence
        {source:"epstein", target:"kroll", strength:0.3},

        // Maxwell connections
        {source:"maxwell_g", target:"andrew", strength:0.7},
        {source:"maxwell_g", target:"brunel", strength:0.7},
        {source:"maxwell_g", target:"naomi", strength:0.5},
        {source:"maxwell_g", target:"woody", strength:0.4},
        {source:"maxwell_g", target:"wasserman", strength:0.4},
        {source:"maxwell_g", target:"brin", strength:0.4},
        {source:"maxwell_g", target:"casablancas", strength:0.5},
        {source:"maxwell_g", target:"minsky", strength:0.4},
        {source:"maxwell_g", target:"ferguson", strength:0.4},
        {source:"maxwell_g", target:"robert_maxwell", strength:1.0},
        {source:"maxwell_g", target:"kellen", strength:0.7},
        {source:"maxwell_g", target:"marcinkova", strength:0.6},
        {source:"maxwell_g", target:"groff", strength:0.6},
        {source:"maxwell_g", target:"albert_monaco", strength:0.4},
        {source:"maxwell_g", target:"diller", strength:0.4},
        {source:"maxwell_g", target:"weinstein", strength:0.4},
        {source:"maxwell_g", target:"lebedev", strength:0.3},
        {source:"maxwell_g", target:"alessi", strength:0.5},
        {source:"maxwell_g", target:"sarkozy", strength:0.3},

        // Core ring internal
        {source:"eva_dubin", target:"dubin", strength:0.9},
        {source:"kellen", target:"marcinkova", strength:0.5},
        {source:"kellen", target:"groff", strength:0.5},
        {source:"kellen", target:"alessi", strength:0.4},
        {source:"kellen", target:"rodriguez", strength:0.4},
        {source:"brunel", target:"casablancas", strength:0.6},
        {source:"brunel", target:"gerald_marie", strength:0.6},
        {source:"staley", target:"dimon", strength:0.5},
        {source:"acosta", target:"dershowitz", strength:0.5},
        {source:"starr", target:"dershowitz", strength:0.8},
        {source:"starr", target:"acosta", strength:0.6},
        {source:"boies", target:"dershowitz", strength:0.5},
        {source:"boies", target:"maxwell_g", strength:0.4},
        {source:"boies", target:"weinstein", strength:0.5},
        {source:"boies", target:"black_cube", strength:0.7},
        {source:"barr_w", target:"barr_d", strength:0.9},
        {source:"barr_w", target:"acosta", strength:0.5},
        {source:"robert_maxwell", target:"ben_menashe", strength:0.6},
        {source:"robert_maxwell", target:"khashoggi", strength:0.5},
        {source:"robert_maxwell", target:"ostrovsky", strength:0.4},
        {source:"robert_maxwell", target:"peres", strength:0.5},
        {source:"robert_maxwell", target:"lebedev", strength:0.4},
        {source:"robert_maxwell", target:"kroll", strength:0.4},
        {source:"wexner", target:"barak", strength:0.5},
        {source:"wexner", target:"olmert", strength:0.3},
        {source:"casablancas", target:"gerald_marie", strength:0.7},
        {source:"gerald_marie", target:"zampolli", strength:0.3},
        {source:"alessi", target:"rodriguez", strength:0.5},
        {source:"weinstein", target:"black_cube", strength:0.7},

        // Political cross-links
        {source:"clinton", target:"spacey", strength:0.4},
        {source:"clinton", target:"tucker", strength:0.4},
        {source:"clinton", target:"burkle", strength:0.5},
        {source:"clinton", target:"gore", strength:0.5},
        {source:"starr", target:"clinton", strength:0.5},
        {source:"trump", target:"lutnick", strength:0.4},
        {source:"trump", target:"bannon", strength:0.5},
        {source:"trump", target:"barrack", strength:0.5},
        {source:"trump", target:"nader", strength:0.3},
        {source:"trump", target:"perlmutter", strength:0.5},
        {source:"trump", target:"zampolli", strength:0.4},
        {source:"barr_w", target:"trump", strength:0.5},
        {source:"barr_w", target:"berman", strength:0.6},
        {source:"barr_w", target:"rosenstein", strength:0.5},
        {source:"barr_w", target:"mueller", strength:0.4},
        {source:"berman", target:"strauss", strength:0.7},
        {source:"andrew", target:"ferguson", strength:0.5},
        {source:"king_charles", target:"andrew", strength:1.0},
        {source:"king_charles", target:"ferguson", strength:0.7},
        {source:"mandelson", target:"blair", strength:0.6},
        {source:"murdoch", target:"trump", strength:0.6},
        {source:"murdoch", target:"blair", strength:0.5},
        {source:"murdoch", target:"king_charles", strength:0.4},
        {source:"murdoch", target:"robert_maxwell", strength:0.7},
        {source:"bloomberg", target:"trump", strength:0.3},
        {source:"sarkozy", target:"brunel", strength:0.4},
        {source:"sarkozy", target:"blair", strength:0.3},

        // Intelligence cross-links
        {source:"putin", target:"robert_maxwell", strength:0.6},
        {source:"putin", target:"mbs", strength:0.4},
        {source:"putin", target:"lebedev", strength:0.6},
        {source:"putin", target:"deripaska", strength:0.6},
        {source:"mbs", target:"khashoggi", strength:0.7},
        {source:"mbs", target:"nader", strength:0.6},
        {source:"mbs", target:"sultan_brunei", strength:0.5},
        {source:"mbs", target:"trump", strength:0.6},
        {source:"kissinger", target:"robert_maxwell", strength:0.4},
        {source:"kissinger", target:"khashoggi", strength:0.5},
        {source:"comey", target:"mueller", strength:0.5},
        {source:"mueller", target:"freeh", strength:0.5},
        {source:"netanyahu", target:"barak", strength:0.7},
        {source:"netanyahu", target:"murdoch", strength:0.5},
        {source:"netanyahu", target:"kissinger", strength:0.4},
        {source:"netanyahu", target:"trump", strength:0.6},
        {source:"netanyahu", target:"robert_maxwell", strength:0.5},
        {source:"netanyahu", target:"wexner", strength:0.4},
        {source:"netanyahu", target:"olmert", strength:0.5},
        {source:"netanyahu", target:"peres", strength:0.5},
        {source:"ben_menashe", target:"ostrovsky", strength:0.4},
        {source:"lebedev", target:"deripaska", strength:0.4},
        {source:"black_cube", target:"ostrovsky", strength:0.3},
        {source:"freeh", target:"mueller", strength:0.5},

        // Tech cross-links
        {source:"hoffman", target:"joi_ito", strength:0.5},
        {source:"hoffman", target:"zuckerberg", strength:0.4},
        {source:"hoffman", target:"musk", strength:0.3},
        {source:"joi_ito", target:"nicholas_neg", strength:0.5},
        {source:"joi_ito", target:"summers", strength:0.3},
        {source:"joi_ito", target:"lessig", strength:0.4},
        {source:"joi_ito", target:"seth_lloyd", strength:0.3},
        {source:"dershowitz", target:"pinker", strength:0.3},
        {source:"barak", target:"thiel", strength:0.5},
        {source:"barak", target:"barrack", strength:0.4},
        {source:"thiel", target:"zuckerberg", strength:0.3},
        {source:"thiel", target:"musk", strength:0.3},
        {source:"musk", target:"brin", strength:0.3},
        {source:"gates", target:"branson", strength:0.4},
        {source:"ellison", target:"gates", strength:0.4},
        {source:"ellison", target:"brin", strength:0.3},
        {source:"ellison", target:"thiel", strength:0.4},
        {source:"nowak", target:"summers", strength:0.3},
        {source:"nowak", target:"church", strength:0.4},
        {source:"church", target:"nowak", strength:0.4},

        // Media cross-links
        {source:"briatore", target:"naomi", strength:0.5},
        {source:"briatore", target:"stroll", strength:0.4},
        {source:"christy_turlington", target:"naomi", strength:0.4},
        {source:"brunel", target:"christy_turlington", strength:0.3},
        {source:"diller", target:"murdoch", strength:0.4},
        {source:"lauer", target:"charlie_rose", strength:0.3},
        {source:"weinstein", target:"lauer", strength:0.3},
    ]
};

const nodeIds = new Set(graphData.nodes.map(n => n.id));
graphData.links.forEach((l, i) => {
    if (!nodeIds.has(l.source)) console.log(`Link ${i}: missing source "${l.source}"`);
    if (!nodeIds.has(l.target)) console.log(`Link ${i}: missing target "${l.target}"`);
});