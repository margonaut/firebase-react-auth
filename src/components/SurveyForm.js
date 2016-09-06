import React, { Component } from 'react';
import * as firebase from 'firebase';
import EducationFields from './EducationFields'
import VolunteerFields from './VolunteerFields'

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user.uid
    }

    this.handleUnfocus = this.handleUnfocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDataFromFirebase = this.getDataFromFirebase.bind(this);
  }

  componentWillMount() {
    this.getDataFromFirebase();
  }

  getDataFromFirebase() {
    this.firebaseRef = firebase.database().ref().child('submissions');
    this.submissionRef = this.firebaseRef.child(this.state.user_id);

    this.submissionRef.once('value').then(function(snapshot) {
      // can't access this.setState here
      console.log(snapshot.val());
    }, function(error) {
      console.error(error);
    });
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

  handleChange(event) {
    let updatedData = {};
    let inputValue = event.target.value;
    let inputId = event.target.id;
    updatedData[inputId] = inputValue;
    this.setState(updatedData);
  }

  updateFirebase() {
    this.submissionRef.update(this.state);
  }

  currentStep() {
    switch (this.props.step) {
      case 1:
        return <EducationFields
                handleUnfocus={this.handleUnfocus}
                userData={this.submissionRef}
                handleChange={this.handleChange} />
      case 2:
        return <VolunteerFields
                handleUnfocus={this.handleUnfocus}
                userData={this.submissionRef}
                handleChange={this.handleChange} />
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
