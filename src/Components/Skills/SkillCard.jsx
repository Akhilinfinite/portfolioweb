import React, { Component } from 'react'

export default class SkillCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="Image">{this.props.Image}</div>
        <p style={{display: "flex", alignItems: "center",justifyContent:"center"}}>{this.props.name}</p>
      </div>
    );
  }
}


