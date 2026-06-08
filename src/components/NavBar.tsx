'use client';


import Image from "next/image";
import ButtonDyn from "./ButtonDyn";

import { getLenis } from "@/lib/lenis";

export const scrollTo = (id: string) => {
  getLenis()?.scrollTo(`#${id}`, {
    offset: -40,
    duration: 1.5,
  });
};

export default function Navbar() {


  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-sm"> {/*shadow-sm*/}
      <div className="flex items-center justify-between px-10 py-4">
        
        {/* Left: Logo */}
        <button className="flex items-center cursor-pointer" onClick={() => scrollTo("accueil")}>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={160}
            height={50}
            className="w-11 h-auto"
          />
          
        </button>

        
      

        {/* Center: Links */}
        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">            
          <ButtonDyn label="Accueil" image="/LogoTextlessPink.png" onClick={() => scrollTo("accueil")} />
          <ButtonDyn label="Le Beignet" image="/LogoTextlessGreen.png" onClick={() => scrollTo("beignet")} />
          <ButtonDyn label="L'alliance" image="/LogoTextlessBlue.png" onClick={() => scrollTo("alliance")} />
          <ButtonDyn label="Contact" image="/LogoTextlessYellow.png" onClick={() => scrollTo("contact")} />
        </nav>


      </div>
    </header>
  );
}