import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "el taller de Tilde — Donde cada puntada cuenta una historia",
  description:
    "Un atelier digital creado especialmente para Tilde. Aprende diseño de moda, costura, patronaje, tejido y más. Tu creatividad no tiene edad.",
  keywords: [
    "diseño de moda",
    "costura",
    "tejido",
    "patronaje",
    "alta costura",
    "aprender moda",
  ],
  openGraph: {
    title: "el taller de Tilde",
    description: "Donde cada puntada cuenta una historia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
