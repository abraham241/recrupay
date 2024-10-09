import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import recrulogo from "../public/images/recrulogo.jpg";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between py-10 px-10 items-center md:px-20 ">
        <div className="flex justify-between items-center gap-32">
          <Image
            src={recrulogo}
            alt="Picture of the author"
            className="h-20 w-32"
          />
          <div className="gap-5 font-bold hidden md:flex justify-between">
            <Link href="/">A propos</Link>
            <Link href="/">Nos tarifs</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>

        <div className="flex gap-8">
          <button className="hidden md:flex items-center xl:flex 2xl:flex">
            Se connecter
          </button>
          <button className="bg-green-800 p-3 rounded-full text-white">
            Démo gratuit
          </button>
        </div>
      </nav>
      {/* section hiro */}
      <div className=" py-10 px-10 md:px20">
        <div>
          <h1 className="text-5xl font-bold text-center">
            Le logiciel qu’il vous faut pour <br />
            gérer <span className="inline-block mb-2">vos</span>{" "}
            {/* Ajout d'une marge en bas pour espacer */}
            <span className="text-green-800">
              recrutements & <br /> formations
            </span>
          </h1>
          <p className="text-center py-5">
            Un logiciel tout-en-un qui simplifie la gestion des talents,
            améliore la collaboration et <br /> permet de suivre le rythme dans
            un environnement toujours plus compétitif. <br /> Révolutionnez la
            formation et le recrutement de votre entreprise.
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-green-800 px-4 py-2 rounded-full text-white">
            Essayez une démo{" "}
          </button>
          <button className="flex justify-center items-center gap-3 border border-1 px-4 py-2 rounded-full">
            <span className="text-green-800">
              <FaPlay />
            </span>
            Voir la video
          </button>
        </div>
      </div>

      {/*  */}
    </>
  );
}
