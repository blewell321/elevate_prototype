import React, { Component } from "react";

import PerformanceScoreBarChart from "../Components/performancechart";
import Card from "../Components/card";
import WellnessScoreRadial from "../Components/WellnessScoreRadial";
import PerformanceTrend from "../Components/PerformanceTrend";
import PerformanceAreaTrend from "../Components/PerformanceAreaTrend";
import { FacebookShareButton, FacebookIcon } from "react-share";

// home page
class Home extends Component {
  state = {};
  render() {
    console.log(this.props.profile);
    return (
      <div class="main">
        <div class="row sparkboxes mt-4">
          <div class="col-md-3">
            <div class="box box1">
              <Card title="Profile" name={this.props.profile} cardNumber="1" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="box box2">
              <Card
                title="Date of Birth"
                name={this.state.dob}
                cardNumber="2"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="box box3">
              <Card title="Gender" name={this.state.gender} cardNumber="3" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="box box4">
              <Card title="Phone" name={this.state.phone} cardNumber="4" />

              <FacebookShareButton
                url="elevateme.ai"
                quote={this.state.wellnessScore}
                hashtag="#programing joke"
              >
                <FacebookIcon logoFillColor="white" />
              </FacebookShareButton>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <div class="box shadow mt-4">
              <div id="radialBarBottom"></div>
              <div id="html">
                <div>
                  <WellnessScoreRadial wellnessScore={this.wellnessScore} />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box shadow mt-4">
              <div id="line-adwords" class=""></div>
              <PerformanceScoreBarChart />
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12">
            <div class="box shadow mt-4">
              <div id="barchart"></div>
              {/* <RadialBar2 wellnessScore={wellnessScore} /> */}
              <PerformanceTrend />
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12">
            <div class="box shadow mt-4">
              <div id="barchart"></div>
              <PerformanceAreaTrend />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
