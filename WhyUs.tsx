"use client";

import { BadgeCheck, Camera, Handshake, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const points = [
  { icon: Handshake, title: "Atención directa", copy: "Hablá con el negocio antes de realizar el trabajo y despejá tus dudas." },
  { icon: Camera, title: "Presupuesto fácil", copy: "Enviá información y fotos por WhatsApp para evaluar mejor tu consulta." },
  { icon: BadgeCheck, title: "Cuidado en cada trabajo", copy: "Una forma de trabajar profesional, cuidada y atenta a los detalles." },
  { icon: MapPin, title: "Taller físico", copy: "Visitá el local de HP Film en Villa de Luján 2136." },
];

export function WhyUs() {
  return <section className="section why-section" id="nosotros"><div className="container why-layout"><SectionHeading eyebrow="Por qué HP Film" title="Tu auto merece un trabajo bien hecho" copy="Una consulta simple, un trato directo y el cuidado que tu vehículo necesita." /><div className="why-grid">{points.map(({ icon: Icon, title, copy }) => <article key={title}><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>;
}
