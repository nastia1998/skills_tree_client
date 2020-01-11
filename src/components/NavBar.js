import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { NavLink } from "react-router-dom";

import SkillsPage from "./SkillsPage";
import styles from "../styles/NavBar.css";

class NavBar extends Component {
  handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("loggedIn");
  };
  renderLoggedIn = () => {
    return (
      <AppBar position="static" style={styles.navbar}>
        <Toolbar style={styles.navbar}>
          <IconButton
            edge="start"
            style={styles.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" style={styles.title}>
            Skills Tree
          </Typography>
          <Typography variant="h6" style={styles.menuButton}>
            <Button href="/requests">Requests</Button>
            <Button href="/" onClick={this.handleLogOut}>
              Log out
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };

  renderLoggedOut = () => {
    return (
      <AppBar position="static" style={styles.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            style={styles.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" style={styles.title}>
            Skills Tree
          </Typography>
          <Typography variant="h6" style={styles.menuButton}>
            {/* <NavLink to="/login">Log in</NavLink> */}
            <Button href="/login">Log in</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };
  render() {
    return this.props.isLogin ? this.renderLoggedIn() : this.renderLoggedOut();
  }
}

export default NavBar;
