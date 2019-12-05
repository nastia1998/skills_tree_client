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
  render() {
    return (
      <List>
        {this.state.expertsList.map(item => {
          return (
            <ListItem key={item.expert.id} button>
              <ListItemText>
                {item.expert.firstName} {item.expert.email}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default ExpertsList;
