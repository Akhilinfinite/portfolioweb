import React, { Component } from "react";
import "./ExperienceCard.css";

export default class ExperienceCard extends Component {
  render() {
    return (
      <div className="ExperienceCardComponent">
        <div className="ExperienceCardCompany">{this.props.CompanyLogo}</div>
        <div className="ExperienceCardDiscription">
          <div className="ExperienceCardDiscriptionTitle" style={{fontWeight:"600"}}>
            {this.props.Designation}
          </div>
          <ul>
            {this.props.RoleAndResponsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="ExperienceCardTime">{this.props.TimePeriod}</div>
      </div>
    );
  }
}
