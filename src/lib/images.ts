// Placeholder image slot map.
//
// Real job photos aren't available yet, so every visual slot renders as a
// labeled gradient block (see <PlaceholderBlock />) instead of a hotlinked
// stock photo. To swap in a real photo later:
//   1. Drop the file in /public/images/ using the `file` name below.
//   2. Change the slot's `kind` to "photo".
//   3. Render with next/image using `path` + `alt` instead of PlaceholderBlock.
//
// Keeping every slot listed here (rather than scattering alt text across
// pages) means a future photo swap is a one-line edit per slot.

export type ImageSlot = {
  file: string;
  path: string;
  alt: string;
  kind: "placeholder" | "photo";
};

export const imageSlots = {
  heroHome: {
    file: "hero-home.jpg",
    path: "/images/hero-home.jpg",
    alt: "Martinez Junk Removal crew loading a truck in Chino, California",
    kind: "placeholder",
  },
  heroJunkRemoval: {
    file: "hero-junk-removal.jpg",
    path: "/images/hero-junk-removal.jpg",
    alt: "Crew hauling furniture and household junk out of a garage",
    kind: "placeholder",
  },
  heroDumpsterRental: {
    file: "hero-dumpster-rental.jpg",
    path: "/images/hero-dumpster-rental.jpg",
    alt: "Clean roll-off dumpster dropped off in a driveway",
    kind: "placeholder",
  },
  heroAbout: {
    file: "hero-about.jpg",
    path: "/images/hero-about.jpg",
    alt: "Mario Martinez and crew, owners of Martinez Junk Removal",
    kind: "placeholder",
  },
  heroServiceArea: {
    file: "hero-service-area.jpg",
    path: "/images/hero-service-area.jpg",
    alt: "Map-style graphic of the Inland Empire and Los Angeles service area",
    kind: "placeholder",
  },
  heroContact: {
    file: "hero-contact.jpg",
    path: "/images/hero-contact.jpg",
    alt: "Martinez Junk Removal truck ready for a same-day pickup",
    kind: "placeholder",
  },
  heroServices: {
    file: "hero-services.jpg",
    path: "/images/hero-services.jpg",
    alt: "Crew with tools and bins ready for a full-service junk removal job",
    kind: "placeholder",
  },
  heroReviews: {
    file: "hero-reviews.jpg",
    path: "/images/hero-reviews.jpg",
    alt: "Happy customer shaking hands with a Martinez Junk Removal crew member",
    kind: "placeholder",
  },
  heroFaq: {
    file: "hero-faq.jpg",
    path: "/images/hero-faq.jpg",
    alt: "Crew member answering a customer question on site",
    kind: "placeholder",
  },
  crewAction1: {
    file: "crew-action-1.jpg",
    path: "/images/crew-action-1.jpg",
    alt: "Crew member loading a couch onto a truck",
    kind: "placeholder",
  },
  crewAction2: {
    file: "crew-action-2.jpg",
    path: "/images/crew-action-2.jpg",
    alt: "Crew member sweeping a cleared job site",
    kind: "placeholder",
  },
  dumpsterOnSite: {
    file: "dumpster-on-site.jpg",
    path: "/images/dumpster-on-site.jpg",
    alt: "Roll-off dumpster staged on a residential driveway during a remodel",
    kind: "placeholder",
  },
  logoMark: {
    file: "logo-mark.png",
    path: "/images/logo-mark.png",
    alt: "Martinez Junk Removal LLC logo",
    kind: "placeholder",
  },
} as const satisfies Record<string, ImageSlot>;

export type ImageSlotKey = keyof typeof imageSlots;
