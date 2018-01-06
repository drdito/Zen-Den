import React from "react";
import "./dashboard.css";
import Container from "../../Bootstrap/Container";

const Dashboard = () => (
  <Container>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto header">
              <h1 className="brand-heading">Zen Den</h1>
              <p className="intro-text">A one stop shop for managing your anxiety.</p>
            </div>
            </div>
            <ul className="ch-grid">
              <li>
                <div className="ch-item ch-img-1">
                  <div className="ch-info">
                    <h3>Breathe</h3>
                    <p>Calm your body and mind with some deep breathing <a href="/breathe">Go to Exercise</a></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item ch-img-2">
                  <div className="ch-info">
                    <h3>Mood Tracker</h3>
                    <p>Moniter your daily moods and ailments <a href="/moodtracker">Go to Tracker</a></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item ch-img-3">
                  <div className="ch-info">
                    <h3>Blog</h3>
                    <p>Record your feelings, thoughts, and ideas <a href="/blog">Go to Blog</a></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item ch-img-4">
                  <div className="ch-info">
                    <h3>Resources</h3>
                    <p>Read more about how each exercise can help you <a href="/resources">Go to Resources</a></p>
                  </div>
                </div>
              </li>
            </ul>
          </div> 
  </Container>
);

export default Dashboard;
