import React, { Component } from "react";
import Profile from "./Profile";
import Particles from "./Particles";
import Copyright from "../common/Copyright";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winWidth: window.innerWidth
    };

    window.addEventListener("resize", this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      winWidth: window.innerWidth
    });
  };

  render() {
    let particleItem = null;
    if (this.state.winWidth > 420) {
      particleItem = <Particles />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="fadeIn">
            <Profile />
            <Copyright />
          </div>
        </div>
        {particleItem}
      </React.Fragment>
    );
  }
}
