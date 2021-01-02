import PropTypes from 'prop-types';
import React from 'react';
import DataTable from 'react-data-table-component';
import { Edit2, Trash2 } from 'react-feather';
import { ActionsWrapper, BtnDelete, BtnEdit } from './styles';

const DataGrid = ({ data, deleteUser, editUser, loading, title }) => {
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
      name: 'Fecha Nacimiento',
      selector: 'fechaNacimiento',
      sortable: true,
    },
    {
      name: 'Acciones',
      cell: (row) => {
        return (
          <ActionsWrapper>
            <BtnEdit
              onClick={() => {
                editUser(row);
              }}
            >
              <Edit2 size={16} />
            </BtnEdit>
            <BtnDelete
              onClick={() => {
                deleteUser(row);
              }}
            >
              <Trash2 size={16} />
            </BtnDelete>
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
      progressPending={loading}
      responsive
      pagination
    />
  );
};

DataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
  loading: PropTypes.bool,
  title: PropTypes.string,
};

DataGrid.defaultProps = {
  data: [],
  deleteUser: () => {},
  editUser: () => {},
  loading: true,
  title: 'Data grid table',
};

export default DataGrid;
