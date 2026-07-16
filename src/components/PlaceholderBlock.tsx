type IconName = "truck" | "dumpster" | "home" | "map" | "phone" | "sparkles" | "camera";

const icons: Record<IconName, React.ReactNode> = {
  truck: (
    <path
      d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM6.5 19a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM17.5 19a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  dumpster: (
    <path
      d="M4 8h16l-1.5 10a1 1 0 01-1 .9H6.5a1 1 0 01-1-.9L4 8zM3 8h18M8 8V5.5A1.5 1.5 0 019.5 4h5A1.5 1.5 0 0116 5.5V8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  home: (
    <path
      d="M4 11l8-7 8 7M6 10v9h12v-9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  map: (
    <path
      d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  phone: (
    <path
      d="M6.5 3h3l1.5 4.5-2 1.5a11 11 0 005 5l1.5-2L20 13.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.2 2 2 0 016.5 3z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  sparkles: (
    <path
      d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  camera: (
    <path
      d="M4 8h3l1.5-2h7L17 8h3v11H4zM12 18a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export function PlaceholderBlock({
  label,
  alt,
  icon = "truck",
  className = "",
  tone = "brand",
}: {
  label?: string;
  alt: string;
  icon?: IconName;
  className?: string;
  tone?: "brand" | "ink";
}) {
  const gradient =
    tone === "brand"
      ? "from-brand-800 via-brand-700 to-ink-900"
      : "from-ink-800 via-ink-900 to-brand-950";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} text-brand-100 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12"
        aria-hidden="true"
      >
        {icons[icon]}
      </svg>
      {label ? (
        <span className="relative px-4 text-center text-xs font-medium uppercase tracking-wide text-brand-100/80 sm:text-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
