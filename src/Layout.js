import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm.js'
import Welcome from './Welcome.js'

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Welcome>
              </Welcome>
            </Col>
            <Col xs={6} md={4}>
              <RegistrationForm>
              </RegistrationForm>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Layout;
