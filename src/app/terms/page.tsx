import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${business.name} — the terms governing our Site and dumpster rental services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Legal</p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
        {business.name} — Terms of Service
      </h1>
      <p className="mt-2 text-sm text-ink-500">Effective date: July 16, 2026</p>

      <div className="prose-legal mt-8 space-y-6 text-ink-700">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of {business.domain} (the
          &ldquo;Site&rdquo;) and the services provided by {business.name} (&ldquo;Martinez Junk
          Removal,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the
          Site or requesting our services, you agree to these Terms. If you do not agree, please do
          not use the Site or our services.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Our services</h2>
        <p>
          Martinez Junk Removal provides roll-off dumpster and container rentals, serving Los
          Angeles, Orange, San Bernardino, and Riverside counties. Availability, service areas, and
          offerings may change without notice.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Quotes and estimates</h2>
        <p>
          Prices we provide by phone, text, email, photo, or through the Site&apos;s quote form are
          estimates based on the information you give us. Final pricing is confirmed before or at
          the time of service and may vary based on the actual volume, weight, and type of
          material, site conditions, accessibility, disposal or dump fees, and any additional work
          you request. You are responsible for the accuracy of the information you provide. No
          quote is a binding contract until we confirm the job with you.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Scheduling, changes, and cancellations</h2>
        <p>
          We will do our best to accommodate your requested date and time, including same-day
          service where available. Appointment windows are estimates and may be affected by
          traffic, weather, prior jobs, or other factors outside our control. If you need to
          reschedule or cancel, please let us know as soon as possible.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Your responsibilities</h2>
        <p>
          You agree to: provide safe and lawful access to the areas involved; ensure you are
          authorized to have the dumpster placed on the property; and disclose any hazardous,
          heavy, or unusual materials in advance. You are responsible for securing any permits your
          city or HOA requires for dumpster placement on a street or public area, unless we agree
          otherwise in writing.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Items we cannot accept</h2>
        <p>
          For safety and legal reasons, we may be unable to accept certain materials, including
          hazardous waste, chemicals, solvents, wet paint, tires, fire extinguishers, propane
          tanks, liquids, asbestos, medical or biohazard waste, and other regulated materials. If
          you are unsure whether we can take an item, please ask before your appointment. We
          reserve the right to decline any item at our discretion.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Dumpster and container rentals</h2>
        <p>
          If you rent a dumpster or container from us, you agree to use it only for permitted
          materials, not to exceed its weight limit or fill line, and to keep it accessible for
          pickup. You are responsible for the container while it is on your property, including
          damage caused by misuse, overloading, or prohibited materials, and for any resulting
          additional fees (including extra-day and overweight fees). Placement, rental period, and
          pricing are as agreed at booking.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Payment</h2>
        <p>
          Payment is due as agreed at the time of service unless we arrange otherwise. We accept
          cash, credit cards, Zelle, and Venmo, and may offer contactless and online payment
          options.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {business.name} will not be liable for any
          indirect, incidental, special, or consequential damages arising out of or related to our
          services or your use of the Site. Our total liability for any claim related to our
          services will not exceed the amount you paid for the specific service giving rise to the
          claim. Nothing in these Terms limits liability that cannot be limited under applicable
          law.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Website provided &ldquo;as is&rdquo;</h2>
        <p>
          The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          without warranties of any kind, express or implied. We do not guarantee that the Site
          will be uninterrupted, error-free, or free of harmful components. Reviews and
          testimonials shown on the Site reflect individual customer experiences and are not a
          guarantee of any particular result.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Intellectual property</h2>
        <p>
          The Site and its content — including text, graphics, logos, and layout — are owned by{" "}
          {business.name} or its licensors and are protected by applicable laws. You may not copy,
          reproduce, or reuse the Site&apos;s content without our permission, except as allowed by
          law.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Third-party links</h2>
        <p>
          The Site may contain links to third-party websites. We are not responsible for the
          content, products, or practices of those sites.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless {business.name} from claims, losses, or expenses
          arising out of your breach of these Terms, your violation of any law, or your
          misrepresentation of the items or conditions involved in a service.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of California, without regard to its
          conflict-of-laws rules. Any dispute arising from these Terms or our services will be
          handled in the state or federal courts located in San Bernardino County, California, and
          you consent to that jurisdiction and venue.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will revise the
          &ldquo;Effective date&rdquo; above. Your continued use of the Site or our services after
          changes take effect means you accept the updated Terms.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Contact us</h2>
        <p>
          {business.name}
          <br />
          {business.city}, {business.state}
          <br />
          Phone/Text:{" "}
          <a href={`tel:${business.phoneTel}`} className="text-brand-700 hover:underline">
            {business.phoneDisplay}
          </a>
          <br />
          Email:{" "}
          <a href={`mailto:${business.email}`} className="text-brand-700 hover:underline break-all">
            {business.email}
          </a>
        </p>
      </div>
    </section>
  );
}
