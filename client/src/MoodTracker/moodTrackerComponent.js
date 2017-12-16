import React from 'react';
import './moodTracker.css';


// Date compontent. Functonal component.
const Date = (props) => {
  return (
    <button className="date">
      {props.value}
    </button>
  );
}

// Calendar Class. Displays the calendar for users to click on
class Calendar extends React.Component {
  /* Not sure what's happening with this block yet
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  */

  renderSquare(i) {
    return ( 
      // value prop is being passed down to Date component
      <Date value={i}
      />
    ); 
  }

  render() {
    return(
      <div>
        <div className="calendar-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(4)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(4)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(4)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(4)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(4)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(4)}
        </div>

      </div>
    )
  }
}

export default Calendar;