import type { Metadata } from "next";
import { PlaceholderBlock } from "@/components/PlaceholderBlock";
import { PrimaryCta, CallButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for has been hauled away.",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6">
      <PlaceholderBlock alt="Empty truck bed — page not found" icon="truck" className="h-40 w-40" />
      <div>
        <p className="font-heading text-6xl font-bold text-brand-700">404</p>
        <h1 className="mt-3 font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
          Looks Like This Page Got Hauled Away
        </h1>
        <p className="mt-3 text-ink-600">
          We couldn&apos;t find the page you were looking for. Let&apos;s get you back to clearing
          out the junk instead.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <PrimaryCta href="/">Back to Home</PrimaryCta>
        <CallButton />
      </div>
    </section>
  );
}
