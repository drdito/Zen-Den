// Calendar Component
// Displays the calendar for users to click on

import React from 'react';
/* import Date from '../Date'; */
import Day from '../Day';
import BigCalendar from 'react-big-calendar'; //NPM Package: https://www.npmjs.com/package/react-big-calendar
import moment from 'moment';
import events from './events';
import './react-big-calendar.css';

// class BigCalendar extends React.Component {

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Calendar = props => (
      <div {...this.props}>

        <BigCalendar
          selectable
          events={events}
          views={['month']} /* forces the view to only be month, and takes away the three view buttons on right side of toolbar */
          defaultView='month' /* forces the view to only be month, and takes away the three view buttons on right side of toolbar */
          scrollToTime={new Date(1970, 1, 1, 6)}
          // defaultDate={new Date(2015, 3, 12)}
          defaultDate={new Date(2018, 0, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}` +
            `\nMy Test: WHAT UP BITCHES???`
          )}
        />
      </div>
    );

 
  /* Not sure what's happening with this block yet
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  */

  /*
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
      </div>
    )
  }
  
}
*/
export default Calendar;