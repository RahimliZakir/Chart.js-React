import { Pie } from "react-chartjs-2";

const PieChart = ({ pieChartData }) => {
  return (
    <div>
      <Pie data={pieChartData} />
    </div>
  );
};

export default PieChart;
