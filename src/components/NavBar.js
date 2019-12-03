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
  state = {
    loggedIn: false
  };
  render() {
    const InOut = this.state.loggedIn ? "/register" : "/login";
    return (
      <AppBar position="static">
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
          {this.props.loggedIn ? (
            <Typography variant="h6" style={styles.menuButton}>
              <NavLink to={InOut}>Log in</NavLink>
            </Typography>
          ) : (
            <Typography variant="h6" style={styles.menuButton}>
              <NavLink to={InOut}>Log out</NavLink>
            </Typography>
          )}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
