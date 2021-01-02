import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import {
  HeaderContainer,
  TitleFusion,
  TitleAdmin,
  IconContainer,
  IconBackground,
  LogoContainer,
} from './styles';

// eslint-disable-next-line react/prop-types
const Header = ({ open, doCollapse }) => {
  return (
    <HeaderContainer>
      <IconContainer open={open}>
        <IconBackground open={open}>
          <Menu
            size={24}
            onClick={() => {
              doCollapse();
            }}
          />
        </IconBackground>
      </IconContainer>
      <LogoContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <TitleFusion>FUSIONARTE</TitleFusion>
          <TitleAdmin>Admin</TitleAdmin>
        </Link>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
