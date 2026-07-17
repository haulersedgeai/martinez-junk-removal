import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CallButton, TextButton } from "@/components/Buttons";
import { PhotoQuoteCallout } from "@/components/PhotoQuoteCallout";
import { QuoteForm } from "@/components/QuoteForm";
import { ReviewCard } from "@/components/ReviewCard";
import { business } from "@/lib/business";
import { getFeaturedReviews } from "@/lib/reviews";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Dumpster Quote | Martinez Junk Removal",
  description:
    "Get a free dumpster rental quote in Chino & the Inland Empire. Call or text (562) 639-5747 — se habla español.",
  alternates: { canonical: "/contact" },
};

const contactReviews = getFeaturedReviews("dumpster", 2);

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={imageSlots.heroContact}
        eyebrow="Se habla español"
        title="Get a Free Quote"
        subtitle="Fill out the form below, or call/text us directly — often same-day service across Los Angeles, Orange, San Bernardino & Riverside counties."
      >
        <div className="flex flex-wrap gap-3">
          <CallButton className="bg-white text-ink-900 hover:bg-brand-50" />
          <TextButton className="border-white text-white hover:bg-white hover:text-ink-900" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-heading text-2xl font-bold text-ink-900">Request a Quote</h2>
            <p className="mt-2 text-sm text-ink-600">
              We&apos;ll follow up by call or text as soon as we can.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>

          <div className="space-y-6 self-start">
            <PhotoQuoteCallout />

            {contactReviews.length > 0 ? (
              <div className="space-y-4">
                {contactReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            ) : null}

            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-bold text-ink-900">Prefer to Talk?</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                <li>
                  <a href={`tel:${business.phoneTel}`} className="font-semibold text-brand-700 hover:underline">
                    Call {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={business.phoneSms} className="font-semibold text-brand-700 hover:underline">
                    Text {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="font-semibold text-brand-700 hover:underline break-all">
                    {business.email}
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-sm text-ink-600">
                {business.hoursDisplay} · {business.hoursClosed}
              </p>
              <p className="mt-1 text-sm text-ink-600">{business.sameDayNote}</p>
              <p className="mt-1 text-sm text-ink-600">
                Based in {business.city}, {business.state} — serving {business.serviceCounties.join(", ")}.
              </p>
              <p className="mt-3 text-sm text-ink-600">
                Accepts {business.payments.join(" · ")}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                🇪🇸 Se habla español
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
