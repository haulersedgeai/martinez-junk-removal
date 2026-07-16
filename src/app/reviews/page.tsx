import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton } from "@/components/Buttons";
import { ReviewCard } from "@/components/ReviewCard";
import { business, reviews } from "@/lib/business";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Reviews — 5.0 Stars on Google | Martinez Junk Removal",
  description:
    "See why Martinez Junk Removal holds a 5.0-star rating across 58 Google reviews (also 5-star on Yelp) for junk removal and dumpster rental in Chino and the Inland Empire.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        icon="sparkles"
        image={imageSlots.heroReviews}
        title="5.0 Stars, 58 Google Reviews"
        subtitle="Also 5-star rated on Yelp. Here's what real customers across the Inland Empire and LA have to say."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-1 text-3xl text-safety-500" aria-hidden="true">
            {"★★★★★"}
          </div>
          <p className="font-heading text-4xl font-bold text-ink-900 sm:text-5xl">
            {business.rating.value.toFixed(1)}{" "}
            <span className="text-2xl font-semibold text-ink-500 sm:text-3xl">
              · {business.rating.count} Google Reviews
            </span>
          </p>
          <p className="max-w-xl text-ink-600">
            Every review below is a real customer talking about real jobs — dumpster
            drop-offs, full cleanouts, demo work, and more.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              {/* TODO: replace with direct Google Business Profile review link */}
              Read all reviews on Google →
            </a>
            <a
              href={business.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-900 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
            >
              See us on Yelp →
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="mt-3 text-lg text-brand-100">
            Get a fast, flat-rate quote today — same-day service often available.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta>Get a Free Quote</PrimaryCta>
            <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
          </div>
        </div>
      </section>
    </>
  );
}
