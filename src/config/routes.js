// imports
import React from "react";
import { Lock } from "@material-ui/icons";
import { Home, Protected } from "pages";

export default [
  {
    icon: () => <Lock />,
    component: () => <Home />,
    exact: true,
    title: "Home",
    path: "/",
  },
  {
    icon: () => <Lock />,
    component: () => <Protected />,
    exact: false,
    title: "Protected",
    path: "/protected",
  },
];
