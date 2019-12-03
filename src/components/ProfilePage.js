import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import styles from "../styles/ProfilePage.css";

import UserInfo from "./UserInfo";
import SkillQueue from "./SkillQueue";
import CourseInfo from "./CourseInfo";

class ProfilePage extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <UserInfo />
          </Grid>
          <Grid item xs={4}>
            <SkillQueue />
          </Grid>
          <Grid item xs={4}>
            <CourseInfo />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProfilePage;
