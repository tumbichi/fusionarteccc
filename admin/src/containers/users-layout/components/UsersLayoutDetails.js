/* eslint-disable react/prop-types */
import React from 'react';

const UserLayoutDetails = ({ user, back }) => {
  return (
    <>
      <button type="button" onClick={back}>
        Back
      </button>
      <h1>Details:</h1>
      <p>id: {user.id}</p>
      <p>nombre: {user.nombre}</p>
      <p>apellido: {user.apellido}</p>
      <p>fechaNacimiento: {user.fechaNacimiento}</p>
      <p>email: {user.email}</p>
    </>
  );
};

export default UserLayoutDetails;
