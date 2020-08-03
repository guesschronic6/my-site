import React, { Component } from "react";

class IndexMain extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={process.env.PUBLIC_URL + "/my-logo.svg"} className="logo" />
        <ul>
          <li>
            <a href="#">CV</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Achievements</a>
          </li>
          <li>
            <a href="#">Me</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default IndexMain;
