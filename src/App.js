import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import register from "./pages/register";
import topnav from "./pages/topNav";
import profile from "./pages/profile";
import detail from "./pages/detail";
import home from "./pages/home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          <Route exact path="/nav" component={topnav} />
          <Route exact path="/profile" component={profile} />
          <Route exact path="/detail" component={detail} />
        </Switch>
      </Router>
    );
  }
}
