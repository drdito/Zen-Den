import React from "react";
<<<<<<< Updated upstream
import "./dashboard.css";
=======
import Nav from "../../Nav";
>>>>>>> Stashed changes
import Container from "../../Bootstrap/Container";
import Row from "../../Bootstrap/Row";
import Col from "../../Bootstrap/Col";

import { populateArticles } from "../../../domains/domainResources/actionsResources";

const Dashboard = () => (
<<<<<<< Updated upstream
  <Container>
    <header className="masthead">
      <div className="intro-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="brand-heading">Zen Den</h1>
              <p className="intro-text">A one stop shop for managing your anxiety.</p>
              <button
                type="button"
                class="btn btn-secondary btn-lg leftRow"
                onClick={() => (window.location.href = "/breathe")}
              >
                Breathe
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-lg leftRow"
                onClick={() => (window.location.href = "/blog")}>
                Blog
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-lg middleRow"
                onClick={() => (window.location.href = "/login")}>
                Log Out
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-lg rightRow"
                onClick={() => (window.location.href = "/moodtracker")}>
                Mood Tracker
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-lg rightRow"
                onClick={() => (window.location.href = "/resources")}>
                Resources
              </button>
            </div>
            </div>
          </div>
        </div>
    </header>
  </Container>
=======
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
>>>>>>> Stashed changes
);

export default Dashboard;
