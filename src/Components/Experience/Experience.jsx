import React, { Component } from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

export default class Experience extends Component {
  render() {
    return (
      <div className="ExperieceContainer">
        <div className="ExperinceHeader">Experience</div>
        <div className="ExperinceSubHeader">
          Here is the quick summary of my most recent experience
        </div>
        <div className="ExperienceCards">
          <ExperienceCard
            Company="Infinite Computer Solutions"
            CompanyLogo={
              <img
                src={require(`./Images/Infinite.jpg`)}
                alt="Infinite Computer Solutions"
                style={{
                  width: "250px",
                  borderRadius: "10%",
                  margin: "10px 20px",
                }}
              />
            }
            Designation="Associate Software Engineer"
            RoleAndResponsibilities={[
              "worked as an FrontEnd Developer",
              "Part of Turbify UI team",
              "Contributed for the NavBar changes",
              "worked for the ImageText component",
              "worked with the new degins",
            ]}
            TimePeriod="Augest 23 2023 to Present"
          />
        </div>
      </div>
    );
  }
}
