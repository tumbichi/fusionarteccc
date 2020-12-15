import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ children }) => {
  return <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8 mr-4">{children}</div>;
};
Keypad.defaultProps = {
  children: <></>,
};
Keypad.propTypes = {
  children: PropTypes.node,
};
export default Keypad;
