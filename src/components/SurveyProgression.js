import React from 'react';
import SurveyProgressionStep from './SurveyProgressionStep';

const SurveyProgression = (props) => {

  let steps = ["1.", "2.", "3.", "4."]

  let stepElements = steps.map(title => {
    return (
      <SurveyProgressionStep step={props.step} title={title} />
    )
  });

  return(
    <div className="SurveyProgression">
      {stepElements}
    </div>
  )
}

export default SurveyProgression;
