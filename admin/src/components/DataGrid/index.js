import PropTypes from 'prop-types';
import React from 'react';
import DataTable from 'react-data-table-component';
import { Edit2, Trash2, Eye } from 'react-feather';
import { ActionsWrapper, IconButtonContainer } from './styles';

const DataGrid = ({
  columns,
  data,
  deleteUser,
  editUser,
  detailsUser,
  title,
}) => {
  const actions = {
    name: 'Acciones',
    cell: (row) => {
      return (
        <ActionsWrapper>
          <IconButtonContainer
            onClick={() => {
              detailsUser(row);
            }}
          >
            <Eye size={16} />
          </IconButtonContainer>
          <IconButtonContainer
            onClick={() => {
              editUser(row);
            }}
          >
            <Edit2 size={16} />
          </IconButtonContainer>
          <IconButtonContainer
            onClick={() => {
              deleteUser(row);
            }}
          >
            <Trash2 size={16} />
          </IconButtonContainer>
        </ActionsWrapper>
      );
    },
  };

  return (
    <DataTable
      columns={[...columns, actions]}
      data={data}
      title={title}
      pagination
      responsive
    />
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
  detailsUser: PropTypes.func,
  title: PropTypes.string,
};

DataGrid.defaultProps = {
  columns: [],
  data: [],
  deleteUser: () => {},
  editUser: () => {},
  detailsUser: () => {},
  title: 'Data grid table',
};

export default DataGrid;
