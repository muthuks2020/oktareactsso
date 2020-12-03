import React from "react";
import { Drawer } from "components";
import { useMainStyles } from "./styles";

const Layout = ({ children }) => {
  const classes = useMainStyles();

  return (
    <div className={classes.root}>
      <Drawer />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Layout;
