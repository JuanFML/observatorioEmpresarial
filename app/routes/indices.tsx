import { IndicesINEGI } from "~/indices/indicesInegi";
import type { Route } from "./+types/indices";
import * as XLSX from "xlsx";
import path from "path";
/* load 'fs' for readFile and writeFile support */
import * as fs from "fs";
import { getSerieUltimoCierre } from "~/server/banxico.server";
XLSX.set_fs(fs);

export async function loader({ params }: Route.LoaderArgs) {
  const filePath = path.resolve("app/assets/docs/igae_indice.xlsx");
  const fileBuffer = fs.readFileSync(filePath); // Synchronously read the file
  const workbook = XLSX.read(fileBuffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const raw_data: [][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null,
  });
  const months = raw_data[4];
  let currentYear = 0;
  const years = raw_data[3].map((cell: any) => {
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

  const idPesosPorDolar = "SF43718";
  const response = await getSerieUltimoCierre(idPesosPorDolar);
  const datosPrecioDolar = response.bmx.series[0].datos[0];

  return { xData, raw_data, largoDatos, datosPrecioDolar };
}

export default function Indices({ loaderData }: Route.ComponentProps) {
  return (
    <IndicesINEGI
      xData={loaderData.xData}
      raw_data={loaderData.raw_data}
      largoDatos={loaderData.largoDatos}
      datosPrecioDolar={loaderData.datosPrecioDolar}
    />
  );
}
