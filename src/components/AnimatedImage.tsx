'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const images = ["/InnoverGreen.png", "/EcouterPink.png", "/DecollerYellow.png"];

export default function AnimatedImage({ current }: { current: number }) {
  const [displayed, setDisplayed] = useState(current);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef(current);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (prevRef.current === current) return;
    prevRef.current = current;
    const fadeOut = setTimeout(() => setVisible(false), 0);
    const swap    = setTimeout(() => { setDisplayed(current); setVisible(true); }, 600);
    return () => { clearTimeout(fadeOut); clearTimeout(swap); };
  }, [current]);

  return (
    <div
      className="relative mx-auto md:mb-10 mb-10 md:-mt-20 -mt-25 overflow-hidden"
      style={{ width: "100vw", maxWidth: "100%", height: "clamp(100px, 20vw, 200px)" }}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ width: "clamp(250px, 80vw, 800px)", height: "clamp(100px, 20vw, 200px)" }}
      >
        <Image
          src={images[displayed]}
          alt=""
          width={800}
          height={200}
          priority
          style={{
            transition: "opacity 0.6s ease, transform 0.6s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0px)" : `translateX(${isMobile ? "-10px" : "-30px"})`,
            position: "absolute",
            top: "50%", left: "50%",
            translate: "-50% -50%",
            width: "clamp(400px, 80vw, 800px)",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}