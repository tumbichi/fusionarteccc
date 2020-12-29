/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AlertWarningLabel = (props) => {
  const { show, typeOfLabel, containerStyle, message } = props;
  const [hiddenState, setHiddenState] = useState('');
  return show ? (
    <div
      className={`flex ${typeOfLabel} ${containerStyle} rounded-md p-4 w-full items-center justify-between ${hiddenState}`}
    >
      <div>
        <label className="font-semibold text-black text-opacity-70">{message}</label>{' '}
      </div>
      <button
        type="button"
        className="focus:outline-none mx-2"
        onClick={(e) => {
          e.preventDefault();
          setHiddenState('hidden');
        }}
      >
        <div className="text-opacity-50">X</div>
      </button>
    </div>
  ) : null;
};

AlertWarningLabel.defaultProps = {
  containerStyle: '',
  message: '',
  typeOfLabel: 'bg-red-400',
  show: false,
};

AlertWarningLabel.propTypes = {
  containerStyle: PropTypes.string,
  message: PropTypes.string,
  typeOfLabel: PropTypes.oneOf(['bg-red-400', 'bg-orange-400']),
  show: PropTypes.bool,
};

export default AlertWarningLabel;