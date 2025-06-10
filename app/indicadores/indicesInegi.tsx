import { NavBar } from "~/components/NavBar";
import { LineChart } from "@mui/x-charts/LineChart";
import { ClientOnly } from "~/components/ClientOnly";
import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ChartsReferenceLine } from "@mui/x-charts";
import inegiLogo from "../assets/images/inegi_logo.jpg";

type IndicesINEGIType = {
  xIgaeAnual: string[];
  rawIgaeAnual: [][];
  xIgaeMensual: string[];
  rawIgaeMensual: [][];
  largoDatos: number;
  largoDatosMensual: number;
  datosPrecioDolar: { fecha: string; dato: string };
  indicadoresIgae: string[];
};

export function IndicesINEGI(props: IndicesINEGIType) {
  const {
    rawIgaeAnual,
    xIgaeAnual,
    xIgaeMensual,
    rawIgaeMensual,
    largoDatos,
    largoDatosMensual,
    datosPrecioDolar,
    indicadoresIgae,
  } = props;
  const inicioDeDatos = 5;

  const [indicadorGraficaUno, setIndicadorGraficaUno] = useState<number>(0);
  const [dataGraficaUno, setDataGraficaUno] = useState<number[]>(
    rawIgaeAnual[inicioDeDatos + 0].slice(largoDatos - 12, largoDatos)
  );
  const [indicadorGraficaDos, setIndicadorGraficaDos] = useState<number>(0);
  const [dataGraficaDos, setDataGraficaDos] = useState<number[]>(
    rawIgaeMensual[inicioDeDatos + 0].slice(largoDatos - 12, largoDatos)
  );

  useEffect(() => {
    setDataGraficaUno(
      rawIgaeAnual[inicioDeDatos + indicadorGraficaUno].slice(
        largoDatos - 12,
        largoDatos
      )
    );
  }, [indicadorGraficaUno]);

  useEffect(() => {
    setDataGraficaDos(
      rawIgaeMensual[inicioDeDatos + indicadorGraficaDos].slice(
        largoDatosMensual - 12,
        largoDatosMensual
      )
    );
  }, [indicadorGraficaDos]);

  return (
    <>
      <NavBar />

      <div className="grid grid-cols-2 p-5 gap-7">
        <div className="col-span-2 text-2xl font-semibold ">
          Indicador Global de la Actividad Economica (IGAE)
        </div>
        <div>Series desestacionalizadas. Indice Base 2018 = 100</div>
        <div>Variación porcentual respecto al mes inmediato anterior.</div>
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

          <LineChart
            xAxis={[
              {
                id: "Año",
                scaleType: "band",
                data: xIgaeAnual,
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

          <LineChart
            xAxis={[
              {
                id: "Año",
                scaleType: "band",
                data: xIgaeMensual,
              },
            ]}
            series={[
              {
                data: dataGraficaDos,
                color: "#f28e2c",
              },
            ]}
            height={500}
          >
            <ChartsReferenceLine y={0} />
          </LineChart>
        </div>

        <div className="text-2xl">
          <div>Precio del dolar</div>
          <div>{`Fecha ${datosPrecioDolar.fecha}`}</div>
          <div>{`Precio ${datosPrecioDolar.dato}`}</div>
        </div>
      </div>
      <div className="flex justify-end">
        <Box component="img" src={inegiLogo} sx={{ width: 120, height: 100 }} />
      </div>
    </>
  );
}
