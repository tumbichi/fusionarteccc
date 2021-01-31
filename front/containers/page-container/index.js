import React from 'react';
import PropTypes from 'prop-types';

const PageContainer = ({ children, containerStyle }) => {
  return <div className={`height-toolbar p-12 ${containerStyle}`}>{children}</div>;
};

PageContainer.defaultProps = {
  children: null,
  containerStyle: '',
};

PageContainer.propTypes = {
  children: PropTypes.element,
  containerStyle: PropTypes.string,
};

export default PageContainer;
