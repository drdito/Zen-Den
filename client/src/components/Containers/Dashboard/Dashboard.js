import React from "react";
import "./dashboard.css";
import Container from "../../Bootstrap/Container";
import Row from "../../Bootstrap/Row";
import Col from "../../Bootstrap/Col";

import { populateArticles } from "../../../domains/domainResources/actionsResources";

const Dashboard = () => (
  <Container>
    <div>
      <Row>
        <Col size="md-6 lg-4">
          <button
            type="button"
            class="btn btn-secondary btn-lg leftRow"
            id="breathe"
            onClick={() => (window.location.href = "/breathe")}
          >
            Breathe
          </button>
          <button
            type="button"
            id="blog"
            class="btn btn-secondary btn-lg leftRow"
            onClick={() => (window.location.href = "/blog")}>
            Blog
          </button>
        </Col>
        <Col size="md-6 lg-4">
          <button
            type="button"
            id="logOut"
            class="btn btn-secondary btn-lg middleRow"
            onClick={() => (window.location.href = "/login")}>
            Log Out
          </button>
        </Col>
        <Col size="md-6 lg-4">
          <button 
            type="button" 
            id="moodTracker"
            class="btn btn-secondary btn-lg rightRow" 
            onClick={() => (window.location.href = "/moodtracker")}>
            Mood Tracker
          </button>
          <button
            type="button"
            id="resources"
            class="btn btn-secondary btn-lg rightRow"
            onClick={() => (window.location.href = "/resources")}>
            Resources
          </button>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Dashboard;
