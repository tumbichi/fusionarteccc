import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ children }) => {
  return <div>{children}</div>;
};
Keypad.defaultProps = {
  children: <></>,
};
Keypad.propTypes = {
  children: PropTypes.node,
};
export default Keypad;
