import { business } from "@/lib/business";

const items = [
  `⭐ ${business.rating.value.toFixed(1)} on Google`,
  `${business.rating.count} reviews`,
  `Locally owned since ${business.founded}`,
  "Same-day available",
  "Flat rate, no hidden fees",
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
