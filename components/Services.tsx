"use client";

import { ArrowUpRight, CarFront, CircleDotDashed, PanelsTopLeft } from "lucide-react";
import { SERVICE_MESSAGES, whatsappUrl } from "../lib/business";
import { SectionHeading } from "./SectionHeading";
import { TrackedLink } from "./TrackedLink";

const services = [
  { key: "polarizado", number: "01", icon: PanelsTopLeft, title: "Polarizado automotor", copy: "Mejorá el confort y la privacidad de tu vehículo con una colocación cuidada y atención personalizada.", cta: "Consultar polarizado", image: "/images/polarizado-service.jpg" },
  { key: "sacabollos", number: "02", icon: CircleDotDashed, title: "Sacabollos", copy: "Enviá fotos del daño por WhatsApp y contanos qué pasó. Evaluamos cada caso antes de coordinar el trabajo.", cta: "Consultar por mi auto", image: "/images/sacabollos-service.jpg" },
  { key: "cristales", number: "03", icon: CarFront, title: "Cristales automotor", copy: "Consultanos por los cristales de tu vehículo y te orientamos según el trabajo que necesites.", cta: "Consultar cristales", image: "/images/cristales-service.jpg" },
] as const;

export function Services() {
  return <section className="section services-section" id="servicios"><div className="container"><SectionHeading eyebrow="Qué hacemos" title="Servicios para cuidar tu auto" copy="Soluciones profesionales para estética, protección y cristales de tu vehículo." /><div className="services-grid">{services.map(({ key, number, icon: Icon, title, copy, cta, image }) => <article className={`service-card ${image ? "service-card--image" : ""}`} key={key}>{image && <img className="service-image" src={image} alt={title} loading="lazy" />}<div className="service-top"><span>{number}</span><Icon size={28} strokeWidth={1.5} aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p><TrackedLink eventName="click_whatsapp_service" eventLabel={key} className="text-link" href={whatsappUrl(SERVICE_MESSAGES[key])} target="_blank" rel="noreferrer">{cta}<ArrowUpRight size={17} aria-hidden="true" /></TrackedLink></article>)}</div></div></section>;
}
