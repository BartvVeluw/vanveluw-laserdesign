export default function AccentBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium tracking-wide border-yellow-500/30 bg-yellow-500/10 text-yellow-600">
      {children}
    </span>
  );
}
