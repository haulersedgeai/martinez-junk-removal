import type { Review } from "@/lib/business";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
      <div>
        <div className="mb-3 flex items-center gap-1 text-safety-500" aria-hidden="true">
          {"★★★★★"}
        </div>
        <blockquote className="text-sm leading-relaxed text-ink-700">&ldquo;{review.quote}&rdquo;</blockquote>
      </div>
      <figcaption className="mt-4 flex items-center justify-between text-sm">
        <span className="font-semibold text-ink-900">{review.name}</span>
        <span className="text-xs font-medium text-ink-400">{review.source}</span>
      </figcaption>
    </figure>
  );
}
