"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mutedRef = useRef(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    mutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.12;
  }, []);

  useEffect(() => {
    const startOnFirstInteraction = () => {
      const audio = audioRef.current;
      if (!audio || mutedRef.current) return;
      void audio.play().catch(() => undefined);
    };

    window.addEventListener("pointerdown", startOnFirstInteraction, { once: true, passive: true });
    window.addEventListener("keydown", startOnFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !isMuted) {
      audio.muted = true;
      setIsMuted(true);
      return;
    }

    audio.muted = false;
    void audio.play().then(() => {
      setIsMuted(false);
      setIsPlaying(true);
    }).catch(() => undefined);
  };

  const muted = isMuted || !isPlaying;

  return (
    <>
      <audio ref={audioRef} src="/audio/hp-film-background.mp3" loop preload="none" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      <button className="audio-control" type="button" onClick={toggleMusic} aria-label={muted ? "Activar música de fondo" : "Silenciar música de fondo"} aria-pressed={!muted}>
        {muted ? <VolumeX size={20} aria-hidden="true" /> : <Volume2 size={20} aria-hidden="true" />}
      </button>
    </>
  );
}
