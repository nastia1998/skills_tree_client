import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

export default {
  appBar: {
    position: "relative",
    backgroundColor: "#0097A7"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
};
