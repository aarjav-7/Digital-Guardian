const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv")
dotenv.config()

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  let content = `
  Main menu
  
  WikipediaThe Free Encyclopedia
  Search Wikipedia
  Search
  Create account
  Log in
  
  Personal tools
  Photograph your local culture, help Wikipedia and win!Hide
  Main Page
  Talk
  Read
  View source
  View history
  
  Tools
  Welcome to Wikipedia,
  the free encyclopedia that anyone can edit.
  6,800,548 articles in English
  From today's featured article
  William Y. Slack
  William Y. Slack (August 1, 1816 – March 21, 1862) was an American lawyer, politician and soldier. A peacetime lawyer, Slack served in the Missouri General Assembly from 1842 to 1843 and saw combat in the Mexican–American War. After the outbreak of the American Civil War in April 1861, Slack, who held pro-slavery views, supported the Confederate cause. When the Missouri State Guard was formed the next month to oppose the Union Army, he was appointed as a brigadier general, commanding its 4th Division. After participating in the Battle of Carthage in July, he fought in the Battle of Wilson's Creek on August 10, where he suffered a bad hip wound. He transferred to the Confederate Army in late 1861 as a colonel. On March 7, 1862, during the Battle of Pea Ridge, he was wounded again. Infection set in, and he died on March 21. He was posthumously promoted to brigadier general in the Confederate Army on April 17; the Confederate Senate may not have known that he was dead. (Full article...)
  
  Recently featured: American Bank Note Company Printing PlantGeorge GriffithAttalus I
  ArchiveBy emailMore featured articlesAbout
  Did you know ...
  Safe House Black History Museum
  Safe House Black History Museum
  ... that one of the buildings that house the Safe House Museum (pictured) was where Martin Luther King Jr. hid from the Ku Klux Klan on 21 March 1968, just weeks before he was assassinated?
  ... that Zoé Clauzure won the 2023 Junior Eurovision Song Contest with a song about school bullying?
  ... that Cobb Power Station has the highest-elevation hydroelectric storage lake in New Zealand?
  ... that Woodrow Wilson, Hermann Collitz, and Carey Thomas all taught at Bryn Mawr College before becoming presidents?
  ... that Xebec Corporation's partnership with IBM was both their greatest achievement and their eventual downfall?
  ... that Frank Fitzgerald was the general manager of an NFL team that played under four names in five years?
  ... that DeeDo secured a license to feature characters from the manga series Doraemon on its products?
  ... that My Chemical Romance and Fall Out Boy are not emo bands, according to Is This Band Emo?
  ArchiveStart a new articleNominate an article
  In the news
  Vladimir Putin in 2023
  Vladimir Putin
  Vladimir Putin (pictured) is announced as the winner of the Russian presidential election, securing a fifth term.
  In Portugal, the Democratic Alliance wins the most seats in a snap legislative election.
  At the Academy Awards, Oppenheimer wins seven awards, including Best Picture.
  Japanese manga artist Akira Toriyama, author of Dragon Ball, dies at the age of 68.
  Ongoing: Haitian crisisIsrael–Hamas warMyanmar civil warRed Sea crisisRussian invasion of Ukraine timeline
  Recent deaths: BrolyLegsKonstantin KoltsovThomas P. StaffordYong Soon MinSteve HarleyRose Dugdale
  Nominate an article
  On this day
  March 21: Fast of Esther (Judaism, 2024); Oltenia Day in Romania
  
  Scottish Cup
  Scottish Cup
  1874 – Queen's Park defeated Clydesdale 2–0 in the final of the inaugural Scottish Cup (trophy pictured).
  1913 – More than 360 were killed and 20,000 homes were destroyed in the Great Dayton Flood in Dayton, Ohio, U.S.
  1968 – War of Attrition: The Battle of Karameh took place between the Israel Defense Forces and allied troops of the Palestine Liberation Organization and the Jordanian Armed Forces.
  1980 – The American soap opera Dallas aired the episode "A House Divided", which led to eight months of international speculation on "Who shot J.R.?"
  2019 – A major explosion at a chemical plant in Yancheng, China, killed 78 people and injured 640 others.
  Ælla of Northumbria and Osberht of Northumbria (d. 867)Alice Henry (b. 1857)Al Williamson (b. 1931)Chinua Achebe (d. 2013)
  More anniversaries: March 20March 21March 22
  ArchiveBy emailList of days of the year
  Today's featured picture
  Arabis hirsuta	
  Arabis hirsuta, also known as the hairy rock-cress, is a flowering plant of the genus Arabis in the family Brassicaceae. In previous North American works, this species has been broadly defined to include plants native to Europe, Asia, and the northern half of North America, but the name is now more often used to describe a narrower subgroup. The species grows on chalk slopes, dunes, hedgebanks, walls and rocks. Arabis hirsuta grows to a height of up to around 75 centimetres (30 inches) and is usually unbranched, with a long spike of flowers and stiff hairs. The lower leaves of the plant form a rosette, while the stalkless upper leaves clasp the stem. Flowering is from June to August. It has white petals, cylindrical fruits pressed close to the stem and reddish brown seeds. This A. hirsuta plant at the start of its flowering phase was photographed in Keila, Estonia.
  
  Photograph credit: Ivar Leidus
  
  Recently featured: Crested caracaraMuseu de les Ciències Príncipe FelipeAcanthite
  ArchiveMore featured pictures
  Other areas of Wikipedia
  Community portal – The central hub for editors, with resources, links, tasks, and announcements.
  Village pump – Forum for discussions about Wikipedia itself, including policies and technical issues.
  Site news – Sources of news about Wikipedia and the broader Wikimedia movement.
  Teahouse – Ask basic questions about using or editing Wikipedia.
  Help desk – Ask questions about using or editing Wikipedia.
  Reference desk – Ask research questions about encyclopedic topics.
  Content portals – A unique way to navigate the encyclopedia.
  Wikipedia's sister projects
  Wikipedia is written by volunteer editors and hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other volunteer projects:
  
  Commons logo Commons
  Free media repository
  MediaWiki logo MediaWiki
  Wiki software development
  Meta-Wiki logo Meta-Wiki
  Wikimedia project coordination
  Wikibooks logo Wikibooks
  Free textbooks and manuals
  Wikidata logo Wikidata
  Free knowledge base
  Wikinews logo Wikinews
  Free-content news
  Wikiquote logo Wikiquote
  Collection of quotations
  Wikisource logo Wikisource
  Free-content library
  Wikispecies logo Wikispecies
  Directory of species
  Wikiversity logo Wikiversity
  Free learning tools
  Wikivoyage logo Wikivoyage
  Free travel guide
  Wiktionary logo Wiktionary
  Dictionary and thesaurus
  Wikipedia languages
  This Wikipedia is written in English. Many other Wikipedias are available; some of the largest are listed below.
  
  1,000,000+ articles
  العربيةمصرىDeutschEspañolFrançaisItalianoNederlands日本語PolskiPortuguêsРусскийSvenskaУкраїнськаTiếng Việt中文
  250,000+ articles
  Bahasa IndonesiaBahasa MelayuBân-lâm-gúБългарскиCatalàČeštinaDanskEsperantoEuskaraفارسی‎עבריתՀայերեն한국어MagyarNorsk bokmålRomânăSrpskiSrpskohrvatskiSuomiTürkçe
  50,000+ articles
  AsturianuবাংলাBosanskiکوردیEestiΕλληνικάSimple EnglishFryskGaeilgeGalegoHrvatskiქართულიKurdîLatviešuLietuviųമലയാളംМакедонскиမြန်မာဘာသာNorsk nynorskਪੰਜਾਬੀShqipSlovenčinaSlovenščinaไทยతెలుగుاردوOʻzbekcha / ўзбекча
  
  48 languages
  Text is available under the Creative Commons Attribution-ShareAlike License 4.0; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.
  Privacy policyAbout WikipediaDisclaimersContact WikipediaCode of ConductDevelopersStatisticsCookie statementMobile viewWikimedia FoundationPowered by MediaWiki
  Toggle limited content width`;
  const prompt = `Check whether the data given in following page is explicit or not.
    If it can be viewed by children under 18 return yes otherwise return no. Answer should only be in single word.${content}`;
  try
  {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  catch(e){
    console.log(e);
  }
}

run();