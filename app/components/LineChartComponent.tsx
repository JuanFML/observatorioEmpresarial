import { ChartsReferenceLine, LineChart } from "@mui/x-charts";

type LineChartComponent = {
  xData: string[];
  dataGrafica: number[];
  color: string;
};

export const LineChartComponent = (props: LineChartComponent) => {
  const { xData, dataGrafica, color } = props;
  return (
    <div>
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
            data: dataGrafica,
            color: color,
          },
        ]}
        height={500}
      >
        <ChartsReferenceLine y={0} />
      </LineChart>
    </div>
  );
};
