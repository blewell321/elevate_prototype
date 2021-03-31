import "./Styles/App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DarkModeToggle from "./Components/DarkMode";

// import Login from "./Pages/Login";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Insights from "./Pages/Insights";
import Actions from "./Pages/Actions";
import Account from "./Pages/Account";

// https://dev.to/jessicatriana/keyboard-shortcuts-react-in-vs-code-3egp

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "Ben Lewell",
      dob: "03/02/1991",
      gender: "Male",
      phone: "07951750651",

      wellnessScore: "78%",
      isDarkMode: false,

      name: "Score",
      data: [
        {
          PerformanceArea: "Energy",
          score: 95,
        },
        {
          PerformanceArea: "Sleep",
          score: 89,
        },
        {
          PerformanceArea: "Immunity",
          score: 87,
        },
        {
          PerformanceArea: "Fitness",
          score: 81,
        },
        {
          PerformanceArea: "Cognition",
          score: 75,
        },
        {
          PerformanceArea: "Mood",
          score: 62,
        },
      ],
    };

    this.mutateisDarkMode = this.mutateisDarkMode.bind(this);
  }

  mutateisDarkMode(value) {
    this.setState({
      isDarkMode: value,
    });
    console.log(this.state.isDarkMode);
  }

  render() {
    console.log(this.state.isDarkMode);

    return (
      <Router>
        <div className={this.state.isDarkMode ? "." : "dark"}>
          <div id="wrapper">
            <div className="content-area">
              {/* <div className={`item${props.item.purchased ? ' purchased' : ''}`} > */}
              {/* <div className={isDarkMode ? 'content-area' : 'dark'}> */}
              <DarkModeToggle
                value={this.state.isDarkMode}
                mutateState={this.mutateisDarkMode}
              />
              <Nav />

              <Switch>
                <Route
                  exact
                  path="/"
                  component={Home}
                  name={this.state.profile}
                />
                {/* <Route exact path="/login" component={Login} /> */}
                <Route path="/insights" component={Insights} />
                <Route path="/actions" component={Actions} />
                <Route path="/account" component={Account} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
