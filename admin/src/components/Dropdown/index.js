/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import makeAnimated from 'react-select/animated';
import { Wrapper } from './styles';

const Dropdown = ({ name, options, loading, placeholder, value, onChange }) => {
  const animatedComponents = makeAnimated();

  return (
    <Wrapper
      components={animatedComponents}
      isLoading={loading}
      name={name}
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

Dropdown.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.object,
};

Dropdown.defaultProps = {
  loading: true,
  name: '',
  options: [],
  onChange: () => {},
  placeholder: 'Pick one!',
  value: null,
};

export default Dropdown;
