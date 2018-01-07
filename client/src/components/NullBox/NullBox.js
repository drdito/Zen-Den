// Component for adding blank date boxes for Calendar
// Similar to Date component, except this component
// does NOT render buttons.

import React from 'react';

const NullBox = (props) => {
  return (
    <div className="day">
      {props.value}
    </div>
  );
}

export default NullBox;