import React, { Component } from 'react'
import "./Nav.css";
import A from "./Images/a.png";
import K from "./Images/k.png";
import ExamplePdf from "./Resume/resume.pdf";


export default class Nav extends Component {
   
  render() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'Akhileswar_Resume';
    
        link.href = ExamplePdf;
    
        link.click();
      };
    return (
      <div className='NavBar'>
        <div className="rightNav"><img src={A} alt="A" style={{width:"40px",height:"40px"}} /><img src={K} alt="K" style={{width:"40px",height:"40px"}}/></div>
        <div className="leftNav">
            <div className="About">About</div>
            <div className="Experience">Experience</div>
            <div className="Work">Work</div>
            <button className="download" onClick={handleDownload}>Download CV</button>
        </div>
      </div>
    )
  }
}
