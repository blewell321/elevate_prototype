import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Spark1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            options: {
                chart: {
                    id: 'spark1',
                    group: 'sparks',
                    type: 'line',
                    height: 80,
                    sparkline: {
                      enabled: true
                    },
                    dropShadow: {
                      enabled: true,
                      top: 1,
                      left: 1,
                      blur: 2,
                      opacity: 0.2,
                    }
                  },
                  series: [{
                    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
                  }],
                  stroke: {
                    curve: 'smooth'
                  },
                  markers: {
                    size: 0
                  },
                  grid: {
                    padding: {
                      top: 20,
                      bottom: 10,
                      left: 110
                    }
                  },
                  colors: ['#fff'],
                  tooltip: {
                    x: {
                      show: false
                    },
                    y: {
                      title: {
                        formatter: function formatter(val) {
                          return '';
                        }
                      }
                    }
                  },
                colors: ["#FCCF31", "#17ead9", "#f02fc2"],
                stroke: {
                    width: 3
                },
                grid: {
                    borderColor: "#40475D"
                },
                xaxis:
                {
                    categories: [
                        'Energy', 
                        'Sleep',
                        'Immunity', 
                        'Fitness',
                        'Cognition',
                        'Mood'
                    ],
                    axisTicks: {
                        color: "#333"
                      },
                      axisBorder: {
                        color: "#333"
                      }
                }, 
                plotOptions:{
                    bar:{
                        horizontal: true
                    }
                },
                fill:{
                    type: "gradient",
                    gradient: {
                    gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
                    }
                },
                tooltip: {
                    theme: "dark"
                  },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'Performance Scores',
                    align: 'center',
                    margin: 20, 
                    offsetY: 20,
                    style:{
                        fontSize: '25px'
                    }
                },
                
            }, 
            series: 
            [
                {
                    name: "Chart 1",
                    data: [95, 89, 87, 81, 75, 62]
            
                }
            ],
            
        }

    }


    render() { 
        return ( 
            <Chart 
                options={this.state.options}
                series={this.state.series}
                type="line"
                height="450"
                width="100%"
            />
         );
    }
}
 
export default Spark1;