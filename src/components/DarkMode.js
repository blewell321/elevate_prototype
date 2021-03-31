import React, { Component } from "react";
import { Button } from "react-bootstrap";

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isDarkMode: false,
    };

    this.DarkModeToggle = this.DarkModeToggle.bind(this);
  }

  DarkModeToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.mutateState(this.props.value ? false : true);
  }

  render() {
    return (
      <div>
        <Button onClick={this.DarkModeToggle}>
          {/* <Button> */}
          {this.props.value ? "Dark" : "Light"}
        </Button>
      </div>
    );
  }
}

export default DarkModeToggle;
