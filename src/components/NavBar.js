import React, { Component } from 'react';
import './../App.css';
import { Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
      <div className="navigation">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Viraja Pay</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                HOME
      </NavItem>
              <NavItem eventKey={2} href="#">
                ABOUT
      </NavItem>
              <NavItem eventKey={2} href="#">
                CONTACT
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;