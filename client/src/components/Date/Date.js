// Date Component. Used in Calendar Component for the mood tracker
import React from 'react';
import MoodPicker from '../MoodPicker';


class ButtonSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrueClick = this.handleTrueClick.bind(this);
    this.handleFalseClick = this.handleFalseClick.bind(this);
    this.state = {isTrue: true};
    
  }

  /* This one function is written to switch the state between true and false */
  handleTrueClick() {
    console.log("FUNCTION FIRE");
    this.setState({isTrue: !this.state.isTrue});
  }

  /* Original 'false' state function. Not being used at the moment. */
  handleFalseClick() {
    this.setState({isTrue: false});
  }

  render() {
    const isTrue = this.state.isTrue;
    console.log(this.state);
    /*
    let button = null;
    if (isTrue) {
      button = button className="date" onClick={this.handleTrueClick} style={{backgroundColor: 'pink'}}>{this.props.value}</button>;
    } else {
      button = <button className="date" onClick={this.handleTrueClick} style={{backgroundColor: 'yellow'}}>{this.props.value}</button>;
    }
    */

    const Styles = {
      buttonStyle: {
        // inline 'if else' statement
        backgroundColor: this.state.isTrue ?  'pink' : 'yellow',
      },
      modalStyle: {
        display: this.state.isTrue ? 'none' : '',
      }
    }

    console.log(Styles.buttonStyle);

    return (
      <div>
        <button className="date" onClick={this.handleTrueClick} style={Styles.buttonStyle}>{this.props.value}</button>
        <MoodPicker style={Styles.modalStyle} /> {/*This part isn't working yet. We will have to fire the modal using the React way*/}
      </div>
    );
  }

}


// Date compontent. Functonal component.
const Date = (props) => {
  console.log(props.value);

  return (
    <ButtonSwitch value={props.value} />

  );
}


/*
// Date compontent. Functonal component.
const Date = (props) => {
  return (
    <button className="date" data-toggle="modal" data-target="#exampleModal" >
      {props.value}
    </button>
  );
}
*/




export default Date;