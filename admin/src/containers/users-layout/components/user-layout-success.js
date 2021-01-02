/* eslint-disable react/prop-types */
import React from 'react';
import DataGrid from '../../../components/DataGrid';

const UserLayoutSuccess = ({ data, loading, onClickEdit, onClickDelete }) => {
  return (
    <DataGrid
      title="Usuarios"
      data={data}
      loading={loading}
      editUser={onClickEdit}
      deleteUser={onClickDelete}
    />
  );
};

export default UserLayoutSuccess;
