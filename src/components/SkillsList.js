import React, { Component } from "react";
import { List, Paper, ListItem, Button } from "@material-ui/core";
import styles from "../styles/ProfilePage.css";
import axios from "axios";

import FullScreenDialog from "./FullScreenDialog";

class SkillsList extends Component {
  state = {
    skillsList: []
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/v1/skills`);
      this.setState({ skillsList: data.rows }, () => {
        console.log(this.state.skillsList);
      });
    } catch (e) {
      console.log(e);
    }
  }
  chooseMentor = async skill_id => {};
  render() {
    return (
      <List style={styles.list}>
        {this.state.skillsList
          .filter(e => e.expert_id != localStorage.getItem("userId"))
          .map(item => {
            return (
              <ListItem key={item.id}>
                {item.Skill.name}
                <FullScreenDialog skillId={item.id} />
                {/* <Button key={item.id} onClick={this.chooseMentor(item.id)}>
                Submit
              </Button> */}
              </ListItem>
            );
          })}
      </List>
    );
  }
}

export default SkillsList;
