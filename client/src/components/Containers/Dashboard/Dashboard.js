import React from "react";
import "./dashboard.css";
import Container from "../../Bootstrap/Container";

const clearAccessToken = () => {
  sessionStorage.removeItem('accessToken');
}

const Dashboard = () => (
  <Container>
        <div className="container">
            <ul className="ch-grid">
            <div className="row">
              <div className="col-lg-3">
                <li>
                  <div className="ch-item ch-img-1">
                    <div className="ch-info">
                      <a href="/breathe">
                        <h3 className="bubbleHead">Breathe</h3>
                        <p>Calm your body and mind with some deep breathing</p>
                      </a>
                    </div>
                  </div>
                </li>
              </div>
              <div className="col-lg-6 mx-auto header">
            <img className="logo" src="img/ZenDenLogoTrans.png" alt="Zen Den Logo"/>  
            <a onClick={clearAccessToken} className="logout" href="/">
              <div className="logout">
               Log Out
              </div>
            </a>
              </div>
              <div className="col-lg-3">
                <li>
                  <div className="ch-item ch-img-4">
                    <div className="ch-info">
                      <a href="/resources">
                        <h3>Resources</h3>
                        <p>Read more about how each exercise can help you</p>
                      </a>
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
                      <a href="/moodtracker">
                        <h3>Mood Tracker</h3>
                        <p>Moniter your daily moods and ailments</p>
                      </a>
                    </div>
                  </div>
                </li>
              </div>
              <div className="col-lg-3 offset-lg-2">
                <li>
                  <div className="ch-item ch-img-3">
                    <div className="ch-info">
                      <a href="/blog">
                        <h3>Blog</h3>
                        <p>Record your feelings, thoughts, and ideas</p>
                      </a>
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
