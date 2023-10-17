import { Line } from "react-chartjs-2";

const LineChart = ({ lineChartData }) => {
  return (
    <div>
      <Line data={lineChartData} />
    </div>
  );
};

export default LineChart;
