import { BarChart, LineChart } from "@mui/x-charts";

type LineChartComponent = {
  xData: string[];
  dataGrafica: number[];
  color: string;
};

export const BarChartComponent = (props: LineChartComponent) => {
  const { xData, dataGrafica, color } = props;
  return (
    <div>
      <BarChart
        xAxis={[{ data: xData }]}
        series={[{ data: dataGrafica, color: color }]}
        height={500}
      />
    </div>
  );
};
