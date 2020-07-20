import React, { Component } from "react";

import "./App.css";
import Palette from "./Components/Palette.component";
import SeedPalettes from "./SeedPalettes";
import { generatePalette } from "./Components/colorHelpers";

class App extends Component {
  render() {
    console.log(generatePalette(SeedPalettes[4]));
    return (
      <div>
        <Palette {...SeedPalettes[4]} />
      </div>
    );
  }
}

export default App;
