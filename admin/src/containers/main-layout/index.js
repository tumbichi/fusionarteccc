/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar';
import { Container, ContentWrapper, MainContent } from './styles';

const MainLayout = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false);

  const handleCollapseSideBar = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <Container>
      <Header open={sideOpen} doCollapse={handleCollapseSideBar} />
      <MainContent>
        <SideBar open={sideOpen} doCollapse={handleCollapseSideBar} />
        <ContentWrapper>{children}</ContentWrapper>
      </MainContent>
    </Container>
  );
};

MainLayout.defaultProps = {
  children: null,
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
