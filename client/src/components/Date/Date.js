// Date Component. Used in Calendar Component for the mood tracker
import React from 'react';

class ButtonSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmptyClick = this.handleEmptyClick.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleHappyClick = this.handleHappyClick.bind(this);
    this.handleAnxiousClick = this.handleAnxiousClick.bind(this);
    this.handleDepressedClick = this.handleDepressedClick.bind(this);
    this.handleAngryClick = this.handleAngryClick.bind(this);
    this.handleSuicidalClick = this.handleSuicidalClick.bind(this);
    this.state = {buttonValue: 0};
  }

  handleEmptyClick() {
    console.log("FUNCTION EMPTY FIRE");
    this.setState({buttonValue: 0});
  }

  handleContentClick() {
    console.log("FUNCTION CONTENT FIRE");
    this.setState({buttonValue: 1});
  }

  handleHappyClick() {
    console.log("FUNCTION HAPPY FIRE");
    this.setState({buttonValue: 2});
  }

  handleAnxiousClick() {
    console.log("FUNCTION ANXIOUS FIRE");
    this.setState({buttonValue: 3});
  }

  handleDepressedClick() {
    console.log("FUNCTION DEPRESSED FIRE");
    this.setState({buttonValue: 4});
  }

  handleAngryClick() {
    console.log("FUNCTION ANGRY FIRE");
    this.setState({buttonValue: 5});
  }

  handleSuicidalClick() {
    console.log("FUNCTION SUICIDAL FIRE");
    this.setState({buttonValue: 6});
  }

  render() {
    const buttonValue = this.state.buttonValue;
    console.log(this.state);
    
    let button = null;
    // no mood entered = default white
    if (buttonValue === 0) {
      button = <button className="date" onClick={this.handleContentClick}>{this.props.value}</button>;
    } 
    // content mood = green
    else if (buttonValue === 1) {
      button = <button className="date" onClick={this.handleHappyClick} style={{backgroundColor: 'green', color: 'white'}}>{this.props.value}</button>;
    }
    // happy mood = yellow
    else if (buttonValue === 2) {
      button = <button className="date" onClick={this.handleAnxiousClick} style={{backgroundColor: 'yellow'}}>{this.props.value}</button>;;
    }
    // anxious mood = orange
    else if (buttonValue === 3) {
      button = <button className="date" onClick={this.handleDepressedClick} style={{backgroundColor: 'orange'}}>{this.props.value}</button>;;
    }
    // depressed mood = blue
    else if (buttonValue === 4) {
      button = <button className="date" onClick={this.handleAngryClick} style={{backgroundColor: 'blue', color: 'white'}}>{this.props.value}</button>;;
    }
    // angry mood = red
    else if (buttonValue === 5) {
      button = <button className="date" onClick={this.handleSuicidalClick} style={{backgroundColor: 'red', color: 'white'}}>{this.props.value}</button>;;
    }
    // suicidal mood = black
    else if (buttonValue === 6) {
      button = <button className="date" onClick={this.handleEmptyClick} style={{backgroundColor: 'black', color: 'white'}}>{this.props.value}</button>;;
    }

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

export default Date;