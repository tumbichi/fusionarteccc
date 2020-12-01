import React from 'react';
import { Wrapper, ItemCell} from './styles';
import PropTypes from 'prop-types';

const HeaderTable = ({ columns , value }) => {

  const getCellWidth = () => {
    return `'${100 / columns.length}%'`
  }

  return (
    <Wrapper>
        {columns.map((column) => {
        return <ItemCell width={getCellWidth()}> <p>{column}</p></ItemCell>
      })}
    </Wrapper>
  )
}

HeaderTable.defaultProps = {
  columns: [],
}

HeaderTable.PropTypes = {
  columns: PropTypes.array/* Of(PropTypes.string) */,
}

export default HeaderTable;
