/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const InputText = ({ height, onChange, placeholder, value, type, width }) => {
  return (
    <Wrapper
      height={height}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
      width={width}
    />
  );
};

InputText.propTypes = {
  height: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
};

InputText.defaultProps = {
  height: 'auto',
  onChange: () => {},
  placeholder: '',
  value: '',
  type: 'text',
  width: 'auto',
};

export default InputText;
