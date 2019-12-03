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
  }
};
