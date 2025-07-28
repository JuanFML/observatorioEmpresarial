import { useState } from "react";
import { Form } from "react-router";
import { CrossSvg } from "~/svg/CrossSvg";
import { LightBulbSvg } from "~/svg/LightBulbSvg";

type EncuestaComponentProps = {};

export const EncuestaComponent = (props: EncuestaComponentProps) => {
  const [clicked, setClicked] = useState(true);
  const handleModal = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <div
        className={`
        fixed top-20 right-10 h-6/8 w-80 bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.25)] z-50 overflow-y-auto rounded-2xl
        transform transition-opacity duration-300 ease-in-out
        ${clicked ? "opacity-100 " : "opacity-0 pointer-events-none"}
      `}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <div className="font-bold text-lg">Opinión</div>
        </div>
        <Form method="post">
          <div className="p-3">
            <div>
              ¿Qué informacion hubiera querido obtener y no pudo encontrarla?
            </div>
            <textarea
              name="respuesta1"
              className="my-2 p-2 border rounded-md w-full  "
            />
            <div>¿De qué funcionalidad importante carece a su juicio?</div>
            <textarea
              name="respuesta2"
              className="my-2 p-2 border rounded-md w-full  "
            />
            <button
              type="submit"
              onClick={() => handleModal()}
              className="py-3 px-2 text-blue-600 rounded-md bg-white  cursor-pointer hover:bg-blue-700 hover:transform hover:text-white hover:duration-300"
            >
              <div className="text-center text-lg">Mandar respuestas</div>
            </button>
          </div>
        </Form>
      </div>

      <button
        onClick={() => handleModal()}
        type="button"
        className="fixed bottom-4 right-4 h-16 w-16 rounded-full z-40 flex justify-center items-center bg-blue-500 transform transition-all ease-in-out duration-200 cursor-pointer hover:w-18 hover:h-18 hover:bottom-3 hover:right-3 shadow-[0px_4px_15px_rgba(0,0,0,0.25)]"
      >
        <div
          className={`text-lg font-bold text-yellow-400 transition-opacity duration-200 ${
            clicked ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          Opine
        </div>
        <CrossSvg
          className={`absolute size-8 transform transition-transform duration-300 delay-50 ${
            clicked ? "opacity-100 rotate-90" : "opacity-0 pointer-events-none"
          }  `}
        />
      </button>
    </>
  );
};
