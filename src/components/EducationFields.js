import React from 'react';

const EducationFields = (props) => {

  return (
    <div>
      <input onBlur={props.handleUnfocus} type="text" id="grade" placeholder="Your Grade" />
      <input onBlur={props.handleUnfocus} type="text" id="favorite_subject" placeholder="Favorite Subject" />
      <input onBlur={props.handleUnfocus} type="text" id="favorite_color" placeholder="Favorite Color" />
      <div>
      <button >Next</button>
      </div>
    </div>

  )
}

export default EducationFields;
