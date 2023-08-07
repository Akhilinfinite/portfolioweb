import React, { Component } from "react";
import Hand from "./Images/HelloHand.jpg";
import Location from "./Images/Location_Icon.png";
import github from "./Images/github.png";
import figma from "./Images/figma.png";
import twitter from "./Images/twitter.png";
import profile from "./Images/Profile.png";
import "./HeroSection.css";

export default class HeroSection extends Component {
  render() {
    return (
      <div className="Herosection">
        <div className="rightHero">
          <div className="HeroTitle">
            Hi,&nbsp;I'm&nbsp;Akhil&nbsp;
            <img
              src={Hand}
              alt="Hand"
              style={{ width: "45px", height: "45px" }}
            />
          </div>
          <div className="HeroBody1">
            I'm an Associate Software Developer with 1 year of experience,
            passionate about coding and frontend development. I excel in
            creating intuitive user interfaces and staying up-to-date with the
            latest trends. Excited to contribute my skills to the evolving world
            of web development.
          </div>
          <div className="HeroBody2">
            <div className="HeroLocation"><img src={Location} alt="" style={{ width: "20px", height: "20px" }} />&nbsp; Kurnool, India</div>
            <div className="MyAvailabilityStatus"><div className="HeroDot"></div><div className="HeroStatus">Available for new projects</div></div>
          </div>
          <div className="HeroFotter">
            <img src={github} alt="Github" style={{paddingRight:"15px"}}/>
            <img src={twitter} alt="Twitter"style={{paddingRight:"15px"}} />
            <img src={figma} alt="Figma" style={{paddingRight:"15px"}}/>
          </div>
        </div>
        <div className="leftHero">
          <div className="HeroProfile"><img src={profile} alt="profile" style={{width:"200px",height:"220px"}}/></div>
          <div className="HeroShadow1"></div><div className="HeroShadow2"></div>
        </div>
      </div>
    );
  }
}
