import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import { Tarjeta } from "./Tarjeta";

export function TercerPaso() {
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
          <Tarjeta text={"Capacitación/ Formación"}>
            <SchoolOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Programas para fortalecer mi empresa"}>
            <QueryStatsOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Servicios para mi sector"}>
            <DomainAddOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Tramites legales para mi empresa"}>
            <GavelOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Información empresarial y estadisticas"}>
            <PollOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
