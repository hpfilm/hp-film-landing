"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Timer } from "lucide-react";
import { whatsappUrl } from "../lib/business";
import { trackEvent } from "../lib/tracking";

export function QuoteForm() {
  const [service, setService] = useState("Polarizado");
  const [vehicle, setVehicle] = useState("");
  const [details, setDetails] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    const message = ["Hola HP Film, vi la página web y quería pedir presupuesto.", "", `Servicio: ${service}`, `Vehículo: ${vehicle}`, details && `Consulta: ${details}`].filter(Boolean).join("\n");
    trackEvent("click_whatsapp_quote", { service });
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  return <section className="quote-section section" aria-labelledby="quote-title"><div className="container quote-shell"><div className="quote-intro"><p className="eyebrow">Cotización express</p><h2 id="quote-title">Pedí presupuesto en menos de un minuto</h2><p>Completá tres datos y seguí la conversación directamente por WhatsApp.</p><div className="quote-note"><Timer size={19} aria-hidden="true" /> Sin registros ni esperas</div></div><form className="quote-form" onSubmit={submit}><label>Servicio<select value={service} onChange={(e) => setService(e.target.value)}><option>Polarizado</option><option>Sacabollos</option><option>Cristales</option><option>Otro</option></select></label><label>Vehículo<input required value={vehicle} onChange={(e) => setVehicle(e.target.value)} placeholder="Ej: Volkswagen Golf 2019" /></label><label className="full">Contanos brevemente qué necesitás <span>(opcional)</span><textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={3} placeholder="Ej: Tengo un bollo en la puerta trasera" /></label><button className="button full" type="submit"><MessageCircle size={19} aria-hidden="true" /> Consultar por WhatsApp</button></form></div></section>;
}
