import React, { Component } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard.jsx";

export default class Skills extends Component {
  render() {
    const skillsList = [
      {
        name: "HTML",
        image: "HTML-5.png",
      },
      {
        name: "CSS",
        image: "CSS.png",
      },
      {
        name: "JavaScript",
        image: "JavaScript.png",
      },
      {
        name: "React",
        image: "ReactJS.png",
      },
      {
        name: "Express JS",
        image: "ExpressJS.png",
      },
      {
        name: "Node JS",
        image: "NodeJS.png",
      },
      {
        name: "MongoDB",
        image: "MongoDB.png",
      },
      {
        name: "Java",
        image: "Java.png",
      }
    ];

    const chunkSize = 4;
    const skillsChunks = [];
    for (let i = 0; i < skillsList.length; i += chunkSize) {
      skillsChunks.push(skillsList.slice(i, i + chunkSize));
    }
return (
      <div className="SkillsContainer">
        <div className="SkillHeader">Skills</div>
        <div className="SkillsSubHeader">
          The Skills, Tolls and Technologies I am really good At
        </div>
        <div className="SkillBody">
          <div className="skills-container">
            {skillsChunks.map((chunk, index) => (
              <div className="row" key={index}>
                {chunk.map((skill, i) => (
                  <SkillCard
                    key={i}
                    name={skill.name}
                    Image={
                      <img
                        src={require(`./Images/${skill.image}`)}
                        alt={skill.name}
                        style={{
                          width: "60px",
                          borderRadius: "10%",
                          margin: "10px 20px",
                        }}
                      />
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
