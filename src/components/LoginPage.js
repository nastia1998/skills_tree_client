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

class LoginPage extends Component {
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

    try {
      console.log(33435, body);
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        body
      );
      console.log("token", data.token);
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("loggedIn", "loggedIn");
        localStorage.setItem("userId", data.user.id);
        console.log(4444, localStorage.getItem("userId"));
        this.props.history.push("/profile");
      } else {
        this.setState({ error: true });
      }
    } catch (e) {
      console.log(e);
      alert("Authorization failed. Check your input values!");
    }
  };

  onChange = e => {
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
            Log in
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register">
                  {"Don't have an account? Register!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default LoginPage;
