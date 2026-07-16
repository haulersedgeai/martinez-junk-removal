import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton, TextButton } from "@/components/Buttons";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { ReviewCard } from "@/components/ReviewCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { business, services, reviews, faqs } from "@/lib/business";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental in Chino, CA | Martinez Junk Removal",
  description:
    "Driveway-friendly roll-off dumpster rental in Chino & the Inland Empire. Flat rate, no hidden fees, on-time drop-off & pickup. Concrete/dirt containers & low-boy bins for heavy debris.",
  alternates: { canonical: "/dumpster-rental" },
};

const dumpsterService = services.find((s) => s.slug === "dumpster-rental")!;

const sizes = [
  { size: "10 Yard", goodFor: "Small cleanouts, single-room projects, minor renovations" },
  { size: "15 Yard", goodFor: "Garage cleanouts, medium remodels, small roofing jobs" },
  { size: "20 Yard", goodFor: "Larger renovations, whole-home cleanouts, flooring tear-outs" },
  { size: "40 Yard", goodFor: "Major construction, large cleanouts, commercial jobs" },
];

const benefits = [
  "Flat rate, no hidden fees",
  "On-time drop-off & pickup",
  "Clean, well-maintained bins",
  "Concrete & dirt containers",
  "Low-boy dumpsters for heavy debris",
  "Reasonable extended-day pricing",
];

const dumpsterReviews = reviews.filter((r) =>
  ["Carlos M.", "John (cowboy texan), general contractor", "Janet S."].includes(r.name)
);

const dumpsterFaqs = faqs.filter((f) =>
  [
    "Do you rent dumpsters?",
    "Do you offer same-day service?",
    "Do you do commercial jobs?",
  ].includes(f.question)
);

export default function DumpsterRentalPage() {
  return (
    <>
      <PageHero
        eyebrow="Roll-Off Bins"
        title="Roll-Off Dumpster Rental in Chino, CA"
        subtitle="Driveway-friendly bins for renovations, cleanouts, roofing jobs & moves — flat rate, no hidden fees."
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
        <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">Dumpster Sizes</h2>
        <p className="mt-3 max-w-3xl text-ink-600">{dumpsterService.description}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sizes.map((s) => (
            <div key={s.size} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand-800">{s.size}</h3>
              <p className="mt-2 text-sm text-ink-600">{s.goodFor}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-xl border-2 border-dashed border-safety-400 bg-safety-50 p-4 text-sm font-medium text-ink-800">
          *Sizes shown are placeholders — confirm exact availability and pricing with Mario.
        </p>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Rent From Martinez</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm font-medium text-brand-50">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
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
            ⭐ {business.rating.value.toFixed(1)} · {business.rating.count} Google Reviews
          </h2>
          <p className="mt-2 text-ink-600">What contractors and homeowners say about our dumpster rentals.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dumpsterReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
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
            <TextButton className="border-white text-white hover:bg-white hover:text-ink-900" />
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
      className="mt-0.5 h-5 w-5 shrink-0 text-safety-400"
      aria-hidden="true"
    >
      <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
