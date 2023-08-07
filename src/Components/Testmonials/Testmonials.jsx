import React, { Component } from "react";
import "./Testmonials.css";
import right from "./Images/arrow-right.png";
import left from "./Images/arrow-left.png";
import TestmonialsCards from "./TestmonialsCards";

export default class Testmonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Testmonialscard1: true,
      Testmonialscard2: false,
      Testmonialscard3: false,
      Testmonialscard4: false,
      count: 1,
    };
  }

  handleLeftSlider = () => {
    const count = this.state.count;
    if (count === 1) {
      this.setState({
        Testmonialscard1: false,
        Testmonialscard2: false,
        Testmonialscard3: false,
        Testmonialscard4: true,
        count: 4,
      });
    }
    if (count === 2) {
      this.setState({
        Testmonialscard1: true,
        Testmonialscard2: false,
        Testmonialscard3: false,
        Testmonialscard4: false,
        count: 1,
      });
    }
    if (count === 3) {
      this.setState({
        Testmonialscard1: false,
        Testmonialscard2: true,
        Testmonialscard3: false,
        Testmonialscard4: false,
        count: 2,
      });
    }
    if (count === 4) {
      this.setState({
        Testmonialscard1: false,
        Testmonialscard2: false,
        Testmonialscard3: true,
        Testmonialscard4: false,
        count: 3,
      });
    }
  };

  handleRightSlider = () => {
    const count = this.state.count;
    if (count === 3) {
      this.setState({
        Testmonialscard1: false,
        Testmonialscard2: false,
        Testmonialscard3: false,
        Testmonialscard4: true,
        count: 4,
      });
    }
    if (count === 4) {
      this.setState({
        Testmonialscard1: true,
        Testmonialscard2: false,
        Testmonialscard3: false,
        Testmonialscard4: false,
        count: 1,
      });
    }
    if (count === 1) {
      this.setState({
        Testmonialscard1: false,
        Testmonialscard2: true,
        Testmonialscard3: false,
        Testmonialscard4: false,
        count: 2,
      });
    }
    if (count === 2) {
      this.setState({
        Testmonialscard1: false,
        Testmonialscard2: false,
        Testmonialscard3: true,
        Testmonialscard4: false,
        count: 3,
      });
    }
  };

  render() {
    return (
      <div className="TestmonialsComponent">
        <div className="TestmonialsHeader">Testmonials</div>
        <div className="TestmonialsSubHeader">
          Nice things people have said about me{" "}
        </div>
        <div className="Testmonialscards">
          <div className="TestmonialLeftslider" onClick={this.handleLeftSlider}>
            <img
              src={left}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "white",
                borderRadius: "25px",
                boxShadow: "4px 4px 8px 2px rgba(56, 56, 56, 0.5)",
              }}
            />
          </div>
          <div className="Testmonialscardview">
            {this.state.Testmonialscard1 && (
              <div className="Testmonialscard">
                <TestmonialsCards
                  UserProfile={
                    <img
                      src={require(`./Images/Caroline.jpg`)}
                      alt="Profile"
                      style={{
                        width: "180px",
                        borderRadius: "90px",
                      }}
                    />
                  }
                  UserName="Caroline Free"
                  Degination="Director, IT Compliance in LLA"
                  Tweet="Working with Akhil was an absolute pleasure. 
                  They showcased exceptional skills in front-end development, 
                  delivering a visually stunning website that exceeded our expectations. 
                  Their attention to detail and creativity truly made a difference 
                  in our project. I highly recommend Akhil to anyone in need of a talented front-end developer!"
                />
              </div>
            )}
            {this.state.Testmonialscard2 && (
              <div className="Testmonialscard">
                <TestmonialsCards
                  UserProfile={
                    <img
                      src={require(`./Images/Asim.jpg`)}
                      alt="Profile"
                      style={{
                        width: "180px",
                        borderRadius: "90px",
                      }}
                    />
                  }
                  UserName="Asim Zakria"
                  Degination="Vice President"
                  Tweet="I hired Akhil as a freelancer to revamp my website, and I'm thrilled with the results. They were prompt, professional, and understood my vision perfectly. Their expertise in HTML, CSS, and JavaScript ensured that my website looks modern and functions flawlessly. I highly recommend Akhil for anyone seeking a skilled and reliable front-end developer."
                />
              </div>
            )}
            {this.state.Testmonialscard3 && (
              <div className="Testmonialscard">
                <TestmonialsCards
                  UserProfile={
                    <img
                      src={require(`./Images/Shailesh.jpg`)}
                      alt="Profile"
                      style={{
                        width: "180px",
                        borderRadius: "90px",
                      }}
                    />
                  }
                  UserName="Shailesh Despande"
                  Degination="Program Manager"
                  Tweet="Akhil is an exceptional front-end developer and a true professional. Their ability to turn design concepts into pixel-perfect websites is remarkable. They consistently delivered high-quality work and always met deadlines. As a project manager, it was a relief to have Akhil on the team. I would gladly work with them again in the future!"
                />
              </div>
            )}
            {this.state.Testmonialscard4 && (
              <div className="Testmonialscard">
                <TestmonialsCards
                  UserProfile={
                    <img
                      src={require(`./Images/Kishore.jpg`)}
                      alt="Profile"
                      style={{
                        width: "180px",
                        height:"180px",
                        borderRadius: "90px",
                      }}
                    />
                  }
                  UserName="Kishore"
                  Degination="Associate Software Developer"
                  Tweet="As a fellow developer, I had the privilege of collaborating with Akhil on multiple projects. Their expertise in front-end technologies is remarkable, and they always bring fresh ideas to the table. Not only are they technically proficient, but their strong communication and teamwork skills make them a valuable asset to any project."
                />
              </div>
            )}
          </div>
          <div
            className="TestmonialRightslider"
            onClick={this.handleRightSlider}
          >
            <img
              src={right}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "white",
                borderRadius: "25px",
                boxShadow: "4px 4px 8px 2px rgba(56, 56, 56, 0.5)",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
