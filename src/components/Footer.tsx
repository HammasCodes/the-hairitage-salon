const PHONE_DISPLAY = "254-457-8456";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <p className="text-display text-base font-semibold tracking-wide text-ink">
          The Hairitage <span className="text-rose">Salon</span>
        </p>
        <p className="text-sm text-cocoa/60">
          401 Lake Air Dr Ste F, Waco, TX 76710 &middot;{" "}
          <a href="tel:+12544578456" className="hover:text-rose">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="text-xs text-cocoa/45">
          &copy; {new Date().getFullYear()} The Hairitage Salon. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
