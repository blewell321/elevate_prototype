import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import {Button} from 'react-bootstrap'
import { BiRotateRight } from 'react-icons/bi';

class PerformanceScoreBarChart extends Component {
    constructor(props) {
        super(props);

        const scores = [this.props.scores]
        const performanceAreas = [this.props.performanceAreas]

        console.log(scores)
        console.log(performanceAreas)

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
                    name: "Score",
                    // data: [95, 89, 87, 81, 75, 62]
                    data: [{}
            
                }
            ],
            
        }

    }

    onClick = () => {
         this.setState({
             options: {
                 ...this.state.options,
                 plotOptions: {...this.state.options.plotOptions,
                    bar: {...this.state.options.plotOptions.bar,
                        horizontal: !this.state.options.plotOptions.bar.horizontal
                    }
                }
             }
         })      
    }

    render() { 
        return ( 


            <React.Fragment>
                console.log(this.props.data)
            <Chart 
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height="350"
                width="100%"
            />
            <Button onClick={this.onClick}><BiRotateRight /></Button>
            </React.Fragment>
         );
    }
}
 
export default PerformanceScoreBarChart;