import React, { Component } from "react";

import ColorBox from "./ColorBox.component";
import './Palette.css';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar Goes Here */}
        <div className="Palette-colors">
          {/* Many Color Boxes */}
          {colorBoxes}
        </div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;
