import { NavBar } from "~/components/NavBar";
import fondoObservatorio from "../assets/images/fondo_observatorio.png";
import { Box, Button, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { PrimerPaso } from "./PrimerPaso";
import { SegundoPaso } from "./SegundoPaso";
import { TercerPaso } from "./TercerPaso";
import { handleStep1, handleStep2, handleStep3 } from "./utils";

export function Caminito() {
  const [progress, setProgress] = useState(10);
  const [step, setStep] = useState(1);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3 h-[100vh] font-serif">
        <div className="bg-white flex items-center ">
          <div className="flex-col justify-center p-10 shadow-2xl rounded-2xl m-7">
            <p className="text-left text-7xl font-bold">¡Hola!</p>
            <p className="pt-6 text-xl">
              Con estas preguntas rápidas identificaremos tus intereses, para
              brindarte contenido que responda a tus necesidades.
            </p>
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
          <div className="relative w-full h-full ">
            <div
              onClick={() => {
                setStep(2);
                setProgress(30);
              }}
              className={`absolute w-full transition-all ${handleStep1(step)}`}
            >
              <PrimerPaso />
            </div>
            <div
              onClick={() => {
                setStep(3);
                setProgress(60);
              }}
              className={`absolute w-full transition-all ${handleStep2(step)}`}
            >
              <SegundoPaso />
            </div>
            <div
              onClick={() => {
                setStep(4);
                setProgress(90);
              }}
              className={`absolute w-full transition-all ${handleStep3(step)}`}
            >
              <TercerPaso />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
