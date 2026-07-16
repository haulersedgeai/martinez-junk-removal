import { business, totalReviewCount } from "@/lib/business";

const items = [
  `⭐ ${totalReviewCount} reviews (Google + Yelp)`,
  `${business.googleRating.value.toFixed(1)} Google / ${business.yelpRating.value.toFixed(1)} Yelp`,
  `${business.serviceCounties.length} counties served`,
  `Since ${business.founded}`,
  "Same-day available",
  "Se habla español",
];

export function TrustBar() {
  return (
    <div className="border-y border-ink-100 bg-brand-50">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-sm font-semibold text-brand-800 sm:px-6">
        {items.map((item) => (
          <li key={item} className="whitespace-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
