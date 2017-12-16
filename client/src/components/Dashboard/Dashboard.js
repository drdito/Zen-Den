import React from "react";
import Nav from '../Nav';
import Container from '../Bootstrap/Container';
import Row from '../Bootstrap/Row';
import Col from '../Bootstrap/Col';

import {
  populateArticles
} from '../../domains/domainResources/actionsResources';

const Dashboard = () => (
  <div>
    <Row>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg">Breathe</button>
      </Col>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg">Mood Tracker</button>
      </Col>
    </Row>
    <Row>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg">Log Out</button>
      </Col>
    </Row>
    <Row>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg">Blog</button>
      </Col>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg">Resources</button>
      </Col>
    </Row>
  </div>
);

export default Dashboard;