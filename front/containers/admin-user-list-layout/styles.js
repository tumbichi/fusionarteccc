import styled from 'styled-components';

export const UserListWrapper = styled.div`
width: ${({ width }) => width || 'auto'};
height: ${({ height }) => height || 'auto'};
display: flex;
background: red;
flex-direction: column;
`;
