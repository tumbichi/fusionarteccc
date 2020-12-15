import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Button = ({ text, color, onClick, leftIcon, width }) => {
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
      className={` flex items-center justify-center px-2 py-2 text-sm md:text-lg
       focus:shadow-2xl focus:outline-none 
       ${bgHover} ${bg} ${lettersHover} ${letters} ${width} 
       rounded-lg  md:tracking-wide font-semibold `}
      onClick={onClick}
      type="button"
    >
      {leftIcon ? <p className="mx-1">{leftIcon}</p> : null}
      {text}
    </button>
  );
};

Button.defaultProps = {
  width: '',
  text: '',
  color: 'primary',
  leftIcon: null,
  onClick: () => {},
};

Button.propTypes = {
  width: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
