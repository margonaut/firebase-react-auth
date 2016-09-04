import React, { Component } from 'react';
import * as firebase from 'firebase';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    const loginPromise = this.props.auth.signInWithEmailAndPassword(email, password);
    loginPromise.catch(e => console.log(e.message));

  }

  handleSignUp(event) {
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    const signUpPromise = this.props.auth.createUserWithEmailAndPassword(email, password);
    signUpPromise.catch(e => console.log(e.message));
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form>
        <input id="email" onChange={this.handleEmailChange} type="email" placeholder="email" />
        <input id="password" onChange={this.handlePasswordChange} type="password" placeholder="password" />
        <button onClick={this.handleSignUp} id="signUpButton">Sign Up</button>
        <button onClick={this.handleLogin} id="loginButton">Login</button>
      </form>
    )
  }
}

export default SignUpForm;
