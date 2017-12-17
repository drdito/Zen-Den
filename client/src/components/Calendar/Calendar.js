// Calendar Component
// Displays the calendar for users to click on

import React from 'react';
import Date from '../Date';
import Day from '../Day';


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
      <Date value={i} />
    ); 
  }

  renderDay(i) {
    return ( 
      // value prop is being passed down to Day component
      <Day value={i} />
    ); 
  }

  render() {
    // Hard coding calendar for January 2018.
    // I need to find a way to generate calendars dynamically
    return(
      <div> 
        <div className="calendar-name">
          <p>January 2018</p>
        </div>
        <div className="calendar-row">
          {this.renderDay('S')}
          {this.renderDay('M')}
          {this.renderDay('T')}
          {this.renderDay('W')}
          {this.renderDay('Th')}
          {this.renderDay('F')}
          {this.renderDay('S')}
        </div>
        <div className="calendar-row">
          {this.renderSquare(null)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>
        <div className="calendar-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>

      </div>
    )
  }
}

export default Calendar;