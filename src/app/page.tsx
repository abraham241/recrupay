import Image from "next/image";
import Link from "next/link";
import recrulogo from "../public/images/recrulogo.jpg";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between py-10 px-20 items-center">
        <div className="flex justify-between items-center gap-32">
          <Image
            src={recrulogo}
            alt="Picture of the author"
            className="h-20 w-32"
          />
          <div className="flex justify-between gap-5 font-bold">
            <Link href="/">A propos</Link>
            <Link href="/">Nos tarifs</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>

        <div className="flex gap-8">
          <button>Se connecter</button>
          <button className="bg-green-800 p-3 rounded-full text-white">
            Démo gratuit
          </button>
        </div>
      </nav>

      <div className="">
        <h1 className="text-5xl font-bold text-center">
          Le logiciel qu’il vous faut pour <br />
          gérer <span className="inline-block mb-2">vos</span>{" "}
          {/* Ajout d'une marge en bas pour espacer */}
          <span className="text-green-800">
            recrutements & <br /> formations
          </span>
        </h1>
        <p className="text-center py-5">
          Un logiciel tout-en-un qui simplifie la gestion des talents, améliore
          la collaboration et <br /> permet de suivre le rythme dans un
          environnement toujours plus compétitif. <br /> Révolutionnez la
          formation et le recrutement de votre entreprise.
        </p>
      </div>
    </>
  );
}
