import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardPage from '../pages/DashboardPage';
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={DashboardPage} exact />
          <Route path='/signin' component={LoginPage} />
          <Route path='/signup' component={RegisterPage} />
        </Switch>
      </Router>
    );
  }
}

export default hot(App);
