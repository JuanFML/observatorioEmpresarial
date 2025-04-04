import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { Tarjeta } from "./Tarjeta";

export function SegundoPaso() {
  return (
    <>
      <div className="text-center flex-col  pt-2">
        <div className="text-4xl">2. ¿En que momento te encuentras?</div>
        <div className="text-xl pt-2">
          Selecciona la opción con la que más te identifiques
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-3 w-2/3 gap-10">
          <Tarjeta text={"Tengo una idea de negocio"}>
            <LightbulbOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Hace poco cree mi empresa"}>
            <StorefrontOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Tengo una empresa de menos de 10 personas"}>
            <GroupAddOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Soy empresario/a hace mas de 4 años"}>
            <BusinessCenterOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Estoy en expansión de mi empresa"}>
            <AutoGraphOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Pienso cerrar mi empresa"}>
            <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
