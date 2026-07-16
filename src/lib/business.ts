// Single source of truth for NAP (Name, Address, Phone) and business facts.
// Keep identical everywhere it's rendered for local SEO consistency.

export const business = {
  name: "Martinez Junk Removal LLC",
  legalName: "Martinez Junk Removal LLC",
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
  hours: "Open 7 days · Same-day service available",
  formerName: "JunkGuys LA",
  rating: {
    value: 5.0,
    count: 58,
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100046683292122",
    instagram: "https://www.instagram.com/martinez_junk_removal_/",
    yelp: "https://www.yelp.com/biz/martinez-junk-removal-pomona",
  },
  domain: "martinezjunkremoval.net",
} as const;

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  hasDeepPage: boolean;
};

export const services: Service[] = [
  {
    slug: "junk-removal",
    title: "Junk Removal",
    shortDescription:
      "Residential & commercial junk removal — we do the lifting and loading, you just point.",
    description:
      "Full-service residential and commercial junk removal. Furniture, appliances, household clutter, garage/attic/shed cleanouts, hot-tub & shed teardown, yard/green waste, e-waste, and general debris — we do the lifting and loading, you point, we haul.",
    bullets: [
      "Furniture & household clutter",
      "Appliances & e-waste",
      "Garage, attic & shed cleanouts",
      "Hot-tub & shed teardown",
      "Yard & green waste",
      "General construction debris",
    ],
    hasDeepPage: true,
  },
  {
    slug: "dumpster-rental",
    title: "Roll-Off Dumpster Rental",
    shortDescription:
      "Driveway-friendly bins for renovations, cleanouts, roofing & moves — flat rate, no hidden fees.",
    description:
      "Driveway-friendly roll-off bins for renovations, cleanouts, roofing jobs and moves. We also offer concrete/dirt containers and low-boy dumpsters for heavy debris. Clean bins, on-time drop-off & pickup, flat rate with no hidden fees, and reasonable extended-day pricing.",
    bullets: [
      "10, 15, 20 & 40 yard bins*",
      "Concrete & dirt containers",
      "Low-boy dumpsters for heavy debris",
      "Flat rate, no hidden fees",
      "On-time drop-off & pickup",
      "Reasonable extended-day pricing",
    ],
    hasDeepPage: true,
  },
  {
    slug: "appliance-removal",
    title: "Appliance Removal",
    shortDescription: "Fridges, washers, dryers, stoves, water heaters & AC units.",
    description:
      "We haul away fridges, washers, dryers, stoves, water heaters and AC units — safely disconnected and removed.",
    bullets: ["Refrigerators & freezers", "Washers & dryers", "Stoves & ovens", "Water heaters", "AC units"],
    hasDeepPage: false,
  },
  {
    slug: "construction-demolition-debris",
    title: "Construction & Demolition Debris",
    shortDescription: "Concrete, drywall, plaster, tile, wood flooring & remodel debris — multi-ton jobs welcome.",
    description:
      "Concrete, drywall, plaster, tile, wood flooring and general remodel debris — multi-ton jobs welcome.",
    bullets: ["Concrete & masonry", "Drywall & plaster", "Tile & wood flooring", "Multi-ton jobs welcome"],
    hasDeepPage: false,
  },
  {
    slug: "cleanouts",
    title: "Garage / Estate / Home Cleanouts",
    shortDescription: "Full-property clear-outs, move-outs & pre-sale cleanouts.",
    description:
      "Full-property clear-outs, move-outs and pre-sale cleanouts handled start to finish.",
    bullets: ["Garage cleanouts", "Estate cleanouts", "Move-out cleanouts", "Pre-sale cleanouts"],
    hasDeepPage: false,
  },
  {
    slug: "office-commercial-cleanouts",
    title: "Office & Commercial Cleanouts",
    shortDescription: "Offices, retail, property managers & contractors.",
    description:
      "Cleanouts for offices, retail spaces, property managers and contractors — scheduled around your business.",
    bullets: ["Office cleanouts", "Retail spaces", "Property managers", "Contractor jobsites"],
    hasDeepPage: false,
  },
  {
    slug: "yard-green-waste",
    title: "Yard & Green Waste Removal",
    shortDescription: "Branches, dirt, and landscaping debris.",
    description: "Branches, dirt and landscaping debris hauled away quickly.",
    bullets: ["Branches & trimmings", "Dirt removal", "Landscaping debris"],
    hasDeepPage: false,
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    shortDescription: "Couches, mattresses, desks — single items or whole rooms.",
    description: "Couches, mattresses, desks — single items or entire rooms of furniture hauled away.",
    bullets: ["Couches & sofas", "Mattresses", "Desks & office furniture", "Whole-room removal"],
    hasDeepPage: false,
  },
  {
    slug: "light-demolition-haul-away",
    title: "Light Demolition & Haul-Away",
    shortDescription: "A one-stop shop for demo + removal: carpet tear-out to concrete flower beds.",
    description:
      "A true one-stop shop for demo and removal: carpet tear-out and glue scraping to sub-floor, concrete/brick flower beds, jackhammering embedded concrete, boulder & dirt removal, tree trimmings and trunks.",
    bullets: [
      "Carpet tear-out & glue scraping",
      "Concrete/brick flower bed removal",
      "Jackhammering embedded concrete",
      "Boulder & dirt removal",
      "Tree trimmings & trunks",
    ],
    hasDeepPage: false,
  },
  {
    slug: "hot-tub-spa-removal",
    title: "Hot Tub, Spa & Jacuzzi Removal",
    shortDescription: "Full teardown including safe electrical disconnect and haul-away.",
    description: "Full hot tub, spa and jacuzzi teardown including safe electrical disconnect and haul-away.",
    bullets: ["Safe electrical disconnect", "Full teardown", "Complete haul-away"],
    hasDeepPage: false,
  },
  {
    slug: "heavy-bulky-item-removal",
    title: "Heavy & Bulky Item Removal",
    shortDescription: "Pianos, safes, exercise equipment & other awkward heavy items.",
    description:
      "Pianos, safes, exercise equipment and other awkward heavy items handled by an experienced crew.",
    bullets: ["Pianos", "Safes", "Exercise equipment", "Other heavy/awkward items"],
    hasDeepPage: false,
  },
];

export type Review = {
  name: string;
  quote: string;
  source: "Google" | "Yelp";
};

export const reviews: Review[] = [
  { name: "Carlos M.", source: "Google", quote: "Mario is the man! Squeezed me in with a last-minute bin rental, dropped it off next day, courteous driver. Can't recommend enough." },
  { name: "John (cowboy texan), general contractor", source: "Google", quote: "As a GC I've used many dumpster vendors — most add hidden fees after pickup. Martinez has on-time delivery, a sharp flat rate, and reasonable extended-day pricing." },
  { name: "Ashley H.", source: "Google", quote: "Top-tier on communication, scheduling, and reliability. No one else I'd use in the area. Always on time." },
  { name: "Adriana T.", source: "Google", quote: "So glad I hired them. Everything removed within 2 hours, and very affordable." },
  { name: "William A.", source: "Google", quote: "Excellent, professional business — went the extra mile with same-day delivery. 10+ out of 10." },
  { name: "Kathy K.", source: "Google", quote: "Mario and his crew are amazing. On time, quick, good prices, and they left everything spotless." },
  { name: "Steve & Deborah S.", source: "Google", quote: "Responded quickly, sent a clean dumpster, easy to set up and pay online. Very pleased." },
  { name: "Joanna D.", source: "Google", quote: "Excellent communicator, followed through on everything. Removed concrete, tile, and wood flooring — great job." },
  { name: "Don L.", source: "Google", quote: "Punctual, fast, and the cheapest for our junk removal. Highly recommend." },
  { name: "Neil N.", source: "Google", quote: "They do more than haul junk — removed 1,000 sq ft of carpet, scraped glue to the sub-floor, and even jackhammered out a concrete flower bed. A true one-stop shop for demo and removal." },
  { name: "Matthew A.", source: "Google", quote: "Needed a dumpster ASAP after moving. Waste Management said 48 hours just to call back — Mario contacted me immediately and delivered. Don't waste your time, call Mario." },
  { name: "Lucia S.", source: "Google", quote: "Solo quiero agradecer a Mario por su rápida respuesta. Llegaron puntuales, muy rápidos, profesionales y limpios. Muy satisfecha, los recomiendo 100%." },
  { name: "Brian A.", source: "Yelp", quote: "Accommodated me on one hour's notice and hauled my entire bedroom set. Punctual, professional, very competitive rates for the Chino Hills area." },
  { name: "Janet S.", source: "Yelp", quote: "Rented a concrete container — friendly, professional, and fast. Picked up our filled container with no problems." },
];

export const faqs = [
  {
    question: "How much does junk removal cost?",
    answer:
      "Flat-rate pricing based on the job — no hidden fees. Text photos to (562) 639-5747 for the fastest quote.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Often yes — call or text to check today's availability.",
  },
  {
    question: "What can't you take?",
    answer:
      "Ask us — we handle most household, construction, and yard debris; certain hazardous materials may be restricted.",
  },
  {
    question: "Do you rent dumpsters?",
    answer:
      "Yes — clean roll-off bins, flat rate, on-time drop-off and pickup, reasonable extended-day pricing.",
  },
  {
    question: "What areas do you serve?",
    answer: "LA, Orange, San Bernardino, and Riverside counties, based out of Chino.",
  },
  {
    question: "Do you do commercial jobs?",
    answer:
      "Yes — offices, contractors, property managers, and estate/move-out cleanouts.",
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
