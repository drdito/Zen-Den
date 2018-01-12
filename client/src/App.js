import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Dashboard from "./components/Containers/Dashboard";
import Resources from "./components/Containers/Resources";
import MoodTracker from "./components/Containers/MoodTracker";
import Breathe from "./components/Containers/Breathe";
import Blog from "./components/Containers/Blog";
import Login from "./components/Containers/Login";
import SignUp from "./components/Containers/Signup";
import LoginFail from "./components/Containers/LoginFail";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/moodtracker" component={MoodTracker} />
        <Route exact path="/breathe" component={Breathe} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/loginfail" component={LoginFail} />

      </Switch>
    </div>
  </Router>;

export default App;
