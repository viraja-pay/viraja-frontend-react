import React, { Component } from 'react'
import {
  FormGroup, InputGroup, Button, FormControl,
  ControlLabel, HelpBlock, ButtonToolbar,
  ButtonGroup
} from 'react-bootstrap'



class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      check_pass: '',
    }
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 9) return ['success', null];
    else if (length > 5)
      return ['warning', '- You\'re almost there. (min: 10 chars)'];
    else if (length > 0)
      return ['error', '- Password is too short. (min: 10 chars)'];
    else return [null, null]
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  checkPasswordMatch() {
    if (this.getValidationState()[0] === 'success' &&
      this.state.check_pass.length > 0
    ) {
      if (this.state.check_pass === this.state.password) {
        return ['success', null];
      } else {
        return ['error', '- Passwords don\'t match.'];
      }
    } else {
      return [null, null];
    }
  }

  handleCheckPassState(e) {
    this.setState({ check_pass: e.target.value });
  }

  registerUser(event) {
    const credentials = {
      email: this.refs.email.value,
      password: this.refs.pass.value,
    };
    this.props.onRegister(credentials);
    event.preventDefault();
  }

  registrationError() {
    if (this.props.registrationError) {
      return (
        <HelpBlock>
          Oops! Something's not right.
          <span>{this.props.registrationError}</span>
        </HelpBlock>
      );
    } else {
      return null;
    }
  }
  showError() {
    if (this.props.registrationError) {
      return "error";
    } else {
      return null;
    }
  }

  render() {
    const labelBtnStyle = {
      width: 150,
      maxHeight: 34,
    }
    const signUpBtnStyle = {
      width: 360,
      maxHeight: 34,
    }
    return (
      <form onSubmit={this.registerUser.bind(this)}>
        <h3> Sign Up </h3>
        <FormGroup validationState={this.showError()}>
          {this.registrationError()}
          <FormGroup>
            <InputGroup>
              <InputGroup.Button>
                <Button style={labelBtnStyle}>
                  <ControlLabel>Full Name:</ControlLabel>
                </Button>
              </InputGroup.Button>
              <input className="form-control"
                type="text"
                placeholder="Enter Username"
                required
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Button>
                <Button style={labelBtnStyle}>
                  <ControlLabel>Email</ControlLabel>
                </Button>
              </InputGroup.Button>
              <input className="form-control"
                type="email"
                placeholder="youremail@yourdomain.com"
                required
                ref="email"
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Button>
                <Button style={labelBtnStyle}>
                  <ControlLabel>Phone Number:</ControlLabel>
                </Button>
              </InputGroup.Button>
              <input className="form-control"
                type="number"
                placeholder="254712345678"
                required
                ref="email"
              />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formBasicText"
            validationState={this.getValidationState()[0]}
          >
            <InputGroup>
              <InputGroup.Button>
                <Button style={labelBtnStyle}>
                  <ControlLabel>Password</ControlLabel>
                </Button>
              </InputGroup.Button>
              <input className="form-control"
                type="password"
                value={this.state.password}
                placeholder="Enter Password"
                onChange={this.handlePasswordChange.bind(this)}
              />
            </InputGroup>
            <HelpBlock
              style={{
                fontSize: 10
              }}
            >
              {this.getValidationState()[1]}
            </HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="formBasicText"
            validationState={this.checkPasswordMatch()[0]}
          >
            <InputGroup>
              <InputGroup.Button>
                <Button style={labelBtnStyle}>
                  <ControlLabel>Confirm Password</ControlLabel>
                </Button>
              </InputGroup.Button>
              <input className="form-control"
                ref="pass"
                type="password"
                value={this.state.check_pass}
                placeholder="Enter Password"
                onChange={this.handleCheckPassState.bind(this)}
              />
            </InputGroup>
            <HelpBlock
              style={{
                fontSize: 10
              }}
            >
              {this.checkPasswordMatch()[1]}
            </HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <ButtonToolbar>
              <ButtonGroup >
                <input
                  className="btn btn-info"
                  style={signUpBtnStyle}
                  type="submit"
                  value="Signup"
                />
              </ButtonGroup>
            </ButtonToolbar>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }

}

export default RegistrationForm;