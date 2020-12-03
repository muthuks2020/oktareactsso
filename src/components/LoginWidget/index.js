import React, { useState } from "react";
import PropTypes from 'prop-types';
import OktaAuth from "@okta/okta-auth-js";
import { useOktaAuth } from "@okta/okta-react";
import {
  Button,
  Grid,
  TextField,
  Container,
  CircularProgress,
  Typography,
  Fade,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Alert } from "components";
import { useWidgetStyles } from "./styles";

const LoginWidget = ({ issuer }) => {
  const classes = useWidgetStyles();
  const { authService } = useOktaAuth();
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoader(true);
    const oktaAuth = new OktaAuth({ issuer });

    try {
      const { sessionToken } = await oktaAuth.signIn({ username, password });
      await authService.redirect({ sessionToken });
      return null
    } catch (err) {
      handleError(err);
    }
  };

  const handleError = (err) => {
    setLoader(false);
    setError(err);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {loader ? <CircularProgress /> : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            onChange={handleUsernameChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
          <Button
            id="submit"
            type="submit"
            value="Submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Log in
          </Button>
          {error && (
            <Grid item>
              <Fade in>
                <Alert severity="error">{error.message}</Alert>
              </Fade>
            </Grid>
          )}
        </form>
      </div>
    </Container>
  );
};

LoginWidget.propTypes = {
  issuer: PropTypes.string.isRequired
}

export default LoginWidget;
