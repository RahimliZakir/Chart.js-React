import { useState } from "react";

import BarChartData from "./data.json";

import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

import Chart from "chart.js/auto";

const App = () => {
  const [chartConfig, setChartConfig] = useState({
    labels: BarChartData.map((item) => item.year),
    datasets: [
      {
        label: "Users Gained by Years",
        data: BarChartData.map((item) => item.userGain),
        // backgroundColor: ["blue", "yellow"],
      },
    ],
  });

  return (
    <div className="App">
      <div className="d-flex justify-content-between">
        <div className="bar-chart-box" style={{ width: "30%" }}>
          <BarChart barChartData={chartConfig} />
        </div>
        <div className="bar-chart-box" style={{ width: "30%" }}>
          <LineChart lineChartData={chartConfig} />
        </div>
        <div className="bar-chart-box" style={{ width: "30%" }}>
          <PieChart pieChartData={chartConfig} />
        </div>
      </div>
    </div>
  );
};

export default App;
