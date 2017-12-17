import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Containers/Dashboard";
import Resources from "./components/Containers/Resources";
import MoodTracker from "./components/Containers/MoodTracker";
<<<<<<< Updated upstream
import Breathe from "./components/Containers/Breathe";
=======
>>>>>>> Stashed changes
import Blog from "./components/Containers/Blog";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/moodtracker" component={MoodTracker} />
<<<<<<< Updated upstream
        <Route exact path="/breathe" component={Breathe} />
=======
>>>>>>> Stashed changes
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  </Router>;

export default App;
