import React from 'react';

// NormalDate compontent. Functonal component.
const NormalDate = (props) => {
  return (
    <button className="normalDate" /* data-toggle="modal" data-target="#exampleModal" */>
      {props.value}
    </button>
  );
}



export default NormalDate;