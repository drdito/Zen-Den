import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Containers/Dashboard";
import Resources from "./components/Containers/Resources";
import MoodTracker from "./components/Containers/MoodTracker";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/moodtracker" component={MoodTracker} />
      </Switch>
    </div>
  </Router>;

export default App;
