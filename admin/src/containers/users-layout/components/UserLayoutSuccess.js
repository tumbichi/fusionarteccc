/* eslint-disable react/prop-types */
import React from 'react';
import DataGrid from '../../../components/DataGrid';

const UserLayoutSuccess = ({
  data,
  onClickEdit,
  onClickDelete,
  onClickDetails,
}) => {
  return (
    <DataGrid
      title="Usuarios"
      data={data}
      editUser={onClickEdit}
      deleteUser={onClickDelete}
      detailsUser={onClickDetails}
    />
  );
};

export default UserLayoutSuccess;
