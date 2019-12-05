import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import SkillsPage from "./components/SkillsPage";
import NavBar from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";

import "./index";

export default function App() {
  const loggedIn = true;
  return (
    <HashRouter>
      <div className="bg">
        <Router>
          <NavBar {...{ loggedIn }} />
          <Route name="login" exact path="/login" component={LoginPage} />
          <Route
            name="register"
            exact
            path="/register"
            component={RegisterPage}
          />
          <Route name="skills" exact path="/skills" component={SkillsPage} />
          <Route name="profile" exact path="/profile" component={ProfilePage} />
        </Router>
      </div>
    </HashRouter>
  );
}
