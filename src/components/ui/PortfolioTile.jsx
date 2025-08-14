import ImagePlaceholder from "./ImagePlaceholder";

export default function PortfolioTile({ caption }) {
  return (
    <div className="rounded-2xl border border-neutral-200/60 bg-white p-2">
      <ImagePlaceholder label={caption} ratio="pt-[75%]" />
      <p className="px-2 pb-2 pt-3 text-sm text-neutral-700">{caption}</p>
    </div>
  );
}
