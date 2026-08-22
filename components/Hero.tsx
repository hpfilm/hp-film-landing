"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/business";
import { TrackedLink } from "./TrackedLink";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img className="hero-image" src="/images/hero-hp-film-optimized.jpg" alt="Especialista de HP Film trabajando sobre un vehículo en el taller" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <h1 id="hero-title">Tu auto.<br />En manos de<br /><span>especialistas.</span></h1>
        <div className="hero-actions">
          <TrackedLink eventName="click_whatsapp_hero" className="button" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={19} aria-hidden="true" /> Pedir presupuesto</TrackedLink>
          <a className="button button-secondary" href="#trabajos">Ver nuestros trabajos</a>
        </div>
      </div>
    </section>
  );
}
