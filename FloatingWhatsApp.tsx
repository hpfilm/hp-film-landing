"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/business";
import { TrackedLink } from "./TrackedLink";

export function FloatingWhatsApp() {
  return <TrackedLink eventName="click_whatsapp_floating" className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Consultar a HP Film por WhatsApp"><MessageCircle size={22} aria-hidden="true" /><span>Consultar</span><span className="tooltip">Escribinos por WhatsApp</span></TrackedLink>;
}
