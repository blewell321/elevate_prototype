import React, { Component } from "react";
import Chart from "react-apexcharts";

class WellnessScoreRadial extends Component {
  constructor(props) {
    super(props);

    // const wellnessScore = this.props.wellnessScore.text

    this.state = {
      series: [81],
      options: {
        chart: {
          width: 380,
          type: "radialBar",
          borderRadius: 10,
          dropShadow: {
            enabled: true,
            top: 3,
            left: 2,
            blur: 4,
            opacity: 0.3,
          },
        },
        stroke: {
          lineCap: "round",
        },
        fill: {
          //colors: ['#F44336', '#fff']
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            // gradientToColors: ['#ABE5A1'],#27fa02

            gradientToColors: ["#27fa02"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "back",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
          },
        },
        labels: ["Score"],
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
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "26px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
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
            type="radialBar"
            width={380}
          />
        </div>
      </div>
    );
  }
}

export default WellnessScoreRadial;
