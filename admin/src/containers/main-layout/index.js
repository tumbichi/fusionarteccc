/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar';
import {
  Container,
  HorizontalFlex,
  ContentWrapper,
  MainContent,
} from './styles';

const DefaultContainer = ({ children }) => {
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

DefaultContainer.defaultProps = {
  children: null,
};

DefaultContainer.propTypes = {
  children: PropTypes.node,
};

export default DefaultContainer;
