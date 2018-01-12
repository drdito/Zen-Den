import React from "react";
import "./nav.css";

const destoryAccessToken = () => {
  sessionStorage.removeItem('accessToken');
  window.location = '/';
}

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <span className="navbar-brand mb-0 h1" id="brand"><img src="./img/ZenDenLogoTransparent.png" width="30" height="30" alt="logo"/>Zen Den</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/breathe">Breathe</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/moodtracker">Mood Tracker</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resources">Resources</a>
        </li>
        <li className="nav-item">
          <a onClick={destoryAccessToken} className="nav-link">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;