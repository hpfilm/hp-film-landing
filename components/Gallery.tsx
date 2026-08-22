"use client";

import { Camera, Images } from "lucide-react";
import { BUSINESS, galleryImages } from "../lib/business";
import { SectionHeading } from "./SectionHeading";
import { TrackedLink } from "./TrackedLink";

export function Gallery() {
  return (
    <section className="section gallery-section" id="trabajos">
      <div className="container">
        <SectionHeading eyebrow="Trabajos" title="Nuestro trabajo habla por nosotros" copy="Este espacio está preparado para incorporar fotografías reales del taller." />
        {galleryImages.length ? (
          <div className="gallery-grid">{galleryImages.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}</div>
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
