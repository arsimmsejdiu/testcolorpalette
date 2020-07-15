import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { name , background } = this.props;
    return (
      <div style={{ background }} className="ColorBox">
        <div className="Copy-container">
          <div className="Box-content">
            <span>{name}</span>
          </div>
          <button className="Copy-button">Copy</button>
        </div>
        <span className="See-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
