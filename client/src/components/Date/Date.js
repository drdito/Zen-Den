// Date Component. Used in Calendar Component for the mood tracker
import React from 'react';


class ButtonSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrueClick = this.handleTrueClick.bind(this);
    this.handleFalseClick = this.handleFalseClick.bind(this);
    this.state = {isTrue: true};
  }

  handleTrueClick() {
    this.setState({isTrue: true});
  }

  handleFalseClick() {
    this.setState({isTrue: false});
  }

  render() {
    const isTrue = this.state.isTrue;
    
    let button = null;
    if (isTrue) {
      button = <button className="date" onClick={this.handleFalseClick} style={{backgroundColor: 'pink'}}>{this.props.value}</button>;
    } else {
      button = <button className="date" onClick={this.handleTrueClick} style={{backgroundColor: 'yellow'}}>{this.props.value}</button>;
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