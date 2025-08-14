import React from "react";

const AccentBadge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium tracking-wide border-yellow-500/30 bg-yellow-500/10 text-yellow-600">
    {children}
  </span>
);

const SectionHeading = ({ title, subtitle }) => (
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

const ImagePlaceholder = ({ label = "Afbeelding", ratio = "pt-[56.25%]" }) => (
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

const CategoryCard = ({ title, blurb }) => (
  <div className="group rounded-2xl border border-neutral-200/60 bg-white p-4 shadow-sm transition hover:shadow-md">
    <ImagePlaceholder label={title} ratio="pt-[66%]" />
    <div className="mt-3 flex items-start justify-between gap-3">
      <h3 className="text-base font-medium">{title}</h3>
      <AccentBadge>Populair</AccentBadge>
    </div>
    <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{blurb}</p>
    <button className="mt-3 w-full rounded-xl border border-yellow-600/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-500/20">
      Bekijken
    </button>
  </div>
);

const PortfolioTile = ({ caption }) => (
  <div className="rounded-2xl border border-neutral-200/60 bg-white p-2">
    <ImagePlaceholder label={caption} ratio="pt-[75%]" />
    <p className="px-2 pb-2 pt-3 text-sm text-neutral-700">{caption}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_100%_0%,#fafafa,white_30%,#f6f6f6_60%,white)] text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-white shadow-sm">
              <span className="text-xs font-bold tracking-widest">VL</span>
            </div>
            <div>
              <div className="text-sm font-semibold leading-none">
                Van Veluw Laserdesign
              </div>
              <div className="text-xs text-neutral-500">
                Precisie • Creativiteit • Kwaliteit
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm hover:opacity-70" href="#home">
              Home
            </a>
            <a className="text-sm hover:opacity-70" href="#producten">
              Producten
            </a>
            <a className="text-sm hover:opacity-70" href="#portfolio">
              Portfolio
            </a>
            <a className="text-sm hover:opacity-70" href="#over">
              Over ons
            </a>
            <a className="text-sm hover:opacity-70" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-xl border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Offerte
            </a>
            <a
              href="#producten"
              className="rounded-xl bg-yellow-500 px-3 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-yellow-400"
            >
              Bekijk producten
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
          <div>
            <AccentBadge>Lasergraveren & -snijden</AccentBadge>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Unieke lasercreaties — van idee tot afgewerkt product
            </h1>
            <p className="mt-3 text-base leading-relaxed text-neutral-700 md:text-lg">
              Layered wood art, gepersonaliseerde glazen, signage en
              relatiegeschenken. Kleine oplage of maatwerk? Geen probleem.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#producten"
                className="rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90"
              >
                Ontdek categorieën
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-neutral-300 px-4 py-2.5 text-sm font-medium hover:bg-neutral-50"
              >
                Vraag een offerte aan
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Snelle levertijd
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                Gratis bestandscheck
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                Zakelijk & particulier
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-yellow-500/10 blur-2xl" />
            <ImagePlaceholder label="Hero productfoto" ratio="pt-[100%]" />
          </div>
        </div>
      </section>

      {/* Categorieën */}
      <section
        id="producten"
        className="border-t border-neutral-200/70 bg-white/50 py-12"
      >
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Productcategorieën"
            subtitle="Start hier. Voeg later een configurator toe zodat klanten direct hun ontwerp kunnen uploaden."
          />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              title="Layered Wood Coasters"
              blurb="Meerdelige houten onderzetters met strakke pasvorm en optionele kleuraccenten."
            />
            <CategoryCard
              title="Glas & Mokken"
              blurb="Graveer namen, logo’s of een illustratie. Perfect als cadeau of voor horeca."
            />
            <CategoryCard
              title="Signage & Logo’s"
              blurb="Bedrijfsborden, deurplaten en displays in hout of acryl, op maat gemaakt."
            />
            <CategoryCard
              title="Cadeaus & Specials"
              blurb="Kaarten, sleutelhangers, awards en unieke maatwerkprojecten."
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Portfolio"
            subtitle="Een greep uit recent werk. Vervang de placeholders door jouw foto’s."
          />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Nijmegen skyline viltje",
              "Layered wood: berglandschap",
              "Gegraveerd wijnglas",
              "Acryl bedrijfslogo",
              "Kaart op hout",
              "Custom award",
            ].map((c, i) => (
              <PortfolioTile key={i} caption={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Over ons */}
      <section
        id="over"
        className="border-y border-neutral-200/70 bg-white/60 py-12"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <SectionHeading title="Over Van Veluw Laserdesign" />
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Ik ben Bart, gespecialiseerd in lasergraveren en -snijden met oog
              voor detail. Van eenmalig cadeau tot kleine series: ik help je van
              idee en bestand tot een strak afgewerkt eindproduct.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Advies over materialen (hout, acryl, glas, leer)</li>
              <li>• Voorbeeldvisuals voordat we produceren</li>
              <li>• Consistente kwaliteit en nette afwerking</li>
            </ul>
          </div>
          <div>
            <ImagePlaceholder
              label="Werkplaats / close-up gravure"
              ratio="pt-[100%]"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="Contact & offerte"
            subtitle="Beschrijf je idee, voeg optioneel een bestand toe en ontvang snel reactie."
          />
          <form className="mx-auto mt-8 grid w-full grid-cols-1 gap-4 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-sm">
            <div className="grid gap-1">
              <label className="text-sm font-medium">Naam</label>
              <input
                className="rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Je naam"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium">E‑mail</label>
              <input
                type="email"
                className="rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="naam@voorbeeld.nl"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium">Bericht</label>
              <textarea
                rows={5}
                className="rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Vertel kort wat je wil laten maken (materiaal, afmetingen, deadline)"
              ></textarea>
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium">Bestand (optioneel)</label>
              <input
                type="file"
                className="rounded-xl border border-neutral-300 px-3 py-2 text-sm"
              />
              <p className="text-xs text-neutral-500">
                SVG/AI/PDF/PNG/JPG – max 20MB (later: automatische
                bestandscheck)
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-neutral-500">
                Door te verzenden ga je akkoord met onze voorwaarden.
              </div>
              <button
                type="button"
                className="rounded-xl bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow hover:bg-yellow-400"
              >
                Versturen
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/70 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Van Veluw Laserdesign
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:opacity-70">
              Instagram
            </a>
            <a href="#" className="hover:opacity-70">
              Facebook
            </a>
            <a href="#" className="hover:opacity-70">
              KVK & info
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
