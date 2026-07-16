import { business, totalReviewCount } from "@/lib/business";

const STARS = "★★★★★";

// Compact: single pill for tight spaces (hero, mobile). Detailed: two
// separate clickable badges linking out to the real Google/Yelp listings.
export function RatingBadges({
  variant = "detailed",
  tone = "light",
  className = "",
}: {
  variant?: "compact" | "detailed";
  tone?: "light" | "dark";
  className?: string;
}) {
  if (variant === "compact") {
    const textClass = tone === "dark" ? "text-white" : "text-ink-900";
    const subClass = tone === "dark" ? "text-ink-200" : "text-ink-600";
    const bgClass = tone === "dark" ? "bg-white/10" : "bg-white shadow-sm";
    return (
      <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${bgClass} ${className}`}>
        <span className="text-safety-400" aria-hidden="true">
          {STARS}
        </span>
        <span className={`font-semibold ${textClass}`}>{totalReviewCount} reviews</span>
        <span className={subClass}>
          · {business.googleRating.value.toFixed(1)} Google · {business.yelpRating.value.toFixed(1)} Yelp
        </span>
      </div>
    );
  }

  const cardClass =
    tone === "dark"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
      : "border-ink-100 bg-white text-ink-900 shadow-sm hover:border-brand-300";
  const subClass = tone === "dark" ? "text-ink-200" : "text-ink-500";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={business.googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${cardClass}`}
      >
        <span className="text-safety-400" aria-hidden="true">
          {STARS}
        </span>
        <span>
          Google {business.googleRating.value.toFixed(1)}{" "}
          <span className={`font-normal ${subClass}`}>({business.googleRating.count})</span>
        </span>
      </a>
      <a
        href={business.socials.yelp}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${cardClass}`}
      >
        <span className="text-safety-400" aria-hidden="true">
          {STARS}
        </span>
        <span>
          Yelp {business.yelpRating.value.toFixed(1)}{" "}
          <span className={`font-normal ${subClass}`}>({business.yelpRating.count})</span>
        </span>
      </a>
    </div>
  );
}
