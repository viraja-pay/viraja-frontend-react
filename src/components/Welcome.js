import React, { Component } from 'react';
import './../App.css';
import { Jumbotron, Button } from 'react-bootstrap'

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <Jumbotron>
          <h1>Welcome to Viraja Pay</h1>
          <p>
            Seamless mobile payments
  </p>
          <p>
            <Button bsStyle="info">See More</Button>
          </p>
        </Jumbotron>;
      </div>
    );
  }
}

export default Welcome;
