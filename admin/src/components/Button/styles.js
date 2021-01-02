import styled from 'styled-components';
import { pallette } from '../../constants';

export const Wrapper = styled.button`
  height: ${() => '2.5rem'};
  width: ${({ width }) => width};
  padding: 0.3rem;
  min-width: 260px;
  max-width: 262px;
  border-radius: 36px;
  background-color: ${pallette.primary};
  color: ${pallette.secondary};

  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-width: 0;
  font-family: sans-serif;
  font-weight: normal;
  font-size: inherit;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: 100%;
`;
