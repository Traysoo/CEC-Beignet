// AnimatedCircle.tsx
'use client';

const colors = ["#CDE2AE", "#EBC8DC", "#EBD78C"];

export default function AnimatedCircle({ current }: { current: number }) {
  return (
    <>
      {/* Desktop */}
      <div
        className="hidden md:block absolute -top-60 right-[-1300px] w-[1500px] h-[1500px] rounded-full"
        style={{
          backgroundColor: colors[current],
          transition: "background-color 1.2s ease",
        }}
      />

      {/* Mobile */}
      <div
        className="block md:hidden absolute rounded-full"
        style={{
          backgroundColor: colors[current],
          transition: "background-color 1.2s ease",
          width: "90vw",
          height: "90vw",
          bottom: "20vw",
          right: "-65vw",
        }}
      />
    </>
  );
}