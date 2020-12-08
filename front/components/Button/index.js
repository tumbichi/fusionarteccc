import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Button = ({ size, text, color, onClick, leftIcon }) => {
  let bg;
  let bgHover;
  let letters;
  let lettersHover;
  if (color === 'primary') {
    bg = 'bg-primary';
    bgHover = 'hover:bg-secondary';
    letters = 'text-secondary';
    lettersHover = 'hover:text-primary';
  }
  if (color === 'secondary') {
    bg = 'bg-primary';
    bgHover = 'hover:bg-acent';
    letters = 'text-secondary';
    lettersHover = 'hover:text-secondary';
  }
  return (
    <button
      className={`flex w-full items-center justify-center px-2 py-3.5
       focus:shadow-2xl focus:outline-none 
       ${bgHover} ${bg} ${lettersHover} ${letters} 
       rounded-lg  md:tracking-wide font-semibold `}
      onClick={onClick}
      type="button"
    >
      <p className="mx-1">{leftIcon}</p>
      {text}
    </button>
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
