import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const SeeMoreCoursesLayout = ({ goToHome }) => {
  return (
    <div className="flex space-x-4 justify-end mr-6">
      <Button onClick={goToHome} text="Ver mas cursos" type="buttton" />
      <Button text="+" type="buttton" />
    </div>
  );
};

SeeMoreCoursesLayout.propTypes = {
  goToHome: PropTypes.func,
};

SeeMoreCoursesLayout.defaultProps = {
  goToHome: '',
};

export default SeeMoreCoursesLayout;
