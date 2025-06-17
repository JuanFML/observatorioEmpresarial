import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { LineChartComponent } from "~/components/LineChartComponent";
import { NavBar } from "~/components/NavBar";
import { SelectComponent } from "~/components/SelectComponent";
import { SideBar } from "~/components/SideBar";

type IndicadoresLocalesType = {
  xDataAnualImaief: string[];
  xDataMonthlyImaief: string[];
  anualRawDataImaief: number[][];
  monthlyRawDataImaief: number[][];
  largoDatosMonthlyImaief: number;
  indicadoresImaief: string[];
  xDataItaee: string[];
  itaeeRawData: any[][];
  indicadoresItaee: string[];
  largoDatosMonthlyItaee: number;
};

export function ActividadIndustrial(props: IndicadoresLocalesType) {
  let {
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
  } = props;
  // Quitando los indices que no se ocupan
  const unwantedImaiefIndex = [1, 6];
  const inicioDeDatosImaief = 7;

  anualRawDataImaief = anualRawDataImaief.filter(
    (_, colIndex) => !unwantedImaiefIndex.includes(colIndex)
  );
  monthlyRawDataImaief = monthlyRawDataImaief.filter(
    (_, colIndex) =>
      !unwantedImaiefIndex.includes(colIndex - inicioDeDatosImaief)
  );
  indicadoresImaief = indicadoresImaief.filter(
    (_, colIndex) => !unwantedImaiefIndex.includes(colIndex)
  );

  const unwantedItaeeIndex = [4, 5, 6, 7, 8];
  const inicioDeDatosItaee = 7;

  itaeeRawData = itaeeRawData.filter(
    (_, colIndex) => !unwantedItaeeIndex.includes(colIndex - inicioDeDatosItaee)
  );
  indicadoresItaee = indicadoresItaee.filter(
    (_, colIndex) => !unwantedItaeeIndex.includes(colIndex)
  );

  const [indicadorGraficaImaief, setIndicadorGraficaImaief] =
    useState<number>(0);
  const [dataGraficaImaiefAnual, setDataGraficaImaiefAnual] = useState<
    number[]
  >(anualRawDataImaief[0].slice(0, -1));

  useEffect(() => {
    setDataGraficaImaiefAnual(
      anualRawDataImaief[indicadorGraficaImaief].slice(0, -1)
    );
  }, [indicadorGraficaImaief]);

  const [dataGraficaImaiefMensual, setDataGraficaImaiefMensual] = useState<
    number[]
  >(
    monthlyRawDataImaief[inicioDeDatosImaief].slice(
      largoDatosMonthlyImaief - 12,
      largoDatosMonthlyImaief
    )
  );

  useEffect(() => {
    setDataGraficaImaiefMensual(
      monthlyRawDataImaief[inicioDeDatosImaief + indicadorGraficaImaief].slice(
        largoDatosMonthlyImaief - 12,
        largoDatosMonthlyImaief
      )
    );
  }, [indicadorGraficaImaief]);

  const [indicadorGraficaItaee, setIndicadorGraficaItaee] = useState<number>(0);
  const [dataGraficaItaee, setDataGraficaItaee] = useState<number[]>(
    itaeeRawData[inicioDeDatosItaee].slice(
      largoDatosMonthlyItaee - 4,
      largoDatosMonthlyItaee
    )
  );

  useEffect(() => {
    setDataGraficaItaee(
      itaeeRawData[inicioDeDatosItaee + indicadorGraficaItaee].slice(
        largoDatosMonthlyItaee - 4,
        largoDatosMonthlyItaee
      )
    );
  }, [indicadorGraficaItaee]);

  return (
    <>
      <div className="grid grid-cols-2 p-5 gap-7">
        <div className="col-span-2 text-2xl font-semibold ">
          Indicador Mensual de la Actividad Industrial por Entidad Federativa
          (IMAIEF)
          <div className="text-lg font-normal">Coahuila de Zaragoza</div>
          <div className="text-lg font-normal">
            Base 2018. Serie de enero 2003 a enero 2025
          </div>
        </div>
        {/* Grafica IMAIEF ANUAL */}
        <div className="col-span-2">
          <SelectComponent
            indicadorGrafica={indicadorGraficaImaief}
            setIndicadorGrafica={setIndicadorGraficaImaief}
            indicadores={indicadoresImaief}
          />
        </div>
        <div>
          <div className="pb-4">Serie anual</div>

          <LineChartComponent
            xData={xDataAnualImaief}
            dataGrafica={dataGraficaImaiefAnual}
            color="#2196f3"
          />
        </div>

        {/* Grafica IMAIEF Mensual */}

        <div>
          <div className="pb-4">Serie mensual</div>

          <LineChartComponent
            xData={xDataMonthlyImaief}
            dataGrafica={dataGraficaImaiefMensual}
            color="#f28e2c"
          />
        </div>

        {/* Grafica ITAEE Mensual */}
        <div className="col-span-2 text-2xl font-semibold ">
          Indicador Trimestral de la Actividad Industrial por Economica Estatal
          (ITAEE)
          <div className="text-lg">Coahuila de Zaragoza</div>
          <div className="text-lg">Serie detallada. Base 2018</div>
        </div>
        <div>
          <SelectComponent
            indicadorGrafica={indicadorGraficaItaee}
            setIndicadorGrafica={setIndicadorGraficaItaee}
            indicadores={indicadoresItaee}
          />

          <LineChartComponent
            xData={xDataItaee}
            dataGrafica={dataGraficaItaee}
            color="#f44336"
          />
        </div>
      </div>
    </>
  );
}
