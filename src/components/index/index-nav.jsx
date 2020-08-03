import React, { Component } from "react";
import { getDateFormatted } from "../../utils/date-util";

class IndexMain extends Component {
  state = {};
  render() {
    return (
      <div className="index-main-container">
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
        <section className="main-sub-container">
          <h3 id="nav-time">{getDateFormatted()}</h3>
        </section>
      </div>
    );
  }

  getCurrentDate() {
    const today = new Date();
    return today.getMonth();
  }
}

export default IndexMain;
