'use client';

import Image from "next/image";
import Link from 'next/link'
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import AnimatedImage from "@/components/AnimatedImage";
import AnimatedCircle from "@/components/AnimatedCircle";
import RotatingCircle from "@/components/RotatingCircle";
import Formulaire from "@/components/Formulaire";
import Navbar from "@/components/NavBar";

import { getLenis } from "@/lib/lenis";

const TOTAL = 3;
const INTERVAL = 3000;

export const scrollTo = (id: string) => {
  getLenis()?.scrollTo(`#${id}`, {
    offset: -40,
    duration: 1.5,
  });
};


export default function Home() {
  
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <main className="min-h-screen bg-[#f4e7dd] overflow-x-clip">
      {/* Navbar */}
      <Navbar />

      {/* Amorce */}
      <section id="accueil" className="max-w-7xl mx-auto px-6 md:px-[clamp(22px,1vw,26px)] pt-20 pb-20 md:pt-45 md:pb-[13vw]">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

          {/* Image en premier dans le DOM → apparaît au-dessus sur mobile */}
          <div className="relative flex justify-center md:justify-end md:order-2 w-[calc(100%+3rem)] -mx-6 md:mx-0 md:w-auto">        
            <Image
            src="/Field.png"
            alt="Illustration"
            width={800}
            height={600}
            className="w-full md:w-13/14 h-auto -translate-y-1 md:translate-y-6"
            />

            {/* DonutPink : toujours absolu, repositionné selon l'écran */}
            <Image
              src="/DonutPink.png"
              alt=""
              width={230}
              height={180}
              className="
                absolute
                w-[38vw]
                max-w-[250px]
                min-w-[100px]
                -bottom-[15%]
                -right-[5%]
                md:w-[18vw]
                md:max-w-[230px]
                md:min-w-[100px]
                md:-bottom-[25%]
                md:-right-[13%]
              "
            />
          </div>

          {/* Partie gauche → passe en dessous sur mobile */}
          <div className="md:order-1 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-[clamp(1.6rem,4vw,3rem)] md:whitespace-nowrap font-extrabold leading-snug mb-8">
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative inline-block z-10">
                  Changer les histoires
                </span>
                <Image
                  src="/ComaPink.svg"
                  alt=""
                  width={298}
                  height={60}
                  className="
                    absolute
                    bottom-0
                    left-[42%]
                    w-[65%]
                    max-w-[298px]
                    z-0
                  "
                />
              </span>
              <br />
              qu’on (se) raconte
            </h1>

            <p className="text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)] font-medium text-black-600 leading-relaxed mb-8">
              <span className="hidden md:inline">Rendre irrésistible les nouveaux récits est notre projet.<br /><br /></span>
              Le Donut est notre boussole. Dans un monde épuisé qui appelle à une transition apaisée,
              nous avons choisi de nous rassembler. En dépassant nos égocentrismes, en scellant une
              alliance existentialiste. 13 agences et experts créatifs engagés à la CEC (Convention
              des entreprises pour le Climat) oeuvrent désormais ensemble pour aligner et écrire
              votre histoire à la créativité régénérée.
            </p>

            <div className="flex md:block justify-center">
              <button className="
                bg-white text-black px-6 py-3
                border border-gray-200 text-lg md:text-[clamp(0.5rem,1.7vw,1.25rem)] font-bold shadow-lg
                hover:opacity-90 transition duration-300
                hover:bg-gray-200 disabled:opacity-50 cursor-pointer
                "
                onClick={() => scrollTo("contact")}>
                Nous contacter
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Beignet */}

      <section id="beignet" className="max-w-7xl mx-auto px-6 md:px-[clamp(22px,1vw,26px)] py-1 -mt-10 scroll-mt-10">

        {/* Mobile : flex colonne / Desktop : relative pour l'absolu */}
        <div className="flex flex-col md:relative">

          <div className="relative">

            {/* Image mobile */}
            <div className="w-[calc(100%+3rem)] mt-3 mb-1 -ml-6 flex justify-center md:hidden">
              <Image
                src="/KateRaworthMobile.png"
                alt=""
                width={1700}
                height={1700}
                className="w-14/15 h-auto"
              />
            </div>

            {/* Image desktop */}
            <Image
              src="/KateRaworth.png"
              alt=""
              width={1700}
              height={1700}
              className="w-[83%] h-auto hidden md:block"
            />

            {/* DonutBrown : repositionné sur mobile */}
            <Image
              src="/DonutBrown.png"
              alt=""
              width={600}
              height={600}
              className="
                absolute
                w-[38vw]
                max-w-[250px]
                min-w-[160px]
                -bottom-[18%]
                right-[72%]
                md:w-[22vw]
                md:max-w-[350px]
                md:min-w-[130px]
                md:-bottom-[6%]
                md:right-[85%]"
            />
          </div>

          {/* Bloc texte : dans le flux sur mobile, absolu sur desktop */}
          <div className="mt-[24vw] md:-mt-6 md:absolute md:top-20 md:right-0 md:w-[35%]">
            <h2 className="text-3xl md:text-[clamp(1.6rem,4vw,3rem)] md:whitespace-nowrap font-extrabold leading-snug mb-6">
              <span className="relative inline-block">
                Nouvelle boussole
                <br />
                <span className="relative inline-block z-10">
                  narrative
                </span>
                <Image
                  src="/ComaGreen.svg"
                  alt="Coma Green"
                  width={300}
                  height={80}
                  className="
                    absolute
                    bottom-0
                    -left-[7%]
                    w-[65%]
                    max-w-[298px]
                    z-0"
                />
              </span>
            </h2>

            <p className="text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)] leading-relaxed">
              La théorie économique du Donut de K. Raworth offre un cadre culturel pour inventer les récits du monde de demain. {" "}
              <br className="hidden md:inline"/><br className="hidden md:inline"/>
              Notre approche permet de traduire des enjeux systémiques en récits sensibles et d’en mesurer l’impact environnemental et social, pour contribuer à nourrir un espace juste et équitable pour l’humanité.
            </p>
          </div>

        </div>

      </section>


      {/* Alliance */}

      <section id="alliance" className="relative py-20 md:py-30 -mt-5">

        {/* RotatingCircle — ancré sur le bord droit du viewport, toujours à moitié visible */}
        <div
          className="hidden md:block absolute z-10"
          style={{ top: 'clamp(70px, calc((1800px - 100vw) * 0.15), 200px)',   right: 'max(0px, calc(0.4 * (100vw - 1500px)))', transform: 'translateX(50%)'}}
        >
          <RotatingCircle />
          <Link href="https://cec-impact.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/CEC.png"
              alt=""
              width={120}
              height={120}
              className="
                absolute
                left-[2%]
                bottom-[5%]
                w-[clamp(70px,8vw,120px)]
                h-auto
                z-20
                transition-transform
                duration-300
                hover:scale-110
              "
            />
          </Link>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-[clamp(22px,1vw,26px)]">
          {/* Desktop : grille 2 colonnes / Mobile : flex colonne */}
          <div className="flex flex-col md:grid md:grid-cols-[74%_26%] items-start">
          
            {/* Colonne gauche */}
            <div>
              <h2 className="text-3xl md:text-[clamp(1.6rem,4vw,3rem)] md:whitespace-nowrap font-extrabold leading-snug mb-8">
                <span className="relative inline-block">
                  L’alliance des designers <br className="md:hidden"/> de {" "} 
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="relative inline-block z-10">
                      désirs durables
                    </span>
                    <Image
                      src="/ComaBlue.svg"
                      alt="Coma Pink"
                      width={322}
                      height={60}
                      className="
                      absolute 
                      bottom-[9%]
                      left-[1%]
                      w-[101%]
                      max-w-[508px]
                      z-0"
                    />
                  </span>
                </span>
              </h2>

              {/* RotatingCircle version mobile — centré, en dessous */}
              <div className="flex justify-center mb-10 mt-5 md:hidden">
                <div className="relative inline-flex">
                  <RotatingCircle mobile/>

                  <Link href="https://cec-impact.org/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/CEC.png"
                      alt=""
                      width={80}
                      height={80}
                      className="absolute w-[18%] -bottom-[4%] left-[8%] z-10 transition-transform duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
              </div>

              <p className="text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)] leading-relaxed -mb-2 md:mb-12 mt-8 md:mt-14">
                Nous étions des créateurs de désirs consuméristes, nous sommes devenus des designers de désirs durables. {" "}
                <br className="hidden md:inline"/><br className="hidden md:inline"/>
                13 agences et organisations expertes se sont alliées à la CEC pour bâtir en intelligence collective une Alliance fertile au service des marques et des organisations.
              </p>

              {/* Image desktop */}
              <Image
                src="/Recit.png"
                alt=""
                width={900}
                height={500}
                className="w-full h-auto hidden md:block"
              />

            </div>

            {/* Colonne droite — cachée sur mobile, visible sur desktop */}
            <div className="hidden md:block"/>
        


          </div>

        </div>
      </section>

      {/* Magazine */}
      <div className="md:mt-[8vw] mt-[10vw] mb-[10vw] ">
        <Image
          src="/Magasine.png"
          alt=""
          width={1920}
          height={600}
          className="w-full h-auto scale-160 md:scale-137 md:ml-[4vw]"
        />
      </div>

      {/* Innover */}

      <section className="relative md:pt-40 md:pb-40 pt-40 pb-20">

        {/* Contenu centré */}
        <div className="max-w-4xl mx-auto px-6 md:px-[clamp(22px,1vw,26px)] md:text-center text-left">

          <AnimatedImage current={current}/>

          <p className="text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)] leading-relaxed mb-12 pr-30 md:pr-0">
            Nouveaux imaginaires, nouvelles représentations, nouveaux sensibles… <br/> {" "} 
            chaque histoire se révèle dans un monde qui s’élève.          
          </p>

          {/* Desktop */}
          <Image
            src="/Link.png"
            alt=""
            width={500}
            height={500}
            className="mx-auto 
            h-auto 
            mt-20 
            hidden 
            md:block   
            w-[35vw]
            max-w-[500px]
            min-w-[280px]"
            priority
          />


        </div>

        {/* Éléments décoratifs à droite */}

        <AnimatedCircle current={current}/>

      </section>


      {/* Contact */}

      <section id="contact" className="relative py-5 overflow-hidden -mt-20 scroll-mt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-[clamp(22px,1vw,26px)]">

          {/* Titre */}
          <h2 className="text-3xl md:text-[clamp(1.6rem,4vw,3rem)] md:whitespace-nowrap font-extrabold md:mb-10">
            <span className="relative inline-block">
              <span className="relative inline-block z-10">
                Nous contacter
              </span>

              <Image
                src="/ComaPink.svg"
                alt="Coma Pink"
                width={300}
                height={60}
                className="md:
                absolute
                bottom-0
                left-[22%]
                w-[90%]
                max-w-[330px]
                z-0"
              />
            </span>
          </h2>

          {/* Texte */}
          <p className="text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)] leading-relaxed md:mb-16 mb-10 md:mt-1 mt-6 max-w-3xl">
            Retrouver de la puissance d’agir en cultivant un nouveau narratif.
          </p>

          <Formulaire />




        </div>

        <div
          className="
            absolute
            top-50
            left-[clamp(-1300px,-90vw,-2100px)]
            w-[clamp(300px,100vw,1600px)]
            h-[100vw]
            rounded-full
            bg-[#EBC8DC]
            hidden
            md:block

          "
        />
        

      </section>

      <Footer />



    </main>
  );
}