import React from 'react';

const SurveyProgressionStep = (props) => {

  var activeState = "";
  if (props.step === props.number) {
    activeState = " active"
  }

  return (
    <div className={"SurveyProgressionStep" + activeState}>{props.title}</div>
  )
}

export default SurveyProgressionStep;
