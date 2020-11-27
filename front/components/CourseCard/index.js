import React from 'react';
import PropTypes from 'prop-types';
import {} from './styles';
import Button from '../Button';

const CourseCard = ({ name, goToPurchaseCourse }) => {
  return <Button text={name} onClick={() => goToPurchaseCourse(name)} />;
};

CourseCard.defaultProps = {
  name: '',
  goToPurchaseCourse: () => {},
};

CourseCard.propTypes = {
  name: PropTypes.string,
  goToPurchaseCourse: PropTypes.func,
};

export default CourseCard;
