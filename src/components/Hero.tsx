export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-24"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,193,163,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(201,139,127,0.2),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blush/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold-soft/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-in text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cocoa">
            Waco, Texas &middot; Salon &amp; Spa
          </p>

          <h1 className="text-display text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">
            You May Come In a
            <br />
            <span className="text-gradient-gold">Stranger</span>
            <br />
            But You&apos;ll Leave
            <br />
            <span className="italic text-rose">Family.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg text-cocoa/80 lg:mx-0">
            Welcome to The Hairitage Salon &mdash; a boutique hair salon and
            spa where every guest is treated with warmth, care, and zero
            judgment. Come as you are, leave feeling beautiful.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose to-gold px-8 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-md transition hover:shadow-lg hover:brightness-105"
            >
              Book Your Appointment
              <span aria-hidden>&rarr;</span>
            </a>
            <a
              href="tel:+12544578456"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-base font-medium uppercase tracking-wider text-cocoa transition hover:border-gold hover:bg-gold-soft/20"
            >
              Call 254-457-8456
            </a>
          </div>

          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-gold/25 pt-8 lg:mx-0">
            <div>
              <dt className="text-display text-2xl font-semibold text-rose">Warm</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-cocoa/60">
                Welcoming Atmosphere
              </dd>
            </div>
            <div>
              <dt className="text-display text-2xl font-semibold text-rose">Judgment</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-cocoa/60">
                Free, Always
              </dd>
            </div>
            <div>
              <dt className="text-display text-2xl font-semibold text-rose">Family</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-cocoa/60">
                Style Care
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-in relative hidden aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-blush via-cream to-gold-soft shadow-xl lg:block">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10 text-center">
            <span className="text-display text-3xl italic text-cocoa">
              &ldquo;Come as you are&rdquo;
            </span>
            <span className="h-px w-16 bg-gold" />
            <span className="text-sm uppercase tracking-[0.3em] text-cocoa/70">
              Hair &middot; Color &middot; Spa
            </span>
          </div>
          <div className="absolute right-8 top-8 h-14 w-14 rounded-full border-2 border-gold/50" />
          <div className="absolute bottom-10 left-8 h-8 w-8 rounded-full bg-rose/60" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
