import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import { Tarjeta } from "./Tarjeta";

type PrimerPasoProps = {
  setTexto: React.Dispatch<React.SetStateAction<string>>;
};

export function PrimerPaso(props: PrimerPasoProps) {
  const { setTexto } = props;

  return (
    <>
      <div className="text-center flex-col  pt-2">
        <div className="text-4xl">1. Cuéntenos sobre ti</div>
        <div className="text-xl pt-2">
          Selecciona la opción con la que más te identifiques
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid md:grid-cols-3 w-2/3 gap-10">
          <Tarjeta
            text={"Soy creador/a de empresa"}
            setTexto={setTexto}
            textToConcat="creador/a de empresa"
          >
            <AccountCircleOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta
            text={"Informal"}
            setTexto={setTexto}
            textToConcat="informal"
          >
            <OutdoorGrillOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta
            text={"Tengo Micrompresa"}
            setTexto={setTexto}
            textToConcat="creador/a de microempresa"
          >
            <StorefrontOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta
            text={"Tengo Pyme"}
            setTexto={setTexto}
            textToConcat="creador/a de Pyme "
          >
            <StoreOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta
            text={"Soy gran empresario/o"}
            setTexto={setTexto}
            textToConcat="gran empresario/o"
          >
            <CorporateFareOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
