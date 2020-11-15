import React from 'react';
import PropTypes from 'prop-types';
import { KeypadWrapper } from './styles';

const Keypad = ({ children }) => {
  return <KeypadWrapper>{children}</KeypadWrapper>;
};
Keypad.defaultProps = {
  children: <></>,
};
Keypad.propTypes = {
  children: PropTypes.node,
};
export default Keypad;
