/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes, { string } from 'prop-types';
import { InputContainer, Input, Label } from './styles';

const InputText = ({ name, value, placeholder, iconLeft, iconRight, errorText, type, onChange, onFocus }) => {
  // eslint-disable-next-line no-unused-vars
  return (
    <InputContainer>
      <Input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} onFocus={onFocus} />
      {errorText && <Label>{errorText}</Label>}
    </InputContainer>
  );
};

InputText.defaultProps = {
  name: '',
  value: '',
  placeholder: '',
  iconLeft: <></>,
  iconRight: <></>,
  errorText: '',
  type: 'text',
  onChange: () => {},
  onFocus: () => {},
};

InputText.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  errorText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export default InputText;
