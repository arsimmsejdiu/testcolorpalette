import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Palette from "./Components/Palette.component";
import PaletteList from './Components/PaletteList.component';
import SeedPalettes from "./SeedPalettes";
import { generatePalette } from "./Components/colorHelpers";

class App extends Component {
  findPalette = (id) => {
    return SeedPalettes.find(function (palette) {
      return palette.id === id;
    });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={SeedPalettes} />} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>

      //<div>
      //<Palette palette={generatePalette(SeedPalettes[4])} />
      //</div>
    );
  }
}

export default App;
