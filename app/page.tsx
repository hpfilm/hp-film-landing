import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Location } from "../components/Location";
import { QuoteForm } from "../components/QuoteForm";
import { Reviews } from "../components/Reviews";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { BUSINESS, SERVICES } from "../lib/business";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phoneDisplay,
    address: { "@type": "PostalAddress", streetAddress: "Villa de Luján 2136", postalCode: "B1824", addressRegion: "Provincia de Buenos Aires", addressCountry: "AR" },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.coordinates.latitude, longitude: BUSINESS.coordinates.longitude },
    sameAs: [BUSINESS.instagramUrl],
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Servicios automotor", itemListElement: SERVICES.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) },
  };
  return (
    <><Header /><main><Hero /><Services /><QuoteForm /><Gallery /><WhyUs /><Reviews /><Location /><FAQ /><FinalCTA /></main><Footer /><FloatingWhatsApp /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>
  );
}
