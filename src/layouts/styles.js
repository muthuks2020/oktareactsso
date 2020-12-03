import { makeStyles } from "@material-ui/core/styles";

export const useMainStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
}));
