import Lenis from "lenis";

let lenis: Lenis | null = null;

export const initLenis = () => {
  if (lenis) return lenis;

  lenis = new Lenis({
    lerp: 0.12,
    autoRaf: true, // Lenis gère lui-même le RAF
  });

  return lenis;
};

export const getLenis = () => lenis;