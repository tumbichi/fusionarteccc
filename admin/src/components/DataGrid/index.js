import React, { useEffect, useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import { db } from '../../services/firebase';

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
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const items = [];
    db.ref('Usuarios').once('value', (snap) => {
      snap.forEach((child) => {
        items.push({
          _key: child.key,
          ...child.val(),
        });
      });
      setDataSource(items);
    });
  }, []);

  return (
    <ReactDataGrid
      idProperty="id"
      columns={columns}
      dataSource={dataSource}
      style={gridStyle}
    />
  );
};
export default DataGrid;
