/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { pallette } from '../../constants';

export const IconContainer = styled.div`
  display: flex;
  color: ${pallette.primary};
  width: 64px;
  justify-content: center;
`;

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  max-width: 64px;
  padding: 6px 6px;
  margin: 16px 12px;
  background-color: ${pallette.secondary};
`;

export const TitleFusion = styled.p`
  color: ${pallette.primary};
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.05em;
`;

export const TitleAdmin = styled.p`
  align-self: flex-end;
  font-size: 12px;
  color: ${pallette.primary};
  font-weight: 300;
`;

export const HeaderContainer = styled.div`
  height: ${({ height }) => height || '44px'};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.1rem;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  background-color: ${pallette.secondary};
`;
