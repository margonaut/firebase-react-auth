import React, { Component } from 'react';
import * as firebase from 'firebase';
import EducationFields from './EducationFields'

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user.uid
    }

    this.handleUnfocus = this.handleUnfocus.bind(this);
  }

  componentWillMount() {
    this.firebaseRef = firebase.database().ref().child('submissions');
    this.submissionRef = this.firebaseRef.child(this.state.user_id);
  }

  handleUnfocus(event) {
    event.preventDefault();
    let updatedData = {};
    let inputValue = event.target.value;
    let inputId = event.target.id;
    updatedData[inputId] = inputValue;
    this.setState(updatedData, function() {
      console.log(this.state);
      this.updateFirebase();
    });
  }

  updateFirebase() {
    this.submissionRef.update(this.state);
  }

  currentStep() {
    switch (this.props.step) {
      case 1:
        return <EducationFields handleUnfocus={this.handleUnfocus} />
      case 2:
        return "Render Component for Step Two Fields"
      case 3:
        return "Render Component for Step Three Fields"
      case 4:
        return "Render Component for Success Fields"
      default:
    }
  }
  render() {
    return (
      <form>
        {this.currentStep()}
      </form>
    )
  }
}

export default SurveyForm;
