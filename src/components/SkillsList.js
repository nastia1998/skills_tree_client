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
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/skills/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      this.setState({ skillsList: data.rows });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <List style={styles.list}>
        {this.state.skillsList.map(item => {
          return (
            <ListItem key={item.id}>
              <div style={styles.container}>
                <span style={{ marginRight: "10px" }}>{item.name}</span>
                <FullScreenDialog
                  skillId={item.id}
                  addSkillToList={this.props.addSkillToList}
                />
              </div>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default SkillsList;
