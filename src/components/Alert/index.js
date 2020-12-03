import React from "react";
import PropTypes from "prop-types";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = props => (
  <MuiAlert elevation={props.elevation} variant={props.variant} {...props} />
);

Alert.propTypes = {
  severity: PropTypes.string,
  elevation: PropTypes.number,
  variant: PropTypes.string,
};
Alert.defaultProps = {
  severity: "warning",
  elevation: 6,
  variant: "filled",
};

export default Alert;
