/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`;

export const ContentWrapper = styled.div`
  height: calc(100% - 40px);
  width: ${({ open }) => (open ? 'calc(100% - 190px)' : 'calc(100% - 88px)')};
  padding: 12px;
`;

export const MainContent = styled.div`
  display: flex;
  height: calc(100% - 68px);
  align-items: flex-start;
`;
