import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputText = ({ placeholder, iconLeft, iconRight, errorText, type }) => {
  const [value, setValue] = useState('');
  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  return <input type={type} value={value} onChange={handleChange} placeholder={placeholder} />;
};

InputText.defaultProps = {
  placeholder: '',
  iconLeft: <></>,
  iconRight: <></>,
  errorText: '',
  type: 'text',
};

InputText.propTypes = {
  placeholder: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  errorText: PropTypes.string,
  type: PropTypes.string,
};

export default InputText;
