import React from 'react';
import "./moodTrackerKey.css";

const MoodTrackerKey = () => {
  return (
    <div className="moodTrackerKey">
      <p className="moodKeyLabel">Mood Key</p>
      <hr />
      <div className="moodColor" style={{ backgroundColor: '#4fb69a'}}>
        Content
      </div>

      <div className="moodColor" style={{backgroundColor: '#F7CB1B'}}>
        Happy
      </div>

      <div className="moodColor" style={{ backgroundColor: '#b64f4f'}}>
        Anxious
      </div>

      <div className="moodColor" style={{backgroundColor: '#515CAA', color: 'white'}}>
        Depressed
      </div>

      <div className="moodColor" style={{ backgroundColor: '#4b2375', color: 'white'}}>
        Angry
      </div>

    </div> 
  );
}


export default MoodTrackerKey; 