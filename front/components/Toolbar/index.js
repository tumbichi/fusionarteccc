import React from 'react';
import PropTypes from 'prop-types';
import { ToolbarWrapper, ImageWrapper } from './styles';
const Toolbar = ({ right }) => {
  return (
    <ToolbarWrapper>
      <div>logo</div>
      <div>{right}</div>
    </ToolbarWrapper>
  );
};

Toolbar.defaultProps = {};

Toolbar.propTypes = {};

export default Toolbar;
