import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrimaryCta, CallButton } from "@/components/Buttons";
import { TrustBar } from "@/components/TrustBar";
import { RatingBadges } from "@/components/RatingBadges";
import { ReviewCard } from "@/components/ReviewCard";
import { DumpsterCard } from "@/components/DumpsterCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { Reveal } from "@/components/Reveal";
import { business, dumpsters, faqs, cities, totalReviewCount } from "@/lib/business";
import { getFeaturedReviews } from "@/lib/reviews";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Dumpster Rental in Chino, CA | Martinez Junk Removal",
  description:
    "Roll-off dumpster rental in Chino & the Inland Empire — same-day availability, flat-rate pricing, on-time drop-off & pickup. Serving LA, Orange, San Bernardino & Riverside counties. Se habla español.",
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
    title: "Same-day availability",
    body: "Often able to drop off the same day you call — just ask.",
  },
  {
    title: "Local & reliable since 2019",
    body: "Real communication by call or text, every step of the way.",
  },
];

const steps = [
  {
    title: "Call, text, or request a quote",
    body: `Text photos of the job to ${business.phoneDisplay} for the fastest, most accurate price.`,
  },
  {
    title: "We schedule — often same day",
    body: "Pick a time that works. Same-day drop-off is available across our service area.",
  },
  {
    title: "We drop off, you fill, we pick up",
    body: "Clean bin, on-time drop-off and pickup, flat rate — no hidden fees.",
  },
];

const homeReviews = getFeaturedReviews("dumpster", 6);

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[560px] overflow-hidden bg-ink-950 text-white sm:min-h-[620px] md:min-h-[680px]">
        <Image
          src={imageSlots.heroHome.path}
          alt={imageSlots.heroHome.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col justify-center px-4 py-14 sm:min-h-[620px] sm:px-6 md:min-h-[680px] md:py-20">
          <div className="max-w-xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-200">
              🇪🇸 Se habla español
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Roll-Off Dumpster Rental in Chino &amp; the Inland Empire
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-100">
              Clean bins, flat-rate pricing, on-time drop-off &amp; pickup, and same-day
              availability. Serving Los Angeles, Orange, San Bernardino &amp; Riverside counties.
            </p>

            <RatingBadges variant="compact" tone="dark" className="mt-6" />
            <p className="mt-2 text-sm font-medium text-ink-200">
              Same-day available · Se habla español · Since {business.founded}
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
        </div>
      </section>

      <TrustBar />

      <Reveal as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">Why Martinez Junk Removal</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <div key={prop.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-800">{prop.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{prop.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="bg-brand-900 py-16 text-white">
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
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">Dumpster Sizes &amp; Pricing</h2>
            <p className="mt-2 text-ink-600">
              10-yard for heavy material, 20- or 40-yard for household &amp; general trash.
            </p>
          </div>
          <Link href="/dumpster-rental" className="text-sm font-semibold text-brand-700 hover:underline">
            See full pricing details →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dumpsters.map((d) => (
            <DumpsterCard key={d.slug} dumpster={d} compact />
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-500">
          Prices vary by location and material — get a free quote for your exact price.
        </p>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">Dumpsters in Action</h2>
        <p className="mt-2 max-w-2xl text-ink-600">
          Real drop-offs and stock photos of the work — driveways, job sites, and clean-up-ready bins
          across the Inland Empire.
        </p>
        <div className="mt-8">
          <GalleryGrid />
        </div>
      </Reveal>

      <Reveal as="section" className="bg-ink-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
                ⭐ {totalReviewCount} Reviews Across Google &amp; Yelp
              </h2>
              <RatingBadges className="mt-4" />
            </div>
            <Link href="/reviews" className="text-sm font-semibold text-brand-700 hover:underline">
              Read all reviews →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
              Proudly Serving the Inland Empire &amp; Beyond
            </h2>
            <p className="mt-3 text-ink-600">
              Based in Chino, we deliver dumpsters to homeowners and businesses across Los Angeles,
              Orange, San Bernardino, and Riverside counties — {cities.length}+ cities and counting.
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
      </Reveal>

      <Reveal as="section" className="bg-ink-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={faqs.slice(0, 6)} />
          </div>
          <Link href="/faq" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">
            More FAQs →
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ready to Book a Bin?</h2>
          <p className="mt-3 text-lg text-brand-100">
            Get a fast, flat-rate quote today — same-day drop-off often available.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta>Get a Free Quote</PrimaryCta>
            <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
          </div>
          <div className="mt-8 mx-auto max-w-lg">
            <PhotoQuoteCallout tone="dark" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
