import React from 'react';

const VolunteerFields = (props) => {
  return (
    <div>
      <input onBlur={props.handleUnfocus} onChange={props.handleChange} value={props.userData.volunteer_type} type="text" id="volunteer_type" placeholder="Volunteer Type" />
      <input onBlur={props.handleUnfocus} type="text" id="hours_per_week" placeholder="Hours per Week" />
      <input onBlur={props.handleUnfocus} type="text" id="phone_number" placeholder="Phone Number" />
    </div>
  )
}

export default VolunteerFields;
