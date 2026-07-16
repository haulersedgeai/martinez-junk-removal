import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton, TextButton } from "@/components/Buttons";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { ReviewCard } from "@/components/ReviewCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { business, services, reviews, faqs } from "@/lib/business";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Junk Removal in Chino & the Inland Empire | Martinez Junk Removal",
  description:
    "Fast, flat-rate residential & commercial junk removal in Chino and across LA, Orange, San Bernardino & Riverside counties. Furniture, appliances, cleanouts & more. Text a photo for a same-day quote.",
  alternates: { canonical: "/junk-removal" },
};

const junkService = services.find((s) => s.slug === "junk-removal")!;

const steps = [
  {
    title: "Text a photo or call",
    body: `Send a few photos to ${business.phoneDisplay} and we'll text back a flat-rate price — no in-person estimate needed for most jobs.`,
  },
  {
    title: "We schedule — often same day",
    body: "Pick a time that works for you. Same-day service is available across our service area.",
  },
  {
    title: "We haul it away & clean up",
    body: "The crew does the lifting and loading. Usable items are donated where possible, and we leave the space clean.",
  },
];

const junkReviews = reviews.filter((r) =>
  ["Adriana T.", "Brian A.", "Don L."].includes(r.name)
);

const junkFaqs = faqs.filter((f) =>
  [
    "How much does junk removal cost?",
    "Do you offer same-day service?",
    "What can't you take?",
  ].includes(f.question)
);

export default function JunkRemovalPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential & Commercial"
        title="Junk Removal in Chino & the Inland Empire"
        subtitle="We do the lifting and loading — you point, we haul."
        image={imageSlots.heroJunkRemoval}
        icon="truck"
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryCta>Get a Free Quote</PrimaryCta>
          <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
        </div>
        <p className="mt-4 text-sm text-ink-300">
          📸{" "}
          <a href={business.phoneSms} className="font-semibold text-brand-300 underline underline-offset-2">
            Text a photo for the fastest quote
          </a>
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">What We Haul Away</h2>
        <p className="mt-3 max-w-3xl text-ink-600">{junkService.description}</p>
        <p className="mt-3 max-w-3xl text-ink-600">
          Whenever possible, usable furniture and household items are donated instead of landfilled —
          so your cleanout does some good along the way.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {junkService.bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-sm"
            >
              <CheckIcon />
              <span className="text-sm font-medium text-ink-800">{bullet}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">How It Works</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-safety-500 text-lg font-bold">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-100">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <PhotoQuoteCallout />
      </section>

      <section className="bg-ink-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
            ⭐ {business.rating.value.toFixed(1)} · {business.rating.count} Google Reviews
          </h2>
          <p className="mt-2 text-ink-600">What customers say about our junk removal jobs.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {junkReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">Junk Removal FAQs</h2>
        <div className="mt-8">
          <FaqAccordion items={junkFaqs} />
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Clear It Out?</h2>
          <p className="mt-3 text-lg text-brand-100">
            Get a fast, flat-rate junk removal quote today — same-day service often available.
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
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
      aria-hidden="true"
    >
      <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
