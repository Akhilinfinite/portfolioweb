import React, { Component } from "react";
import "./Contact.css";
import Copy from "./Images/copy-icon.png";
import Mail from "./Images/Mail.png";
import Phone from "./Images/phone.jpg";
import github from "./Images/github.png";
import figma from "./Images/figma.png";
import Linkedin from "./Images/Linkedin.jpg";

export default class Contact extends Component {
  handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  MailCopy() {
    const emailText = document.querySelector(".ContactMail").innerText;
    const textArea = document.createElement("textarea");
    textArea.value = emailText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Email copied to clipboard!");
  }
  MobileNumberCopy() {
    const emailText = document.querySelector(".CobtactNumber").innerText;
    const textArea = document.createElement("textarea");
    textArea.value = emailText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Mobile Number copied to clipboard!");
  }
  render() {
    return (
      <div className="ContactComponent">
        <div className="ContactTitle">Get In Touch</div>
        <div className="ContactSubTitle">
          What's next? Feel free to reach out to me if you're looking for a
          developer or if you have any quaries or do you want to keep in touch
          with me.
        </div>
        <div className="ContactDetailsTemp">
          <div className="ContactMail">
            <div className="MailIcon">
              <img
                src={Mail}
                alt="copy"
                style={{ width: "35px", paddingRight: "10px" }}
              />
            </div>{" "}
            <div className="ContactMail">akhil45.freelancer@gmail.com</div>
            <div className="copyMail" onClick={this.MailCopy}>
              <img
                src={Copy}
                alt="copy"
                style={{ width: "25px", paddingLeft: "20px" }}
              />
            </div>
          </div>
          <div className="ContactMobile">
            <div className="MobileIcon">
              <img
                src={Phone}
                alt="copy"
                style={{ width: "35px", paddingRight: "10px" }}
              />
            </div>
            <div className="CobtactNumber">+916303179197</div>
            <div className="copyNumber" onClick={this.MobileNumberCopy}>
              <img
                src={Copy}
                alt="copy"
                style={{ width: "25px", paddingLeft: "40px" }}
              />
            </div>
          </div>
        </div>
        <div className="AlternativeContact">
          <div className="ContactText">
            You may also find me in the below platforms
          </div>
          <div className="Platforms">
            <img
              src={github}
              alt="Github"
              style={{ paddingRight: "15px", cursor: "pointer" }}
              onClick={() =>
                this.handleLinkClick("https://github.com/Akhilinfinite")
              }
            />
            <img
              src={Linkedin}
              alt="Twitter"
              style={{ paddingRight: "15px", cursor: "pointer" }}
              onClick={() =>
                this.handleLinkClick(
                  "https://www.linkedin.com/in/akhileswar-reddy-konche-8a43871b1"
                )
              }
            />
            <img
              src={figma}
              alt="Figma"
              style={{ paddingRight: "15px", cursor: "pointer" }}
              onClick={() => this.handleLinkClick("https://figma.com/@Deccan")}
            />
          </div>
        </div>
        <div className="Fotter" style={{ padding: "15px" }}>
          <span style={{ fontSize: "24px" }}>&#169;</span>&nbsp; 2023 | Degined
          and coded with&nbsp;
          <span style={{ color: "red" }}>&#10084;</span>&nbsp; by Akhileswar
        </div>
      </div>
    );
  }
}
