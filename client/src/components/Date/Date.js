// Date Component. Used in Calendar Component for the mood tracker
import React from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

class ButtonSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.handleEmptyClick = this.handleEmptyClick.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleHappyClick = this.handleHappyClick.bind(this);
    this.state = {buttonValue: 0};
  }

  /* This one function is written to switch the state between true and false */
  handleEmptyClick() {
    console.log("FUNCTION EMPTY FIRE");
    this.setState({buttonValue: 0});
  }

  /* Original 'false' state function. Not being used at the moment. */
  handleContentClick() {
    console.log("FUNCTION CONTENT FIRE");
    this.setState({buttonValue: 1});
  }

  handleHappyClick() {
    console.log("FUNCTION HAPPY FIRE");
    this.setState({buttonValue: 2});
  }


  render() {
    const buttonValue = this.state.buttonValue;
    console.log(this.state);
    
    let button = null;
    if (buttonValue === 0) {
      button = <button className="date" onClick={this.handleContentClick} style={{backgroundColor: 'pink'}}>{this.props.value}</button>;
    } 
    else if (buttonValue === 1) {
      button = <button className="date" onClick={this.handleHappyClick} style={{backgroundColor: 'yellow'}}>{this.props.value}</button>;
    }
    else if (buttonValue === 2) {
      button = <button className="date" onClick={this.handleEmptyClick} style={{backgroundColor: 'green'}}>{this.props.value}</button>;;
    }
    
    /*
    const Styles = {
      buttonStyle: {
        // inline 'if else' statement
        backgroundColor: this.state.isTrue ?  'pink' : 'yellow',
      },
      modalStyle: {
        display: this.state.isTrue ? 'none' : '',
      }
    }

    console.log(Styles.buttonStyle); // test
    */

    return button;
  }
}



// Date compontent. Functonal component.
const Date = (props) => {
  console.log(props.value);

  return (
    <ButtonSwitch value={props.value} buttonsInstance/>

  );
}



/*
// Original Date compontent. Functonal component.
const Date = (props) => {
  return (
    <button className="date" data-toggle="modal" data-target="#exampleModal" >
      {props.value}
    </button>
  );
}
*/




export default Date;