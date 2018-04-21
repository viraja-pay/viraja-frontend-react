import React, { Component } from 'react';
import './App.css';
import Layout from './Layout.js';
import NavBar from './NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
        </NavBar>
        <Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
