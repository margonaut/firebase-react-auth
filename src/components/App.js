import React, { Component } from 'react';
import * as firebase from 'firebase';
import SignUpForm from './SignUpForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.handleAuthChange = this.handleAuthChange.bind(this);
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


  render() {
    var content;

    if (this.currentUser) {
      content = <p>Logged in!</p>
    } else {
      content = <SignUpForm auth={this.auth} />
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
