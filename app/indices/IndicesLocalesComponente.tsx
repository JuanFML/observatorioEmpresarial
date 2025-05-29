import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { NavBar } from "~/components/NavBar";

type IndicesLocalesType = {
  xDataAnualImaief: string[];
  xDataMonthlyImaief: string[];
  anualRawDataImaief: number[][];
  monthlyRawDataImaief: number[][];
  largoDatosMonthlyImaief: number;
  indicadoresImaief: string[];
};

export function IndicesLocalesComponente(props: IndicesLocalesType) {
  let {
    xDataAnualImaief,
    xDataMonthlyImaief,
    anualRawDataImaief,
    monthlyRawDataImaief,
    largoDatosMonthlyImaief,
    indicadoresImaief,
  } = props;
  // Quitando los indices que no se ocupan
  const unwantedIndex = [1, 6];
  const inicioDeDatos = 7;

  anualRawDataImaief = anualRawDataImaief.filter(
    (_, colIndex) => !unwantedIndex.includes(colIndex)
  );
  monthlyRawDataImaief = monthlyRawDataImaief.filter(
    (_, colIndex) => !unwantedIndex.includes(colIndex - inicioDeDatos)
  );
  indicadoresImaief = indicadoresImaief.filter(
    (_, colIndex) => !unwantedIndex.includes(colIndex)
  );

  const [indicadorGraficaUno, setIndicadorGraficaUno] = useState<number>(0);
  const [dataGraficaUno, setDataGraficaUno] = useState<number[]>(
    anualRawDataImaief[0].slice(0, -1)
  );

  useEffect(() => {
    setDataGraficaUno(anualRawDataImaief[indicadorGraficaUno].slice(0, -1));
  }, [indicadorGraficaUno]);

  const [indicadorGraficaDos, setIndicadorGraficaDos] = useState<number>(0);
  const [dataGraficaDos, setDataGraficaDos] = useState<number[]>(
    monthlyRawDataImaief[inicioDeDatos].slice(
      largoDatosMonthlyImaief - 12,
      largoDatosMonthlyImaief
    )
  );

  useEffect(() => {
    setDataGraficaDos(
      monthlyRawDataImaief[inicioDeDatos + indicadorGraficaDos].slice(
        largoDatosMonthlyImaief - 12,
        largoDatosMonthlyImaief
      )
    );
  }, [indicadorGraficaDos]);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 p-5 gap-7">
        <div className="col-span-2 text-2xl font-semibold ">
          Indicador Mensual de la Actividad Industrial por Entidad Federativa
          (IMAIEF)
          <div className="text-lg">Coahuila de Zaragoza</div>
          <div className="text-lg">
            Base 2018. Serie de enero 2003 a enero 2025
          </div>
        </div>
        <div>Serie anual</div>
        <div>Serie mensual</div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Indicador</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={indicadorGraficaUno}
              label="Indicador"
              onChange={(event) => {
                setIndicadorGraficaUno(event.target.value);
              }}
            >
              {indicadoresImaief.map((indicador, index) => (
                <MenuItem value={index}>{indicador}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <LineChart
            xAxis={[
              {
                id: "Año",
                scaleType: "band",
                data: xDataAnualImaief,
              },
            ]}
            series={[
              {
                data: dataGraficaUno,
              },
            ]}
            height={500}
          />
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Indicador</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={indicadorGraficaDos}
              label="Indicador"
              onChange={(event) => {
                setIndicadorGraficaDos(event.target.value);
              }}
            >
              {indicadoresImaief.map((indicador, index) => (
                <MenuItem value={index}>{indicador}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <LineChart
            xAxis={[
              {
                id: "Año",
                scaleType: "band",
                data: xDataMonthlyImaief,
              },
            ]}
            series={[
              {
                data: dataGraficaDos,
                color: "#f28e2c",
              },
            ]}
            height={500}
          ></LineChart>
        </div>
      </div>
    </>
  );
}
