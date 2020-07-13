import React from 'react';

import './App.css';
import Palette from './Components/Palette.component';
import SeedPalettes from './SeedPalettes';

function App() {
  return (
    <div>
      <Palette {...SeedPalettes[5]}/>
    </div>
  );
}

export default App;
