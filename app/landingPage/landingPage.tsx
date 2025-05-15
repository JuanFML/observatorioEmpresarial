import { NavBar } from "~/components/NavBar";
import fondoObservatorio from "../assets/images/fondo_observatorio.png";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router";

type LandingPageType = {
  datosPrecioDolar: { fecha: string; dato: string };
};

export function LandingPage(props: LandingPageType) {
  const { datosPrecioDolar } = props;

  const text = [
    "Actualización del mercado empresarial.",
    "Nuevas oportunidades de inversión.",
    "Resultados del último estudio económico.",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % text.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <div
        className="flex-col content-center"
        style={{
          backgroundImage: `url(${fondoObservatorio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "400px",
        }}
      >
        <div
          className="h-fit rounded-r-xl  p-6 w-fit"
          style={{ backgroundColor: "rgba(0, 0, 128, 0.8)" }}
        >
          <h1 className="text-3xl text-white font-semibold">
            Bienvenido(a) al Observatorio Empresarial
          </h1>
          <p className="text-white text-[0.8rem]">
            del Centro de Investigación para el Desarrollo Sostenible e
            Innovación Empresarial
          </p>
        </div>
        <div className="py-4 pl-10">
          <Link to={"camino"}>
            <Button variant="contained">Inicia tu experiencia</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-10 py-5 text-[#0056b3]">
        <p className="w-3/4">
          Creado por el <b>CIDESIE</b>, el Observatorio Empresarial tiene como
          objetivo ofrecer análisis detallados sobre el entorno económico y
          empresarial del noreste de México mediante un enfoque basado en datos,
          fomentando el desarrollo empresarial estratégico e informado.
        </p>
        <p className="w-3/4">
          A través de estudios de mercado exhaustivos en diferentes sectores,
          ofrecemos análisis respaldados por evidencia que pueden ayudarte a
          mejorar tus estrategias empresariales actuales o a crear nuevas.
        </p>
        <p className="w-3/4">
          Desde el desarrollo de talento y habilidades hasta el análisis
          financiero, contamos con numerosos estudios relevantes, y si no
          encuentras lo que necesitas, podemos ayudarte a desarrollarlo.
        </p>
      </div>
      <div className="w-full h-[150px] bg-linear-to-r from-indigo-800 to-[#007BFF] flex items-center overflow-hidden justify-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {text.map((text, i) => (
            <div key={i} className="min-w-full text-center">
              <div className="text-lg font-semibold text-white">{text}</div>
              <div className="flex justify-center">
                <div className="border-b-2 border-white w-1/2 h-1 mt-3 bg-white"></div>
              </div>
              <button
                type="submit"
                className="text-blue-600 font-semibold rounded-b-md bg-white px-2 py-1 cursor-pointer hover:bg-blue-700 hover:transform hover:text-white hover:duration-300"
              >
                Información
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

