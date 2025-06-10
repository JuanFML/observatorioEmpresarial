import { IndicesINEGI } from "~/indicadores/indicesInegi";
import type { Route } from "./+types/indicesNacionales";
import * as XLSX from "xlsx";
import path from "path";
/* load 'fs' for readFile and writeFile support */
import * as fs from "fs";
// import { getSerieUltimoCierre } from "~/server/banxico.server";
XLSX.set_fs(fs);

export async function loader({ params }: Route.LoaderArgs) {
  const igaeAnual = path.resolve("app/assets/docs/igae_indice.xlsx");
  const igaeBuffer = fs.readFileSync(igaeAnual); // Synchronously read the file
  const {
    xData: xDataIgae,
    rawData: rawDataIgae,
    largoDatos,
    indicadores,
  } = processIgaeData(igaeBuffer);

  const iageMensual = path.resolve("app/assets/docs/igae_var_mensual.xlsx");
  const igaeMensualBuffer = fs.readFileSync(iageMensual); // Synchronously read the file
  const {
    xData: xDataMensual,
    rawData: rawDataMensual,
    largoDatos: largoDatosMensual,
  } = processIgaeData(igaeMensualBuffer);

  // const idPesosPorDolar = "SF43718";
  // const response = await getSerieUltimoCierre(idPesosPorDolar);
  // const datosPrecioDolar = response.bmx.series[0].datos[0];
  const datosPrecioDolar = { fecha: "", dato: "" };

  return {
    xDataIgae,
    rawDataIgae,
    xDataMensual,
    rawDataMensual,
    largoDatos,
    indicadores,
    datosPrecioDolar,
    largoDatosMensual,
  };
}

export default function IndicesNacionales({
  loaderData,
}: Route.ComponentProps) {
  return (
    <IndicesINEGI
      xIgaeAnual={loaderData.xDataIgae}
      rawIgaeAnual={loaderData.rawDataIgae}
      xIgaeMensual={loaderData.xDataMensual}
      rawIgaeMensual={loaderData.rawDataMensual}
      largoDatos={loaderData.largoDatos}
      largoDatosMensual={loaderData.largoDatosMensual}
      indicadoresIgae={loaderData.indicadores}
      datosPrecioDolar={loaderData.datosPrecioDolar}
    />
  );
}

const processIgaeData = (
  buffer: Buffer<ArrayBufferLike>
): {
  xData: string[];
  rawData: [][];
  largoDatos: number;
  indicadores: string[];
} => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData: [][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null,
  });
  const indicadores = rawData
    .slice(5, -3)
    .map((indi: any[]) => (indi[0]?.length > 0 ? indi[0] : indi[1]));
  const months = rawData[4];
  let currentYear = 0;
  const years = rawData[3].map((cell: any) => {
    if (cell) {
      currentYear = cell;
      return cell;
    } else {
      return currentYear;
    }
  });

  const largoDatos = months.length;
  const yearFromLast12 = years.slice(largoDatos - 12, largoDatos);
  const last12Months = months.slice(largoDatos - 12, largoDatos);
  const xData: string[] = yearFromLast12.map(
    (year, index) => `${year} ${last12Months[index]}`
  );

  return { xData, rawData, largoDatos, indicadores };
};
