/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const Button = ({ height, width, text, type, onClick }) => {
  return (
    <Wrapper type={type} height={height} width={width} onClick={onClick}>
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  height: 'auto',
  width: 'auto',
  text: 'Click me bra',
  type: 'button',
  onClick: () => {},
};

export default Button;
