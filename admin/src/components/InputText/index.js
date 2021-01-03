/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const InputText = ({
  disabled,
  height,
  name,
  onChange,
  placeholder,
  type,
  value,
  width,
}) => {
  return (
    <Wrapper
      disabled={disabled}
      height={height}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      width={width}
    />
  );
};

InputText.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
};

InputText.defaultProps = {
  disabled: false,
  height: 'auto',
  name: '',
  onChange: () => {},
  placeholder: '',
  value: '',
  type: 'text',
  width: 'auto',
};

export default InputText;
