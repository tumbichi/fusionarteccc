import styled from 'styled-components';

/* eslint-disable import/prefer-default-export */
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 400px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  background: white;
  height: 400px;
  width: 400px;
  padding: 7px;
  border-radius: 7px;
  box-shadow: 1px -1px 92px -16px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px -1px 92px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px -1px 92px -16px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h3`
  color: red;
`;
