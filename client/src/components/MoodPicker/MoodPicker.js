import React from 'react';

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
                <div className="moodColor" style={{backgroundColor: 'green'}}> {/*content*/}
                </div>              
                <div className="moodColor" style={{backgroundColor: 'yellow'}}> {/*happy*/}
                </div>
                <div className="moodColor" style={{backgroundColor: 'orange'}}> {/*anxious*/}
                </div>
                <div className="moodColor" style={{backgroundColor: 'blue'}}>   {/*depressed*/}
                </div>
                <div className="moodColor" style={{backgroundColor: 'red'}}>    {/*angry*/}
                </div>
                <div className="moodColor" style={{backgroundColor: 'black'}}>  {/*suicidal*/}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoodPicker;