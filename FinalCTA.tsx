"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/business";
import { TrackedLink } from "./TrackedLink";

export function FinalCTA() {
  return <section className="final-cta"><div className="container final-cta-inner"><div><p className="eyebrow">Tu consulta empieza acá</p><h2>¿Querés consultar por tu auto?</h2><p>Contanos qué necesitás y pedí presupuesto directamente por WhatsApp.</p></div><TrackedLink eventName="click_whatsapp_quote" eventLabel="final_cta" className="button button-light" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={20} aria-hidden="true" /> Hablar con HP Film</TrackedLink></div></section>;
}
