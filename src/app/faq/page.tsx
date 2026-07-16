import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton } from "@/components/Buttons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { faqs } from "@/lib/business";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ | Martinez Junk Removal",
  description:
    "Answers to common questions about pricing, same-day service, dumpster rentals, and what we do and don't take at Martinez Junk Removal in Chino, CA.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        icon="phone"
        image={imageSlots.heroFaq}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about pricing, scheduling, and what we haul."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <FaqAccordion items={faqs} />
      </section>

      <section className="bg-ink-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
            Still Have a Question?
          </h2>
          <p className="mt-3 text-ink-600">
            Give us a call or send a text — Mario and the crew are happy to walk you
            through pricing, scheduling, or anything else on your mind.
          </p>
          <div className="mt-8 mx-auto max-w-lg">
            <PhotoQuoteCallout />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta>Get a Free Quote</PrimaryCta>
            <CallButton />
          </div>
        </div>
      </section>
    </>
  );
}
