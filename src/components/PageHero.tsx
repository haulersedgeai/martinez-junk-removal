import Image from "next/image";
import type { ImageSlot } from "@/lib/images";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: ImageSlot;
  children?: React.ReactNode;
}) {
  if (image.kind !== "photo") {
    return (
      <section className="bg-gradient-to-br from-brand-950 via-ink-900 to-brand-900 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-safety-400">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-200">{subtitle}</p>
          ) : null}
          {children ? (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">{children}</div>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ink-900 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-safety-400">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-4 max-w-xl text-lg text-ink-200">{subtitle}</p> : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
        <div className="relative h-56 w-full overflow-hidden rounded-2xl md:h-72">
          <Image
            src={image.path}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
