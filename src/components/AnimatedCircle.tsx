'use client';
import Image from "next/image";

const colors = ["#CDE2AE", "#EBC8DC", "#EBD78C"];

export default function AnimatedCircle({ current }: { current: number }) {
  return (
    <>
      {/* Desktop */}
      <div
        className="hidden md:block absolute top-[calc(-23vw+224px)] -right-[76vw] w-[90vw] h-[90vw] rounded-full"
        style={{
          backgroundColor: colors[current],
          transition: "background-color 1.2s ease",
        }}
      >
        {/* DonutOrange centré sur le cercle, décalé à gauche */}
        <Image
          src="/DonutOrange.png"
          alt=""
          width={270}
          height={270}
          className="absolute z-20 w-[22%] max-w-[270px] min-w-[120px] "
          style={{
            top: "50%",
            left: "0%",
            transform: "translate(-33%, -50%)",
          }}
        />
      </div>

      {/* Mobile */}
      <div
        className="block md:hidden absolute rounded-full"
        style={{
          backgroundColor: colors[current],
          transition: "background-color 1.2s ease",
          width: "320px",
          height: "320px",
          bottom: "100px",
          right: "-240px",
        }}
      >
        <Image
          src="/DonutOrange.png"
          alt=""
          width={120}
          height={120}
          className="absolute z-20"
          style={{
            top: "50%",
            left: "0%",
            transform: "translate(-33%, -50%)",
          }}
        />
      </div>
    </>
  );
}