import { LineChart } from "@mui/x-charts";
import { LineChartComponent } from "~/components/LineChartComponent";
import { NavBar } from "~/components/NavBar";
import { colors } from "~/utils/constants";

type IndicadoresBanxicoType = {
  datosPrecioDolar: { fecha: string; dato: string }[];
  datosTasaObjetivo: { fecha: string; dato: string }[];
  datosInflacion: { fecha: string; dato: string }[];
};

export const IndicadoresBanxico = (props: IndicadoresBanxicoType) => {
  const { datosPrecioDolar, datosTasaObjetivo, datosInflacion } = props;

  const dolarFechas = datosPrecioDolar.map((dato) => dato.fecha);
  const dolarDatos = datosPrecioDolar.map((dato) => Number(dato.dato));
  const tasaObjetivoFechas = datosTasaObjetivo.map((dato) => dato.fecha);
  const tasaObjetivoDatos = datosTasaObjetivo.map((dato) => Number(dato.dato));
  const inflacionFechas = datosInflacion.map((dato) => dato.fecha);
  const inflacionDatos = datosInflacion.map((dato) => Number(dato.dato));
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 p-5 gap-7">
        <div className="col-span-2 text-2xl font-semibold ">
          Indicadores del Mercado Financiero
        </div>

        <div>
          <div className="pb-4">Tipo de cambio Pesos por dólar E.U.A.</div>

          <LineChartComponent
            xData={dolarFechas}
            dataGrafica={dolarDatos}
            color={colors[0]}
          />
        </div>
        <div>
          <div className="pb-4">Tasa Objetivo</div>

          <LineChartComponent
            xData={tasaObjetivoFechas}
            dataGrafica={tasaObjetivoDatos}
            color={colors[1]}
          />
        </div>
        <div>
          <div className="pb-4">
            Índice Nacional de Precios al consumidor variación anual
          </div>
          <LineChartComponent
            xData={inflacionFechas}
            dataGrafica={inflacionDatos}
            color={colors[2]}
          />
        </div>
      </div>
    </>
  );
};
