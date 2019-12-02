import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SkillsPage from "./components/SkillsPage";
import NavBar from "./components/NavBar";

import "./index";

export default function App() {
  const loggedIn = true;
  return (
    <HashRouter>
      <div className="bg">
        <Router>
          <NavBar {...{ loggedIn }} />
          <Route name="login" exact path="/login" component={LoginPage} />
          <Route name="register" path="/register" />
          <Route name="skills" path="/skills" component={SkillsPage} />
        </Router>
      </div>
    </HashRouter>
  );
}
