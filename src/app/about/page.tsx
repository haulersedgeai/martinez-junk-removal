import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PrimaryCta, CallButton } from "@/components/Buttons";
import { business } from "@/lib/business";
import { imageSlots } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Mario Martinez & Our Crew | Martinez Junk Removal",
  description:
    "Martinez Junk Removal is a locally owned junk removal and dumpster rental company founded by Mario Martinez in 2019 in Chino, CA. Meet the crew and see what drives us.",
  alternates: { canonical: "/about" },
};

const valueProps = [
  {
    title: "On time, every time",
    body: "We show up when we say we will, communicate clearly, and respect your property from start to finish.",
  },
  {
    title: "Fair, flat-rate pricing",
    body: "The price we quote is the price you pay — no hidden fees added after the truck is loaded.",
  },
  {
    title: "We donate what we can",
    body: "Usable furniture and household items are donated whenever possible instead of heading straight to the landfill.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        icon="home"
        image={imageSlots.heroAbout}
        title="Meet Mario Martinez"
        subtitle="A locally owned, family-run crew built on hard work, honesty, and taking care of our neighbors."
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          🇪🇸 Se habla español
        </span>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-ink-700">
          <p>
            Martinez Junk Removal is a locally owned junk removal and dumpster rental
            company founded by Mario Martinez in 2019 in Chino, California. It started
            as one guy with a truck and a genuine love for the work — no job too small,
            no job too big — and it has grown into a trusted crew serving homes and
            businesses across Los Angeles, Orange, San Bernardino, and Riverside
            counties.
          </p>
          <p>
            Customer service comes first, every time. That means clear communication
            from the first call or text, crews that show up on time, fair flat-rate
            pricing with no surprise fees, and a job site that gets left spotless.
            Whether it&apos;s a single couch off the curb, a full estate cleanout, tons of
            construction debris, light demolition, a hot tub teardown, or a dumpster
            parked in the driveway for a remodel, the goal never changes: make it easy,
            make it clean, and make it affordable.
          </p>
          <p>
            The crew donates usable items whenever possible instead of sending them
            straight to the landfill, and offers contactless online payment to make
            scheduling and paying as simple as the pickup itself. Se habla español —
            Mario and the team are proud to serve the area&apos;s Spanish-speaking families
            too.
          </p>
          <p>
            Longtime customers may still know the company by its original name,{" "}
            {business.formerName}. Same crew, same care, same guy answering the phone —
            just a new name that better reflects who we are. Call or text Mario for a
            free quote.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {valueProps.map((prop) => (
            <div key={prop.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-800">{prop.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{prop.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Let&apos;s Get Your Space Cleared Out
          </h2>
          <p className="mt-3 text-lg text-brand-100">
            Call or text Mario and the crew today for a fast, flat-rate quote.
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
