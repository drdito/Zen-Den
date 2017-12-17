import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand mb-0 h1"><img src="../img/ZenDenLogoTransparent.png" width="30" height="30" alt="logo"/>Zen Den</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
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
          <a className="nav-link" href="/login">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;