import React from 'react';
import SurveyProgressionStep from './SurveyProgressionStep';

const SurveyProgression = (props) => {

  let stepTitles = [
    { number: 1, title: "1. Student Info"},
    { number: 2, title: "2. Volunteering"},
    { number: 3, title: "3. Other"},
    { number: 4, title: "4. Submit"}
  ]

  let stepElements = stepTitles.map(function(step, index) {
    return (
      <SurveyProgressionStep
      key={index}
      step={props.step}
      number={step.number}
      title={step.title} />
    )
  })

  return(
    <div className="SurveyProgression">
      {stepElements}
    </div>
  )
}

export default SurveyProgression;
