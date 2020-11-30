import React from "react";
import { Line } from "react-chartjs-2";

export default function Chart() {
  const rainfallData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "aquamarine",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  };
  return (
    <>
      <Line
        data={rainfallData}
        width={100}
        height={40}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }}
      />
    </>
  );
}
