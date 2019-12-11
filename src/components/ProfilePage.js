import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import styles from "../styles/ProfilePage.css";

import UserInfo from "./UserInfo";
import SkillQueue from "./SkillQueue";
import CourseInfo from "./CourseInfo";
import SkillsList from "./SkillsList";

import axios from "axios";

class ProfilePage extends Component {
  state = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: ""
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/users/me`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      this.setState({
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName,
        email: data.email
      });
    } catch (e) {
      localStorage.removeItem("token");
      console.log(e.response);
    }
  }
  render() {
    return (
      <div style={styles.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper style={styles.paper}>
              <UserInfo
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                middleName={this.state.middleName}
                email={this.state.email}
              />
              <SkillsList />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={styles.paper}>
              <SkillQueue />
            </Paper>
          </Grid>
          {/* <Grid item xs={4}>
            <CourseInfo />
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default ProfilePage;
