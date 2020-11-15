import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, IconContainer } from './styles';

// eslint-disable-next-line no-unused-vars
const Button = ({ size, text, color, onClick, leftIcon }) => {
  return (
    <Wrapper color={color} onClick={onClick}>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      {text}
    </Wrapper>
  );
};

Button.defaultProps = {
  size: 0,
  text: '',
  color: 'primary',
  leftIcon: null,
  onClick: () => {},
};

Button.propTypes = {
  size: PropTypes.oneOf([0, 1, 2]),
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
