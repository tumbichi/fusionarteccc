import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

// eslint-disable-next-line no-unused-vars
const Button = ({ height, width, text, color, onClick }) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

Button.defaultProps = {
  height: 'auto',
  width: 'auto',
  text: 'click',
  color: 'primary',
  onClick: () => {},
};

Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  onClick: PropTypes.func,
};

export default Button;
