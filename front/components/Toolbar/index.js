import React from 'react';
import PropTypes from 'prop-types';
import { ToolbarWrapper, ImageWrapper as Logo } from './styles';

const Toolbar = ({ right, goToHome }) => {
  return (
    <ToolbarWrapper>
      <Logo src="../../static/images/logo.png" onClick={goToHome}/>
      {right}
    </ToolbarWrapper>
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
