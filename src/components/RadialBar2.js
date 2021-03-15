import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

class RadialBar2 extends React.Component {
  
  constructor(props) {
    super(props);

    const wellnessScore = this.props.wellnessScore

    this.state = {
  
      series: [wellnessScore],
      options: {
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          },
        },
        labels: ['Average Results'],
      },
    
    
    };
  }



  render() {

    return (
        <ReactApexChart 
          options={this.state.options} 
          series={this.state.series} 
          type="radialBar" 
        />
        );
      }
    }

export default RadialBar2;