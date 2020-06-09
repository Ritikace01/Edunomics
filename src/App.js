import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SignUpPage from "./pages/signupPage";
import Dashboard from "./pages/dashboard";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup-page" exact component={SignUpPage} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
