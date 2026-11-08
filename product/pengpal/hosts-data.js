// Sample data for the prototype. These are not real people, reviews or prices.

const PRICE = { visit: 24, half: 40, full: 80 }; // USD per group (up to 4), placeholder to test reactions

// Booking lengths, shortest first. `time` is the sample meeting window on trip day.
const DURATIONS = {
  visit: { label: "Visit", short: "visit", hours: 2, time: "10:00 – 12:00" },
  half: { label: "Half day", short: "half day", hours: 4, time: "9:00 – 13:00" },
  full: { label: "Full day", short: "full day", hours: 8, time: "9:00 – 17:00" },
};
const SERVICE_FEE_RATE = 0.15;        // PengPal fee on top of the host rate, placeholder

// Turn on once real Shanghai hosts are recruited (discovery/PengPal/hosts.md). Shows the
// "intro call with a real host" option on the commitment screen.
const REAL_HOSTS_READY = false;

const CITIES = {
  chongqing: {
    name: "Chongqing",
    zh: "重庆",
    tagline: "Hotpot, mountain lanes and a city built in 3D",
    meetingPoint: { name: "Jiefangbei Monument, south side", zh: "解放碑 南侧", note: "Street level. Look for the clock tower." },
    cityTip: {
      title: "Know that GPS can't tell which floor you're on",
      tip: "Chongqing is stacked. A map pin can be 10 floors above or below you. Send me a photo of what you see and I'll guide you.",
    },
  },
  shanghai: {
    name: "Shanghai",
    zh: "上海",
    tagline: "Lane houses, soup dumplings and the Bund at night",
    meetingPoint: { name: "People's Square Metro, Exit 1", zh: "人民广场 地铁站 1号口", note: "Lines 1, 2 and 8 all stop here." },
    cityTip: {
      title: "Get a Shanghai transit QR code",
      tip: "Inside Alipay, search 'Shanghai Metro'. Then you scan to ride. No ticket machines, no cash.",
    },
  },
};

const INTERESTS = [
  { id: "food", label: "Food", icon: "🍜" },
  { id: "history", label: "History", icon: "🏯" },
  { id: "nightlife", label: "Nightlife", icon: "🌃" },
  { id: "views", label: "City views", icon: "📸" },
  { id: "shopping", label: "Markets & shopping", icon: "🛍️" },
];

// Home country -> time zone used to show intro-call times in the traveler's own time.
const COUNTRIES = [
  { id: "us", name: "United States", tz: "America/New_York", studyKey: "US" },
  { id: "uk", name: "United Kingdom", tz: "Europe/London", studyKey: "UK" },
  { id: "ca", name: "Canada", tz: "America/Toronto", studyKey: "CA" },
  { id: "au", name: "Australia", tz: "Australia/Sydney", studyKey: "AU" },
  { id: "de", name: "Germany", tz: "Europe/Berlin", studyKey: "DE" },
  { id: "fr", name: "France", tz: "Europe/Paris", studyKey: "FR" },
  { id: "br", name: "Brazil", tz: "America/Sao_Paulo", studyKey: "BR" },
  { id: "kr", name: "South Korea", tz: "Asia/Seoul", studyKey: "KR" },
];

// Who's traveling. `badge` shows on matching host cards, `plural` on host profiles.
const TRAVELER_TYPES = [
  { id: "family", label: "Family with kids", icon: "👨‍👩‍👧", badge: "Great with families", plural: "Families with kids" },
  { id: "solo", label: "Solo", icon: "🎒", badge: "Solo-traveler favorite", plural: "Solo travelers" },
  { id: "senior", label: "Senior", icon: "🧓", badge: "Patient with older travelers", plural: "Older travelers" },
  { id: "business", label: "Business", icon: "💼", badge: "Business experience", plural: "Business travelers" },
  { id: "student", label: "Student", icon: "🎓", badge: "Student-friendly", plural: "Students" },
];

const LANGUAGES = ["English", "Spanish", "French", "German", "Portuguese", "Korean"];

// Host photos are free Pexels stock photos (hosts/<id>.jpg), cropped to 256px. The people
// pictured are models, not PengPal hosts. Pexels photo IDs: lin 1645820, qin 8102229,
// hao 5384445, yue 17503453, mei 18999175, jun 26524785, xin 4078393, rui 7651802.
const HOSTS = [
  // ---- Chongqing ----
  {
    id: "lin", city: "chongqing", name: "Lin", age: 24, color: "#E84632",
    studied: { place: "Manchester", country: "UK" },
    languages: ["English", "Mandarin", "Chongqing dialect"],
    interests: ["history", "views", "food"],
    goodFor: ["family", "senior"], gender: "f",
    specialties: ["Hongya Cave", "City history", "Cable car"],
    bio: "I grew up near Jiefangbei and came back after my master's in Manchester. I love showing people the old stairways most visitors walk right past, at whatever pace suits you, and I know which ones have lifts and benches.",
    trips: 31, rating: 4.9,
    reviews: [
      { who: "Emma, UK", stars: 5, text: "Lin set up Alipay with me in ten minutes. Without that we couldn't have bought anything on day one." },
      { who: "Daniel, US", stars: 5, text: "We'd never have found the stairway noodle place. Felt like visiting a friend." },
      { who: "Sofia, Spain", stars: 5, text: "Lin planned around my parents (both over 70): lifts, rest stops, no rushing. They loved it." },
    ],
  },
  {
    id: "qin", city: "chongqing", name: "Qin", age: 23, color: "#D99A1E",
    studied: { place: "Melbourne", country: "AU" },
    languages: ["English", "Mandarin"],
    interests: ["food", "views", "nightlife"],
    goodFor: ["solo", "student"], gender: "f",
    specialties: ["Shancheng lanes", "Hotpot", "Night views"],
    bio: "Food first, always. I'll take you to the hotpot place my family goes to and teach you how to order mild without anyone laughing at you. Studied in Melbourne, so I know what Western stomachs can handle, and how it feels to arrive somewhere new on your own.",
    trips: 18, rating: 4.8,
    reviews: [
      { who: "Liam, Australia", stars: 5, text: "Qin ordered for us at three places and showed us how to scan the QR menus ourselves after." },
      { who: "Hannah, Canada", stars: 5, text: "Best night of our trip. The view from the lanes at night is unreal." },
      { who: "Grace, US", stars: 5, text: "First solo trip abroad. Qin checked in on me all day and I never felt lost." },
    ],
  },
  {
    id: "hao", city: "chongqing", name: "Hao", age: 26, color: "#18345A",
    studied: { place: "Toronto", country: "CA" },
    languages: ["English", "Mandarin", "French"],
    interests: ["nightlife", "food", "shopping"],
    goodFor: ["business", "student"], gender: "m",
    specialties: ["Jiefangbei nights", "Street food", "Light rail through buildings"],
    bio: "I studied engineering in Toronto, so of course I'll show you the train that goes through an apartment building. Evenings are my thing: street food, night markets, rooftop bars. I also help visiting teams with dinners and getting between offices.",
    trips: 12, rating: 4.7,
    reviews: [
      { who: "Chloe, Canada", stars: 5, text: "Hao speaks French too, which made my mom so happy." },
      { who: "Marcus, US", stars: 5, text: "Got DiDi working for us and we used it the rest of the week." },
      { who: "Ana, Brazil", stars: 5, text: "In town for work. Hao sorted taxis to two client meetings, then took me out for street food." },
    ],
  },
  {
    id: "yue", city: "chongqing", name: "Yue", age: 25, color: "#2F7D6D",
    studied: { place: "Los Angeles", country: "US" },
    languages: ["English", "Mandarin", "Spanish"],
    interests: ["shopping", "history", "food"],
    goodFor: ["senior", "family", "solo"], gender: "m",
    specialties: ["Ciqikou old town", "Local markets", "Tea houses"],
    bio: "Back home after four years at college in LA. I like slow days: old town, a tea house, a market where you can try everything. Kids and grandparents welcome, I plan the breaks in. I can also help you buy a local SIM or eSIM top-up.",
    trips: 9, rating: 4.9,
    reviews: [
      { who: "Jake, US", stars: 5, text: "Yue was so patient with our two kids and my dad. The tea house was a highlight." },
      { who: "Lucía, Mexico", stars: 5, text: "He speaks Spanish! My parents loved him." },
      { who: "Ben, Germany", stars: 5, text: "Very organized, sent a plan the night before." },
    ],
  },
  // ---- Shanghai ----
  {
    id: "mei", city: "shanghai", name: "Mei", age: 24, color: "#E84632",
    studied: { place: "London", country: "UK" },
    languages: ["English", "Mandarin", "Shanghainese"],
    interests: ["history", "food", "shopping"],
    goodFor: ["family", "solo"], gender: "f",
    specialties: ["Former French Concession", "Lane houses", "Soup dumplings"],
    bio: "Born in a Shanghai lane house, studied in London. I'll walk you through the neighborhoods where people actually live and get you the best xiaolongbao for under three dollars. I know every lane with a playground, too.",
    trips: 27, rating: 4.9,
    reviews: [
      { who: "Olivia, UK", stars: 5, text: "Mei made Shanghai easy with a 4- and a 7-year-old. She knew where every clean bathroom was." },
      { who: "Ryan, US", stars: 5, text: "She sorted our transit QR code and the metro was easy after that." },
      { who: "Julie, France", stars: 4, text: "Very good food tips. We went back to the dumpling place twice." },
    ],
  },
  {
    id: "jun", city: "shanghai", name: "Jun", age: 27, color: "#18345A",
    studied: { place: "Sydney", country: "AU" },
    languages: ["English", "Mandarin"],
    interests: ["nightlife", "views"],
    goodFor: ["business", "student"], gender: "m",
    specialties: ["The Bund at night", "Rooftop bars", "Huangpu ferry"],
    bio: "Studied in Sydney, now work in Lujiazui. After work I show visitors the Bund from the 2-yuan ferry instead of the expensive cruise, then find a rooftop with a view. If you're here for work, I can help with meetings, taxis and receipts.",
    trips: 15, rating: 4.8,
    reviews: [
      { who: "Chris, Australia", stars: 5, text: "The ferry tip alone was worth it. Great night out." },
      { who: "Mia, US", stars: 5, text: "Jun knew exactly which rooftop had no line." },
      { who: "Felix, Germany", stars: 5, text: "Here for a trade fair. Jun got me to the venue and back every day and found great dinners." },
    ],
  },
  {
    id: "xin", city: "shanghai", name: "Xin", age: 23, color: "#2F7D6D",
    studied: { place: "Boston", country: "US" },
    languages: ["English", "Mandarin", "Korean"],
    interests: ["food", "shopping", "views"],
    goodFor: ["student", "solo"], gender: "f",
    specialties: ["Street food", "Wet markets", "Design shops"],
    bio: "Just graduated in Boston. I'm a market person: wet markets in the morning, design shops in the afternoon, and I'll show you how to order on a QR menu yourself. Students: I know where to eat well for under five dollars.",
    trips: 7, rating: 5.0,
    reviews: [
      { who: "Ji-woo, South Korea", stars: 5, text: "Xin speaks Korean so well. Felt so comfortable." },
      { who: "Sarah, US", stars: 5, text: "I can order food on my own now. That was my biggest fear." },
      { who: "Noah, Canada", stars: 5, text: "Exchange student here. Xin felt like a friend my age, not a guide." },
    ],
  },
  {
    id: "rui", city: "shanghai", name: "Rui", age: 26, color: "#D99A1E",
    studied: { place: "Berlin", country: "DE" },
    languages: ["English", "Mandarin", "German"],
    interests: ["history", "views", "nightlife"],
    goodFor: ["senior", "business"], gender: "m",
    specialties: ["Yu Garden", "Museums", "Jazz bars"],
    bio: "Master's in Berlin, now back in Shanghai. Mornings at Yu Garden before the crowds, afternoons at the Shanghai Museum, evenings at the old jazz bars. I keep a slow pace and explain things twice if you'd like.",
    trips: 11, rating: 4.8,
    reviews: [
      { who: "Lena, Germany", stars: 5, text: "Rui explained everything in German when I got tired. So kind." },
      { who: "James, UK", stars: 5, text: "Beating the crowds at Yu Garden was a great call." },
      { who: "Isabel, Brazil", stars: 5, text: "Took my 68-year-old mother. Rui was so patient and kept the day relaxed." },
    ],
  },
];
