import type { Route } from "./+types/indicesLocales";
import * as XLSX from "xlsx";
import path from "path";
/* load 'fs' for readFile and writeFile support */
import * as fs from "fs";
import { IndicesLocalesComponente } from "~/indices/IndicesLocalesComponente";
XLSX.set_fs(fs);

export async function loader({ params }: Route.LoaderArgs) {
  const imaief = path.resolve("app/assets/docs/IMAIEF_19.xlsx");
  const imaiefBuffer = fs.readFileSync(imaief); // Synchronously read the file
  const {
    xDataAnualImaief,
    xDataMonthlyImaief,
    anualRawDataImaief,
    monthlyRawDataImaief,
    largoDatosMonthlyImaief,
    indicadoresImaief,
  } = processImaiefData(imaiefBuffer);

  const itaee = path.resolve("app/assets/docs/ITAEE_25.xlsx");
  const itaeeBuffer = fs.readFileSync(itaee); // Synchronously read the file
  const { xDataItaee, itaeeRawData, indicadoresItaee, largoDatosMonthlyItaee } =
    processItaeeData(itaeeBuffer);

  return {
    xDataAnualImaief,
    xDataMonthlyImaief,
    anualRawDataImaief,
    monthlyRawDataImaief,
    largoDatosMonthlyImaief,
    indicadoresImaief,
    xDataItaee,
    itaeeRawData,
    indicadoresItaee,
    largoDatosMonthlyItaee,
  };
}

export default function IndicesLocales({ loaderData }: Route.ComponentProps) {
  return (
    <IndicesLocalesComponente
      xDataAnualImaief={loaderData.xDataAnualImaief}
      xDataMonthlyImaief={loaderData.xDataMonthlyImaief}
      anualRawDataImaief={loaderData.anualRawDataImaief}
      monthlyRawDataImaief={loaderData.monthlyRawDataImaief}
      largoDatosMonthlyImaief={loaderData.largoDatosMonthlyImaief}
      indicadoresImaief={loaderData.indicadoresImaief}
      xDataItaee={loaderData.xDataItaee}
      itaeeRawData={loaderData.itaeeRawData}
      indicadoresItaee={loaderData.indicadoresItaee}
      largoDatosMonthlyItaee={loaderData.largoDatosMonthlyItaee}
    />
  );
}

const processImaiefData = (
  buffer: Buffer<ArrayBufferLike>
): {
  xDataAnualImaief: string[];
  xDataMonthlyImaief: string[];
  anualRawDataImaief: number[][];
  monthlyRawDataImaief: number[][];
  largoDatosMonthlyImaief: number;
  indicadoresImaief: string[];
} => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData: [][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null,
  });
  const indicadoresImaief = rawData
    .slice(7, 17)
    .map((indi: string[]) => indi[0].trim());

  const anualDataIndex = rawData[5]
    .map((cell: string, i) => (cell === "Anual" ? i : false))
    .filter((cell) => cell);

  const anualRawData = rawData
    .map((row) =>
      row.filter((_, colIndex) => anualDataIndex.includes(colIndex))
    )
    .slice(7, 17);

  const monthDataIndex = rawData[5]
    .map((cell: string, i) => (cell !== "Anual" ? i : false))
    .filter((cell) => cell);

  const monthlyRawData = rawData.map((row) =>
    row.filter((_, colIndex) => monthDataIndex.includes(colIndex))
  );

  let currentYear = 0;
  const years = rawData[4].map((cell: string) => {
    if (cell) {
      currentYear = Number(cell.trim().replace("P", "").replace("R", ""));
      return currentYear;
    } else {
      return currentYear;
    }
  });

  const yearsForAnualData = years.filter((_, colIndex) =>
    anualDataIndex.includes(colIndex)
  );
  const xDataAnualImaief = yearsForAnualData.map((year) => year.toString());
  const yearsForMonthlyData = years.filter((_, colIndex) =>
    monthDataIndex.includes(colIndex)
  );

  let ultimaCeldaConInfoAnual = 0;
  anualRawData[7].map((cell: number, i) => {
    if (typeof cell === "number") {
      ultimaCeldaConInfoAnual = i;
    }
  });

  let ultimaCeldaConInfoMonthly = 0;
  monthlyRawData[7].map((cell: number, i) => {
    if (typeof cell === "number") {
      ultimaCeldaConInfoMonthly = i;
    }
  });
  ultimaCeldaConInfoMonthly += 1;
  const months = monthlyRawData[5].map((month: string) =>
    month.replace("P", "")
  );
  const yearFromLast12 = yearsForMonthlyData.slice(
    ultimaCeldaConInfoMonthly - 12,
    ultimaCeldaConInfoMonthly
  );
  const last12Months = months.slice(
    ultimaCeldaConInfoMonthly - 12,
    ultimaCeldaConInfoMonthly
  );

  const xDataMonthly: string[] = yearFromLast12.map(
    (year, index) => `${year} ${last12Months[index]}`
  );

  return {
    xDataAnualImaief,
    xDataMonthlyImaief: xDataMonthly,
    anualRawDataImaief: anualRawData,
    monthlyRawDataImaief: monthlyRawData,
    largoDatosMonthlyImaief: ultimaCeldaConInfoMonthly,
    indicadoresImaief,
  };
};

const processItaeeData = (
  buffer: Buffer<ArrayBufferLike>
): {
  xDataItaee: string[];
  itaeeRawData: any[][];
  indicadoresItaee: string[];
  largoDatosMonthlyItaee: number;
} => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData: [][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null,
  });
  const indicadoresItaee = rawData
    .slice(7, 23)
    .map((indi: string[]) => indi[0].trim());

  const triDataColumns = rawData[5]
    .map((cell: string, i) => (cell?.includes("T") ? i : false))
    .filter((cell) => cell);

  const triRawData = rawData
    .map((row) =>
      row.filter((_, colIndex) => triDataColumns.includes(colIndex))
    )
    .slice(0, 23);

  let currentYear = 0;
  const years = rawData[4].map((cell: string) => {
    if (cell) {
      currentYear = Number(cell.trim().replace("P", "").replace("R", ""));
      return currentYear;
    } else {
      return currentYear;
    }
  });

  const yearsForTriData = years.filter((_, colIndex) =>
    triDataColumns.includes(colIndex)
  );

  let ultimaCeldaConInfoTri = 0;
  triRawData[7].map((cell: number, i) => {
    if (typeof cell === "number") {
      ultimaCeldaConInfoTri = i;
    }
  });
  ultimaCeldaConInfoTri += 1;
  const trimestres = triRawData[5].map((tri: string) =>
    tri.replace("P", "").replace("R", "")
  );
  const yearFromLastTris = yearsForTriData.slice(
    ultimaCeldaConInfoTri - 4,
    ultimaCeldaConInfoTri
  );
  const last4Tris = trimestres.slice(
    ultimaCeldaConInfoTri - 4,
    ultimaCeldaConInfoTri
  );

  const xDataTris: string[] = yearFromLastTris.map(
    (year, index) => `${year} ${last4Tris[index]}`
  );

  return {
    xDataItaee: xDataTris,
    itaeeRawData: triRawData,
    indicadoresItaee,
    largoDatosMonthlyItaee: ultimaCeldaConInfoTri,
  };
};
