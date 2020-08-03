import React, { Component } from "react";
import IndexNav from "./index-nav";

class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-background"></div>
        <IndexNav />
      </React.Fragment>
    );
  }
}

export default IndexPage;
