import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton } from "@/components/Buttons";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { services, business } from "@/lib/business";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "All Services | Martinez Junk Removal",
  description:
    "Full-service junk removal and roll-off dumpster rental in Chino, CA — furniture, appliances, construction debris, cleanouts, hot tubs and more, hauled across LA, Orange, San Bernardino & Riverside counties.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        icon="sparkles"
        image={imageSlots.heroServices}
        title="Every Kind of Junk, Hauled Away"
        subtitle="From a single couch to a full estate cleanout — Martinez Junk Removal offers full-service junk removal and roll-off dumpster rental across Los Angeles, Orange, San Bernardino & Riverside counties."
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryCta>Get a Free Quote</PrimaryCta>
          <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">Our Services</h2>
        <p className="mt-2 max-w-2xl text-ink-600">
          Two flagship services — junk removal and dumpster rental — plus specialty hauling for
          nearly anything you need gone. Flat-rate pricing, on-time crews, no hidden fees.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10 max-w-2xl">
          <PhotoQuoteCallout />
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Don&apos;t See Your Job Listed?</h2>
          <p className="mt-3 text-lg text-brand-100">
            If it&apos;s heavy, bulky, or in the way, we can probably haul it. Call, text, or
            request a free quote today — same-day service is often available, {business.city}
            {" "}& beyond.
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
