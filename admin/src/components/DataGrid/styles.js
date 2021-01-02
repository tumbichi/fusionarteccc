import styled from 'styled-components';
import { pallette } from '../../constants';

export const IconButtonContainer = styled.button`
  cursor: pointer;
  padding: 8px;
  background: ghostwhite;
  border-radius: 22px;
  border: none;

  svg {
    stroke: ${pallette.primary};
  }
  :hover {
    background: ${pallette.primary};
    svg {
      stroke: ghostwhite;
    }
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
