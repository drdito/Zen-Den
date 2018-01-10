// Date Component. Used in Calendar Component for the mood tracker
import React from 'react';
import MoodPicker from '../MoodPicker';


class ToggleModal extends React.Component {
  constructor(props) {
    super(props);
    // this.handleTrueClick = this.handleTrueClick.bind(this);
    // this.handleFalseClick = this.handleFalseClick.bind(this);
    // this.state = {isTrue: true};
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {isOpen: false};
    
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

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  changeColor = () => {
    
  }

  render() {
    // const isTrue = this.state.isTrue;
    console.log(this.state);
    /*
    let button = null;
    if (isTrue) {
      button = button className="date" onClick={this.handleTrueClick} style={{backgroundColor: 'pink'}}>{this.props.value}</button>;
    } else {
      button = <button className="date" onClick={this.handleTrueClick} style={{backgroundColor: 'yellow'}}>{this.props.value}</button>;
    }
    */

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

    return (
      <div>
        <button className="date" onClick={this.toggleModal} style={{backgroundColor: this.props.children}}>{this.props.value}</button>

        <MoodPicker show={this.state.isOpen} onClose={this.toggleModal}>
          <div className="modal-body">
            <button /*onClick={saveMood}*/ type="button" className="moodColor" id="content" style={{backgroundColor: 'green'}}> {/*content*/}
              Content
            </button>
            <button type="button" className="moodColor" id="happy" style={{backgroundColor: 'yellow'}}> {/*happy*/}
              Happy
            </button>
            <button type="button" className="moodColor" id="anxious" style={{backgroundColor: 'orange'}}> {/*anxious*/}
              Anxious
            </button>
            <button type="button" className="moodColor" id="depressed" style={{backgroundColor: 'blue', color: 'white'}}>   {/*depressed*/}
              Depressed
            </button>
            <button type="button" className="moodColor" id="angry" style={{backgroundColor: 'red'}}>    {/*angry*/}
              Angry
            </button>
            <button type="button" className="moodColor" id="suicidal" style={{backgroundColor: 'black', color: 'white'}}>  {/*suicidal*/}
              Suicidal
            </button>
          </div>
        </MoodPicker>
      </div>
    );
  }

}

/*
class ButtonSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrueClick = this.handleTrueClick.bind(this);
    this.handleFalseClick = this.handleFalseClick.bind(this);
    this.state = {isTrue: true};    
  }

  // This one function is written to switch the state between true and false 
  handleTrueClick() {
    console.log("FUNCTION FIRE");
    this.setState({isTrue: !this.state.isTrue});
  }

  render() {
    const isTrue = this.state.isTrue;
    console.log(this.state);
    
  //  let button = null;
  //  if (isTrue) {
  //    button = button className="date" onClick={this.handleTrueClick} style={{backgroundColor: 'pink'}}>{this.props.value}</button>;
  //  } else {
  //    button = <button className="date" onClick={this.handleTrueClick} style={{backgroundColor: 'yellow'}}>{this.props.value}</button>;
  //  }
    

    
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
  }  

}
*/

// Date compontent. Functonal component.
const Date = (props) => {
  console.log(props.value);

  return (
    <ToggleModal value={props.value} />

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