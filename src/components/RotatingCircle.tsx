'use client';

import Image from "next/image";
import { useState } from "react";

// ← Remplace les src et href par tes vraies images et liens
const items = [
  { src: "/Mieux.png",  href: "https://mieux.com/" },
  { src: "/Pixelis.png",  href: "https://www.pixelis.com/" },
  { src: "/Lajolieprod.png",  href: "https://lajolieprod.com/" },
  { src: "/OorZone.png",  href: "https://oorzone.fr/" },
  { src: "/Shortlinks.png",  href: "https://shortlinks.fr/" },
  { src: "/goodrush.png",  href: "https://annuaire-entreprises.data.gouv.fr/entreprise/good-rush-842535577" },
  { src: "/Uka.png",  href: "https://www.uka-partner.com/" },
  { src: "/Mooxy.png",  href: "https://mooxy.co/" },
  { src: "/MarsAtWork.png",  href: "https://marsatwork.fr/" },
  { src: "/Enov.png", href: "https://enov.fr/" },
  { src: "/Looksharp.png", href: "https://looksharp.fr/language/en/home/" },
  { src: "/NikiTa.png", href: "https://www.nikita.fr/" },
];

const CIRCLE_SIZE = 680;   // diamètre du cercle blanc (px)
const ORBIT_RADIUS = 250;  // distance du centre aux boutons (px)
const BUTTON_SIZE = 135;    // taille de chaque bouton image (px)
const DURATION = 20;       // durée d'un tour complet (secondes)

export default function RotatingCircle() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
    >
      {/* Cercle blanc */}
      <div
        className="absolute inset-0 rounded-full bg-white"
      />

      {/* Image centrale */}
      <div className="absolute z-10 flex items-center justify-center">
        <Image
          src="/CircleCentre.png" // ← remplace par ton image
          alt=""
          width={330}
          height={330}
          className="object-contain"
        />
      </div>

            {/* Anneau rotatif */}
      <div
        style={{
          position: "absolute",
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          animation: `spin ${DURATION}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((item, i) => {
          const angle = (i / items.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = CIRCLE_SIZE / 2 + ORBIT_RADIUS * Math.cos(rad) - BUTTON_SIZE / 2;
          const y = CIRCLE_SIZE / 2 + ORBIT_RADIUS * Math.sin(rad) - BUTTON_SIZE / 2;
 
          return (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: BUTTON_SIZE,
                height: BUTTON_SIZE,
                // Counter-rotation pour garder les images droites
                animation: `counter-spin ${DURATION}s linear infinite`,
                animationPlayState: paused ? "paused" : "running",
              }}
              className="flex items-center justify-center rounded-full bg-white hover:scale-110 transition-transform duration-200 overflow-hidden"
            >
              <div style={{ position: "relative", width: BUTTON_SIZE - 16, height: BUTTON_SIZE - 16 }}>
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          );
        })}
      </div>
 
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
