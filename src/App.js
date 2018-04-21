import React, { Component } from 'react';
import './App.css';
import Layout from './Layout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
