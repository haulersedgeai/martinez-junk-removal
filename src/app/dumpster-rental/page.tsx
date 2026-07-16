import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton } from "@/components/Buttons";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { DumpsterCard } from "@/components/DumpsterCard";
import { ReviewCard } from "@/components/ReviewCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { business, dumpsters, fees, faqs } from "@/lib/business";
import { getFeaturedReviews } from "@/lib/reviews";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Dumpster Rental in Chino, CA | Roll-Off Sizes & Pricing | Martinez Junk Removal",
  description:
    "Roll-off dumpster rental in Chino & the Inland Empire — 10, 20 & 40-yard bins from $650. Flat rate, no hidden fees, on-time drop-off & pickup. Same-day availability across LA, Orange, San Bernardino & Riverside counties.",
  alternates: { canonical: "/dumpster-rental" },
};

const dumpsterFaqs = faqs.filter((f) =>
  [
    "What dumpster sizes do you offer?",
    "How much does a dumpster cost?",
    "How long is the rental period?",
    "Is there a weight limit?",
    "What can't I put in the dumpster?",
    "Do I need a permit for street placement?",
    "Do you offer same-day delivery?",
  ].includes(f.question)
);

const dumpsterReviews = getFeaturedReviews("dumpster", 6);

export default function DumpsterRentalPage() {
  return (
    <>
      <PageHero
        eyebrow="Roll-Off Bins"
        title="Roll-Off Dumpster Rental in Chino & the Inland Empire"
        subtitle="Clean bins, flat-rate pricing, on-time drop-off & pickup, and same-day availability across LA, Orange, San Bernardino & Riverside counties."
        image={imageSlots.heroDumpsterRental}
        icon="dumpster"
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryCta>Get a Free Quote</PrimaryCta>
          <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
        </div>
        <p className="mt-4 text-sm text-ink-300">
          Call or text{" "}
          <a href={business.phoneSms} className="font-semibold text-brand-300 underline underline-offset-2">
            {business.phoneDisplay}
          </a>{" "}
          for a fast quote.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">Dumpster Sizes &amp; Pricing</h2>
        <p className="mt-3 max-w-3xl text-ink-600">
          Heavy material like concrete, dirt, asphalt, grass, and tile goes in the{" "}
          <strong>10-yard</strong>. Household or general trash goes in the{" "}
          <strong>20- or 40-yard</strong> (trash only — no heavy material).
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dumpsters.map((d) => (
            <DumpsterCard key={d.slug} dumpster={d} />
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-500">
          Prices vary by location and material — get a free quote for your exact price.
        </p>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">Rates &amp; Fees</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-400">Rental Period</p>
              <p className="mt-2 font-heading text-lg font-bold text-ink-900">{fees.rentalPeriod} included</p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-400">Extra Days</p>
              <p className="mt-2 font-heading text-lg font-bold text-ink-900">${fees.extraDayFee}/day</p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-400">Overweight Fee</p>
              <p className="mt-2 font-heading text-lg font-bold text-ink-900">
                ${fees.overweightFeePerTon}/ton over limit
              </p>
              <p className="mt-1 text-xs text-ink-500">Applies to the 20- &amp; 40-yard trash dumpsters</p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-400">Payments</p>
              <p className="mt-2 font-heading text-lg font-bold text-ink-900">{business.payments.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
          What Can &amp; Can&apos;t Go In the Dumpster
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-brand-800">Great For</h3>
            <ul className="mt-3 space-y-1.5">
              {fees.allowedExamples.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-dashed border-safety-400 bg-safety-50 p-6">
            <h3 className="font-heading text-lg font-bold text-ink-900">Not Allowed</h3>
            <ul className="mt-3 space-y-1.5">
              {fees.prohibitedItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                  <XIcon />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink-600">When in doubt, call or text — we&apos;ll let you know.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
        <p className="text-center text-ink-600">
          Not sure which size fits your project? Call or text a couple photos of the job and we&apos;ll
          recommend the right bin.
        </p>
        <div className="mt-6">
          <PhotoQuoteCallout />
        </div>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
            ⭐ {business.googleRating.value.toFixed(1)} on Google · {business.yelpRating.value.toFixed(1)} on Yelp
          </h2>
          <p className="mt-2 text-ink-600">What contractors and homeowners say about our dumpster rentals.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dumpsterReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">Dumpster Rental FAQs</h2>
        <div className="mt-8">
          <FaqAccordion items={dumpsterFaqs} />
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Book a Bin?</h2>
          <p className="mt-3 text-lg text-brand-100">
            Get a fast, flat-rate dumpster quote today — same-day drop-off often available.
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
      aria-hidden="true"
    >
      <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 h-4 w-4 shrink-0 text-safety-600"
      aria-hidden="true"
    >
      <path d="M6 6l8 8M14 6l-8 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
