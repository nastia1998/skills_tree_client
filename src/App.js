import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import SkillsPage from "./components/SkillsPage";
import NavBar from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";
import RequestsPull from "./components/RequestsPull";

import "./index";

export default function App() {
  const [isLogin, setIsLogin] = React.useState(
    localStorage.getItem("loggedIn")
  );

  const handleLogin = () => setIsLogin(true);

  return (
    <div className="bg">
      <Router>
        <NavBar isLogin={isLogin} />
        <Route
          name="login"
          exact
          path="/login"
          render={props => <LoginPage {...props} handleLogin={handleLogin} />}
        />
        <Route
          name="register"
          exact
          path="/register"
          component={RegisterPage}
        />
        <Route name="skills" exact path="/skills" component={SkillsPage} />
        <Route name="profile" exact path="/profile" component={ProfilePage} />
        <Route
          name="requests"
          exact
          path="/requests"
          component={RequestsPull}
        />
      </Router>
    </div>
  );
}
