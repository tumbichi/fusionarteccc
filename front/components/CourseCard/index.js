import React from 'react';
import PropTypes from 'prop-types';
import {} from './styles';

const CourseCard = ({ name }) => {
  return <div>{name}</div>;
};

CourseCard.defaultProps = {
  name: '',
};

CourseCard.propTypes = {
  name: PropTypes.string,
};

export default CourseCard;
