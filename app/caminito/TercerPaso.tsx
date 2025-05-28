import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import { Tarjeta } from "./Tarjeta";

type TercerPasoProps = {
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

export function TercerPaso(props: TercerPasoProps) {
  const { setTexto, setStep, setProgress } = props;
  return (
    <>
      <div className="text-center flex-col  pt-2">
        <div className="text-4xl">3. ¿En qué necesitas apoyo?</div>
        <div className="text-xl pt-2">
          Selecciona la opción con la que más te identifiques
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-3 w-2/3 gap-10">
          <div
            onClick={() => {
              setStep(4);
              setProgress(75);
            }}
          >
            <Tarjeta
              text={"Capacitación/ Formación"}
              setTexto={setTexto}
              textToConcat="capacitación en..."
            >
              <SchoolOutlinedIcon sx={{ fontSize: 60 }} />
            </Tarjeta>
          </div>
          <Tarjeta text={"Programas para fortalecer mi empresa"}>
            <QueryStatsOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>

          <div
            onClick={() => {
              setStep(6);
              setProgress(75);
            }}
          >
            <Tarjeta
              text={"Servicios para mi sector"}
              setTexto={setTexto}
              textToConcat="servicios para el sector..."
            >
              <DomainAddOutlinedIcon sx={{ fontSize: 60 }} />
            </Tarjeta>
          </div>

          <div
            onClick={() => {
              setStep(5);
              setProgress(75);
            }}
          >
            <Tarjeta
              text={"Tramites legales para mi empresa"}
              setTexto={setTexto}
              textToConcat="tramites legales para..."
            >
              <GavelOutlinedIcon sx={{ fontSize: 60 }} />
            </Tarjeta>
          </div>

          <Tarjeta text={"Información empresarial y estadisticas"}>
            <PollOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
