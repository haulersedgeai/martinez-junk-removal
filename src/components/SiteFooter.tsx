import Link from "next/link";
import { business, cities } from "@/lib/business";
import { RatingBadges } from "@/components/RatingBadges";

const quickLinks = [
  { href: "/dumpster-rental", label: "Dumpster Rental" },
  { href: "/service-area", label: "Service Area" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact / Get a Quote" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900 pb-24 text-ink-100 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-white">{business.displayName}</p>
          <p className="mt-2 text-sm text-ink-300">
            Locally owned &amp; operated by {business.owner} since {business.founded}.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-700/30 px-3 py-1 text-xs font-semibold text-brand-200">
            🇪🇸 Se habla español
          </p>
          <div className="mt-4">
            <RatingBadges tone="dark" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-300">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${business.phoneTel}`} className="hover:text-brand-300">
                Call or Text: {business.phoneDisplay}
              </a>{" "}
              <a href={business.phoneSms} className="text-ink-400 hover:text-brand-300">
                (text)
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-brand-300 break-all">
                {business.email}
              </a>
            </li>
            <li className="text-ink-300">{business.city}, {business.state}</li>
            <li className="text-ink-300">
              {business.hoursDisplay} · {business.hoursClosed}
            </li>
            <li className="text-ink-300">{business.sameDayNote}</li>
            <li className="text-ink-400 text-xs">Accepts {business.payments.join(" · ")}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-300">Service Area</h2>
          <p className="mt-3 text-sm text-ink-300">
            {business.serviceCounties.join(" · ")}
          </p>
          <p className="mt-2 text-sm text-ink-300">
            {cities.length}+ cities served, including {cities.slice(0, 6).join(", ")} and more.
          </p>
          <Link href="/service-area" className="mt-2 inline-block text-sm font-semibold text-brand-300 hover:underline">
            See full service area →
          </Link>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-300">Quick Links</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href={business.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${business.displayName} on Facebook`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 hover:bg-brand-700"
            >
              <FacebookIcon />
            </a>
            <a
              href={business.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${business.displayName} on Instagram`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 hover:bg-brand-700"
            >
              <InstagramIcon />
            </a>
            <a
              href={business.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${business.displayName} on Yelp`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 hover:bg-brand-700"
            >
              <YelpIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-800 px-4 py-6 text-center text-xs text-ink-400 sm:px-6">
        <p>
          © 2026 {business.name}. All rights reserved. ·{" "}
          <Link href="/terms" className="hover:text-brand-300">
            Terms of Service
          </Link>{" "}
          ·{" "}
          <Link href="/privacy" className="hover:text-brand-300">
            Privacy Policy
          </Link>
        </p>
        <p className="mt-2">
          Powered by{" "}
          <a
            href="https://adimize.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-brand-300"
          >
            Adimize
          </a>{" "}
          – Local Service Digital Marketing
        </p>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05V10H7.7v3.1h2.7v8h3.1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 text-white" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5.2l3.4 4.9-5.6 1.9L12 7.2h1zm-4.4 6.9l5.7-1.4-3 5.3-2.7-3.9zm9.6.6l-5.4 2.4 4.2 3.3 1.2-5.7z" />
    </svg>
  );
}
