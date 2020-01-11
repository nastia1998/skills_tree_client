import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";

class SkillsElement extends Component {
  state = {
    skillsList: []
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/skills/${localStorage.getItem("userId")}`
      );
      this.setState({ skillsList: data.rows });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <List>
          My skills
          {this.state.skillsList.map(value => {
            return (
              <ListItem key={value.Skill.id}>
                <ListItemIcon>
                  <ListItemText primary={value.Skill.name} />
                </ListItemIcon>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}
export default SkillsElement;
