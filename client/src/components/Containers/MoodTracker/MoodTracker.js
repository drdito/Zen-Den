import React from 'react';
import './moodTracker.css';
import Calendar from '../../Calendar';
import Nav from '../../Nav';
import Container from '../../Bootstrap/Container';
import Row from '../../Bootstrap/Row';
import Col from '../../Bootstrap/Col';
import MoodPicker from '../../MoodPicker';

const MoodTracker = () => (
  <div>
    <Row>
      <Col size="lg-12">
        <Nav/>
      </Col>
    </Row>
    <Container>
      <div className="row justify-content-center">
        <Calendar />
        <MoodPicker />
      </div>
    </Container> 
  </div>
);

export default MoodTracker;


