'use client';
import Image from "next/image";
import { useState } from "react";
import ButtonDyn from "./ButtonDyn";
import { getLenis } from "@/lib/lenis";

export const scrollTo = (id: string) => {
  getLenis()?.scrollTo(`#${id}`, {
    offset: -40,
    duration: 1.5,
  });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-10 py-4">

        {/* Left: Logo */}
        <button className="flex items-center cursor-pointer" onClick={() => handleNav("accueil")}>
          <Image src="/Logo.png" alt="Logo" width={160} height={50} className="w-11 h-auto" />
        </button>

        {/* Center: Links — desktop */}
        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <ButtonDyn label="Accueil"     image="/LogoTextlessPink.png"   onClick={() => handleNav("accueil")} />
          <ButtonDyn label="Le Beignet"  image="/LogoTextlessGreen.png"  onClick={() => handleNav("beignet")} />
          <ButtonDyn label="L'Alliance"  image="/LogoTextlessBlue.png"   onClick={() => handleNav("alliance")} />
          <ButtonDyn label="Contact"     image="/LogoTextlessYellow.png" onClick={() => handleNav("contact")} />
        </nav>

        {/* Burger button — mobile uniquement */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] cursor-pointer p-1"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

      </div>

      {/* Menu mobile déroulant */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col pt-5 px-10 pb-6 gap-5">
          <ButtonDyn label="Accueil"     image="/LogoTextlessPink.png"   onClick={() => handleNav("accueil")} />
          <ButtonDyn label="Le Beignet"  image="/LogoTextlessGreen.png"  onClick={() => handleNav("beignet")} />
          <ButtonDyn label="L'Alliance"  image="/LogoTextlessBlue.png"   onClick={() => handleNav("alliance")} />
          <ButtonDyn label="Contact"     image="/LogoTextlessYellow.png" onClick={() => handleNav("contact")} />
        </nav>
      </div>

    </header>
  );
}