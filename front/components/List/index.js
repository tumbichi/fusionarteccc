import React from 'react'
import { Wrapper, ListContainer } from './styles';
import PropTypes from 'prop-types';

const List = ({children , title}) => {
    return (
        <Wrapper>
            <ListContainer>
                {children}
            </ListContainer>
        </Wrapper>
    )
}

List.defaultProps = {
    children: <></>,
};

List.propTypes = {
    children: PropTypes.node,
};

export default List;
