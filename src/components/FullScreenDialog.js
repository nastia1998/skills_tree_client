import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ExpertsList from "./ExpertsList";
import axios from "axios";

import styles from "../styles/FullScreenDialog.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [experts, setExperts] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/skills/${props.skillId}/experts`)
      .then(({ data }) => {
        setExperts(data);
      });
  }, []);

  return experts ? (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Select a mentor
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={styles.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={styles.title}>
              Mentors
            </Typography>
          </Toolbar>
        </AppBar>
        <ExpertsList
          addSkillToList={props.addSkillToList}
          expertsList={experts}
          skillId={props.skillId}
          onClose={handleClose}
        />
      </Dialog>
    </div>
  ) : (
    <div>Loading...</div>
  );
  // return (
  //   <span>
  //     <Button variant="outlined" color="primary" onClick={handleClickOpen}>
  //       Select a mentor
  //     </Button>
  //     <Dialog
  //       fullScreen
  //       open={open}
  //       onClose={handleClose}
  //       TransitionComponent={Transition}
  //     >
  //       <AppBar style={styles.appBar}>
  //         <Toolbar>
  //           <IconButton
  //             edge="start"
  //             color="inherit"
  //             onClick={handleClose}
  //             aria-label="close"
  //           >
  //             <CloseIcon />
  //           </IconButton>
  //           <Typography variant="h6" style={styles.title}>
  //             Mentors
  //           </Typography>
  //         </Toolbar>
  //       </AppBar>
  //       <ExpertsList skillId={props.skillId} />
  //     </Dialog>
  //   </span>
  // );
}
