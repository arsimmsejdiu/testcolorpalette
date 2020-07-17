import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

class ColorBox extends Component {
  state = {
    copied: false,
  };

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };

  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`Copy-overlay ${copied && "show"}`}
          />
          <div className={`Copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          <div className="Copy-container">
            <div className="Box-content">
              <span>{name}</span>
            </div>
            <button className="Copy-button">Copy</button>
          </div>
          <span className="See-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
