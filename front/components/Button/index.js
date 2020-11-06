import React from 'react';
import { Wrapper } from './styles';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

Button.defaultProps = {
  text: 'click',
  onClick: () => {},
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
