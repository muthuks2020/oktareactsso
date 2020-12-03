const {
  REACT_APP_CLIENT_ID: clientId,
  REACT_APP_DOMAIN,
  HOST = "localhost",
  PORT = 3000,
  HTTPS = false,
} = process.env;

const issuer = REACT_APP_DOMAIN + "/oauth2/default";

const PROTOCOL = HTTPS ? "https" : "http";

const redirectUri = `${PROTOCOL}://${HOST}:${PORT}/implicit/callback`;

const scopes = ["openid", "profile", "email"];

export default {
  clientId,
  issuer,
  pkce: true,
  redirectUri,
  scopes,
};
