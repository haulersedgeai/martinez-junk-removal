import Image from "next/image";
import { PrimaryCta } from "@/components/Buttons";
import { PlaceholderBlock } from "@/components/PlaceholderBlock";
import { dumpsterImageSlots } from "@/lib/images";
import type { Dumpster } from "@/lib/business";

export function DumpsterCard({ dumpster, compact = false }: { dumpster: Dumpster; compact?: boolean }) {
  const image = dumpsterImageSlots[dumpster.slug];

  return (
    <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:hover:translate-y-0">
      {image ? (
        image.kind === "photo" ? (
          <div className="relative h-36 w-full">
            <Image src={image.path} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
        ) : (
          <PlaceholderBlock alt={image.alt} icon="dumpster" label={dumpster.size} className="h-36 w-full" watermark={false} />
        )
      ) : null}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-ink-900">{dumpster.size}</h3>
          <p className="mt-1 text-sm font-medium text-brand-700">{dumpster.bestFor}</p>
          <p className="mt-4 font-heading text-2xl font-bold text-ink-900">
            ${dumpster.priceLow}–${dumpster.priceHigh}
          </p>
          {!compact ? (
            <ul className="mt-4 space-y-1.5 text-sm text-ink-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                {dumpster.weightLimit}
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                {dumpster.rentalDays} rental included
              </li>
            </ul>
          ) : (
            <p className="mt-2 text-xs text-ink-500">{dumpster.weightLimit}</p>
          )}
        </div>
        <PrimaryCta className="mt-5 w-full">Get a Quote</PrimaryCta>
      </div>
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
