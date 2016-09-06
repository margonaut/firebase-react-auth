import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyTitle from './SurveyTitle';
import NextButton from './NextButton';
import BackButton from './BackButton';
import SurveyProgression from './SurveyProgression';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }

    this.onNextClick = this.onNextClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onNextClick(event) {
    event.preventDefault();
    if (this.state.step < 4) {
      this.setState({ step: this.state.step + 1 });
    }
  }

  onBackClick(event) {
    event.preventDefault();
    if (this.state.step > 1) {
      this.setState({ step: this.state.step - 1 })
    }
  }

  render() {
    let { step } = this.state;
    return (
      <div>
        <SurveyProgression step={step} />
        <SurveyTitle step={step} />
        <SurveyForm step={step} user={this.props.user} />
        <BackButton onBackClick={this.onBackClick} />
        <NextButton onNextClick={this.onNextClick} />
      </div>
    )
  }
}

export default Survey;
