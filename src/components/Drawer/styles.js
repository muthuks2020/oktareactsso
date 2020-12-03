import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useDrawerStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    textDecoration: "none",
  },
});