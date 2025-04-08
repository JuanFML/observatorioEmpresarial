import { NavBar } from "~/components/NavBar";
import fondoObservatorio from "../assets/images/fondo_observatorio.png";
import { Box, Button, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { PrimerPaso } from "./PrimerPaso";
import { SegundoPaso } from "./SegundoPaso";
import { TercerPaso } from "./TercerPaso";
import {
  handleStep1,
  handleStep2,
  handleStep3,
  handleStep4,
  handleStep5,
  handleStep6,
} from "./utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CuartoPasoCapacitacion } from "./CuartoPasoCapacitacion";
import { QuintoPasoLegal } from "./QuintoPasoLegal";
import { SextoPasoServicios } from "./SextoPasoServicios";

export function Caminito() {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [texto3, setTexto3] = useState("");

  const handleBackwardsClick = () => {
    switch (step) {
      case 2: {
        setStep(1);
        setProgress(0);
        setTexto1("");
        return;
      }
      case 3: {
        setStep(2);
        setProgress(25);
        setTexto2("");
        return;
      }
      case 4: {
        setStep(3);
        setProgress(50);
        setTexto3("");
        return;
      }
      case 5: {
        setStep(3);
        setProgress(50);
        setTexto3("");
        return;
      }
      case 6: {
        setStep(3);
        setProgress(50);
        setTexto3("");
        return;
      }
      default: {
        setStep(1);
        setProgress(0);
        setTexto1("");
        setTexto2("");
        setTexto3("");
        return;
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3 h-[100vh] font-serif">
        <div className="bg-white flex items-center ">
          <div className="flex-col justify-center p-10  rounded-2xl m-7">
            <p className="text-left text-7xl font-bold">¡Hola!</p>
            <p className="pt-6 text-xl">
              {step === 1 ? (
                `Con estas preguntas rápidas identificaremos tus intereses, para
              brindarte contenido que responda a tus necesidades.`
              ) : (
                <p className="text-white font-bold">
                  <span className="text-black pr-1">Soy </span>
                  <span className="bg-red-600 px-1 ">{texto1}</span>
                  {texto2 && (
                    <>
                      <span className="text-black">, </span>
                      <span className="bg-red-600 px-1 ">{texto2}</span>
                      <span className="text-black pl-1">y busco </span>
                    </>
                  )}
                  {texto3 && (
                    <>
                      <span className="bg-red-600 px-1">{texto3}</span>
                    </>
                  )}
                </p>
              )}
            </p>
            <div className="mt-10">
              {step !== 1 && (
                <button
                  type="submit"
                  onClick={() => handleBackwardsClick()}
                  className="flex flex-row items-center text-blue-600 rounded-md bg-white px-2 py-1 cursor-pointer hover:bg-blue-700 hover:transform hover:text-white hover:duration-300"
                >
                  <ArrowBackIcon />
                  <div className="pl-3 text-lg">Pregunta anterior</div>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className=" bg-gray-200 col-span-2">
          <Box
            sx={{
              width: "100%",
            }}
          >
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <div className="relative w-full">
            <div
              onClick={() => {
                setStep(2);
                setProgress(25);
              }}
              className={`absolute w-full transition-all ${handleStep1(step)}`}
            >
              <PrimerPaso setTexto={setTexto1} />
            </div>
            <div
              onClick={() => {
                setStep(3);
                setProgress(50);
              }}
              className={`absolute w-full transition-all ${handleStep2(step)}`}
            >
              <SegundoPaso setTexto={setTexto2} />
            </div>
            <div
              className={`absolute w-full transition-all ${handleStep3(step)}`}
            >
              <TercerPaso
                setTexto={setTexto3}
                setStep={setStep}
                setProgress={setProgress}
              />
            </div>
            <div
              className={`absolute w-full transition-all ${handleStep4(step)}`}
            >
              <CuartoPasoCapacitacion />
            </div>
            <div
              className={`absolute w-full transition-all ${handleStep5(step)}`}
            >
              <QuintoPasoLegal />
            </div>
            <div
              className={`absolute w-full transition-all ${handleStep6(step)}`}
            >
              <SextoPasoServicios />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
