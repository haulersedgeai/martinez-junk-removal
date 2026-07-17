export function MexicanFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 21 12"
      role="img"
      aria-label="Mexican flag"
      className={className}
      style={{ borderRadius: 2, display: "inline-block", verticalAlign: "middle" }}
    >
      <rect x="0" width="7" height="12" fill="#006847" />
      <rect x="7" width="7" height="12" fill="#ffffff" />
      <rect x="14" width="7" height="12" fill="#ce1126" />
    </svg>
  );
}
