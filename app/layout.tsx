import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "../components/Analytics";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HP Film | Polarizado, Sacabollos y Cristales Automotor",
  description: "HP Film. Polarizado, sacabollos y cristales automotor en Buenos Aires. Consultá por tu vehículo y pedí presupuesto por WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_AR", title: "HP Film | Tu auto en manos de especialistas", description: "Polarizado, sacabollos y cristales automotor. Pedí presupuesto por WhatsApp.", url: "/", siteName: "HP Film", images: [{ url: "/images/hero-hp-film.png", width: 1680, height: 945, alt: "HP Film, especialistas en cuidado automotor" }] },
  twitter: { card: "summary_large_image", title: "HP Film | Tu auto en manos de especialistas", description: "Polarizado, sacabollos y cristales automotor.", images: ["/images/hero-hp-film.png"] },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
  icons: {
    icon: "/images/logo-hp-film.png",
    shortcut: "/images/logo-hp-film.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}<Analytics />
      </body>
    </html>
  );
}
