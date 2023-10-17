import { Bar } from "react-chartjs-2";

const BarChart = ({ barChartData }) => {
  return (
    <div>
      <Bar data={barChartData} />
    </div>
  );
};

export default BarChart;
