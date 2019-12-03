import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import styles from "../styles/LoginPage.css.js";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Skills tree
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class RegisterPage extends Component {
  state = {
    email: "",
    password: "",
    token: "",
    error: false
  };

  handleSubmit = async e => {
    e.preventDefault();
    const body = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("body", body);

    try {
      await axios.post("http://localhost:3000/api/v1/users", body);

      this.props.history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  onChange = e => {
    console.log("target", e.target.type);
    switch (e.target.type) {
      case "text":
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={styles.container}>
          <Avatar style={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form style={styles.form} onSubmit={this.handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              autoComplete="email"
              onChange={this.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confpassword"
              label="Confirm password"
              type="confpassword"
              id="confpassword"
              autoComplete="current-password"
              onChange={this.onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
            >
              Register
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default RegisterPage;
