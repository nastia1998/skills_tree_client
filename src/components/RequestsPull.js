import React, { Component } from "react";
import { List, ListItem, Button } from "@material-ui/core";
import axios from "axios";

import { Grid, Paper } from "@material-ui/core";

import styles from "../styles/ProfilePage.css";

class RequestsPull extends Component {
  state = {
    requestsList: [],
    studentInfo: []
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/users/${localStorage.getItem(
          "userId"
        )}/requests`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if (data.rows) {
        this.setState({ requestsList: data.rows });
        console.log(2222, this.state.requestsList);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  showStudentInfo = async (studentId, e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/users/${localStorage.getItem(
          "userId"
        )}/students/${studentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if (data.rows) {
        this.setState({ studentInfo: data.rows });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  acceptRequest = async (requestId, e) => {
    e.preventDefault();
    const body = {
      request_id: requestId
    };
    console.log(333, body);
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/v1/users/${localStorage.getItem(
          "userId"
        )}/requests`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      this.setState({ studentInfo: [], requestsList: [] });
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    return (
      <div style={styles.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper style={styles.paper}>
              <List>
                {this.state.requestsList
                  .filter(e => e.is_approved_request == false)
                  .map(item => {
                    return (
                      <ListItem
                        key={item.id}
                        button
                        onMouseOver={e => {
                          this.showStudentInfo(item.Review.User.id, e);
                        }}
                      >
                        Student Email: {item.Review.User.email} Skill:{" "}
                        {item.Skill.name}
                      </ListItem>
                    );
                  })}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper style={styles.paper}>
              {this.state.studentInfo
                .filter(({ is_approved_request }) => !is_approved_request)
                .map(item => {
                  return (
                    <div key={item.id}>
                      Name: {item.Review.User.firstName}
                      Email: {item.Review.User.email}
                      <Button
                        key={item.id}
                        onClick={e => {
                          this.acceptRequest(item.id, e);
                        }}
                      >
                        Accept
                      </Button>
                      <Button>Reject</Button>
                    </div>
                  );
                })}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RequestsPull;
