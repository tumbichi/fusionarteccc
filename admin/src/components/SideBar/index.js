/* eslint-disable react/prop-types */
import React from 'react';
import { Book, User, Smile } from 'react-feather';
import { Link } from 'react-router-dom';
import { SideBarContainer, MenuContainer, OpenArea } from './styles';

const SideBar = ({ open, doCollapse }) => {
  return (
    <SideBarContainer open={open}>
      <Link to="/courses" style={{ textDecoration: 'none' }}>
        <MenuContainer open={open}>
          <Book size={24} />
          <p>Cursos</p>
        </MenuContainer>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <MenuContainer open={open}>
          <User size={24} />
          <p>Profesores</p>
        </MenuContainer>
      </Link>
      <Link to="/users" style={{ textDecoration: 'none' }}>
        <MenuContainer open={open}>
          <Smile size={24} />
          <p>Alumnos</p>
        </MenuContainer>
      </Link>
      <OpenArea onClick={doCollapse} />
    </SideBarContainer>
  );
};

export default SideBar;
