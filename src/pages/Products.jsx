import SectionHeading from "../components/ui/SectionHeading";
import CategoryCard from "../components/ui/CategoryCard";

export default function Products() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Alle Producten"
          subtitle="Kies een categorie. Binnenkort: upload je eigen ontwerp en zie direct een preview."
        />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard
            title="Layered Wood Coasters"
            blurb="Setjes met strakke pasvorm. Optioneel: kleuraccenten of acryl inlays."
            cta="Details"
          />
          <CategoryCard
            title="Glazen & Mokken"
            blurb="Graveer namen, logo’s of iconen. Perfect als cadeau of voor horeca."
            cta="Details"
          />
          <CategoryCard
            title="Signage & Logo’s"
            blurb="Borden en displays in hout of acryl, maatwerk op aanvraag."
            cta="Details"
          />
          <CategoryCard
            title="Kaarten & Plattegronden"
            blurb="Stadskaarten en fantasy maps op hout, klaar voor aan de muur."
            cta="Details"
          />
          <CategoryCard
            title="Awards & Gifts"
            blurb="Bedankjes, awards en gepersonaliseerde relatiegeschenken."
            cta="Details"
          />
          <div className="group rounded-2xl border border-dashed border-yellow-400 bg-yellow-50 p-6">
            <h3 className="text-lg font-semibold">
              Binnenkort: upload je ontwerp
            </h3>
            <p className="mt-2 text-sm text-neutral-700">
              Kies materiaal en formaat, upload een bestand en ontvang direct
              een prijsindicatie.
            </p>
            <button className="mt-4 rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-yellow-400">
              Meld me aan voor update
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
