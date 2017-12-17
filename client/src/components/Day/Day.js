// Component for listing the Day the calendar
// Similar to Date component, except this component
// does NOT render buttons.

import React from 'react';

const Day = (props) => {
  return (
    <div className="day">
      {props.value}
    </div>
  );
}

export default Day;