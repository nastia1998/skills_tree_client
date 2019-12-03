import React, { Component } from "react";
import { Paper, Grid, IconButton } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";

import styles from "../styles/ProfilePage.css";

class UserInfo extends Component {
  state = {
    image: "",
    fullName: ""
  };
  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  };
  render() {
    return (
      <Paper style={styles.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img style={styles.img} src={this.state.image} />
            <input
              accept="image/*"
              style={styles.input}
              id="icon-button-file"
              onChange={this.onImageChange}
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {this.props.firstName || "First name"}{" "}
                  {this.props.lastName || "Last name"}{" "}
                  {this.props.middleName || "Middle name"}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default UserInfo;
