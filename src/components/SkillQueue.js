import React, { Component } from "react";
import { Paper, List, ListItem, ListItemText } from "@material-ui/core";
import axios from "axios";

import styles from "../styles/ProfilePage.css";

class SkillQueue extends Component {
  render() {
    return (
      <List>
        {this.props.skillsQueue.map(item => {
          return (
            <ListItem key={item.id} button>
              <ListItemText>
                {item.Skill ? item.Skill.name : "New Skill "}
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
