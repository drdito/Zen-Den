import React from "react";
import "./dashboard.css";
import Container from "../../Bootstrap/Container";

const Dashboard = () => (
  <Container>
        <div className="container">
            <ul className="ch-grid">
            <div className="row">
              <div className="col-lg-3">
                <li>
                  <div className="ch-item ch-img-1">
                    <div className="ch-info">
                      <h3>Breathe</h3>
                      <p>Calm your body and mind with some deep breathing <a href="/breathe">Go to Exercise</a></p>
                    </div>
                  </div>
                </li>
              </div>
              <div className="col-lg-6 mx-auto header">
            <img className="logo" src="img/ZenDenLogoTrans.png" alt="Zen Den Logo"/>  
            <div className="logout">
              <a href="/login"> Log Out </a>
            </div>
            
              </div>
              <div className="col-lg-3">
                <li>
                  <div className="ch-item ch-img-4">
                    <div className="ch-info">
                      <h3>Resources</h3>
                      <p>Read more about how each exercise can help you <a href="/resources">Go to Resources</a></p>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 offset-lg-2">
                <li>
                  <div className="ch-item ch-img-2">
                    <div className="ch-info">
                      <h3>Mood Tracker</h3>
                      <p>Moniter your daily moods and ailments <a href="/moodtracker">Go to Tracker</a></p>
                    </div>
                  </div>
                </li>
              </div>
              <div className="col-lg-3 offset-lg-2">
                <li>
                  <div className="ch-item ch-img-3">
                    <div className="ch-info">
                      <h3>Blog</h3>
                      <p>Record your feelings, thoughts, and ideas <a href="/blog">Go to Blog</a></p>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            </ul>
          </div> 
  </Container>
);

export default Dashboard;
