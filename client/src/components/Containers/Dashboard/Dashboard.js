import React from "react";
import "./dashboard.css";
import Container from "../../Bootstrap/Container";

const Dashboard = () => (
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
);

export default Dashboard;
