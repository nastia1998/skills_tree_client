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
    confpassword: "",
    firstname: "",
    lastname: "",
    middlename: "",
    token: "",
    error: false,
    userId: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const body = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      middleName: this.state.middlename
    };
    if (!body.email || !body.password) {
      alert("Email and password are required!");
    } else if (this.state.password != this.state.confpassword) {
      alert("Password and confirm password fields should match!");
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/users",
          body
        );
        console.log(773, data);
        // this.setState({ userId: data.id }, () => {
        //   this.props.history.push(`/skills:${this.state.userId}`);
        // });
        localStorage.setItem("usId", data.userData.user.id);
        this.props.history.push("/skills");
      } catch (e) {
        if (e.response.status == "400") {
          alert(e.error);
        }
        this.setState({ error: true });
        return e.message;
      }
    }
  };

  onChange = e => {
    console.log("target", e.target.name);
    switch (e.target.name) {
      case "email":
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;
      case "confpassword":
        this.setState({ confpassword: e.target.value });
        break;
      case "firstname":
        this.setState({ firstname: e.target.value });
        break;
      case "lastname":
        this.setState({ lastname: e.target.value });
        break;
      case "middlename":
        this.setState({ middlename: e.target.value });
        break;

      default:
        break;
    }
  };

  render() {
    if (this.state.error) {
      return <h1>Something went wrong! {this.state.message}</h1>;
    }
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div style={styles.container}>
          <Avatar style={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form style={styles.form} onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={7}>
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
                  type="password"
                  id="confpassword"
                  autoComplete="current-password"
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="firstname"
                  label="First name"
                  type="firstname"
                  id="firstname"
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="lastname"
                  label="Last name"
                  type="lastname"
                  id="lastname"
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="middlename"
                  label="Middle name"
                  type="middlename"
                  id="middlename"
                  onChange={this.onChange}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={styles.submit}
              >
                Register
              </Button>
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

export default RegisterPage;
