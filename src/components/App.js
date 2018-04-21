import React, { Component } from 'react';
import './../App.css';
import Main from './Main.js';
import NavBar from './NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
