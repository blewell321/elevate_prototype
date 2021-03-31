import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Button } from "react-bootstrap";
import { BiRotateRight } from "react-icons/bi";

class PerformanceScoreBarChart extends Component {
  constructor(props) {
    super(props);

    const scores = [this.props.scores];
    const performanceAreas = [this.props.performanceAreas];

    console.log(scores);
    console.log(performanceAreas);

    this.state = {
      options: {
        chart: {
          foreColor: "#000",
          toolbar: {
            show: false,
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 2,
            blur: 4,
            opacity: 0.15,
          },
        },
        // colors: ["#FCCF31", "#17ead9", "#f02fc2"],
        stroke: {
          //curve: 'smooth',
          //width: 2
        },
        theme: {
          palette: "palette7",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        },
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
        grid: {
          borderColor: "#40475D",
        },
        xaxis: {
          categories: [
            "Energy",
            "Sleep",
            "Immunity",
            "Fitness",
            "Cognition",
            "Mood",
          ],
          axisTicks: {
            color: "#333",
          },
          axisBorder: {
            color: "#333",
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            // distributed: true,
            borderRadius: 10,
            dataLabels: {
              position: "top",
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ["#F55555", "#6078ea", "#6094ea"],
          },
        },
        tooltip: {
          theme: "dark",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Performance Scores",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
            color: "#000",
          },
        },
      },
      series: [
        {
          name: "Score",
          // data: [95, 89, 87, 81, 75, 62]
          data: [60, 70, 80, 90, 100, 100],
        },
      ],
    };
  }

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal,
          },
        },
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="350"
          width="100%"
        />
        <Button onClick={this.onClick}>
          <BiRotateRight />
        </Button>
      </React.Fragment>
    );
  }
}

export default PerformanceScoreBarChart;
