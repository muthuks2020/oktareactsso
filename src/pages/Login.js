import React from 'react';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import { LoginWidget } from 'components';
import { useOktaAuth } from '@okta/okta-react';

const Login = ({ issuer }) => { 
  const { authState } = useOktaAuth();

  if (authState.isPending) { 
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }}/> :
    <LoginWidget issuer={issuer} />;
};

Login.propTypes = {
  issuer: PropTypes.string.isRequired
}

export default Login