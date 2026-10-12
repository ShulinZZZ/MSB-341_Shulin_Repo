// Sample data for the prototype. These are not real people, reviews or prices.

const PRICE = { half: 45, full: 80 }; // USD per group (up to 4), placeholder to test reactions
const SERVICE_FEE_RATE = 0.15;        // PengPal fee on top of the host rate, placeholder

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

const LANGUAGES = ["English", "Spanish", "French", "German", "Portuguese", "Korean"];

const HOSTS = [
  // ---- Chongqing ----
  {
    id: "lin", city: "chongqing", name: "Lin", age: 24, color: "#E84632",
    studied: { place: "Manchester", country: "UK" },
    languages: ["English", "Mandarin", "Chongqing dialect"],
    interests: ["history", "views", "food"],
    specialties: ["Hongya Cave", "City history", "Cable car"],
    bio: "I grew up near Jiefangbei and came back after my master's in Manchester. I love showing people the old stairways most visitors walk right past, and I can explain why the city looks like this.",
    trips: 31, rating: 4.9,
    reviews: [
      { who: "Emma, UK", stars: 5, text: "Lin set up Alipay with me in ten minutes. Without that we couldn't have bought anything on day one." },
      { who: "Daniel, US", stars: 5, text: "We'd never have found the stairway noodle place. Felt like visiting a friend." },
      { who: "Sofia, Spain", stars: 4, text: "Great history stories. The hills are real, wear good shoes!" },
    ],
  },
  {
    id: "qin", city: "chongqing", name: "Qin", age: 23, color: "#D99A1E",
    studied: { place: "Melbourne", country: "AU" },
    languages: ["English", "Mandarin"],
    interests: ["food", "views", "nightlife"],
    specialties: ["Shancheng lanes", "Hotpot", "Night views"],
    bio: "Food first, always. I'll take you to the hotpot place my family goes to and teach you how to order mild without anyone laughing at you. Studied in Melbourne, so I know what Western stomachs can handle.",
    trips: 18, rating: 4.8,
    reviews: [
      { who: "Liam, Australia", stars: 5, text: "Qin ordered for us at three places and showed us how to scan the QR menus ourselves after." },
      { who: "Hannah, Canada", stars: 5, text: "Best night of our trip. The view from the lanes at night is unreal." },
      { who: "Tom, UK", stars: 4, text: "Hotpot was spicy even at mild. Qin warned us. Worth it." },
    ],
  },
  {
    id: "hao", city: "chongqing", name: "Hao", age: 26, color: "#18345A",
    studied: { place: "Toronto", country: "CA" },
    languages: ["English", "Mandarin", "French"],
    interests: ["nightlife", "food", "shopping"],
    specialties: ["Jiefangbei nights", "Street food", "Light rail through buildings"],
    bio: "I studied engineering in Toronto, so of course I'll show you the train that goes through an apartment building. Evenings are my thing: street food, night markets, rooftop bars.",
    trips: 12, rating: 4.7,
    reviews: [
      { who: "Chloe, Canada", stars: 5, text: "Hao speaks French too, which made my mom so happy." },
      { who: "Marcus, US", stars: 5, text: "Got DiDi working for us and we used it the rest of the week." },
      { who: "Ana, Brazil", stars: 4, text: "Fun night, lots of food. Would book again." },
    ],
  },
  {
    id: "yue", city: "chongqing", name: "Yue", age: 25, color: "#2F7D6D",
    studied: { place: "Los Angeles", country: "US" },
    languages: ["English", "Mandarin", "Spanish"],
    interests: ["shopping", "history", "food"],
    specialties: ["Ciqikou old town", "Local markets", "Tea houses"],
    bio: "Back home after four years at college in LA. I like slow days: old town, a tea house, a market where you can try everything. I can also help you buy a local SIM or eSIM top-up.",
    trips: 9, rating: 4.9,
    reviews: [
      { who: "Jake, US", stars: 5, text: "Yue was so patient with us. The tea house was a highlight." },
      { who: "Lucía, Mexico", stars: 5, text: "She speaks Spanish! My parents loved her." },
      { who: "Ben, Germany", stars: 5, text: "Very organized, sent a plan the night before." },
    ],
  },
  // ---- Shanghai ----
  {
    id: "mei", city: "shanghai", name: "Mei", age: 24, color: "#E84632",
    studied: { place: "London", country: "UK" },
    languages: ["English", "Mandarin", "Shanghainese"],
    interests: ["history", "food", "shopping"],
    specialties: ["Former French Concession", "Lane houses", "Soup dumplings"],
    bio: "Born in a Shanghai lane house, studied in London. I'll walk you through the neighborhoods where people actually live and get you the best xiaolongbao for under three dollars.",
    trips: 27, rating: 4.9,
    reviews: [
      { who: "Olivia, UK", stars: 5, text: "Mei made Shanghai feel small and friendly. Loved the lane houses." },
      { who: "Ryan, US", stars: 5, text: "She sorted our transit QR code and the metro was easy after that." },
      { who: "Julie, France", stars: 4, text: "Very good food tips. We went back to the dumpling place twice." },
    ],
  },
  {
    id: "jun", city: "shanghai", name: "Jun", age: 27, color: "#18345A",
    studied: { place: "Sydney", country: "AU" },
    languages: ["English", "Mandarin"],
    interests: ["nightlife", "views"],
    specialties: ["The Bund at night", "Rooftop bars", "Huangpu ferry"],
    bio: "Studied in Sydney, now work in Lujiazui. After work I show visitors the Bund from the 2-yuan ferry instead of the expensive cruise, then find a rooftop with a view.",
    trips: 15, rating: 4.8,
    reviews: [
      { who: "Chris, Australia", stars: 5, text: "The ferry tip alone was worth it. Great night out." },
      { who: "Mia, US", stars: 5, text: "Jun knew exactly which rooftop had no line." },
      { who: "Felix, Germany", stars: 4, text: "Relaxed and fun. Good English." },
    ],
  },
  {
    id: "xin", city: "shanghai", name: "Xin", age: 23, color: "#2F7D6D",
    studied: { place: "Boston", country: "US" },
    languages: ["English", "Mandarin", "Korean"],
    interests: ["food", "shopping", "views"],
    specialties: ["Street food", "Wet markets", "Design shops"],
    bio: "Just graduated in Boston. I'm a market person: wet markets in the morning, design shops in the afternoon, and I'll show you how to order on a QR menu yourself.",
    trips: 7, rating: 5.0,
    reviews: [
      { who: "Ji-woo, South Korea", stars: 5, text: "Xin speaks Korean so well. Felt so comfortable." },
      { who: "Sarah, US", stars: 5, text: "I can order food on my own now. That was my biggest fear." },
      { who: "Noah, Canada", stars: 5, text: "Super friendly and great energy." },
    ],
  },
  {
    id: "rui", city: "shanghai", name: "Rui", age: 26, color: "#D99A1E",
    studied: { place: "Berlin", country: "DE" },
    languages: ["English", "Mandarin", "German"],
    interests: ["history", "views", "nightlife"],
    specialties: ["Yu Garden", "Museums", "Jazz bars"],
    bio: "Master's in Berlin, now back in Shanghai. Mornings at Yu Garden before the crowds, afternoons at the Shanghai Museum, evenings at the old jazz bars.",
    trips: 11, rating: 4.8,
    reviews: [
      { who: "Lena, Germany", stars: 5, text: "Rui explained everything in German when I got tired. So kind." },
      { who: "James, UK", stars: 5, text: "Beating the crowds at Yu Garden was a great call." },
      { who: "Isabel, Brazil", stars: 4, text: "Lots of history. The jazz bar was fun." },
    ],
  },
];
