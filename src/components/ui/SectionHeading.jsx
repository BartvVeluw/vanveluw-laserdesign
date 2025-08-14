export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-neutral-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
