import React from 'react';
import { Menu } from 'react-feather';
import {
  HeaderContainer,
  TitleFusion,
  TitleAdmin,
  IconContainer,
  IconBackground,
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
      <TitleFusion>FUSIONARTE</TitleFusion>
      <TitleAdmin>Admin</TitleAdmin>
    </HeaderContainer>
  );
};

export default Header;
