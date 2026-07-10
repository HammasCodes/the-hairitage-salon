const ADDRESS = "401 Lake Air Dr Ste F, Waco, TX 76710";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday", time: "9:00 AM – 6:00 PM" },
  { day: "Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function LocationHours() {
  return (
    <section id="location" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Visit Us
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            Location &amp; Hours
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold/25 shadow-sm">
            <iframe
              title="The Hairitage Salon location map"
              src={MAPS_EMBED_SRC}
              className="h-80 w-full lg:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-2xl border border-gold/25 bg-ivory p-8 shadow-sm sm:p-10">
            <div>
              <h3 className="text-display text-xl font-semibold text-rose">
                Address
              </h3>
              <p className="mt-3 text-lg text-cocoa/85">{ADDRESS}</p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-cocoa/60 hover:text-rose"
              >
                Get Directions &rarr;
              </a>
            </div>

            <div>
              <h3 className="text-display text-xl font-semibold text-rose">
                Hours
              </h3>
              <ul className="mt-3 divide-y divide-gold/15">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-2.5 text-cocoa/80"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span
                      className={h.time === "Closed" ? "text-cocoa/35" : "text-cocoa/90"}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:+12544578456"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose to-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition hover:shadow-md"
            >
              Call to Book: 254-457-8456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
