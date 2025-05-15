import { NavBar } from "~/components/NavBar";
import { LineChart } from "@mui/x-charts/LineChart";
import { ClientOnly } from "~/components/ClientOnly";
import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { indicadoresIgae } from "~/utils/constants";

type IndicesINEGIType = {
  xData: string[];
  raw_data: [][];
  largoDatos: number;
  datosPrecioDolar: { fecha: string; dato: string };
};

export function IndicesINEGI(props: IndicesINEGIType) {
  const { raw_data, xData, largoDatos, datosPrecioDolar } = props;
  console.log(datosPrecioDolar);
  const inicioDeDatos = 5;

  const [indicadorGraficaUno, setIndicadorGraficaUno] = useState<number>(0);
  const [dataGraficaUno, setDataGraficaUno] = useState<number[]>(
    raw_data[inicioDeDatos + 0].slice(largoDatos - 12, largoDatos)
  );
  const [indicadorGraficaDos, setIndicadorGraficaDos] = useState<number>(1);
  const [dataGraficaDos, setDataGraficaDos] = useState<number[]>(
    raw_data[inicioDeDatos + 0].slice(largoDatos - 12, largoDatos)
  );

  useEffect(() => {
    setDataGraficaUno(
      raw_data[inicioDeDatos + indicadorGraficaUno].slice(
        largoDatos - 12,
        largoDatos
      )
    );
  }, [indicadorGraficaUno]);

  useEffect(() => {
    setDataGraficaDos(
      raw_data[inicioDeDatos + indicadorGraficaUno].slice(
        largoDatos - 12,
        largoDatos
      )
    );
  }, [indicadorGraficaDos]);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 p-5 gap-7">
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
              {indicadoresIgae.map((indicador, index) => (
                <MenuItem value={index}>{indicador}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="text-2xl font-semibold py-2">
            {indicadoresIgae[indicadorGraficaUno]}
          </div>
          <LineChart
            xAxis={[
              {
                id: "Año",
                scaleType: "band",
                data: xData,
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
              {indicadoresIgae.map((indicador, index) => (
                <MenuItem value={index}>{indicador}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="text-2xl font-semibold py-2">
            {indicadoresIgae[indicadorGraficaDos]}
          </div>
          <LineChart
            xAxis={[
              {
                id: "Año",
                scaleType: "band",
                data: xData,
              },
            ]}
            series={[
              {
                data: dataGraficaDos,
              },
            ]}
            height={500}
          />
        </div>
        <div className="text-2xl">
          <div>Precio del dolar</div>
          <div>{`Fecha ${datosPrecioDolar.fecha}`}</div>
          <div>{`Precio ${datosPrecioDolar.dato}`}</div>
        </div>
      </div>
    </>
  );
}
