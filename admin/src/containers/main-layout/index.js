import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { Container, HorizontalFlex } from './styles';

const DefaultContainer = ({ children }) => {
  return (
    <Container>
      <Header />
      <HorizontalFlex>
        <SideBar />
        {children}
      </HorizontalFlex>
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
