"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/business";
import { CallButton, PhoneIcon, PrimaryCta } from "@/components/Buttons";
import { MexicanFlag } from "@/components/MexicanFlag";

const navLinks = [
  { href: "/dumpster-rental", label: "Dumpster Rental" },
  { href: "/service-area", label: "Service Area" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink-100 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-bold text-ink-900 sm:text-xl">
              {business.displayName}
            </span>
            <span className="text-xs font-medium tracking-wide text-brand-700">
              {business.displayTagline.toUpperCase()}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <MexicanFlag className="h-[1em] w-auto mr-1.5" /> Se habla español
            </span>
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-1.5 text-sm font-medium text-ink-800 transition-colors hover:text-brand-700 hover:underline"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <PrimaryCta className="px-4 py-2 text-sm">Get a Quote</PrimaryCta>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open ? (
          <div id="mobile-menu" className="border-t border-ink-100 bg-paper px-4 pb-4 lg:hidden">
            <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink-800 hover:bg-brand-50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <MexicanFlag className="h-[1em] w-auto mr-1.5" /> Se habla español
            </span>
          </div>
        ) : null}
      </header>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink-100 bg-paper/95 p-2 backdrop-blur md:hidden">
        <CallButton className="w-1/2 py-2.5 text-sm" />
        <PrimaryCta className="w-1/2 py-2.5 text-sm">Get a Quote</PrimaryCta>
      </div>

      <span className="sr-only">{business.displayName} main navigation</span>
    </>
  );
}
