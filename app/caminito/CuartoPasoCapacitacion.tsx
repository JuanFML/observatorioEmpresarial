import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AreaChartOutlinedIcon from "@mui/icons-material/AreaChartOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Tarjeta } from "./Tarjeta";

type CuartoPasoCapacitacionProps = {};

export function CuartoPasoCapacitacion(props: CuartoPasoCapacitacionProps) {
  return (
    <>
      <div className="text-center flex-col  pt-2">
        <div className="text-4xl">4. Selecciona el tema de tu interés</div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-4 w-2/3 gap-10">
          <Tarjeta text={"Mercadeo y ventas"}>
            <AssessmentOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Estrategia"}>
            <AreaChartOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Producción y calidad"}>
            <ThumbUpOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Financiero"}>
            <MonetizationOnOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Legal y normativo"}>
            <GavelOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Gestión humana"}>
            <HandshakeOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Innovación"}>
            <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Solución de controversias"}>
            <HelpOutlineOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
