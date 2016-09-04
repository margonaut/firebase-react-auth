import React, { Component } from 'react';

class SurveyForm extends Component {

  currentStep() {
    switch (this.props.step) {
      case 1:
        return "Step one fields"
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
