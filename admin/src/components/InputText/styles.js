import styled from 'styled-components';

export const Wrapper = styled.input`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  min-width: 260px;
  max-width: 262px;
  border-radius: 4px;
  border: 0;
  padding: 0.7rem;
`;
