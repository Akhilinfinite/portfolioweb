import React, { Component } from "react";
import profile from "./Images/About.jpg";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="AboutMe">
        <div className="AboutHeader">About Us</div>
        <div className="AboutBody">
          <div className="AboutImage">
            <div className="AboutProfile">
              <img
                src={profile}
                alt="profile"
                style={{ width: "400px", height: "582px" }}
              />
            </div>
            <div className="AboutShadow1"></div>
            <div className="AboutShadow2"></div>
          </div>
          <div className="AboutMySelf">
            <div className="AboutMyHeader" style={{fontSize:"28px" , fontWeight:"700"}}>Curious about me? Here you have it</div>
            <div className="AboutMyBody">
              <p className="AboutP">
                I am a software developer with a year of work experience and a
                strong passion for coding. I hold a B-Tech degree from GITAM
                Deemed to be University, where I have honed my technical skills
                in C, Java, JavaScript, HTML, CSS, and ReactJS.
              </p>
              <p className="AboutP">
                Additionally, I possess basic knowledge of Spring Boot and
                NodeJS, and I have experience working with DB tools like MySQL
                Workbench and MongoDB. I am proficient in Windows operating
                systems and skilled in using MS Office, particularly Excel and
                Spreadsheets.
              </p>
              <p className="AboutP">
                Apart from my technical expertise, I actively participate in
                co-curricular activities, including inter-house sports
                competitions and chess tournaments. I have also had the
                opportunity to conduct chess tournaments on behalf of Rotaract,
                showcasing my leadership skills. Outside of work, my hobbies
                include playing chess and listening to music.
              </p>
              <p className="AboutP">
                In terms of projects, I have worked on various web development
                projects. Notably, Deccan Pavilion, a restaurant food ordering
                website, and Friend Book, a social media web application, were
                part of my internship. I also undertook a ReactJS Practice
                project to further improve my frontend skills. Currently, I am
                actively working on a restaurant website, which involves
                converting a college project into a fully functioning frontend
                project.
              </p>
            </div>
            <div className="AboutFotter">
              <div className="AboutFotter1">
                <div className="AboutFHeader">
                  Finaly Some Quick bits about me{" "}
                </div>
                <div className="AbouterFBody1">
                  <div className="FPoint1">
                    <div className="AboutDot"></div>
                    <div className="AboutStatus">
                      B-Tech Computer Science
                    </div>
                  </div>
                  <div className="FPoint2">
                    <div className="AboutDot"></div>
                    <div className="AboutStatus">
                      Avoid learning
                    </div>
                  </div>
                </div>
                <div className="AbouterFBody2">
                  <div className="FPoint1">
                    <div className="AboutDot"></div>
                    <div className="AboutStatus">
                      Want to work as a freelance
                    </div>
                  </div>
                  <div className="FPoint2">
                    <div className="AboutDot"></div>
                    <div className="AboutStatus">
                      Aspiring web developer
                    </div>
                  </div>
                </div>
              </div>
              <div className="AboutFotter2">
                I'm all geared up for freelance work, ready to sprinkle some
                coding magic! Feel free to reach out, and let's create something
                amazing together! 🚀😄
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
