import { BUSINESS, whatsappUrl } from "../lib/business";

export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="footer"><div className="container footer-main"><div className="footer-brand"><img src="/images/logo-hp-film.png" alt="HP Film" /><p>Polarizado, sacabollos y cristales automotor.</p></div><div><strong>Explorá</strong><a href="#servicios">Servicios</a><a href="#trabajos">Trabajos</a><a href={BUSINESS.instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href="#ubicacion">Ubicación</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a></div><div><strong>Contacto</strong><p>Villa de Luján 2136<br />B1824, Buenos Aires</p><a href={`tel:+${BUSINESS.whatsappNumber}`}>{BUSINESS.phoneDisplay}</a><a href={BUSINESS.instagramUrl} target="_blank" rel="noreferrer">{BUSINESS.instagramHandle}</a></div></div><div className="container footer-bottom">© {year} HP Film. Todos los derechos reservados.</div></footer>;
}
