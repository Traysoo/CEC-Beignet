import Image from "next/image";


export default function Footer() {

  return (
<footer className="border-t border-black/10 bg-white">
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-3 gap-12">

      {/* Logo + texte */}
      <div>
        <Image
          src="/Logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="mb-6"
        />

        <p className="text-sm leading-relaxed text-black/70 max-w-xs">
          Rendre irrésistibles les nouveaux récits.
          Une alliance engagée pour imaginer
          les histoires du monde de demain.
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="font-bold mb-4">
          Navigation
        </h3>

        <ul className="space-y-3 text-black/70">
          <li>
            <a href="#accueil" className="hover:text-black transition">
              Manifeste
            </a>
          </li>

          <li>
            <a href="#beignet" className="hover:text-black transition">
              Le Beignet
            </a>
          </li>

          <li>
            <a href="#alliance" className="hover:text-black transition">
              L’Alliance
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Réseaux */}
    <div>
      <h3 className="font-bold mb-4">Nous suivre</h3>

        <div className="flex flex-col gap-4">

          <a href="https://www.linkedin.com/company/alliance-du-beignet/posts/?feedView=all" target="_blank" rel="noreferrer">
            <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} className="hover:opacity-70 transition" />
          </a>

        </div>
      </div>
    </div>

    {/* Ligne du bas */}
    <div className="mt-12 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-black/50">

      <p>
        © {new Date().getFullYear()} L’Irrésistible Alliance Du Beignet. Tous droits réservés.
      </p>

      <div className="flex gap-6">

        <a
          href="/mentions-legales"
          className="hover:text-black transition"
        >
          Mentions légales
        </a>

        <a
          href="/politique-confidentialite"
          className="hover:text-black transition"
        >
          Politique de confidentialité
        </a>

      </div>

    </div>

  </div>
</footer>
  );
}