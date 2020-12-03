import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import {
  Drawer as MuiDrawer,
  Divider,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
} from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import { securedRoutes } from "config";
import { useDrawerStyles } from "./styles";

const Drawer = props => {
  const classes = useDrawerStyles();
  const { authService } = useOktaAuth();

  const logout = async () => authService.logout("/");

  return (
    <MuiDrawer
      className={classes.drawer}
      variant={props.variant}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor={props.anchor}
    >
      <List>
        {securedRoutes.map((route) => (
          <ListItem button component={Link} key={route.path} to={route.path}>
            <ListItemIcon>{<route.icon />}</ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem button onClick={() => logout("/")}>
        <ListItemIcon>
          <PowerSettingsNew />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </MuiDrawer>
  );
};

Drawer.propTypes = {
  anchor: PropTypes.string,
  variant: PropTypes.string,
};

Drawer.defaultProps = {
  anchor: "left",
  variant: "permanent",
};

export default Drawer;
