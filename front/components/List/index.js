import React from 'react'
import { ListWrapper, Lista } from './styles';
import PropTypes from 'prop-types';

const List = ({children , title}) => {
    return (
        <ListWrapper>
            <div>{ title }</div>
            <Lista>
                {children}
            </Lista>
        </ListWrapper>
    )
}

List.defaultProps = {
    title: '',
    children: <></>,
};

List.prototype = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default List;
