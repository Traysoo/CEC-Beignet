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
    <main className="min-h-screen bg-[#f4e7dd]">
      {/* Navbar */}
      <Navbar />

      {/* Amorce */}
      <section id="accueil" className="max-w-7xl mx-auto px-6 py-20 md:py-45">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

          {/* Image en premier dans le DOM → apparaît au-dessus sur mobile */}
            <div className="relative flex justify-center md:justify-end md:order-2 w-[calc(100%+3rem)] -mx-6 md:mx-0 md:w-auto">        
              <Image
              src="/Field.png"
              alt="Illustration"
              width={800}
              height={600}
              className="w-full md:w-13/14 h-auto translate-y-0 md:translate-y-6"
            />

            {/* DonutPink : toujours absolu, repositionné selon l'écran */}
            <Image
              src="/DonutPink.png"
              alt="Badge"
              width={230}
              height={180}
              className="
                absolute
                w-[140px] md:w-[230px]
                -bottom-14 -right-4
                md:-bottom-30 md:-right-19
              "
            />
          </div>

          {/* Partie gauche → passe en dessous sur mobile */}
          <div className="md:order-1 md:-ml-4 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-8">
              <span className="relative inline-block">
                <span className="relative inline-block z-10">
                  Changer les histoires
                </span>
                <Image
                  src="/ComaPink.svg"
                  alt="Coma Pink"
                  width={298}
                  height={60}
                  className="absolute bottom-0 left-30 md:left-47 w-[180px] md:w-[298px] z-0"
                />
              </span>
              <br />
              qu’on (se) raconte
            </h1>

            <p className="text-sm  md:text-xl  font-medium text-black-600 leading-relaxed mb-8">
              Rendre irrésistible les nouveaux récits est notre projet.
              <br /><br />
              Le Donut est notre boussole. Dans un monde épuisé qui appelle à une transition apaisée,
              nous avons choisi de nous rassembler. En dépassant nos égocentrismes, en scellant une
              alliance existentialiste. 13 agences et experts créatifs engagés à la CEC (Convention
              des entreprises pour le Climat) oeuvrent désormais ensemble pour aligner et écrire
              votre histoire à la créativité régénérée.
            </p>

            <div className="flex md:block justify-center">
              <button className="
                bg-white text-black px-6 py-3
                border border-gray-200 md:text-xl text-base font-medium shadow-lg
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

      <section id="beignet" className="max-w-7xl mx-auto px-6 py-1 -mt-10 scroll-mt-10">

        {/* Mobile : flex colonne / Desktop : relative pour l'absolu */}
        <div className="flex flex-col md:relative">

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
          <div className="relative md:absolute -left-12.5 md:-left-35 bottom-25 md:-bottom-10">
            <Image
              src="/DonutBrown.png"
              alt=""
              width={600}
              height={600}
              className="w-40 md:w-82.5 h-auto md:z-10"
            />
          </div>

          {/* Bloc texte : dans le flux sur mobile, absolu sur desktop */}
          <div className="-mt-18 md:mt-0 md:absolute md:top-20 md:right-0 md:w-[35%]">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-snug mb-6">
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
                  className="absolute md:-left-12 -left-3 md:-bottom-1 bottom-0 w-[160px] md:w-[300px] z-0"
                />
              </span>
            </h2>

            <p className="text-sm md:text-xl leading-relaxed">
              La théorie économique du Donut de K. Raworth offre un cadre culturel pour inventer les récits du monde de demain.
              <br /><br />
              Notre approche permet de traduire des enjeux systémiques en récits sensibles et d’en mesurer l’impact environnemental et social, pour contribuer à nourrir un espace juste et équitable pour l’humanité.
            </p>
          </div>

        </div>

      </section>


      {/* Alliance */}

      <section id="alliance" className="relative py-20 md:py-30 -mt-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Desktop : grille 2 colonnes / Mobile : flex colonne */}
          <div className="flex flex-col md:grid md:grid-cols-[74%_26%] items-start">
          
            {/* Colonne gauche */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
                <span className="relative inline-block">
                  <span className="relative inline-block z-10">
                    L’alliance des designers de désirs durables
                  </span>
                  <Image
                    src="/ComaBlue.svg"
                    alt="Coma Pink"
                    width={322}
                    height={60}
                    className="absolute -bottom-1 md:-bottom-3 left-11 md:left-145 w-[60%] md:w-[36%] z-0"
                  />
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

              <p className="text-sm md:text-xl leading-relaxed mb-12 mt-8 md:mt-14">
                Nous étions des créateurs de désirs consuméristes, nous sommes devenus des designers de désirs durables.
                <br /><br />
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

              {/* Image mobile */}
              <Image
                src="/RecitMobile.png"
                alt=""
                width={900}
                height={600}
                className="w-full h-auto block md:hidden"
              />
            </div>

            {/* Colonne droite — cachée sur mobile, visible sur desktop */}
            <div className="hidden md:block relative min-h-[500px]">
              <div className="absolute -top-25 right-[-120px] z-10">
                <div className="translate-x-1/2">
                  <RotatingCircle />
                </div>
              </div>

              <Link href="https://cec-impact.org/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/CEC.png"
                  alt=""
                  width={120}
                  height={280}
                  className="absolute top-95 right-[130px] z-10 transition-transform duration-300 hover:scale-110"
                />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Magazine */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-[3vh] md:mt-[15vh] mb-[5vh] md:mb-[20vh] w-screen">
        <Image
          src="/Magasine.png"
          alt=""
          width={1920}
          height={600}
          className="w-full h-auto scale-160 md:scale-137 md:ml-[4vw]"
        />
      </div>

      {/* Innover */}

      <section className="relative py-40 overflow-hidden">

        {/* Contenu centré */}
        <div className="max-w-4xl mx-auto px-6 text-center">

          <AnimatedImage current={current}/>

          <p className="text-sm md:text-xl leading-relaxed mb-12">
            Nouveaux imaginaires, nouvelles représentations, nouveaux sensibles… <br /> 
            chaque histoire se révèle dans un monde qui s’élève.          
          </p>

          {/* Desktop */}
          <Image
            src="/Link.png"
            alt=""
            width={500}
            height={500}
            className="mx-auto h-auto mt-20 hidden md:block"
            priority
          />

          {/* Mobile — aligné à gauche */}
          <Image
            src="/LinkMobile.png"
            alt=""
            width={200}
            height={300}
            className="h-auto mt-10 block md:hidden ml-0"
            priority
          />

        </div>

        {/* Éléments décoratifs à droite */}

        {/* DonutOrange Desktop */}
        <Image
          src="/DonutOrange.png"
          alt=""
          width={270}
          height={270}
          className="absolute z-20 top-100 right-[5px] w-[270px] hidden md:block"
        />

        {/* DonutOrange Mobile */}
        <Image
          src="/DonutOrange.png"
          alt=""
          width={120}
          height={120}
          className="absolute z-20 block md:hidden"
          style={{
            // Mobile uniquement — sur desktop les classes md: prennent le dessus
            width: "clamp(80px, 40vw, 120px)",
            bottom: "40vw",
            right: "4vw",
          }}
        />

        <AnimatedCircle current={current}/>

      </section>


      {/* Contact */}

      <section id="contact" className="relative py-5 overflow-hidden -mt-20 scroll-mt-10 ">
        <div className="max-w-7xl mx-auto px-6">

          {/* Titre */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
            <span className="relative inline-block">
                  <span className="relative inline-block z-10">
                    Nous contacter
                  </span>

                  <Image
                    src="/ComaPink.svg"
                    alt="Coma Pink"
                    width={300}
                    height={60}
                    className="md:w-60 w-48 absolute md:-bottom-2 bottom-0 md:left-20 left-9 z-0"
                  />
                </span>
          </h2>

          {/* Texte */}
          <p className="text-sm md:text-xl leading-relaxed md:mb-16 mb-16 md:mt-12 mt-10 max-w-3xl">
            Retrouver de la puissance d’agir en cultivant un nouveau narratif.
          </p>

          <Formulaire />




        </div>

        <div
          className="
            absolute
            top-50
            left-[-1200px]
            w-[1300px]
            h-[1300px]
            rounded-full
            bg-[#EBC8DC]
            md:block
            hidden
          "
        />
        

      </section>

      <Footer />



    </main>
  );
}