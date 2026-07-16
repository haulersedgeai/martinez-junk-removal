// Single source of truth for NAP (Name, Address, Phone) and business facts.
// Keep identical everywhere it's rendered for local SEO consistency.

export const business = {
  // Legal/registered name — stays "Martinez Junk Removal LLC" (LLC + domain).
  name: "Martinez Junk Removal LLC",
  legalName: "Martinez Junk Removal LLC",
  // Visible wordmark in the header/footer. Flip this (and displayTagline) to
  // rebrand the site — e.g. to "Martinez Dumpsters" — with no other changes.
  displayName: "Martinez Junk Removal",
  displayTagline: "Dumpster Rental",
  owner: "Mario Martinez",
  phoneDisplay: "(562) 639-5747",
  phoneTel: "+15626395747",
  phoneSms: "sms:+15626395747",
  email: "Mmartinez5656@gmail.com",
  founded: 2019,
  foundingDate: "2019-01-01",
  city: "Chino",
  state: "CA",
  county: "San Bernardino County",
  serviceCounties: [
    "Los Angeles County",
    "Orange County",
    "San Bernardino County",
    "Riverside County",
  ],
  hoursDisplay: "Monday–Saturday, 6:00 AM – 5:00 PM",
  hoursClosed: "Closed Sunday",
  sameDayNote: "Same-day service available",
  googleRating: {
    value: 5.0,
    count: 58,
  },
  yelpRating: {
    value: 4.9,
    count: 52,
  },
  payments: ["Cash", "Credit Card", "Zelle", "Venmo"],
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100046683292122",
    instagram: "https://www.instagram.com/martinez_junk_removal_/",
    // Active Yelp listing (52 reviews, 4.9★) — the old "martinez-junk-removal-pomona"
    // listing is no longer the one in use.
    yelp: "https://www.yelp.com/biz/martinez-dumpsters-pomona-2",
  },
  // Client-provided Google Business Profile share link for "Martinez Dumpsters"
  // (resolves to the Google knowledge panel/listing where reviews live).
  googleReviewUrl: "https://share.google/7HgdQIefKiFe23BjF",
  domain: "martinezjunkremoval.net",
} as const;

export const totalReviewCount = business.googleRating.count + business.yelpRating.count;

export type Dumpster = {
  size: string;
  slug: string;
  bestFor: string;
  priceLow: number;
  priceHigh: number;
  weightLimit: string;
  rentalDays: string;
};

// Sizes, pricing, and weight limits confirmed by the client. Prices are
// ranges — exact price is confirmed with a free quote (varies by location
// and material).
export const dumpsters: Dumpster[] = [
  {
    size: "10 Yard",
    slug: "10-yard",
    bestFor: "Heavy debris — concrete, dirt, asphalt, grass, tile",
    priceLow: 650,
    priceHigh: 750,
    weightLimit: "No weight limit — fill to the fill line",
    rentalDays: "5–7 days",
  },
  {
    size: "20 Yard",
    slug: "20-yard",
    bestFor: "Household trash & general debris (trash only)",
    priceLow: 700,
    priceHigh: 800,
    weightLimit: "3-ton weight limit",
    rentalDays: "5–7 days",
  },
  {
    size: "40 Yard",
    slug: "40-yard",
    bestFor: "Large trash & general debris (trash only)",
    priceLow: 850,
    priceHigh: 1000,
    weightLimit: "5-ton weight limit",
    rentalDays: "5–7 days",
  },
];

export const fees = {
  rentalPeriod: "5–7 days",
  extraDayFee: 45,
  overweightFeePerTon: 100,
  prohibitedItems: [
    "Chemicals",
    "Paint",
    "Tires",
    "Fire extinguishers",
    "Propane tanks",
    "Liquids",
    "Biohazard materials",
  ],
  allowedExamples: [
    "Household junk",
    "Furniture",
    "General trash",
    "Remodel debris",
    "Concrete, dirt, asphalt, grass & tile (10-yard only)",
  ],
} as const;

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What dumpster sizes do you offer?",
    answer:
      "10, 20, and 40-yard roll-off dumpsters. The 10-yard is for heavy material like concrete, dirt, asphalt, grass, and tile; the 20- and 40-yard are for household and general trash.",
  },
  {
    question: "How much does a dumpster cost?",
    answer:
      "10-yard: $650–$750. 20-yard: $700–$800. 40-yard: $850–$1,000. Final price depends on your location and material — get a free quote for your exact price.",
  },
  {
    question: "How long is the rental period?",
    answer: "5–7 days is included with every dumpster. Extra days are $45/day.",
  },
  {
    question: "Is there a weight limit?",
    answer:
      "The 20-yard has a 3-ton limit and the 40-yard a 5-ton limit — $100 per additional ton over that. The 10-yard has no weight limit, just fill to the fill line.",
  },
  {
    question: "What can't I put in the dumpster?",
    answer:
      "Chemicals, paint, tires, fire extinguishers, propane tanks, liquids, and biohazard materials. Ask us if you're unsure — call or text.",
  },
  {
    question: "Do I need a permit for street placement?",
    answer:
      "If the dumpster goes on your driveway, no permit is typically needed. Placement on a public street usually requires a city permit — check with your city or ask us and we'll point you in the right direction.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer: "Often yes — call or text to check today's availability.",
  },
  {
    question: "What areas do you deliver to?",
    answer: "LA, Orange, San Bernardino, and Riverside counties, based out of Chino.",
  },
  {
    question: "How does pricing work?",
    answer: "Flat rate, no hidden fees. The price we quote is the price you pay.",
  },
];

export const cities: string[] = [
  "Alhambra", "Anaheim", "Arcadia", "Azusa", "Baldwin Park", "Bell Gardens", "Brea", "Burbank",
  "Chino", "Chino Hills", "City of Industry", "Commerce", "Compton", "Corona", "Covina", "Cypress",
  "Diamond Bar", "Downey", "Duarte", "East Los Angeles", "Eastvale", "El Monte", "Fontana", "Fullerton",
  "Garden Grove", "Gardena", "Glendale", "Glendora", "Hacienda Heights", "Inglewood", "Irvine",
  "La Cañada Flintridge", "La Crescenta", "La Habra", "La Mirada", "La Palma", "La Verne", "Lakewood",
  "Mira Loma", "Monrovia", "Montclair", "Montebello", "Monterey Park", "Montrose", "Norco", "Norwalk",
  "Orange", "Pasadena", "Pico Rivera", "Placentia", "Pomona", "Rancho Cucamonga", "Riverside",
  "Rowland Heights", "Rosemead", "San Dimas", "San Gabriel", "Santa Fe Springs", "Sierra Madre",
  "South El Monte", "South Pasadena", "Stanton", "Temple City", "Torrance", "Upland", "Walnut",
  "West Covina", "Westminster", "Whittier", "Yorba Linda",
];
