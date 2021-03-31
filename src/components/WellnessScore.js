import React, { Component } from "react";
import Chart from "react-apexcharts";

class WellnessScore extends Component {
  constructor(props) {
    super(props);

    // const wellnessScore = this.props.wellnessScore.text

    this.state = {
      series: [82, 18],
      options: {
        chart: {
          width: 380,
          type: "donut",
          borderRadius: 10,
          dropShadow: {
            enabled: true,
            top: 3,
            left: 2,
            blur: 4,
            opacity: 0.3,
          },
        },

        plotOptions: {
          pie: {
            borderRadius: 15,
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true,
                  fontSize: "54px",
                  label: "81%",
                },
                value: {
                  showAlways: false,
                  show: false,
                  fontSize: "24px",
                },
              },
            },
          },
        },
        title: {
          text: "Wellness score",
          align: "left",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
            color: "#000",
          },
        },
        dataLabels: {
          enabled: false,
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          show: false,
          // position: 'right',
          // offsetY: 0,
          // height: 230,
        },
        fill: {
          colors: ["#F44336", "#fff"],
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width={380}
          />
        </div>
      </div>
    );
  }
}

export default WellnessScore;
