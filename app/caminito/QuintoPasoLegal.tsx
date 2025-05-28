import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import { Tarjeta } from "./Tarjeta";

type QuintoPasoLegalProps = {};

export function QuintoPasoLegal(props: QuintoPasoLegalProps) {
  return (
    <>
      <div className="text-center flex-col  pt-2">
        <div className="text-4xl">4. Selecciona el tema de tu interés</div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-2 w-2/3 gap-10">
          <Tarjeta text={"Crear una empresa"}>
            <CorporateFareOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
          <Tarjeta text={"Servicios registrales"}>
            <ArticleOutlinedIcon sx={{ fontSize: 60 }} />
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
