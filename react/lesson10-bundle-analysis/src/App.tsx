import React from "react";
import sum from "lodash/sum";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const App: React.FC = () => {
  const numbers = [10, 20, 30, 40];

const total = sum(numbers);

  const today = moment().format("MMMM Do YYYY");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 8, 15],
        backgroundColor: "rgba(75,192,192,0.5)",
      },
    ],
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>ShopEase Bundle Analysis</h1>

      <h2>Total Sales: {total}</h2>

      <p>Today's Date: {today}</p>

      <div style={{ width: "500px" }}>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default App;