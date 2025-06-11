import { LineChartComponent } from "~/components/LineChartComponent";
import { colors } from "~/utils/constants";

type ConfianzaConsumidorType = {
  months: string[];
  consumidorData: number[];
};

export function ConfianzaConsumidor(props: ConfianzaConsumidorType) {
  let { months, consumidorData } = props;
  months = months.slice(-12);
  consumidorData = consumidorData.slice(-12);

  return (
    <>
      <div className="grid grid-cols-2 p-5 gap-7">
        <div className="col-span-2 text-2xl font-semibold ">
          Indicador de Confianza del Consdumidor
          <div className="text-lg font-normal">
            Series mensual de abril de 2001 a abril 2025
          </div>
        </div>
        <div>
          <LineChartComponent
            xData={months}
            dataGrafica={consumidorData}
            color={colors[0]}
          />
        </div>
      </div>
    </>
  );
}
