import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { fetchUsers } from '../../services';

const DataGrid = () => {
  const columns = [
    {
      name: 'id',
      selector: (row) => {
        console.log('row', row);
        return row.id;
      },
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
  ];
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log('fetchUserError', error);
      });
  }, []);

  return <DataTable columns={columns} data={users} />;
};

export default DataGrid;

/*  */
