type ListaLocalesProps = {
  lugares: DenueLugar[] | undefined;
  onClose: any;
};

import { useEffect, useState } from "react";
import { CrossSvg } from "~/svg/CrossSvg";

export const ListaLocales = (props: ListaLocalesProps) => {
  const { lugares, onClose } = props;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start the transition after mount
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {lugares && (
        <>
          <div
            className={`
        fixed bottom-0 right-0 h-7/8 w-80 bg-white shadow-lg z-50 overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${visible ? "translate-x-0" : "translate-x-full"}
      `}
          >
            {/* Header with close button */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="font-bold text-lg">Resultados</div>
              <button
                onClick={() => {
                  setVisible(false);
                  setTimeout(onClose, 300); // wait for animation to finish before unmount
                }}
                className="hover:text-red-500 transition-colors"
                aria-label="Cerrar"
              >
                <CrossSvg />
              </button>
            </div>

            <ul className="divide-y">
              {lugares.map((lugar, index) => (
                <li
                  key={index}
                  className="p-4 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="font-semibold">{lugar.Nombre}</div>
                  <div className="text-sm text-gray-600">{lugar.Ubicacion}</div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
