import type { Route } from "./+types/indNacConfianzaEmpresarial";
import * as XLSX from "xlsx";
import path from "path";
/* load 'fs' for readFile and writeFile support */
import * as fs from "fs";
import { ConfianzaEmpresarial } from "~/indicadoresNacionales/confianzaEmpresarial";
XLSX.set_fs(fs);

export async function loader({ params }: Route.LoaderArgs) {
  const confianzaFile = path.resolve(
    "app/assets/docs/confianza empresarial.xls"
  );
  const confianzaFileBuffer = fs.readFileSync(confianzaFile); // Synchronously read the file
  const {
    months,
    globalData,
    manufacturaData,
    construccionData,
    comercioData,
    servicioData,
  } = processData(confianzaFileBuffer);

  return {
    months,
    globalData,
    manufacturaData,
    construccionData,
    comercioData,
    servicioData,
  };
}

export default function IndicadoresNacionalesActividadEconomica({
  loaderData,
}: Route.ComponentProps) {
  return (
    <>
      <ConfianzaEmpresarial
        months={loaderData.months}
        globalData={loaderData.globalData}
        manufacturaData={loaderData.manufacturaData}
        construccionData={loaderData.construccionData}
        comercioData={loaderData.comercioData}
        servicioData={loaderData.servicioData}
      />
    </>
  );
}

const processData = (
  buffer: Buffer<ArrayBufferLike>
): {
  months: string[];
  globalData: number[];
  manufacturaData: number[];
  construccionData: number[];
  comercioData: number[];
  servicioData: number[];
} => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData: any[][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null,
  });
  let year = rawData[7][1];
  let months: string[] = [];
  rawData.slice(8, -1).map((row: any[]) => {
    if (isNaN(row[0])) {
      months.push(`${row[0]}-${year}`);
    } else {
      year = row[0];
    }
  });

  const globalData = rawData
    .slice(8, -1)
    .map((row) => row[1])
    .filter((data) => data != null);
  const manufacturaData = rawData
    .slice(8, -1)
    .map((row) => row[2])
    .filter((data) => data != null);
  const construccionData = rawData
    .slice(8, -1)
    .map((row) => row[3])
    .filter((data) => data != null);
  const comercioData = rawData
    .slice(8, -1)
    .map((row) => row[4])
    .filter((data) => data != null);
  const servicioData = rawData
    .slice(8, -1)
    .map((row) => row[5])
    .filter((data) => data != null);

  return {
    months,
    globalData,
    manufacturaData,
    construccionData,
    comercioData,
    servicioData,
  };
};
