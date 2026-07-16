import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton } from "@/components/Buttons";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { business, cities } from "@/lib/business";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Service Area — LA, Orange, San Bernardino & Riverside Counties | Martinez Junk Removal",
  description:
    "Martinez Junk Removal is based in Chino, CA and offers same-day dumpster rental delivery across Los Angeles, Orange, San Bernardino & Riverside counties. See the full list of cities we serve.",
  alternates: { canonical: "/service-area" },
};

const countyBlurbs: Record<string, string> = {
  "Los Angeles County":
    "From Pasadena and Glendale to Whittier and Torrance, we're a regular on job sites across LA County — dumpster drop-offs scheduled around your day.",
  "Orange County":
    "Anaheim, Irvine, Orange, and the rest of Orange County get the same flat-rate, no-hidden-fees service our Inland Empire customers rely on.",
  "San Bernardino County":
    "Home base. Chino, Chino Hills, Rancho Cucamonga, Ontario and neighboring San Bernardino County communities get our fastest response times and most same-day availability.",
  "Riverside County":
    "Corona, Riverside, Eastvale, Norco and the surrounding cities are a short drive from our Chino yard — same flat rate, same clean crew.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        icon="map"
        image={imageSlots.heroServiceArea}
        title="Serving the Inland Empire, LA & Orange County"
        subtitle={`Based in ${business.city}, CA, Martinez Junk Removal offers same-day dumpster rental delivery across ${business.serviceCounties.length} counties — ${business.serviceCounties.join(", ")}.`}
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryCta>Get a Free Quote</PrimaryCta>
          <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
          Four Counties, One Reliable Crew
        </h2>
        <p className="mt-2 max-w-3xl text-ink-600">
          Searching &ldquo;dumpster rental near me&rdquo;? Martinez Junk Removal is based right in{" "}
          {business.city}, {business.state}, and our trucks are on the road daily across the{" "}
          {business.serviceCounties.length} counties below. Same-day delivery is available in most
          areas — call or text a photo of the job for the fastest quote.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {business.serviceCounties.map((county) => (
            <div key={county} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-800">{county}</h3>
              <p className="mt-2 text-sm text-ink-600">{countyBlurbs[county]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
            Cities We Serve
          </h2>
          <p className="mt-2 max-w-3xl text-ink-600">
            {cities.length}+ cities across the Inland Empire, LA, and Orange County — don&apos;t
            see your city listed? We probably still cover it. Tap your city to request a free
            quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="rounded-full border border-ink-200 bg-white px-3 py-1 text-sm font-medium text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-700"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
              Not Sure If We Cover Your Address?
            </h2>
            <p className="mt-3 text-ink-600">
              Same-day dumpster delivery is available across most of our service area, open{" "}
              {business.hoursDisplay} ({business.hoursClosed.toLowerCase()}). Give us a call, send
              a text, or request a free quote and we&apos;ll confirm availability for your address
              right away.
            </p>
          </div>
          <PhotoQuoteCallout />
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ready to Clear It Out?</h2>
          <p className="mt-3 text-lg text-brand-100">
            Get a fast, flat-rate quote today — same-day service often available across LA,
            Orange, San Bernardino &amp; Riverside counties.
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
