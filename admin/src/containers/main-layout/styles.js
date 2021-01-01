/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`;

export const HorizontalFlex = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  width: ${({ open }) => (open ? 'calc(100% - 190px)' : 'calc(100% - 64px)')};
  padding: 12px;
`;

export const MainContent = styled.div`
  display: flex;
  height: calc(100% - 44px);
  align-items: flex-start;
`;
