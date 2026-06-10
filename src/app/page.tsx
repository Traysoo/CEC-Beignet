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

      <section id="accueil" className="max-w-7xl mx-auto px-6 py-45">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Partie gauche */}
          <div className="-ml-4">
            <h1 className="text-5xl font-extrabold leading-snug mb-8">
              <span className="relative inline-block">
                <span className="relative inline-block z-10">
                  Changer les histoires
                </span>

                <Image
                  src="/ComaPink.svg"
                  alt="Coma Pink"
                  width={298}
                  height={60}
                  className="absolute bottom-0 left-47 z-0 "
                />
              </span>
              <br />
              qu’on (se) raconte
            </h1>

            <p className="text-xl font-medium text-black-600 leading-relaxed mb-8">
                Rendre irrésistible les nouveaux récits est notre projet.
              <br />  <br />
              Le Donut est notre boussole. Dans un monde épuisé qui appelle à une transition apaisée, nous avons choisi de nous rassembler. En dépassant nos égocentrismes, en scellant une alliance existentialiste. 13 agences et experts créatifs engagés à la CEC (Convention des entreprises pour le Climat) oeuvrent désormais ensemble pour aligner et écrire votre histoire à la créativité régénérée. 
            </p>

            <button className="
              bg-white 
              text-black 
              px-6 
              py-3 
              border 
              border-gray-200 
              text-xl 
              font-medium 
              shadow-lg
              hover:opacity-90
              transition
              duration-300
              hover:bg-gray-200
              disabled:opacity-50
              cursor-pointer" 
              onClick={() => scrollTo("contact")}>
              Nous contacter
            </button>
          </div>



          {/* Partie droite */}
          <div className="relative flex justify-end">
            <Image
              src="/Field.png"
              alt="Illustration"
              width={800}
              height={600}
              className="w-13/14 h-auto translate-y-6"
            />

            <Image
              src="/DonutPink.png"
              alt="Badge"
              width={230}
              height={180}
              className="absolute w-[230px] h-auto -bottom-30 -right-19"
            />
          </div>

        </div>
      </section>

      {/* Beignet */}

      <section id="beignet" className="max-w-7xl mx-auto px-6 py-1 -mt-10 scroll-mt-10">

        
        <div className="relative">
          
          {/* Image */}
          <Image
            src="/Kate.png"
            alt=""
            width={900}
            height={600}
            className="w-[83%] h-auto"
          />


          {/* Bloc texte */}
          <div className="absolute top-20 right-0 w-[35%]">
            <h2 className="text-5xl font-extrabold leading-snug mb-6">
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
                  className="absolute -left-12 -bottom-1 z-0"
                />
              </span>

            </h2>

            <p className="text-xl leading-relaxed">
              La théorie économique du Donut de K. Raworth offre un cadre culturel pour inventer les récits du monde de demain.
              <br />  <br />

              Notre approche permet de  traduire des enjeux systémiques en récits sensibles et d’en mesurer l’impact environnemental et social, pour contribuer à nourrir un espace juste et équitable pour l’humanité.
            </p>
          </div>

        </div>

          <Image
          src="/DonutBrown.png"
          alt=""
          width={280}
          height={350}
          className="absolute -left-3 -bottom-210 z-10"
        />


      </section>


      {/* Alliance */}

      <section id="alliance" className="relative py-30 -mt-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Ligne du haut */}
          <div className="grid grid-cols-[74%_26%] items-start">

            {/* Colonne gauche */}
            <div>
              <h2 className="text-5xl font-extrabold mb-8">
                <span className="relative inline-block">
                  <span className="relative inline-block z-10">
                    L’alliance des designers de désirs durables
                  </span>

                  <Image
                    src="/ComaBlue.svg"
                    alt="Coma Pink"
                    width={322}
                    height={60}
                    className="absolute -bottom-3 left-145 z-0"
                  />
                </span>

              </h2>

              <p className="text-xl leading-relaxed mb-12 mt-14">
                Nous étions des créateurs de désirs consuméristes, nous sommes devenus des designers de désirs durables. 
                <br />  <br />
                13 agences et organisations expertes se sont alliées à la CEC pour bâtir en intelligence collective une Alliance fertile au service des marques et des organisations.
              </p>

              {/* Image sous le texte */}
              <Image
                src="/Recit.png"
                alt=""
                width={900}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Colonne droite */}
            <div className="relative min-h-[500px]">

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
      <div className="w-full">
        <Image
          src="/Magazine.png"
          alt=""
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Innover */}

      <section className="relative py-40 overflow-hidden">

        {/* Contenu centré */}
        <div className="max-w-4xl mx-auto px-6 text-center">

          <AnimatedImage current={current}/>

          <p className="text-xl leading-relaxed mb-12 ">
            Nouveaux imaginaires, nouvelles représentations, nouveaux sensibles… <br /> 
            chaque histoire se révèle dans un monde qui s’élève.          
          </p>

          <Image
            src="/Link.png"
            alt=""
            width={500}
            height={500}
            className="mx-auto h-auto mt-20"
            priority
          />

        </div>

        {/* Éléments décoratifs à droite */}
        <Image
          src="/DonutOrange.png"
          alt=""
          width={270}
          height={270}
          className="absolute top-100 right-[5px] z-20"
        />

        <AnimatedCircle current={current}/>

      </section>


      {/* Contact */}

      <section id="contact" className="relative py-5 overflow-hidden -mt-20 scroll-mt-10 ">
        <div className="max-w-7xl mx-auto px-6">

          {/* Titre */}
          <h2 className="text-5xl font-extrabold mb-8">
            <span className="relative inline-block">
                  <span className="relative inline-block z-10">
                    Nous contacter
                  </span>

                  <Image
                    src="/ComaPink.svg"
                    alt="Coma Pink"
                    width={300}
                    height={60}
                    className="absolute -bottom-2 left-20 z-0"
                  />
                </span>
          </h2>

          {/* Texte */}
          <p className="text-xl leading-relaxed mb-16 mt-12 max-w-3xl">
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
          "
        />
        

      </section>

      <Footer />



    </main>
  );
}