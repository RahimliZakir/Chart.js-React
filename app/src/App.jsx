import BarChartData from "./data.json";

import BarChart from "./components/BarChart";

import Chart from "chart.js/auto";

const App = () => {
  const barChartConfig = {
    labels: BarChartData.map((item) => item.year),
    datasets: [
      {
        label: "Users Gained by Years",
        data: BarChartData.map((item) => item.userGain),
        backgroundColor: ["blue", "yellow"],
      },
    ],
  };

  return (
    <div className="App">
      <div className="bar-chart-box" style={{ width: "35%" }}>
        <BarChart barChartData={barChartConfig} />
      </div>
    </div>
  );
};

export default App;
