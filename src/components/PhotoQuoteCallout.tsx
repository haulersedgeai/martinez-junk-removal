import { twMerge } from "tailwind-merge";
import { business } from "@/lib/business";

export function PhotoQuoteCallout({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "border-white/40 bg-white/10"
      : "border-safety-400 bg-safety-50";
  const textClasses = tone === "dark" ? "text-white" : "text-ink-800";
  const linkClasses = tone === "dark" ? "text-safety-300" : "text-safety-700";

  return (
    <div className={twMerge("flex items-start gap-3 rounded-2xl border-2 border-dashed p-5", toneClasses, className)}>
      <span className="text-2xl" aria-hidden="true">
        📸
      </span>
      <p className={twMerge("text-sm sm:text-base", textClasses)}>
        <strong>Have photos?</strong> Text them to{" "}
        <a href={business.phoneSms} className={twMerge("font-semibold underline underline-offset-2", linkClasses)}>
          {business.phoneDisplay}
        </a>{" "}
        for the fastest, most accurate quote.
      </p>
    </div>
  );
}
