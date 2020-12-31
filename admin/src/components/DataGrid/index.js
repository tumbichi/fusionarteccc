import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table';
import { fetchUsers } from '../../services';

const DataGrid = () => {
  const gridStyle = { minHeight: 550 };
  const columns = [
    { name: 'nombre', header: 'Nombre', maxWidth: 400, defaultFlex: 1 },
    { name: 'apellido', header: 'Apellido', maxWidth: 400, defaultFlex: 1 },
    { name: 'email', header: 'Email', maxWidth: 400, defaultFlex: 1 },
    {
      name: 'fechaNacimiento',
      header: 'Fecha de Nacimiento',
      maxWidth: 400,
      defaultFlex: 1,
    },
    { name: '_key', header: 'key', maxWidth: 400, defaultFlex: 1 },
  ];
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log('fetchUserError', error);
      });
  }, []);
  np;
  return (
    <DataTable
      idProperty="id"
      columns={columns}
      data={users}
      style={gridStyle}
    />
  );
};

export default DataGrid;
