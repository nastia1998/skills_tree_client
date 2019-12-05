import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

export default {
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
};
