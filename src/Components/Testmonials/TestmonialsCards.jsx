import React, { Component } from "react";
import "./TestmonialsCards.css";

export default class TestmonialsCards extends Component {
  render() {
    return (
      <div className="TestmonialsCardComponent">
        <div className="TestmonialsCardCompany">
          <div className="profilepic">{this.props.UserProfile}</div>
          <div className="Name">{this.props.UserName}</div>
          <div className="Degination">{this.props.Degination}</div>
        </div>
        <div className="TestmonialsCardDiscription">
          <div className="TestmonialsCardsDiscriptionBody">
            "{this.props.Tweet}"
          </div>
        </div>
      </div>
    );
  }
}
