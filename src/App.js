import React, { Component } from 'react';

import TileGrid from './TileGrid';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Memory Puzzle</h2>
        </div>
        <div>
          <TileGrid />
        </div>
      </div>
    );
  }
}

export default App;
