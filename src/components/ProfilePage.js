import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import styles from "../styles/ProfilePage.css";

import UserInfo from "./UserInfo";
import SkillQueue from "./SkillQueue";
import CourseInfo from "./CourseInfo";
import SkillsList from "./SkillsList";
import SkillsElement from "./SkillsElement";

import axios from "axios";

class ProfilePage extends Component {
  state = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    skillsQueue: []
    //skillsList: []
  };
  async componentDidMount() {
    try {
      if (localStorage.getItem("userId") !== null) {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/users/${localStorage.getItem(
            "userId"
          )}/goals`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );
        if (data.rows) {
          this.setState({ skillsQueue: data.rows }, () => {
            console.log(888, this.state.skillsQueue);
          });
        }
      }
    } catch (e) {
      console.log(e);
    }

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
      // const data2 = await axios.get(`http://localhost:3000/api/v1/skills`, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`
      //   }
      // });
      // this.setState({ skillsList: data2.data.rows });
    } catch (e) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("loggedIn");
      if (e.response.status == "401") {
        this.props.history.push("/login");
      }
      console.log(4334534, e.response);
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
              <SkillsElement />
              <SkillsList
                addSkillToList={newSkill => {
                  this.setState(state => ({
                    skillsQueue: [...state.skillsQueue, newSkill]
                  }));
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={styles.paper}>
              <SkillQueue skillsQueue={this.state.skillsQueue} />
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
