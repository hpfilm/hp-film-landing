"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { BUSINESS } from "../lib/business";

export function Reviews() {
  return (
    <section className="reviews-section" id="resenas" aria-labelledby="reviews-title"><div className="container reviews-layout">
      <div><p className="eyebrow">Google Reviews</p><h2 id="reviews-title">Lo que dicen nuestros clientes</h2><p>La puntuación pública de HP Film es una referencia directa para quienes todavía no conocen el taller.</p></div>
      <div className="rating-card"><div className="rating-number">{BUSINESS.googleRating}<span>/ 5</span></div><div className="rating-stars" role="img" aria-label={`${BUSINESS.googleRating} de 5 estrellas`}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={22} fill="currentColor" aria-hidden="true" />)}</div><strong>{BUSINESS.googleReviews} reseñas en Google</strong><a className="text-link" href={BUSINESS.reviewsUrl} target="_blank" rel="noreferrer">Ver todas las reseñas en Google <ArrowUpRight size={17} aria-hidden="true" /></a></div>
    </div></section>
  );
}
