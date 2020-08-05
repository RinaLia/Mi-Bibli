import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import register from "./pages/register";
import topnav from "./pages/topNav";
import profile from "./pages/profile";
import sidebar from "./pages/sidebar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          <Route exact path="/nav" component={topnav} />
          <Route exact path="/profile" component={profile} />
          <Route exact path="/sidebar" component={sidebar} />
        </Switch>
      </Router>
    );
  }
}
