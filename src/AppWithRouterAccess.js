import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { Login } from "pages";
import { securityConfig, securedRoutes } from "config";

const AppWithRouterAccess = () => {
  const history = useHistory();

  const onAuthRequired = () => {
    history.push("/login");
  };

  const config = {
    ...securityConfig,
    onAuthRequired: onAuthRequired,
  };

  return (
    <Security {...config}>
        {securedRoutes.map(route => <SecureRoute key={route.path} {...route} />)}
        <Route path="/login" render={() => <Login issuer={config.issuer} />} />
        <Route path="/implicit/callback" component={LoginCallback} />
    </Security>
  );
};
export default AppWithRouterAccess;
