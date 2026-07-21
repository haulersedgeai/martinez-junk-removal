// Central image slot map. Each slot is either a real/stock "photo" (rendered
// with next/image) or a "placeholder" (rendered as a branded PlaceholderBlock
// panel — never a broken <img>, never an empty box).
//
// To swap in a real photo later (e.g. the client's own Yelp/Instagram
// photos — see public/images/real/README.md):
//   1. Drop the file in /public/images/.
//   2. Point the slot's `file`/`path` at it and set `kind` to "photo".
// Every component that consumes these slots (PageHero, GalleryGrid,
// DumpsterCard) already branches on `kind`, so that's the only change needed.

export type ImageSlot = {
  file: string;
  path: string;
  alt: string;
  kind: "placeholder" | "photo";
};

export const imageSlots = {
  // Real photo from the client's old site — an actual Martinez Junk Removal
  // roll-off, branded and on the job. Reused for both hero slots below.
  heroHome: {
    file: "hero-home.jpg",
    path: "/images/hero-home.jpg",
    alt: "Martinez Junk Removal roll-off dumpster staged for delivery on a residential street in Chino, CA",
    kind: "photo",
  },
  heroDumpsterRental: {
    file: "hero-home.jpg",
    path: "/images/hero-home.jpg",
    alt: "Martinez Junk Removal roll-off dumpster ready for delivery",
    kind: "photo",
  },
  heroAbout: {
    file: "hero-about.jpg",
    path: "/images/hero-about.jpg",
    alt: "Martinez Junk Removal crew on a dumpster delivery",
    kind: "placeholder",
  },
  heroServiceArea: {
    file: "hero-service-area.jpg",
    path: "/images/hero-service-area.jpg",
    alt: "Martinez Junk Removal dumpster truck serving the Inland Empire and LA area",
    kind: "placeholder",
  },
  heroContact: {
    file: "hero-contact.jpg",
    path: "/images/hero-contact.jpg",
    alt: "Martinez Junk Removal dumpster truck ready for same-day delivery",
    kind: "placeholder",
  },
  heroReviews: {
    file: "hero-reviews.jpg",
    path: "/images/hero-reviews.jpg",
    alt: "A happy Martinez Junk Removal customer's driveway",
    kind: "placeholder",
  },
  heroFaq: {
    file: "hero-faq.jpg",
    path: "/images/hero-faq.jpg",
    alt: "Roll-off dumpster ready to answer your questions",
    kind: "placeholder",
  },
} as const satisfies Record<string, ImageSlot>;

export type ImageSlotKey = keyof typeof imageSlots;

// "Dumpsters in action" gallery — src/app/page.tsx (home) and
// src/app/dumpster-rental/page.tsx. Real/stock photos first, upgraded
// placeholders fill out the grid until more real job photos are available.
export const galleryImages: (ImageSlot & { caption: string })[] = [
  {
    file: "hero-home.jpg",
    path: "/images/hero-home.jpg",
    alt: "Martinez Junk Removal roll-off dumpster on delivery day",
    kind: "photo",
    caption: "Delivery day",
  },
  {
    file: "gallery-action.jpg",
    path: "/images/gallery-action.jpg",
    alt: "Homeowners loading moving boxes into a roll-off dumpster in their driveway",
    kind: "photo",
    caption: "Loading the bin",
  },
  {
    file: "gallery-loaded.jpg",
    path: "/images/gallery-loaded.jpg",
    alt: "Roll-off dumpster loaded with household debris, ready for pickup",
    kind: "photo",
    caption: "Ready for pickup",
  },
  {
    file: "gallery-jobsite.jpg",
    path: "/images/gallery-jobsite.jpg",
    alt: "Roll-off dumpster staged on a job site during a remodel",
    kind: "placeholder",
    caption: "On the job site",
  },
  {
    file: "gallery-clean-driveway.jpg",
    path: "/images/gallery-clean-driveway.jpg",
    alt: "Clean, empty driveway after dumpster pickup",
    kind: "placeholder",
    caption: "Clean driveway, pickup complete",
  },
] as const;

// Per-size photo header on each DumpsterCard (10/20/40 yard).
export const dumpsterImageSlots: Record<string, ImageSlot> = {
  "10-yard": {
    file: "dumpster-10-yard.jpg",
    path: "/images/dumpster-10-yard.jpg",
    alt: "10-yard roll-off dumpster for heavy debris like concrete, dirt, and tile",
    kind: "placeholder",
  },
  "20-yard": {
    file: "dumpster-20-yard.jpg",
    path: "/images/dumpster-20-yard.jpg",
    alt: "20-yard roll-off dumpster for household trash and general debris",
    kind: "placeholder",
  },
  "40-yard": {
    file: "dumpster-40-yard.jpg",
    path: "/images/dumpster-40-yard.jpg",
    alt: "40-yard roll-off dumpster for large trash and general debris jobs",
    kind: "placeholder",
  },
};

// About page — paired with Mario's pull-quote.
export const aboutActionImage: ImageSlot = {
  file: "hero-home.jpg",
  path: "/images/hero-home.jpg",
  alt: "A Martinez Junk Removal roll-off dumpster on delivery day",
  kind: "photo",
};

// Real owner photos — Mario Martinez on a job site. mario-owner-jobsite-1 is
// the solo lead shot (About page "Meet Mario" + home page trust strip);
// mario-owner-jobsite-2 is the secondary shot with the crew and truck
// (About page, further down).
export const marioOwnerImages: Record<"solo" | "withCrew", ImageSlot> = {
  solo: {
    file: "mario-owner-jobsite-1.jpg",
    path: "/images/real/mario-owner-jobsite-1.jpg",
    alt: "Mario Martinez, owner of Martinez Junk Removal, smiling next to a roll-off dumpster on a job site in Chino, California.",
    kind: "photo",
  },
  withCrew: {
    file: "mario-owner-jobsite-2.jpg",
    path: "/images/real/mario-owner-jobsite-2.jpg",
    alt: "Mario Martinez, owner of Martinez Junk Removal, with a crew member in front of the company's roll-off dumpster truck in Chino, California.",
    kind: "photo",
  },
};
