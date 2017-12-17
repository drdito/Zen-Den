import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Containers/Dashboard";
import Resources from "./components/Containers/Resources";
import MoodTracker from "./components/Containers/MoodTracker";
import Breathe from "./components/Containers/Breathe";
import Blog from "./components/Containers/Blog";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/moodtracker" component={MoodTracker} />
        <Route exact path="/breathe" component={Breathe} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  </Router>;

export default App;
