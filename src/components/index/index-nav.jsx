import React, { Component } from "react";

class IndexMain extends Component {
  state = {};
  render() {
    return (
      <section className="index-nav-container">
        <img src={process.env.PUBLIC_URL + "/my-logo.svg"} className="logo" />
        <a href="#" id="cv-link">
          CV
        </a>
        <a href="#" id="projects-link">
          Projects
        </a>
        <a href="#" id="achievements-link">
          Achievements
        </a>
        <a href="#" id="me-link">
          Me
        </a>
      </section>
    );
  }
}

export default IndexMain;
