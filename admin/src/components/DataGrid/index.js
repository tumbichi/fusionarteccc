import PropTypes from 'prop-types';
import React from 'react';
import DataTable from 'react-data-table-component';
import { Edit2, Trash2, Eye } from 'react-feather';
import { ActionsWrapper, IconButtonContainer } from './styles';

const DataGrid = ({ data, deleteUser, editUser, detailsUser, title }) => {
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      hide: 'md',
    },
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'Apellido',
      selector: 'apellido',
      sortable: true,
      hide: 'sm',
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Fecha de Nacimiento',
      selector: 'fechaNacimiento',
      sortable: true,
    },
    {
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
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      title={title}
      responsive
      pagination
    />
  );
};

DataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
  detailsUser: PropTypes.func,
  title: PropTypes.string,
};

DataGrid.defaultProps = {
  data: [],
  deleteUser: () => {},
  editUser: () => {},
  detailsUser: () => {},
  title: 'Data grid table',
};

export default DataGrid;
