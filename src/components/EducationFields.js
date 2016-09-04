import React from 'react';

const EducationFields = (props) => {
  console.log(props.userData)
  return (
    <div>
      <input onBlur={props.handleUnfocus} onChange={props.handleChange} value={props.userData.grade} type="text" id="grade" placeholder="Your Grade" />
      <input onBlur={props.handleUnfocus} type="text" id="favorite_subject" placeholder="Favorite Subject" />
      <input onBlur={props.handleUnfocus} type="text" id="favorite_color" placeholder="Favorite Color" />
      <div>
      <button >Next</button>
      </div>
    </div>
  )
}

export default EducationFields;
