import { LineChartComponent } from "~/components/LineChartComponent";
import { colors } from "~/utils/constants";

type ConfianzaConsumidorType = {
  months: string[];
  consumidorData: number[];
  diferenciaAnualData: number[];
};

export function ConfianzaConsumidor(props: ConfianzaConsumidorType) {
  let { months, consumidorData, diferenciaAnualData } = props;
  months = months.slice(-12);
  consumidorData = consumidorData.slice(-12);
  diferenciaAnualData = diferenciaAnualData.slice(-12);

  return (
    <>
      <div className="grid grid-cols-2 p-5 gap-7">
        <div className="col-span-2 text-2xl font-semibold ">
          Indicador de Confianza del Consdumidor
          <div className="text-lg font-normal">
            Cifras originales (sin desestacionalizar)
          </div>
        </div>

        <div>
          <div className="pb-4">Serie mensual </div>

          <LineChartComponent
            xData={months}
            dataGrafica={consumidorData}
            color={colors[0]}
          />
        </div>
        <div>
          <div className="pb-4">Diferencia mensual</div>

          <LineChartComponent
            xData={months}
            dataGrafica={diferenciaAnualData}
            color={colors[1]}
          />
        </div>
      </div>
    </>
  );
}
