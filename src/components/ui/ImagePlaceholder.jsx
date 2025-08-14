export default function ImagePlaceholder({
  label = "Afbeelding",
  ratio = "pt-[56.25%]",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-neutral-200/40 ${ratio}`}
    >
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)]">
        <div className="text-xs uppercase tracking-widest text-neutral-500">
          {label}
        </div>
      </div>
    </div>
  );
}
