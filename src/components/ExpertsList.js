import React, { Component } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import axios from "axios";

class ExpertsList extends Component {
  state = {
    expertsList: []
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/skills/${this.props.skillId}/experts`
      );

      this.setState({ expertsList: data.rows }, () => {
        console.log(this.state.expertsList);
      });
    } catch (e) {
      console.log(e);
    }
  }
  handleAddGoal = async (skillId, expert_id) => {
    //
    const user = { user_id: localStorage.getItem("userId") };
    console.log(8898, localStorage.getItem("userId"));
    console.log(11111, user);
    console.log(222, skillId);
    console.log(333, expert_id);
    //console.log(8787, event.target);
    const { data } = await axios.post(
      `http://localhost:3000/api/v1/skills/${this.props.skillId}/experts/${expert_id}`,
      user
    );
  };
  render() {
    return (
      <List>
        {this.state.expertsList
          .filter(e => e.User.id != localStorage.getItem("userId"))
          .map(item => {
            return (
              <ListItem
                key={item.User.id}
                button
                onClick={() =>
                  this.handleAddGoal(this.props.skillId, item.User.id)
                }
              >
                <ListItemText
                //(this.props.skillId, item.User.id)}
                >
                  {item.User.firstName} {item.User.email}
                </ListItemText>
              </ListItem>
            );
          })}
        {/* {this.state.expertsList
          .filter(e => e.User.id != localStorage.getItem("userId"))
          .map(item => (
            <ListItem
              key={item.User.id}
              button
              onClick={() =>
                this.handleAddGoal(this.props.skillId, item.User.id)
              }
            >
              <ListItemText
              //(this.props.skillId, item.User.id)}
              >
                {item.User.firstName} {item.User.email}
              </ListItemText>
            </ListItem>
          ))} */}
      </List>
    );
  }
}

export default ExpertsList;
