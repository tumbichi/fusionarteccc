import React from 'react';
import { Wrapper, ItemCell } from './styles';
import PropTypes from 'prop-types';

const ListItem = ({ columns, value }) => {

  const getCellWidth = () => {
    return `'${100 / columns.length}%'`
  }

  return (
    <Wrapper>
      {columns.map((column) => {
        return <ItemCell width={getCellWidth()}> <p>{value[column] || 'asd'}</p></ItemCell>
      })}
    </Wrapper>
  )
}

ListItem.defaultProps = {
  columns: [],
}

ListItem.PropTypes = {
  columns: PropTypes.array/* Of(PropTypes.string) */,
}

export default ListItem;