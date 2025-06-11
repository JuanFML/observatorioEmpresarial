import { LineChartComponent } from "~/components/LineChartComponent";
import { colors } from "~/utils/constants";

type ConfianzaEmpresarialType = {
  months: string[];
  globalData: number[];
  manufacturaData: number[];
  construccionData: number[];
  comercioData: number[];
  servicioData: number[];
};

export function ConfianzaEmpresarial(props: ConfianzaEmpresarialType) {
  let {
    months,
    globalData,
    manufacturaData,
    construccionData,
    comercioData,
    servicioData,
  } = props;
  months = months.slice(-12);
  globalData = globalData.slice(-12);
  manufacturaData = manufacturaData.slice(-12);
  construccionData = construccionData.slice(-12);
  comercioData = comercioData.slice(-12);
  servicioData = servicioData.slice(-12);

  return (
    <>
      <div className="grid grid-cols-2 p-5 gap-7">
        <div className="col-span-2 text-2xl font-semibold ">
          Confianza Empresarial
        </div>
        <div>
          <div className="pb-4">
            Indicador global de opinión empresarial de confianza
          </div>

          <LineChartComponent
            xData={months}
            dataGrafica={globalData}
            color={colors[0]}
          />
        </div>
        <div>
          <div className="pb-4">Sector manufacturero</div>

          <LineChartComponent
            xData={months}
            dataGrafica={manufacturaData}
            color={colors[1]}
          />
        </div>
        <div>
          <div className="pb-4">Sector construcción</div>

          <LineChartComponent
            xData={months}
            dataGrafica={construccionData}
            color={colors[2]}
          />
        </div>
        <div>
          <div className="pb-4">Sector comercio</div>

          <LineChartComponent
            xData={months}
            dataGrafica={comercioData}
            color={colors[3]}
          />
        </div>
        <div>
          <div className="pb-4">Sector social</div>

          <LineChartComponent
            xData={months}
            dataGrafica={servicioData}
            color={colors[4]}
          />
        </div>
      </div>
    </>
  );
}
