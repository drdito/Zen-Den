import React from "react";
import Nav from "../../Nav";
import Container from "../../Bootstrap/Container";
import Row from "../../Bootstrap/Row";
import Col from "../../Bootstrap/Col";

import { populateArticles } from "../../../domains/domainResources/actionsResources";

const Dashboard = () => (
  <div>
    <Row>
      <Col size="md-6 lg-2">
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          onClick={() => (window.location.href = "/breathe")}
        >
          Breathe
        </button>
      </Col>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => (window.location.href = "/moodtracker")}>
          Mood Tracker
        </button>
      </Col>
    </Row>
    <Row>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => (window.location.href = "/login")}>
          Log Out
        </button>
      </Col>
    </Row>
    <Row>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => (window.location.href = "/blog")}>
          Blog
        </button>
      </Col>
      <Col size="md-6 lg-2">
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => (window.location.href = "/resources")}>
          Resources
        </button>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
