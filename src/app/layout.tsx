import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Hairitage Salon | Boutique Hair Salon & Spa in Waco, TX",
  description:
    "A boutique hair salon and spa in Waco, Texas. Haircuts, color corrections, blonding, extensions, Brazilian blowouts, facials, and waxing in a warm, judgment-free, family-like atmosphere. Book your appointment today.",
  keywords: [
    "hair salon Waco TX",
    "hair color Waco",
    "blonding Waco",
    "hair extensions Waco",
    "Brazilian blowout Waco",
    "facials Waco",
    "waxing Waco",
    "salon and spa Waco Texas",
  ],
  openGraph: {
    title: "The Hairitage Salon | Waco, TX",
    description:
      "You may come in a stranger, but you'll leave family. Boutique hair salon & spa in Waco, Texas.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
