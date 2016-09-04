import React from 'react';

const SurveyTitle = (props) => {

  let title = function() {
    switch (props.step) {
      case 1:
        return "Step One"
      case 2:
        return "Step Two"
      case 3:
        return "Step Three"
      case 4:
        return "Success"
      default:
    }
  }
  return (
    <div>Title: {title()}</div>
  )
}

export default SurveyTitle;
