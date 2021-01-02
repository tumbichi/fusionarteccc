/* eslint-disable react/prop-types */
import React from 'react';
import DataGrid from '../../../components/DataGrid';

const UserLayoutSuccess = ({
  data,
  onClickEdit,
  onClickDelete,
  onClickDetails,
}) => {
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
  ];

  return (
    <DataGrid
      title="Usuarios"
      data={data}
      columns={columns}
      editUser={onClickEdit}
      deleteUser={onClickDelete}
      detailsUser={onClickDetails}
    />
  );
};

export default UserLayoutSuccess;
