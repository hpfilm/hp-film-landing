"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLeaving(true), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen${isLeaving ? " is-leaving" : ""}`} aria-live="polite" aria-label="Cargando HP Film">
      <div className="loading-screen__content">
        <img className="loading-screen__logo" src="/images/logo-hp-film-transparent.png" alt="HP Film" />
        <span className="loading-screen__eyebrow">Cuidado automotor</span>
        <div className="loading-screen__line" aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}
