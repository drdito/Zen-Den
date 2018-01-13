import React from 'react';

const MoodTrackerKey = () => {
  return (
    <div className="moodTrackerKey">
      <p className="moodKeyLabel">Mood Key</p>
      <hr />
      <div className="moodColor" style={{backgroundColor: '#E59ABE'}}>
        Content
      </div>

      <div className="moodColor" style={{backgroundColor: '#F7CB1B'}}>
        Happy
      </div>

      <div className="moodColor" style={{backgroundColor: '#42FF33'}}>
        Anxious
      </div>

      <div className="moodColor" style={{backgroundColor: '#515CAA', color: 'white', fontSize: '16px'}}>
        Depressed
      </div>

      <div className="moodColor" style={{backgroundColor: '#C30808', color: 'white'}}>
        Angry
      </div>

    </div> 
  );
}


export default MoodTrackerKey; 