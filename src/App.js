import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Palette from "./Components/Palette.component";
import SeedPalettes from "./SeedPalettes";
import { generatePalette } from "./Components/colorHelpers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>}/>
        <Route exact path="/palette/:id" render={() => <h1>INDIVIDUAL PALETTE</h1>} />
      </Switch>

      //<div>
      //<Palette palette={generatePalette(SeedPalettes[4])} />
      //</div>
    );
  }
}

export default App;
