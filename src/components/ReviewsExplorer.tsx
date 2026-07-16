"use client";

import { useMemo, useState } from "react";
import { ReviewCard } from "@/components/ReviewCard";
import type { Review, ReviewSource } from "@/lib/reviews";

type SourceFilter = "All" | ReviewSource;
type SortOption = "relevant" | "newest" | "oldest";

const PAGE_SIZE = 9;

export function ReviewsExplorer({ reviews }: { reviews: Review[] }) {
  const [source, setSource] = useState<SourceFilter>("All");
  const [sort, setSort] = useState<SortOption>("relevant");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const counts = useMemo(
    () => ({
      All: reviews.length,
      Google: reviews.filter((r) => r.source === "Google").length,
      Yelp: reviews.filter((r) => r.source === "Yelp").length,
    }),
    [reviews]
  );

  const filtered = useMemo(() => {
    const bySource = source === "All" ? reviews : reviews.filter((r) => r.source === source);
    const sorted = [...bySource];
    if (sort === "newest") {
      sorted.sort((a, b) => b.date.localeCompare(a.date));
    } else if (sort === "oldest") {
      sorted.sort((a, b) => a.date.localeCompare(b.date));
    } else {
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return sorted;
  }, [reviews, source, sort]);

  const visible = filtered.slice(0, visibleCount);

  function handleFilterChange(next: SourceFilter) {
    setSource(next);
    setVisibleCount(PAGE_SIZE);
  }

  function handleSortChange(next: SortOption) {
    setSort(next);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="inline-flex rounded-full border border-ink-200 bg-white p-1" role="group" aria-label="Filter by source">
          {(["All", "Google", "Yelp"] as SourceFilter[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleFilterChange(option)}
              aria-pressed={source === option}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                source === option ? "bg-brand-700 text-white" : "text-ink-600 hover:text-brand-700"
              }`}
            >
              {option} ({counts[option]})
            </button>
          ))}
        </div>

        <div className="inline-flex rounded-full border border-ink-200 bg-white p-1" role="group" aria-label="Sort reviews">
          {(
            [
              { value: "relevant", label: "Most Relevant" },
              { value: "newest", label: "Newest" },
              { value: "oldest", label: "Oldest" },
            ] as { value: SortOption; label: string }[]
          ).map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSortChange(option.value)}
              aria-pressed={sort === option.value}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                sort === option.value ? "bg-brand-700 text-white" : "text-ink-600 hover:text-brand-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-ink-500">
        Showing {visible.length} of {filtered.length}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {visibleCount < filtered.length ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            className="rounded-full border-2 border-brand-700 px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-700 hover:text-white"
          >
            Load more reviews
          </button>
        </div>
      ) : null}
    </div>
  );
}
