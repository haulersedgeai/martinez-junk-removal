import Link from "next/link";
import type { Service } from "@/lib/business";

export function ServiceCard({ service }: { service: Service }) {
  const href = service.hasDeepPage ? `/${service.slug}` : `/services#${service.slug}`;

  return (
    <div
      id={service.slug}
      className="flex h-full scroll-mt-24 flex-col justify-between rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div>
        <h3 className="font-heading text-lg font-bold text-ink-900">{service.title}</h3>
        <p className="mt-2 text-sm text-ink-600">{service.shortDescription}</p>
        <ul className="mt-4 space-y-1.5">
          {service.bullets.slice(0, 4).map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-ink-600">
              <CheckIcon />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
      >
        {service.hasDeepPage ? "Learn more" : "Details"} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
      aria-hidden="true"
    >
      <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
