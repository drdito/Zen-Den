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

  render() {
    const buttonValue = this.state.buttonValue;
    console.log(this.state);
    
    let button = null;
    switch (buttonValue) {
      case 0: // no mood entered = default white; style comes from .date class on MoodTracker/moodTracker.css
        button = <button className="date" onClick={this.handleContentClick}>{this.props.value}</button>;
        break;
      case 1: // content mood = dusty rose
        button = <button className="date" onClick={this.handleHappyClick} style={{backgroundColor: '#E59ABE'}}>{this.props.value}</button>;
        break;
      case 2: // happy mood = goldenrod yellow
        button = <button className="date" onClick={this.handleAnxiousClick} style={{backgroundColor: '#F7CB1B'}}>{this.props.value}</button>;
        break;      
      case 3: // anxious mood = lime green
        button = <button className="date" onClick={this.handleDepressedClick} style={{backgroundColor: '#42FF33'}}>{this.props.value}</button>;
        break;
      case 4: // depressed mood = grey blue
        button = <button className="date" onClick={this.handleAngryClick} style={{backgroundColor: '#515CAA', color: 'white'}}>{this.props.value}</button>;
        break;
      case 5: // angry mood = brick red
        button = <button className="date" onClick={this.handleEmptyClick} style={{backgroundColor: '#C30808', color: 'white'}}>{this.props.value}</button>;
        break;
      default:
        // do nothing
    }
    return button;
  }
}

// Date compontent. Functonal component.
const Date = (props) => {
  console.log(props.value);

  return (
    <ButtonSwitch value={props.value} />
  );
}

export default Date;