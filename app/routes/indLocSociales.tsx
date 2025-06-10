import type { Route } from "./+types/indLocSociales";
import * as XLSX from "xlsx";
import path from "path";
/* load 'fs' for readFile and writeFile support */
import * as fs from "fs";
import { GraficasBarraICU } from "~/indicadoresLocales/graficasBarraICU";
XLSX.set_fs(fs);

export async function loader({ params }: Route.LoaderArgs) {
  const file = path.resolve(
    "app/assets/docs/Tabla_Detallada_de_Indicadores_por_Ciudad.xls"
  );
  const fileBuffer = fs.readFileSync(file); // Synchronously read the file
  const { ciudades, indicadores, indicadoresData } = processData(fileBuffer);
  return { ciudades, indicadores, indicadoresData };
}

export default function IndicadoresLocalesSociales({
  loaderData,
}: Route.ComponentProps) {
  return (
    <GraficasBarraICU
      ciudades={loaderData.ciudades}
      titulo={"sociales"}
      indicadoresData={loaderData.indicadoresData}
    />
  );
}

const processData = (
  buffer: Buffer<ArrayBufferLike>
): {
  ciudades: string[];
  indicadores: string[];
  indicadoresData: number[][];
} => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData: [][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null,
  });
  const ciudades = rawData.slice(1, 6).map((indi: string[]) => indi[0].trim());
  const indicadores = rawData[0].slice(16, 26);

  const indicadoresData = rawData.map((row) => row.slice(16, 26));
  return { ciudades, indicadores, indicadoresData };
};
