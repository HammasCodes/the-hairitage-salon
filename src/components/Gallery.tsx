const TRANSFORMATIONS = [
  { label: "Balayage Transformation" },
  { label: "Blonding Refresh" },
  { label: "Color Correction" },
  { label: "Extensions & Length" },
  { label: "Brazilian Blowout" },
  { label: "Root to Ends Glow-Up" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Transformations
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            Before &amp; After
          </h2>
          <p className="mt-4 text-cocoa/70">
            A look at the transformations happening in our chairs &mdash;
            gallery updated regularly with our latest work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.label}
              className="group overflow-hidden rounded-2xl border border-gold/20 bg-cream shadow-sm transition hover:shadow-lg"
            >
              <div className="grid grid-cols-2">
                <div className="relative flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-cocoa/15 to-cocoa/5">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cocoa/40">
                    Before
                  </span>
                </div>
                <div className="relative flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-blush via-gold-soft to-rose/40">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/60">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-display text-lg font-semibold text-ink">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-cocoa/45">
                  Photos coming soon
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
