import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Context } from "chartjs-plugin-datalabels";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options: any = {
  plugins: {
    legend: { display: false },
    datalabels: {
      rotation: (ctx: Context) => {
        return ctx.dataIndex % 2 ? 180 : 0;
      },
      display: false,
    },
  },
  
  scales: {
    y: {
      color: "rgba(136, 136, 136, 1)",
      stepSize: 40,
      min: 140,
      max: 260,
      ticks: {
        font: {
          size: 14,
        },
        align: "end",
        callback: function (value: any) {
          if (value === 140 || value === 180 || value === 220 || value >= 260)
            return value + "tr               ";
        },
      },
      grid: {
        drawBorder: false,
        color: "#ece9f1",
      },
    },
    x: {
      ticks: {
        color: "rgba(136, 136, 136, 1)",
        font: {
          size: 14,
        },
        align: "start",
      },
      grid: {
        drawBorder: false,
        display: false,
        color: "#ece9f1",
      },
    },
  },
};


const data = {

  type: "line",
  labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
  datasets: [
    {
      data: [143, 175, 180, 230, 215, 210, 182],
      backgroundColor: "rgba(250, 160, 95, 0.26),rgba(255, 255, 255, 0)",
      tension: 0.8,
      pointRadius: 0.5,
      borderColor: "#fe9d44",
      lineTension: 0.3,
      fill: true,
    },
  ],
};

export default function LineChart() {

  return (
    <div>
      <Line id="canvas" data={data} options={options} height={50} />
    </div>
  );
}