"use client";

import { useEffect, useState } from "react";

const PHONE_DISPLAY = "254-457-8456";
const PHONE_TEL = "tel:+12544578456";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur shadow-[0_1px_0_0_rgba(198,163,95,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-display text-xl font-semibold tracking-wide text-ink sm:text-2xl">
          The Hairitage <span className="text-rose">Salon</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-cocoa/80 transition hover:text-rose"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={PHONE_TEL}
            className="text-sm font-semibold tracking-wide text-cocoa/90 hover:text-rose"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-rose to-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition hover:shadow-md"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gold/20 bg-ivory px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium uppercase tracking-wider text-cocoa/85 hover:text-rose"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="text-base font-semibold text-cocoa/90 hover:text-rose"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-rose to-gold px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
