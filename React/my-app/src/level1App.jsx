import React from "react";
import Nav from "./components/navbar.jsx";
import Form1 from "./components/form1.jsx";
import Form2 from "./components/form2.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Homepage() {
  return (
    <Router>
    <div className="container-fluid whole-content">
      <Nav />
      <Switch>

      <Route path ="/" exact><Form1 /></Route>
      <Route path="/2" exact><Form2 /></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default Homepage;
