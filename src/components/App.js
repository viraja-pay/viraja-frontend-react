import React, { Component } from 'react';
import './../App.css';
import Home from './Home.js';
import NavBar from './NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
