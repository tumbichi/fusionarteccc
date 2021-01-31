import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ color }) => {
  return <div className={`h-80 ${color}`}>Foooter</div>;
};

Footer.defaultProps = {
  color: 'bg-primary',
};

Footer.propTypes = {
  color: PropTypes.string,
};

export default Footer;
