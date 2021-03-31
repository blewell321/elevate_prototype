import React, { Component } from "react";
import Chart from "react-apexcharts";

class PerformanceAreaTrend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "area",
          height: "200px",
          zoom: {
            enabled: false,
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 2,
            blur: 4,
            opacity: 0.3,
          },
        },
        stroke: {
          curve: "smooth",
          width: 1,
          //width: [2,4,6],
          dashArray: 0,
          //dashArray: [0,8,5]
          shadeIntensity: 0.1,
        },
        title: {
          text: "Performance Trend",
          align: "left",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
            color: "#000",
          },
        },
        labels: [
          "1st Jan 2020",
          "1st Mar 2020",
          "1st June 2020",
          "1st Sept 2020",
          "1st Dec 2020",
          "1st Mar 2021",
        ],
        xaxis: {
          tooltip: {
            enabled: false,
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetY: -20,
        },
        markers: {
          size: 6,
          strokeWidth: 0,
          hover: {
            size: 9,
          },
        },
        grid: {
          show: true,
          padding: {
            bottom: 0,
          },
        },
        tooltip: {
          theme: "dark",
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },

      series: [
        {
          name: "Wellness Score",
          data: [67, 71, 67, 79, 81, 89],
        },
        {
          name: "Energy",
          data: [54, 71, 64, 67, 72, 83],
        },
        {
          name: "Mood",
          data: [81, 86, 82, 93, 96, 84],
        },
        {
          name: "Sleep",
          data: [73, 89, 91, 85, 82, 93],
        },
        {
          name: "Fitness",
          data: [62, 69, 78, 81, 69, 73],
        },
        {
          name: "Cognition",
          data: [46, 57, 63, 78, 71, 83],
        },
        {
          name: "Immunity",
          data: [51, 79, 93, 96, 89, 88],
        },
        {
          name: "Metabolism",
          data: [50, 68, 73, 81, 83, 64],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="400"
          width="100%"
        />
      </div>
    );
  }
}

export default PerformanceAreaTrend;
