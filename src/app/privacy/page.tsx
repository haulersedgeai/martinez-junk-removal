import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${business.name} — how we collect, use, and protect your information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Legal</p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
        {business.name} — Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-ink-500">Effective date: July 16, 2026</p>

      <div className="prose-legal mt-8 space-y-6 text-ink-700">
        <p>
          {business.name} (&ldquo;Martinez Junk Removal,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains what information we
          collect when you visit {business.domain} (the &ldquo;Site&rdquo;) or contact us for junk
          removal and dumpster rental services, how we use that information, and the choices you
          have.
        </p>
        <p>By using our Site or contacting us, you agree to the practices described in this policy.</p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Information we collect</h2>
        <p>
          <strong>Information you provide to us.</strong> When you request a quote, call, text,
          email, or otherwise contact us, we may collect your name, phone number, email address,
          service address or city/ZIP code, and any details you share about the job (for example,
          the type and amount of material to be removed). If you text us photos of your items or
          property to help us prepare a quote, we receive those photos and the phone number you
          send them from.
        </p>
        <p>
          <strong>Information collected automatically.</strong> When you visit the Site, we and our
          service providers may automatically collect standard technical information such as your
          device type, browser, IP address, pages viewed, and referring pages. We use this to keep
          the Site working, secure, and easy to use. This information may be collected through
          cookies and similar technologies.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>respond to your quote requests and questions;</li>
          <li>
            schedule, provide, and follow up on junk removal, hauling, demolition, cleanout, and
            dumpster rental services;
          </li>
          <li>communicate with you by phone, text message, or email about your request or service;</li>
          <li>operate, maintain, secure, and improve the Site; and</li>
          <li>comply with the law and enforce our agreements.</li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-ink-900">Text messaging</h2>
        <p>
          If you contact us by text message — including texting photos for a quote — we will use
          your phone number to respond about your request and service. Standard message and data
          rates from your carrier may apply. We do not sell your phone number, and we do not use it
          to send marketing texts unless you ask us to.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Cookies and analytics</h2>
        <p>
          The Site may use cookies and similar technologies, including basic analytics, to
          understand how visitors use the Site so we can improve it. You can set your browser to
          refuse cookies or alert you when cookies are being sent; some parts of the Site may not
          function properly if you disable them.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">How we share information</h2>
        <p>We do <strong>not</strong> sell your personal information. We share information only in these limited situations:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Service providers.</strong> We use trusted third parties to run our business
            and Site — for example, our website host and our email delivery provider, which
            processes quote-form submissions so they reach our inbox. These providers may access
            your information only to perform services for us.
          </li>
          <li>
            <strong>Legal reasons.</strong> We may disclose information if required by law,
            subpoena, or legal process, or to protect the rights, property, or safety of our
            customers, the public, or our business.
          </li>
          <li>
            <strong>Business transfers.</strong> If our business is sold or transferred,
            information may be transferred as part of that transaction.
          </li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-ink-900">Data retention</h2>
        <p>
          We keep the information you provide for as long as needed to respond to your request,
          provide our services, and meet our legal, tax, and recordkeeping obligations, after which
          we take reasonable steps to delete or de-identify it.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Security</h2>
        <p>
          We use reasonable administrative and technical measures to protect your information.
          However, no method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Your privacy choices and California rights</h2>
        <p>
          You may contact us at any time to ask what personal information we have about you, to
          correct it, or to request that we delete it, and we will respond as required by law.
          California residents have rights under the California Consumer Privacy Act (CCPA/CPRA),
          including the right to know what personal information we collect and how we use it, the
          right to request deletion, and the right to opt out of the &ldquo;sale&rdquo; or
          &ldquo;sharing&rdquo; of personal information. We do not sell or share your personal
          information as those terms are defined by that law. To exercise any of these rights,
          contact us using the information below; we will not discriminate against you for doing
          so.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Children&apos;s privacy</h2>
        <p>
          Our Site and services are intended for adults and are not directed to children under 13.
          We do not knowingly collect personal information from children under 13. If you believe a
          child has provided us information, please contact us and we will delete it.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Links to other sites</h2>
        <p>
          Our Site may link to third-party websites (such as our social media pages). We are not
          responsible for the privacy practices of those sites, and we encourage you to review
          their policies.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink-900">Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the
          &ldquo;Effective date&rdquo; above. Your continued use of the Site after changes take
          effect means you accept the updated policy.
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
