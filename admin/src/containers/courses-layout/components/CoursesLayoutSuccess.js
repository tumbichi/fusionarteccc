/* eslint-disable react/prop-types */
import React from 'react';
import DataGrid from '../../../components/DataGrid';

const CoursesLayoutSuccess = ({
  courses,
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
      name: 'Titulo',
      selector: 'titulo',
      sortable: true,
    },
    {
      name: 'Duracion',
      selector: 'duracion',
      sortable: true,
    },
    {
      name: 'Fecha de Creacion',
      selector: 'fechaCreacion',
      sortable: true,
    },
    {
      name: 'Precio',
      selector: 'precio',
      sortable: true,
    },
  ];

  return (
    <DataGrid
      title="Cursos"
      data={courses}
      columns={columns}
      detailsUser={onClickDetails}
      editUser={onClickEdit}
      deleteUser={onClickDelete}
    />
  );
};

export default CoursesLayoutSuccess;
