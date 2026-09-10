"use client";

import { useState } from "react";
import { Camera, Images } from "lucide-react";
import { BUSINESS, galleryImages } from "../lib/business";
import { SectionHeading } from "./SectionHeading";
import { TrackedLink } from "./TrackedLink";

export function Gallery() {
  const [comparisonPosition, setComparisonPosition] = useState(50);

  return (
    <section className="section gallery-section" id="trabajos">
      <div className="container">
        <SectionHeading eyebrow="Trabajos" title="Nuestro trabajo habla por nosotros" copy="Este espacio está preparado para incorporar fotografías reales del taller." />
        {galleryImages.length ? (
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <figure className="gallery-item" key={image.src}>
                <img className="gallery-image" src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
            <figure className="gallery-item gallery-item--comparison" aria-label="Lavado de interiores: antes y después">
              <div className="before-after-images">
                <img src="/images/interior-despues.webp" alt="Interior del vehículo después del lavado" />
                <div className="before-after-result" style={{ clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)` }}>
                  <img src="/images/interior-antes.webp" alt="Interior del vehículo antes del lavado" />
                </div>
                <div className="before-after-divider" style={{ left: `${comparisonPosition}%` }} aria-hidden="true"><span>↔</span></div>
                <span className="before-after-label before-label">Antes</span>
                <span className="before-after-label after-label">Después</span>
                <label className="before-after-control"><span className="sr-only">Comparar antes y después</span><input type="range" min="0" max="100" value={comparisonPosition} onChange={(event) => setComparisonPosition(Number(event.target.value))} aria-label="Deslizar para comparar antes y después" /></label>
              </div>
            </figure>
          </div>
        ) : (
          <div className="gallery-placeholder">
            <div className="gallery-graphic"><Images size={52} strokeWidth={1.2} aria-hidden="true" /><span>Próximamente</span></div>
            <div><p className="eyebrow">Fotos reales, siempre</p><h3>Seguí los últimos trabajos en Instagram</h3><p>No usamos imágenes de stock para simular trabajos. Mientras preparamos la galería, podés ver la actividad de HP Film en su perfil oficial.</p>
              <TrackedLink eventName="click_instagram" className="button" href={BUSINESS.instagramUrl} target="_blank" rel="noreferrer"><Camera size={18} aria-hidden="true" /> Ver más trabajos en Instagram</TrackedLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
