import React, { Component } from "react";
import { Paper, List, ListItem, ListItemText } from "@material-ui/core";
import axios from "axios";

import styles from "../styles/ProfilePage.css";

class SkillQueue extends Component {
  state = {
    skillsQueue: []
  };

  async componentDidMount() {
    try {
      if (localStorage.getItem("userId") !== null) {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/users/${localStorage.getItem(
            "userId"
          )}/goals`
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
  }

  render() {
    return (
      <List>
        {this.state.skillsQueue.map(item => {
          return (
            <ListItem key={item.id} button>
              <ListItemText>
                {item.Skill.name}
                {" skill "}
                {item.is_approved_request
                  ? "Request is approved"
                  : "Request is not approved"}
                {item.is_approved_skill
                  ? " Skill is approved"
                  : " Skill is not approved"}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default SkillQueue;
