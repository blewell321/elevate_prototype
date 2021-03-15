import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class PerformanceScoreBarChart2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            options: {
                chart:{
                    foreColor: "#fff",
                    toolbar: {
                        show: false
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
                    align: 'left',
                    margin: 20, 
                    offsetY: 20,
                    style:{
                        fontSize: '20px'
                    }
                },
                
            }, 
            series: 
            [
                {
                    name: "Score",
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
                type="bar"
                height="350"
                width="50%"
            />
         );
    }
}
 
export default PerformanceScoreBarChart2;