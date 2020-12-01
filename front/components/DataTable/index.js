import React from 'react'
import { Body, CardContainer, Header } from './styles';
import PropTypes from 'prop-types';

const DataTable = ({ header, body }) => {
  return (
    <CardContainer>
      <Header>
        {header}
      </Header>
      <Body>
        {body}
      </Body>
    </CardContainer>
  )
}

DataTable.defaultProps = {
   header: <></>,
   body: <></>,
}

DataTable.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
}

export default DataTable;
