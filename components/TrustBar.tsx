import { BUSINESS } from "../lib/business";

export function TrustBar() {
  const items = [<><strong>{BUSINESS.googleRating}★</strong> en Google</>, <><strong>{BUSINESS.googleReviews}</strong> reseñas</>, <>Atención personalizada</>, <>Presupuesto por WhatsApp</>];
  return <aside className="trust-bar" aria-label="Motivos de confianza"><div className="trust-inner">{items.map((item, i) => <div key={i}><span className="trust-mark" />{item}</div>)}</div></aside>;
}
