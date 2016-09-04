import React from 'react';

const EducationFields = (props) => {

  return (
    <div>
      <input type="text" id="grade" placeholder="Your Grade" />
      <input type="text" id="favorite_subject" placeholder="Favorite Subject" />
      <input type="text" id="favorite_color" placeholder="Favorite Color" />
      <div>
      <button >Next</button>
      </div>
    </div>

  )
}

export default EducationFields;
