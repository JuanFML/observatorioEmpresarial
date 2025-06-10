import { BarChartComponent } from "~/components/BarChartComponent";
import { colors } from "~/utils/constants";

type SeguridadDerechoType = {
  ciudades: string[];
  indicadoresData: number[][];
  titulo: string;
};

export function GraficasBarraICU(props: SeguridadDerechoType) {
  const { ciudades, titulo, indicadoresData } = props;
  let data: number[][] = [];
  for (let i = 0; i < indicadoresData[0].length; i++) {
    const flatData = indicadoresData.map((indicador) => indicador[i]).flat();
    data = [...data, flatData];
  }

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 p-5 gap-7">
        <div className="xl:col-span-3 text-2xl font-semibold ">
          Indicadores en temas {titulo}
        </div>
        {data.map((indicador, index) => (
          <div key={index}>
            <div className="pb-4">{indicador[0]}</div>
            <BarChartComponent
              xData={ciudades}
              dataGrafica={indicador.slice(1)}
              color={colors[index]}
            />
          </div>
        ))}
      </div>
    </>
  );
}
