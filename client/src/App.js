import React, { Component } from 'react';
// import './App.css';
import Calendar from './MoodTracker/moodTrackerComponent';

class App extends Component {
  /*
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  */

  render() {
    return (
      <div className="App">
        <h1>Mood Tracker</h1>
          <Calendar />
      </div>
    );
  }
}

export default App;
