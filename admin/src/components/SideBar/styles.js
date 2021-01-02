/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { pallette } from '../../constants';

export const SideBarContainer = styled.div`
  height: 100%;
  width: ${({ open }) => (open ? '190px' : '64px')};
  min-width: ${({ open }) => (open ? '190px' : '64px')};
  display: flex;
  flex-direction: column;
  background-color: ${pallette.primary};
  overflow: hidden;
  transition: all 0.3s;
  padding: 12px 0;
`;

export const OpenArea = styled.div`
  height: 100%;
`;

export const MenuContainer = styled.li`
  min-height: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ open }) => (open ? 'flex-start' : 'center')};
  color: ${pallette.secondary};
  padding: ${({ open }) => (open ? '0px 8px' : 0)};

  :hover {
    background: ${pallette.secondary};
    color: ${pallette.primary};
  }

  p {
    width: 100%;
    display: ${({ open }) => (open ? 'block' : 'none')};
    padding: 0 0 0 12px;
  }

  svg {
    min-height: 24px;
    min-width: 24px;
  }
`;
