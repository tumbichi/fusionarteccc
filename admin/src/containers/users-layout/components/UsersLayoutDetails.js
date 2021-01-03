/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

const UserLayoutDetails = ({ requestRoles, user, roles, back }) => {
  const rolesNotExist = roles.length === 0;

  useEffect(() => {
    if (rolesNotExist) {
      requestRoles();
    }
  });

  return (
    <>
      <button type="button" onClick={back}>
        Back
      </button>
      <h1>Details:</h1>
      <p>email: {user.email}</p>
      <p>id: {user.id}</p>
      <p>nombre: {user.nombre}</p>
      <p>apellido: {user.apellido}</p>
      <p>fechaNacimiento: {user.fechaNacimiento}</p>
      <p>fechaCreacion: {user.fechaCreacion}</p>
      {rolesNotExist ? (
        <p> - </p>
      ) : (
        <p>rol: {roles.find((rol) => user.rolId === rol.id).descripcion}</p>
      )}
      <p>Cursos: Vacio :0 </p>
    </>
  );
};

export default UserLayoutDetails;
