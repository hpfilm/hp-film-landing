"use client";

import { Clock3, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { BUSINESS, whatsappUrl } from "../lib/business";
import { SectionHeading } from "./SectionHeading";
import { TrackedLink } from "./TrackedLink";

const mapEmbed = `https://www.google.com/maps?q=${BUSINESS.coordinates.latitude},${BUSINESS.coordinates.longitude}&z=16&output=embed`;

export function Location() {
  return <section className="section location-section" id="ubicacion"><div className="container"><SectionHeading eyebrow="Ubicación" title="Encontranos" copy="Acercate al taller o consultanos antes de venir." /><div className="location-grid"><div className="map-frame"><iframe title="Mapa con la ubicación de HP Film" src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="location-card"><img src="/images/logo-hp-film.png" alt="HP Film" /><div className="address-line"><MapPin size={20} aria-hidden="true" /><p><strong>HP Film</strong><br />Villa de Luján 2136<br />B1824 · Provincia de Buenos Aires<br />Argentina</p></div><div className="address-line"><Phone size={20} aria-hidden="true" /><a href={`tel:+${BUSINESS.whatsappNumber}`}>{BUSINESS.phoneDisplay}</a></div><div className="hours"><div className="hours-title"><Clock3 size={20} aria-hidden="true" /><strong>Horarios</strong></div>{BUSINESS.hours.map(({ day, hours }) => <div key={day}><span>{day}</span><span>{hours}</span></div>)}</div><div className="location-actions"><TrackedLink eventName="click_maps" className="button" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer"><Navigation size={17} aria-hidden="true" /> Cómo llegar</TrackedLink><TrackedLink eventName="click_phone" className="button button-secondary" href={`tel:+${BUSINESS.whatsappNumber}`}><Phone size={17} aria-hidden="true" /> Llamar</TrackedLink><TrackedLink eventName="click_whatsapp_service" eventLabel="location" className="button button-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> WhatsApp</TrackedLink></div></div></div></div></section>;
}
