// Compiled Google + Yelp reviews, sourced from src/data/reviews-data.json.
// One negative, unverifiable Yelp review was intentionally excluded from the
// dataset upstream — do not backfill it.

import raw from "@/data/reviews-data.json";

export type ReviewSource = "Google" | "Yelp";

export type Review = {
  id: string;
  name: string;
  source: ReviewSource;
  location: string;
  date: string;
  rating: number;
  service: string;
  featured: boolean;
  text: string;
};

export const allReviews: Review[] = raw.reviews as Review[];

// Named reviews CHANGES-03 calls out to prioritize when spreading dumpster
// trust-signals across the site, regardless of the dataset's `featured` flag.
const PRIORITY_DUMPSTER_REVIEW_IDS = [
  "g-carlos-malacon",
  "g-cowboy-texan",
  "y-matthew-a-anaheim",
  "y-janet-s",
  "g-michael-groom",
  "g-steve-deborah-snoke",
  "y-christina-m",
];

export function getFeaturedReviews(service?: string, count = 3): Review[] {
  if (service === "dumpster") {
    const priority = PRIORITY_DUMPSTER_REVIEW_IDS.map((id) =>
      allReviews.find((r) => r.id === id)
    ).filter((r): r is Review => Boolean(r));
    return priority.slice(0, count);
  }

  const pool = allReviews.filter((r) => r.featured && (!service || r.service === service));
  return pool.slice(0, count);
}

export function getReviewsBySource(source?: ReviewSource | "All"): Review[] {
  if (!source || source === "All") return allReviews;
  return allReviews.filter((r) => r.source === source);
}

export function formatReviewDate(dateStr: string): string {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
