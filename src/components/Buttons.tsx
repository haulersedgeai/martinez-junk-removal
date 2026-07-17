import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { business } from "@/lib/business";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

// twMerge (not plain template concatenation) so a caller's className can
// reliably override base/variant color or spacing utilities — Tailwind's
// generated CSS order, not class-attribute order, decides which conflicting
// utility wins, so naive string concatenation makes overrides unreliable.

export function PrimaryCta({
  href = "/contact",
  children = "Get a Free Quote",
  className = "",
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={twMerge(base, "bg-safety-500 text-white shadow-lg shadow-safety-900/20 hover:bg-safety-600", className)}
    >
      {children}
    </Link>
  );
}

export function CallButton({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={`tel:${business.phoneTel}`} className={twMerge(base, "bg-brand-700 text-white hover:bg-brand-800", className)}>
      <PhoneIcon />
      {children ?? `Call ${business.phoneDisplay}`}
    </a>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path
        d="M6.5 3h3l1.5 4.5-2 1.5a11 11 0 005 5l1.5-2L20 13.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.2 2 2 0 016.5 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TextButton({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a
      href={business.phoneSms}
      className={twMerge(base, "border-2 border-ink-900 bg-transparent text-ink-900 hover:bg-ink-900 hover:text-white", className)}
    >
      <CameraIcon />
      {children ?? "Text a Photo"}
    </a>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 8h3l1.5-2h7L17 8h3v11H4zM12 18a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
