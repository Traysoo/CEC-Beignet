'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";

const items = [
  { src: "/Mieux.png",       href: "https://mieux.com/" },
  { src: "/Pixelis.png",     href: "https://www.pixelis.com/" },
  { src: "/Lajolieprod.png", href: "https://lajolieprod.com/" },
  { src: "/OorZone.png",     href: "https://oorzone.fr/" },
  { src: "/Shortlinks.png",  href: "https://shortlinks.fr/" },
  { src: "/goodrush.png",    href: "null" },
  { src: "/Uka.png",         href: "https://www.uka-partner.com/" },
  { src: "/Mooxy.png",       href: "https://mooxy.co/" },
  { src: "/MarsAtWork.png",  href: "https://marsatwork.fr/" },
  { src: "/Enov.png",        href: "https://enov.fr/" },
  { src: "/Looksharp.png",   href: "https://looksharp.fr/language/en/home/" },
  { src: "/NiKiTa.png",      href: "https://www.nikita.fr/" },
];

const DESKTOP = {
  circleSize: 680,
  orbitRadius: 250,
  buttonSize: 135,
  duration: 20,
};

const MOBILE_RATIO = {
  // le cercle prend 85% de la largeur de l'écran, avec un max de 340px
  circleRatio: 0.85,
  maxCircle: 315,
};

function getMobileConfig(screenWidth: number) {
  const circleSize = Math.min(screenWidth * MOBILE_RATIO.circleRatio, MOBILE_RATIO.maxCircle);
  const scale = circleSize / 340; // 340 est notre référence mobile de base
  return {
    circleSize,
    orbitRadius: Math.round(125 * scale),
    buttonSize: Math.round(68 * scale),
    duration: 20,
  };
}

export default function RotatingCircle({ mobile = false }: { mobile?: boolean }) {
  const [paused, setPaused] = useState(false);

  // Config dynamique pour mobile, statique pour desktop
  const [config, setConfig] = useState(
    mobile ? getMobileConfig(340) : DESKTOP
  );

  useEffect(() => {
    if (!mobile) return;

    const update = () => setConfig(getMobileConfig(window.innerWidth));
    update(); // appel immédiat au montage

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [mobile]);

  const { circleSize, orbitRadius, buttonSize } = config;
  const centerImageSize = mobile ? Math.round(165 * (circleSize / 340)) : 330;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: circleSize, height: circleSize }}
    >
      {/* Cercle blanc */}
      <div className="absolute inset-0 rounded-full bg-white" />

      {/* Image centrale */}
      <div className="absolute z-10 flex items-center justify-center">
        <Image
          src="/CircleCentre.png"
          alt=""
          width={centerImageSize}
          height={centerImageSize}
          className="object-contain"
        />
      </div>

      {/* Anneau rotatif */}
      <div
        style={{
          position: "absolute",
          width: circleSize,
          height: circleSize,
          animation: `spin ${DESKTOP.duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((item, i) => {
          const angle = (i / items.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = circleSize / 2 + orbitRadius * Math.cos(rad) - buttonSize / 2;
          const y = circleSize / 2 + orbitRadius * Math.sin(rad) - buttonSize / 2;

          const isDisabled = item.href === "null";

          const sharedStyle: React.CSSProperties = {
            position: "absolute",
            left: x,
            top: y,
            width: buttonSize,
            height: buttonSize,
            animation: `counter-spin ${DESKTOP.duration}s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
          };

          const sharedClass =
            "flex items-center justify-center rounded-full bg-white transition-transform duration-200 overflow-hidden";

          const inner = (
            <div style={{ position: "relative", width: buttonSize - 16, height: buttonSize - 16 }}>
              <Image src={item.src} alt="" fill className="object-contain" />
            </div>
          );

          return isDisabled ? (
            <span
              key={i}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={sharedStyle}
              className={`${sharedClass} cursor-default`}
            >
              {inner}
            </span>
          ) : (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={sharedStyle}
              className={`${sharedClass} hover:scale-110`}
            >
              {inner}
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