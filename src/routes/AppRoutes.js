import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

export default hot(App);
