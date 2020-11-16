import React from 'react';
import PropTypes from 'prop-types';
import {} from './styles';
import Button from '../Button';

const CourseCard = ({ name, goToCourse }) => {
  return <Button text={name} onClick={() => goToCourse(name)} />;
};

CourseCard.defaultProps = {
  name: '',
  goToCourse: () => {},
};

CourseCard.propTypes = {
  name: PropTypes.string,
  goToCourse: PropTypes.func,
};

export default CourseCard;
