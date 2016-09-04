import React, { Component } from 'react';
import * as firebase from 'firebase';
import SignUpForm from './SignUpForm';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.handleAuthChange = this.handleAuthChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    this.auth = firebase.auth()
    this.auth.onAuthStateChanged(user => {
      this.handleAuthChange(user)
    });
  }

  handleAuthChange(user) {
    console.log("Auth change: ", user);
    this.setState({ currentUser: user })
  }

  handleLogout(event) {
    event.preventDefault();
    this.auth.signOut();
  }


  render() {
    var content;

    if (this.state.currentUser) {
      content = <Dashboard handleLogout={this.handleLogout} />
    } else if (this.state.currentUser == null) {
      content = <SignUpForm auth={this.auth} />
    } else {
      content = <p>Something else</p>
    }

    return (
      <div className="App">
      { content }
      </div>
    );
  }
}

export default App;









// userLoggedIn() {
//   // this.auth.signInWithEmailAndPassword(email, pass);
//   // // returns a promise with user
//   //
//   // this.auth.createUserWithEmailAndPassword(email, pass);
//   // // creates and logs in user, return a promise.
//   // // Promises only resolve one time
//   //
//
// }
