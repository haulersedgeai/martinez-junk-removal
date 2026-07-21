import type { Metadata } from "next";
import Image from "next/image";
import { MexicanFlag } from "@/components/MexicanFlag";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton } from "@/components/Buttons";
import { ReviewCard } from "@/components/ReviewCard";
import { imageSlots, marioOwnerImages } from "@/lib/images";
import { business } from "@/lib/business";
import { getFeaturedReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "About Mario Martinez & Our Crew | Martinez Junk Removal",
  description:
    "Martinez Junk Removal is a locally owned roll-off dumpster rental company founded by Mario Martinez in 2019 in Chino, CA. Meet the crew and see what drives us.",
  alternates: { canonical: "/about" },
};

const valueProps = [
  {
    title: "On time, every time",
    body: "We show up when we say we will, communicate clearly, and respect your property from start to finish.",
  },
  {
    title: "Fair, upfront pricing",
    body: "You'll get a clear quote before you book — the only add-ons (extra days, overweight fees) are always disclosed up front.",
  },
  {
    title: "Clean bins, every drop-off",
    body: "Well-maintained roll-off dumpsters, placed exactly where you need them.",
  },
];

const aboutReviews = [
  ...getFeaturedReviews("spanish", 1),
  ...getFeaturedReviews("dumpster", 1),
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={imageSlots.heroAbout}
        title="Meet Mario Martinez"
        subtitle="A locally owned, family-run crew built on hard work, honesty, and taking care of our neighbors."
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          <MexicanFlag className="h-[1em] w-auto mr-1.5" /> Se habla español
        </span>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-ink-700">
          <p>
            Martinez Junk Removal is a locally owned roll-off dumpster rental company
            founded by Mario Martinez in 2019 in Chino, California. It started as one
            guy with a truck and a genuine love for the work — no job too small, no job
            too big — and it has grown into a trusted crew serving homes and businesses
            across Los Angeles, Orange, San Bernardino, and Riverside counties.
          </p>
          <p>
            Customer service comes first, every time. That means clear communication
            from the first call or text, drivers that show up on time, fair, upfront
            pricing, and a clean bin dropped exactly where you
            need it. Whether it&apos;s a driveway remodel, a construction site, or a
            weekend cleanout, the goal never changes: make it easy, make it clean, and
            make it affordable.
          </p>
          <p>
            The crew offers contactless online payment to make scheduling and paying as
            simple as the drop-off itself. Se habla español — Mario and the team are
            proud to serve the area&apos;s Spanish-speaking families too.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
          <div className="relative order-1 mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border-2 border-brand-200 shadow-lg shadow-brand-900/10 md:mx-0 md:max-w-none">
            <Image
              src={marioOwnerImages.solo.path}
              alt={marioOwnerImages.solo.alt}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-[78%_38%]"
            />
          </div>
          <blockquote className="order-2 flex flex-col justify-center">
            <p className="font-heading text-xl font-medium leading-snug text-ink-900 sm:text-2xl">
              &ldquo;I&apos;m a dumpster rental specialist and I LOVE what I do. I&apos;ve been
              serving the LA, Orange County and Inland Empire area for years — and customer
              service is our number one priority.&rdquo;
            </p>
            <footer className="mt-4">
              <p className="text-sm font-semibold text-brand-700">{business.owner}</p>
              <p className="text-sm text-ink-500">
                Owner, {business.displayName} — serving the Inland Empire since {business.founded}
              </p>
            </footer>
          </blockquote>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {valueProps.map((prop) => (
            <div key={prop.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-800">{prop.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{prop.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="overflow-hidden rounded-2xl border-2 border-brand-200 shadow-lg shadow-brand-900/10">
            <Image
              src={marioOwnerImages.withCrew.path}
              alt={marioOwnerImages.withCrew.alt}
              width={1143}
              height={1800}
              sizes="(min-width: 640px) 320px, 80vw"
              className="h-auto w-full max-w-xs object-cover sm:max-w-sm"
            />
          </div>
          <p className="mt-3 text-sm text-ink-500">
            Mario (right) with the crew and the Martinez Junk Removal truck.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {aboutReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Let&apos;s Get Your Space Cleared Out
          </h2>
          <p className="mt-3 text-lg text-brand-100">
            Call or text Mario and the crew today for a fast, free quote.
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
