import React, { Component } from "react";
import {
  Paper,
  Grid,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Card,
  CardContent,
  CardActions
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";

import styles from "../styles/ProfilePage.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class UserInfo extends Component {
  state = {
    image: "",
    modalInfo: false,
    firstName: "",
    lastName: "",
    middleName: "",
    email: ""
  };
  // onImageChange = event => {
  //   if (event.target.files && event.target.files[0]) {
  //     this.setState({
  //       image: URL.createObjectURL(event.target.files[0])
  //     });
  //   }
  // };
  handleOpen = () => {
    this.setState({
      modalInfo: true,
      email: this.props.email,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      middleName: this.props.middleName
    });
  };

  handleClose = () => {
    this.setState({ modalInfo: false });
  };

  onChange = e => {
    console.log("target", e.target.name);
    switch (e.target.name) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "firstname":
        this.setState({ firstName: e.target.value });
        break;
      case "lastname":
        this.setState({ lastName: e.target.value });
        break;
      case "middlename":
        this.setState({ middleName: e.target.value });
        break;

      default:
        break;
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const body = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      middlename: this.state.middleName
    };

    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/v1/users/${localStorage.getItem("userId")}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      this.handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      // <Paper style={styles.paper}>
      <Grid container spacing={2}>
        {/* <Grid item>
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
        </Grid> */}
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="h5" color="textSecondary">
                    {this.state.firstName == ""
                      ? this.props.firstName || "First name"
                      : this.state.firstName}{" "}
                    {this.state.lastName == ""
                      ? this.props.lastName || "Last name"
                      : this.state.lastName}{" "}
                    {this.state.middleName == ""
                      ? this.props.middleName || "Middle name"
                      : this.state.middleName}{" "}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {this.state.email == ""
                      ? this.props.email || "Email"
                      : this.state.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton color="primary" onClick={this.handleOpen}>
                    <EditIcon />
                  </IconButton>
                </CardActions>
              </Card>

              {/* <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ID: 1030114
              </Typography> */}
            </Grid>
          </Grid>
          {/* <Grid item>
            <IconButton color="primary" onClick={this.handleOpen}>
              <EditIcon />
            </IconButton>
          </Grid> */}
          <Modal
            open={this.state.modalInfo}
            onClose={this.handleClose}
            BackdropComponent={Backdrop}
            style={styles.modal}
            closeAfterTransition
          >
            <Fade in={this.state.modalInfo} style={styles.modalPaper}>
              <div>
                <form
                  style={styles.form}
                  onSubmit={e => {
                    this.handleSubmit(e);
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="firstname"
                        label="First name"
                        type="firstname"
                        id="firstname"
                        onChange={this.onChange}
                        value={this.state.firstName || ""}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="lastname"
                        label="Last name"
                        type="lastname"
                        id="lastname"
                        onChange={this.onChange}
                        value={this.state.lastName || ""}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="middlename"
                        label="Middle name"
                        type="middlename"
                        id="middlename"
                        onChange={this.onChange}
                        value={this.state.middleName || ""}
                      />
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={styles.submit}
                    >
                      Save
                    </Button>
                  </Grid>
                </form>
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
      // </Paper>
    );
  }
}

export default UserInfo;
