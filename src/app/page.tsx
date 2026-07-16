import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderBlock } from "@/components/PlaceholderBlock";
import { PrimaryCta, CallButton, TextButton } from "@/components/Buttons";
import { TrustBar } from "@/components/TrustBar";
import { ReviewCard } from "@/components/ReviewCard";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { business, services, reviews, faqs, cities } from "@/lib/business";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Junk Removal & Dumpster Rental in Chino, CA | Martinez Junk Removal",
  description:
    "Fast, friendly, flat-rate junk removal and dumpster rental for homes and businesses across LA, Orange, San Bernardino & Riverside counties. Same-day service available. Se habla español.",
  alternates: { canonical: "/" },
};

const valueProps = [
  {
    title: "Flat-rate pricing, no surprises",
    body: "The price we quote is the price you pay. Contractors specifically praise our no-hidden-fees policy after pickup.",
  },
  {
    title: "On time, every time",
    body: "Courteous drivers, respectful of your property, clean bins.",
  },
  {
    title: "We do the heavy lifting",
    body: "Full-service removal — you don't lift a thing.",
  },
  {
    title: "Local & reliable since 2019",
    body: "Real communication by call or text, every step of the way.",
  },
];

const steps = [
  {
    title: "Call, text, or request a quote",
    body: "Text photos to (562) 639-5747 for the fastest, most accurate price.",
  },
  {
    title: "We schedule — often same day",
    body: "Pick a time that works. Same-day service is available across our service area.",
  },
  {
    title: "We haul it away & clean up",
    body: "The crew does the lifting and loading, then leaves the space clean.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-200">
              🇪🇸 Se habla español · Formerly JunkGuys LA
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Junk Removal &amp; Dumpster Rental in Chino &amp; the Inland Empire
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-200">
              Fast, friendly, flat-rate hauling for homes and businesses across LA, Orange, San
              Bernardino &amp; Riverside counties. Same-day service available.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCta>Get a Free Quote</PrimaryCta>
              <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
            </div>
            <p className="mt-4 text-sm text-ink-300">
              📸{" "}
              <a href={business.phoneSms} className="font-semibold text-brand-300 underline underline-offset-2">
                Text a photo for the fastest quote
              </a>
            </p>
          </div>
          <PlaceholderBlock alt={imageSlots.heroHome.alt} icon="truck" className="h-64 w-full md:h-80" />
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">Why Martinez Junk Removal</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <div key={prop.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-800">{prop.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{prop.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">How It Works</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-safety-500 font-heading text-lg font-bold">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-100">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">Our Services</h2>
            <p className="mt-2 text-ink-600">
              From a single couch to a full estate cleanout — we handle it all.
            </p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-brand-700 hover:underline">
            View all services →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
                ⭐ {business.rating.value.toFixed(1)} · {business.rating.count} Google Reviews
              </h2>
              <p className="mt-2 text-ink-600">Also 5-star rated on Yelp.</p>
            </div>
            <Link href="/reviews" className="text-sm font-semibold text-brand-700 hover:underline">
              Read all reviews →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
              Proudly Serving the Inland Empire &amp; Beyond
            </h2>
            <p className="mt-3 text-ink-600">
              Based in Chino, we serve homeowners and businesses across Los Angeles, Orange, San
              Bernardino, and Riverside counties — {cities.length}+ cities and counting.
            </p>
            <Link href="/service-area" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">
              See the full service area →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {cities.slice(0, 16).map((city) => (
              <span
                key={city}
                className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-700"
              >
                {city}
              </span>
            ))}
            <Link
              href="/service-area"
              className="rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white"
            >
              +{cities.length - 16} more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={faqs} />
          </div>
          <Link href="/faq" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">
            More FAQs →
          </Link>
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ready to Clear It Out?</h2>
          <p className="mt-3 text-lg text-brand-100">
            Get a fast, flat-rate quote today — same-day service often available.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta>Get a Free Quote</PrimaryCta>
            <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
            <TextButton className="border-white text-white hover:bg-white hover:text-ink-900" />
          </div>
          <div className="mt-8 mx-auto max-w-lg">
            <PhotoQuoteCallout tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
