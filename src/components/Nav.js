import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/insights" class="nav-link" href="#">
                  Insights
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/actions" class="nav-link" href="#">
                  Actions
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/account" class="nav-link" href="#">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
