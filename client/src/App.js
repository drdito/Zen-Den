import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Dashboard from "./components/Containers/Dashboard";
import Resources from "./components/Containers/Resources";
import MoodTracker from "./components/Containers/MoodTracker";
import Breathe from "./components/Containers/Breathe";
import Blog from "./components/Containers/Blog";
import Login from "./components/Containers/Login";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/Containers/Signup";

const App = () =>
  <Router>
    <div>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/resources" component={Resources} />
        <PrivateRoute exact path="/moodtracker" component={MoodTracker} />
        <PrivateRoute exact path="/breathe" component={Breathe} />
        <PrivateRoute exact path="/blog" component={Blog} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />

      </Switch>
    </div>
  </Router>;

export default App;
