const PHONE_DISPLAY = "254-457-8456";
const PHONE_TEL = "tel:+12544578456";
const ADDRESS = "401 Lake Air Dr Ste F, Waco, TX 76710";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ivory py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,193,163,0.3),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
          Come As You Are
        </p>
        <h2 className="text-display mt-3 text-4xl font-semibold text-ink sm:text-5xl md:text-6xl">
          Book Your Appointment Today
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cocoa/75">
          Call us to get on the books &mdash; we can&apos;t wait to welcome
          you in and show you what family-style hair care feels like.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={PHONE_TEL}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-rose to-gold px-10 py-5 text-xl font-semibold uppercase tracking-wider text-white shadow-md transition hover:shadow-lg hover:brightness-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02Z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <p className="text-sm uppercase tracking-wider text-cocoa/50">
            Tap to call &middot; Tue&ndash;Sat, 9 AM &ndash; 6 PM
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-6 border-t border-gold/25 pt-10 text-left sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa/50">
              Visit
            </h3>
            <p className="mt-2 text-cocoa/85">{ADDRESS}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa/50">
              Call
            </h3>
            <a
              href={PHONE_TEL}
              className="mt-2 block font-semibold text-cocoa/85 hover:text-rose"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
