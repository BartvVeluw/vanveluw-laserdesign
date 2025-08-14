import ImagePlaceholder from "./ImagePlaceholder";
import AccentBadge from "./AccentBadge";

export default function CategoryCard({ title, blurb, cta = "Bekijken" }) {
  return (
    <div className="group rounded-2xl border border-neutral-200/60 bg-white p-4 shadow-sm transition hover:shadow-md">
      <ImagePlaceholder label={title} ratio="pt-[66%]" />
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-medium">{title}</h3>
        <AccentBadge>Populair</AccentBadge>
      </div>
      <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{blurb}</p>
      <button className="mt-3 w-full rounded-xl border border-yellow-600/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-500/20">
        {cta}
      </button>
    </div>
  );
}
