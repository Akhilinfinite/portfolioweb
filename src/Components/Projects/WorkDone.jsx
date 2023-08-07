import React, { Component } from "react";
import "./WorkDone.css";

export default class WorkDone extends Component {
  render() {
    return (
      <div className="WorkDoneComponent">
        <div className="WorkDoneComponent1">
          <div className="WorkDoneHeader">Work</div>
          <div className="WorkDoneSubHeader">
            Some of the noteworth project I have done
          </div>
        </div>
        <div className="projects">
          <div className="Project1">
            <div className="video">
              <video width="400" height="225" autoPlay muted controls >
                <source src="/ProjectFolder/Demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="content">
              <div className="ProjectTitle">Deccan Pavillion</div>
              <div className="ProjectDescrption">
                It is an food ordering website. It is for a single restaurent.
                where you can login to the site with excisting cradentials. And
                see the Items have in the restaurent and add them to the cart.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
