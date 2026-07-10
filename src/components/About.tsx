const PILLARS = [
  {
    title: "A Growing Salon & Spa",
    description:
      "From haircuts to full spa services, The Hairitage Salon is Waco's growing home for hair and self-care, all under one roof.",
  },
  {
    title: "Judgment-Free & Welcoming",
    description:
      "Whatever your hair story, you're welcome here. No judgment, no pressure — just honest care and expert guidance.",
  },
  {
    title: "A Family-Like Atmosphere",
    description:
      "Our chairs feel like home. Many guests become regulars, and regulars become family — that's the Hairitage difference.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            About The Hairitage Salon
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            More Than a Salon
            <br />
            <span className="italic text-rose">A Second Home.</span>
          </h2>
          <p className="mt-6 text-lg text-cocoa/75">
            The Hairitage Salon is a growing boutique salon and spa nestled
            in Waco, Texas. We built this space to feel like exactly what
            our name says &mdash; a place where heritage and hospitality
            meet, and every guest is treated like family from the moment
            they walk in.
          </p>
          <p className="mt-4 text-lg text-cocoa/75">
            Whether you&apos;re here for a quick trim, a full color
            transformation, or a moment of relaxation with a facial or
            wax, you&apos;ll find the same warm, judgment-free welcome
            every single time.
          </p>
        </div>

        <div className="grid gap-5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-5 rounded-2xl border border-gold/20 bg-ivory p-6 shadow-sm"
            >
              <span className="mt-1 h-full w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-rose to-gold" />
              <div>
                <h3 className="text-display text-xl font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-cocoa/70">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
