import './App.css';
import PerformanceScoreBarChart from './components/performancechart'
import PerformanceScoreBarChart2 from './components/performanceChart2'
import {Button,  Alet,  Container,  Col, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spark1 from './components/spark1'
import RadialBar from './components/radialBar'
import RadialBar2 from './components/RadialBar2'
import Card from './components/card'

function App() {
  
  const profile = "Ben Lewell"
  const dob = "03/02/1991"
  const gender = "Male"
  const phone = "07951750651"

  const wellnessScore = [78]

  const name = "Score"
  const data = [
    { 
      PerformanceArea: 'Energy',
      score: 95
    },
    { 
      PerformanceArea: 'Sleep',
      score: 89
    },
    { 
      PerformanceArea: 'Immunity',
      score: 87
    },
    { 
      PerformanceArea: 'Fitness',
      score: 81
    },
    { 
      PerformanceArea: 'Cognition',
      score: 75
    },
    { 
      PerformanceArea: 'Mood',
      score: 62
    },
]

  return (
    <div className="App">
      <div id="wrapper">
      <div class="content-area">
          <div class="main">
            <div class="row sparkboxes mt-4">
              <div class="col-md-3">
              <div class="box box1">

                <Card title="Profile" name={profile} cardNumber='1' />

                </div>
              </div>
              <div class="col-md-3">
                <div class="box box2">
                  
                  <Card title="Date of Birth" name={dob} cardNumber='2'/>
             
                </div>
              </div>
              <div class="col-md-3">
                <div class="box box3">
                
                <Card title="Gender" name={gender} cardNumber='3'/>
               
                </div>
              </div>
              <div class="col-md-3">
                <div class="box box4">
               
                  <Card title="Phone" name={phone} cardNumber='4'/>
                 
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-5">
                <div class="box shadow mt-4">
                  <div id="radialBarBottom"></div>
                  <RadialBar2 wellnessScore={wellnessScore}/>
                </div>
              </div>
              <div class="col-md-7">
                <div class="box shadow mt-4">
                  <div id="line-adwords" class=""></div>
                  <PerformanceScoreBarChart scores={data.map.score} performanceAreas={data.map.performanceArea} name={name}/>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-5">
                <div class="box shadow mt-4">
                  <div id="barchart"></div>
                  <RadialBar2 wellnessScore={wellnessScore} />
                </div>
              </div>
              <div class="col-md-7">
                <div class="box shadow mt-4">
                  <div id="areachart"></div>
                  <Spark1 />
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    
  );
}

export default App;
