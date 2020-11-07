import React from 'react';
import { Wrapper } from './styles';
import PropTypes from 'prop-types';

const Button = ({ height, width, text, color, onClick }) => {

  
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

Button.defaultProps = {
  text: 'click',
  color: 'primary'
  onClick: () => {},
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'accent'])
  onClick: PropTypes.func,
};

export default Button;
