import type { Route } from "./+types/indNacConfianzaConsumidor";
import * as XLSX from "xlsx";
import path from "path";
/* load 'fs' for readFile and writeFile support */
import * as fs from "fs";
import { mesesStrings } from "~/utils/constants";
import { ConfianzaConsumidor } from "~/indicadoresNacionales/confianzaConsumidor";
XLSX.set_fs(fs);

export async function loader({ params }: Route.LoaderArgs) {
  const confianzaFile = path.resolve(
    "app/assets/docs/ENCO_b_Indicador_de_confianza_del_consumidor.xlsx"
  );
  const confianzaFileBuffer = fs.readFileSync(confianzaFile); // Synchronously read the file
  const { months, consumidorData, diferenciaAnualData } =
    processData(confianzaFileBuffer);

  return {
    months,
    consumidorData,
    diferenciaAnualData,
  };
}

export default function IndicadoresNacionalesActividadEconomica({
  loaderData,
}: Route.ComponentProps) {
  return (
    <>
      <ConfianzaConsumidor
        months={loaderData.months}
        consumidorData={loaderData.consumidorData}
        diferenciaAnualData={loaderData.diferenciaAnualData}
      />
    </>
  );
}

const processData = (
  buffer: Buffer<ArrayBufferLike>
): {
  months: string[];
  consumidorData: number[];
  diferenciaAnualData: number[];
} => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData: any[][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null,
  });

  let year = "";
  let months: string[] = [];

  rawData.slice(11, -1).map((row: any[]) => {
    if (mesesStrings.some((v) => `${row[0]}`.includes(v))) {
      months.push(`${row[0]}-${year}`);
    } else if (!isNaN(row[0])) {
      year = row[0];
    }
  });
  const consumidorData = rawData
    .slice(11)
    .map((row) => row[1])
    .filter((data) => data != null);

  const diferenciaAnualData = rawData
    .slice(11)
    .map((row) => row[2])
    .filter((data) => data != null);

  return {
    months,
    consumidorData,
    diferenciaAnualData,
  };
};
