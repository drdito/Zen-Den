import React from "react";
import "./breathe.css";
import Nav from '../../Nav';
import Container from '../../Bootstrap/Container';
import Row from '../../Bootstrap/Row';
import Col from '../../Bootstrap/Col';


const animateBar = () => {
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
  document.getElementById("dynamic").style.visibility = "visible";
  let current_progress = 0;
  let barFull = false;
  const interval = setInterval(function() {
      if (barFull === false){
        current_progress += 1;
        document.getElementById("breathIn").style.fontWeight = "bolder"
        document.getElementById("breathOut").style.fontWeight = "normal"

        if (current_progress === 100) {
          barFull = true;
        }
      }
      else {
        current_progress -= 1;
        document.getElementById("breathIn").style.fontWeight = "normal"
        document.getElementById("breathOut").style.fontWeight = "bolder"

        if (current_progress === 0) {
          barFull = false;
        }
      }
      document.getElementById("dynamic").style.width = current_progress + "%";
  }, 25);
  document.getElementById("stopButton").addEventListener("click", function(){
    clearInterval(interval);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("dynamic").style.visibility = "hidden";
    document.getElementById("startButton").disabled = false;
  });
};



const Breathe = () => (
  <div>
  <Nav/>
  <br/>
  <br/>
  <Container>
    <Row>
      <Col size="lg-4">
        <h2 id="breathIn">Breathe In</h2>
        
      </Col>
      <Col size="lg-4">
        <div className="progress">
          <div className="progress-bar bg-success" id="dynamic"></div>
        </div>
      </Col>
      <Col size="lg-4">
        
          <h2 id="breathOut">Breathe Out</h2>
        
      </Col>
    </Row>
    <Row>
      <Col size="lg-4">
      </Col>
      <Col size="lg-4">
        <div id="startStop">
        <button
          type="button"
          id="startButton"
          class="btn btn-secondary btn-lg leftRow"
          onClick={animateBar}    >
          Start
        </button>
        <button
          type="button"
          id="stopButton"
          class="btn btn-secondary btn-lg leftRow"
        >
        Stop
        </button>
        </div>
      </Col>
      <Col size="lg-4">
      </Col>
    </Row>
  </Container>
  </div>  
);

export default Breathe;