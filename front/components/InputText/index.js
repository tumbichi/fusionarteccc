/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes, { string } from 'prop-types';

const InputText = ({
  name,
  value,
  placeholder,
  iconLeft,
  iconRight,
  errorText,
  type,
  onChange,
  onFocus,
  inputStyles,
  errorBorderClass,
  containerStyle,
}) => {
  // eslint-disable-next-line no-unused-vars
  return (
    <div className={`${containerStyle} relative`}>
      <div className={`${errorBorderClass}`}>
        <input
          className={`${inputStyles} input-form w-full`}
          name={name}
          type={type}
          value={value}
          placeholder=" "
          onChange={onChange}
          onFocus={onFocus}
        />
        <label htmlFor={name} className="input-label w-full">
          {placeholder}
        </label>
      </div>
      <label className="error-label pl-2">{errorText}</label>
    </div>
  );
};

InputText.defaultProps = {
  inputStyles: '',
  name: '',
  value: '',
  placeholder: '',
  iconLeft: <></>,
  iconRight: <></>,
  errorText: '',
  type: 'text',
  onChange: () => {},
  onFocus: () => {},
  errorBorderClass: '',
  containerStyle: '',
};

InputText.propTypes = {
  inputStyles: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  errorText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  errorBorderClass: PropTypes.string,
  containerStyle: PropTypes.string,
};
 
export default InputText;
