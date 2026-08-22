"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "../lib/business";
import { TrackedLink } from "./TrackedLink";

const links = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Trabajos", "#trabajos"],
  ["Nosotros", "#nosotros"],
  ["Ubicación", "#ubicacion"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled || open ? "is-solid" : ""}`}>
      <div className="header-inner">
        <a href="#inicio" className="brand" aria-label="HP Film, inicio">
          <img src="/images/logo-hp-film-transparent.png" alt="HP Film" />
        </a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <TrackedLink eventName="click_whatsapp_hero" eventLabel="header" className="button button-small header-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">
          Pedir presupuesto
        </TrackedLink>
        <button className="menu-button" type="button" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
