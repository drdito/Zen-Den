// Date Component. Used in Calendar Component for the mood tracker
import React from 'react';


// Date compontent. Functonal component.
const Date = (props) => {
  return (
    <button className="date" data-toggle="modal" data-target="#exampleModal">
      {props.value}
    </button>
  );
}

export default Date;