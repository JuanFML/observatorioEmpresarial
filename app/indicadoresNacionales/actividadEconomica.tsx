import { NavBar } from "~/components/NavBar";
import { LineChart } from "@mui/x-charts/LineChart";
import { ClientOnly } from "~/components/ClientOnly";
import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ChartsReferenceLine } from "@mui/x-charts";
import { LineChartComponent } from "~/components/LineChartComponent";

type IndicesINEGIType = {
  xIgaeAnual: string[];
  rawIgaeAnual: [][];
  xIgaeMensual: string[];
  rawIgaeMensual: [][];
  largoDatos: number;
  largoDatosMensual: number;
  indicadoresIgae: string[];
};

export function ActividadEconomica(props: IndicesINEGIType) {
  const {
    rawIgaeAnual,
    xIgaeAnual,
    xIgaeMensual,
    rawIgaeMensual,
    largoDatos,
    largoDatosMensual,
    indicadoresIgae,
  } = props;
  const inicioDeDatos = 5;

  const [indicadorGraficaUno, setIndicadorGraficaUno] = useState<number>(0);
  const [dataGraficaUno, setDataGraficaUno] = useState<number[]>(
    rawIgaeAnual[inicioDeDatos + 0].slice(largoDatos - 12, largoDatos)
  );
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
      rawIgaeMensual[inicioDeDatos + indicadorGraficaUno].slice(
        largoDatosMensual - 12,
        largoDatosMensual
      )
    );
  }, [indicadorGraficaUno]);

  return (
    <>
      <div className="grid grid-cols-2 p-5 gap-7">
        <div className="col-span-2 text-2xl font-semibold ">
          Indicador Global de la Actividad Economica (IGAE)
        </div>

        <div className="col-span-2">
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
        </div>
        <div className="text-lg font-normal">
          Series desestacionalizadas. Indice Base 2018 = 100
        </div>
        <div className="text-lg font-normal">
          Variación porcentual respecto al mes inmediato anterior.
        </div>
        <div>
          <LineChartComponent
            xData={xIgaeAnual}
            dataGrafica={dataGraficaUno}
            color="#2196f3"
          />
        </div>
        <div>
          <LineChartComponent
            xData={xIgaeMensual}
            dataGrafica={dataGraficaDos}
            color="#f28e2c"
          />
        </div>
      </div>
    </>
  );
}
