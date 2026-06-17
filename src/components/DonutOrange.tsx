// DonutOrange.tsx
'use client';
import Image from "next/image";

export default function DonutOrange() {
  return (
    <>
      {/* Desktop */}
      <Image
        src="/DonutOrange.png"
        alt=""
        width={270}
        height={270}
        className="absolute z-20 hidden md:block
          w-[38vw]
          max-w-[270px]
          min-w-[120px]
          right-[1%]
          top-[calc(-22vw+700px)]"
      />

      {/* Mobile */}
      <Image
        src="/DonutOrange.png"
        alt=""
        width={120}
        height={120}
        className="absolute z-20 block md:hidden"
        style={{
          width: "clamp(80px, 40vw, 120px)",
          bottom: "40vw",
          right: "4vw",
        }}
      />
    </>
  );
}