import React from 'react';
import PropTypes from 'prop-types';
import { ToolbarWrapper, ImageWrapper as Logo } from './styles';
const Toolbar = ({ right }) => {
  return (
    <ToolbarWrapper>
      <Logo />
      {right}
    </ToolbarWrapper>
  );
};

Toolbar.defaultProps = {};

Toolbar.propTypes = {};

export default Toolbar;
