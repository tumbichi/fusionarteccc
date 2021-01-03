/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

const CoursesLayoutDetails = ({ course, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Volver</button>
      <h1>Detalle del curso: {course.titulo} </h1>
      <img src={course.urlImagen} height="auto" width="420px" />
      <p>
        Descripcion: <br /> {course.descripcion}
      </p>
      <p>Precio: {course.precio}</p>
    </div>
  );
};

export default CoursesLayoutDetails;
