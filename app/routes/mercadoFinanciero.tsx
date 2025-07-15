import type { Route } from "./+types/mercadoFinanciero";

import { getSeriePorFecha, getTodaLaSerie } from "~/server/banxico.server";
import { IndicadoresBanxico } from "~/mercadoFinanciero/indicadoresBanxico";

export async function loader({ params }: Route.LoaderArgs) {
  const idPrecioDolar = "SF43718";
  const idTasaObjetivo = "SF61745";
  const idInflacion = "SP30578";
  const unMesAntes = new Date();
  unMesAntes.setMonth(unMesAntes.getMonth() - 1);
  const unAnoAntes = new Date();
  unAnoAntes.setFullYear(unAnoAntes.getFullYear() - 1);

  const fechaInicial = unMesAntes.toISOString().split("T")[0];
  const fechaFinal = new Date().toISOString().split("T")[0];
  const fechaInicialTasa = unAnoAntes.toISOString().split("T")[0];

  const responseDolar = await getSeriePorFecha(
    idPrecioDolar,
    fechaInicial,
    fechaFinal
  );

  const responseTasa = await getSeriePorFecha(
    idTasaObjetivo,
    fechaInicialTasa,
    fechaFinal
  );

  const responseInflacion = await getTodaLaSerie(idInflacion);
  const datosPrecioDolar = responseDolar.bmx.series[0].datos;
  const datosTasaObjetivo = responseTasa.bmx.series[0].datos;
  const datosInflacion = responseInflacion.bmx.series[0].datos.slice(-30);

  return {
    datosPrecioDolar,
    datosTasaObjetivo,
    datosInflacion,
  };
}

export default function MercadoFinanciero({
  loaderData,
}: Route.ComponentProps) {
  return (
    <>
      <IndicadoresBanxico
        datosPrecioDolar={loaderData.datosPrecioDolar}
        datosTasaObjetivo={loaderData.datosTasaObjetivo}
        datosInflacion={loaderData.datosInflacion}
      />
    </>
  );
}
