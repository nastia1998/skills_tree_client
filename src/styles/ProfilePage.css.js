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
  }
};
