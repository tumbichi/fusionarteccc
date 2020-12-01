import styled from 'styled-components';

export const Wrapper = styled.ul`
  width: ${({ width }) => width || 'auto'};
  height:  ${({ height }) => height || 'auto'} ;
  background: whitesmoke;
  display: flex;
  justify-content: space-around;
  padding:  ${({ padding }) => padding || '8px'} 0 ;
`;

export const ItemCell = styled.li`
  width: ${({ width }) => width || 'auto'};
  flex: 1;
  overflow: hidden;
  p {
    text-align: center;
  }
`