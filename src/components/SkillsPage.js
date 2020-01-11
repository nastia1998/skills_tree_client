import React, { Component } from "react";
import axios from "axios";
import { List, ListItem, Paper, Button } from "@material-ui/core";

import styles from "../styles/ProfilePage.css";

class SkillsPage extends Component {
  state = {
    skillsList: []
  };

  handleSave = async (id, e) => {
    const { data } = await axios.post(
      `http://localhost:3000/api/v1/skills/${id}/experts/${localStorage.getItem(
        "usId"
      )}`
    );
  };

  handleNext = () => {
    this.props.history.push("/login");
  };

  async componentDidMount() {
    try {
      console.log(123, localStorage.getItem("usId"));
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
      // <div style={styles.root}></div>
      <Paper style={styles.paper}>
        <List>
          {this.state.skillsList.map(item => {
            return (
              <ListItem
                key={item.id}
                button
                onClick={e => this.handleSave(item.id, e)}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
        <Button onClick={e => this.handleNext(e)}>Next</Button>
      </Paper>
    );
  }
}

export default SkillsPage;
