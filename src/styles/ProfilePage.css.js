import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

export default {
  root: {
    flexGrow: 1,
    margin: 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 650
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  input: {
    display: "none"
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: 200,
    overflow: "auto"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
};
