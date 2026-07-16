import { PlaceholderBlock } from "@/components/PlaceholderBlock";
import type { ImageSlot } from "@/lib/images";

type IconName = React.ComponentProps<typeof PlaceholderBlock>["icon"];

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  icon = "truck",
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: ImageSlot;
  icon?: IconName;
  children?: React.ReactNode;
}) {
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
        <PlaceholderBlock alt={image.alt} icon={icon} className="h-56 w-full md:h-72" />
      </div>
    </section>
  );
}
