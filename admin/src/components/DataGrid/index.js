import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { getAllUsers, getOneUser } from '../../services';

const DataGrid = () => {
  const BtnEdit = styled.button`
    cursor: pointer;
    padding: 7px;
    background: orange;
    border-radius: 22px;
    border: none;
    box-shadow: 2px 2px 2px solid orangered;
  `;
  const BtnDestroy = styled.button`
    cursor: pointer;
    padding: 7px;
    background: red;
    border-radius: 22px;
    border: none;
    box-shadow: 2px 2px 2px solid orangered;
  `;

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
    {
      name: 'Editar',
      cell: () => {
        return <BtnEdit>Editar</BtnEdit>;
      },
    },
    {
      name: 'Eliminar',
      cell: () => {
        return <BtnDestroy>Eliminar</BtnDestroy>;
      },
    },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(users);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log('fetchUserError', error);
      })
      .finally(setLoading(false));

    getOneUser('2YoII9GPqVaAadecnl5nLRuO6052')
      .then((data) => {
        console.log('one', data);
      })
      .catch((error) => {
        console.log('fetchUserError', error);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <DataTable
      columns={columns}
      data={users}
      progressPending={loading}
      responsive={1}
      pagination={1}
    />
  );
};

export default DataGrid;
