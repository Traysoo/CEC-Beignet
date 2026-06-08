'use client';

import { useEffect } from "react";
import { initLenis, getLenis } from "@/lib/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Attend que toutes les ressources soient chargées
    const init = () => {
      initLenis();

      // Resize après un court délai pour être sûr
      setTimeout(() => {
        getLenis()?.resize();
      }, 300);
    };

    if (document.readyState === "complete") {
      init();
    } else {
      window.addEventListener("load", init);
      return () => window.removeEventListener("load", init);
    }
  }, []);

  return null;
}