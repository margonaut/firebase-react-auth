import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyTitle from './SurveyTitle';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }
  render() {
    let { step } = this.state;
    return (
      <div>
        <SurveyTitle step={step} />
        <SurveyForm step={step} user={this.props.user} />
      </div>
    )
  }
}

export default Survey;
