import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ right, goToHome }) => {
  return (
    <div className="bg-primary flex justify-between items-center h-12 w-full">
      <button onClick={goToHome} type="button" className="focus:outline-none">
        <img
          alt="logo fusionartel"
          className="  h-16 md:h-20 lg:h-24 mt-6 md:mt-10 lg:mt-12 ml-4 md:ml-6 lg:ml-10 z-50"
          src="../../static/images/logo.png"
        />
      </button>
      {right}
    </div>
  );
};

Toolbar.defaultProps = {
  right: <></>,
  goToHome: () => {},
};

Toolbar.propTypes = {
  right: PropTypes.node,
  goToHome: PropTypes.func,
};

export default Toolbar;
