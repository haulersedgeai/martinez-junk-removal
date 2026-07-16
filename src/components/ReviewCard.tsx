import type { Review } from "@/lib/reviews";
import { formatReviewDate } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-safety-500" aria-hidden="true">
            {"★★★★★"}
          </div>
          <span className="rounded-full bg-ink-50 px-2.5 py-0.5 text-xs font-semibold text-ink-500">
            {review.source}
          </span>
        </div>
        <blockquote className="text-sm leading-relaxed text-ink-700">&ldquo;{review.text}&rdquo;</blockquote>
      </div>
      <figcaption className="mt-4 flex items-center justify-between text-sm">
        <span className="font-semibold text-ink-900">{review.name}</span>
        <span className="text-xs font-medium text-ink-400">
          {review.location ? `${review.location} · ` : ""}
          {formatReviewDate(review.date)}
        </span>
      </figcaption>
    </figure>
  );
}
