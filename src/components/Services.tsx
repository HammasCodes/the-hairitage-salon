const SERVICES = [
  {
    title: "Haircuts",
    price: "Starting at $45",
    description: "Precision cuts and styling tailored to your face shape and lifestyle.",
  },
  {
    title: "Color Corrections",
    price: "Starting at $150",
    description: "Expert correction for color gone wrong, restoring healthy, even tone.",
  },
  {
    title: "Blonding",
    price: "Starting at $175",
    description: "Balayage, highlights, and full blonding services for dimensional, lived-in color.",
  },
  {
    title: "Hair Extensions",
    price: "Starting at $250",
    description: "Seamless length and volume using premium, quality extension methods.",
  },
  {
    title: "Brazilian Blowouts",
    price: "Starting at $200",
    description: "Smooth, frizz-free hair that lasts for months with a healthy shine.",
  },
  {
    title: "Facials",
    price: "Starting at $65",
    description: "Relaxing, rejuvenating facials customized to your skin's needs.",
  },
  {
    title: "Waxing",
    price: "Starting at $15",
    description: "Quick, gentle waxing services for brows, lip, and beyond.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Our Services
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            Crafted For You
          </h2>
          <p className="mt-4 text-cocoa/70">
            From everyday cuts to full transformations &mdash; every service
            is customized to you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-gold/20 bg-cream p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <h3 className="text-display text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-cocoa/70">
                {service.description}
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-rose">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-cocoa/50">
          Pricing may vary based on hair length, density, and desired result
          &mdash; book a consultation for an exact quote.
        </p>
      </div>
    </section>
  );
}
