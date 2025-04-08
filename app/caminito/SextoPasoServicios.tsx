import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";

import { Tarjeta } from "./Tarjeta";

type SextoPasoServiciosProps = {};

export function SextoPasoServicios(props: SextoPasoServiciosProps) {
  return (
    <>
      <div className="text-center flex-col  pt-2">
        <div className="text-4xl">
          4. Selecciona el sector económico de tu empresa
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-4 w-2/3 gap-10">
          <Tarjeta text={"Salud y químicos"}>
            <BiotechOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Industrias creativas"}>
            <ExtensionOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"TIC"}>
            <LanguageOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Turismo"}>
            <WineBarOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Gastronomia"}>
            <RestaurantOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Moda"}>
            <CheckroomOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Sevicios empresariales"}>
            <TroubleshootOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Construcción y energíá"}>
            <BoltOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Agropecuario y agroindustrial"}>
            <GrassOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Otros sectores"}>
            <CorporateFareOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
