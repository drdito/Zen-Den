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

      <div className="moodColor" style={{ backgroundColor: '#f5f579'}}>
        Happy
      </div>

      <div className="moodColor" style={{ backgroundColor: '#b71b37', color: 'white'}}>
        Anxious
      </div>

      <div className="moodColor" style={{ backgroundColor: '#282643', color: 'white', fontSize: '16px'}}>
        Depressed
      </div>

      <div className="moodColor" style={{ backgroundColor: '#660000', color: 'white'}}>
        Angry
      </div>

    </div> 
  );
}


export default MoodTrackerKey; 