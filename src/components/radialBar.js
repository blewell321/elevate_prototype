import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class RadialBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            options:{  
              chart: {
                type: 'radialBar',
                height: 350,
                width: 380,
              },
              plotOptions: {
                radialBar: {
                  size: undefined,
                  inverseOrder: true,
                  hollow: {
                    margin: 5,
                    size: '48%',
                    background: 'transparent',
            
                  },
                  track: {
                    show: false,
                  },
                  startAngle: -180,
                  endAngle: 180
            
                },
              },
              stroke: {
                lineCap: 'round'
              },
              series: [71, 63, 77],
              labels: ['June', 'May', 'April'],
              legend: {
                show: true,
                floating: true,
                position: 'right',
                offsetX: 70,
                offsetY: 240
              },
            
            }
        }

    }


    render() { 
        return ( 
            <Chart 
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height="350"
                width="380"
            />
         );
    }
}
 
export default RadialBar;