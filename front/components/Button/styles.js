/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
import styled from 'styled-components';

export const IconContainer = styled.div.attrs({
  className: 'mx-1',
})``;

export const Wrapper = ({ children, color, size }) => {
  let bg;
  let bgHover;
  let text;
  let textHover;
  if (color === 'primary') {
    bg = 'primary';
    bgHover = 'secondary';
    text = 'secondary';
    textHover = 'primary';
  }
  if (color === 'secondary') {
    bg = 'primary';
    bgHover = 'acent';
    text = 'secondary';
    textHover = 'secondary';
  }
  return (
    <button
      className={`flex items-center justify-center px-2 py-2
       focus:shadow-2xl focus:outline-none 
       hover:bg-${bgHover} bg-${bg} hover:text-${textHover} text-${text} 
       rounded-full  md:tracking-wide font-semibold `}
    >
      {children}
    </button>
  );
};
