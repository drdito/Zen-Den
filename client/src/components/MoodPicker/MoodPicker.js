import React from 'react';

const saveMood = () => {
  alert("You clicked me!");
};




class MoodPicker extends React.Component {
  render () {
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">What was your mood today?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
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
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={saveMood}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoodPicker;