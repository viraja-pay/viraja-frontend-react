import React, { Component } from 'react';
import './../App.css';
import { Jumbotron } from 'react-bootstrap';

class AboutUs extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>About Us</h1>
          <p>
            Viraja Pay is a digital money transfer enabler. We enable international transactions on MPESA through VISA.
          </p>
          <p>
            We understand that everyone wants to freely transact online and acros borders especially via mobile.
          </p>
          <p>
            Viraja Pay makes that possible.
          </p>
          <p>
            Viraja Pay makes your money transfer dreams possible.
          </p>
          <p>
            We are based in kenya but our services take your money all around the world.
          </p>
        </Jumbotron>;
      </div>
    );
  }
}

export default AboutUs;
