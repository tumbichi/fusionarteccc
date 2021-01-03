/* eslint-disable import/named */
import React from 'react';
import { InputText } from '../../components';

const CreateCourseLayout = () => {
  return (
    <div>
      <div>Crear curso</div>
      <InputText width="100%" name="tituloCurso" placeholder="Titulo" />
      <InputText width="100%" name="descripcion" placeholder="Descripcion" />
      <select>
        <option>cateogria 1</option>
        <option>cateogria 2</option>
      </select>
      <InputText width="100%" name="descripcion" placeholder="Precio" />
      <select>
        <option>profesor 1</option>
        <option>profesor 2</option>
      </select>
      <InputText width="100%" name="imagen" placeholder="Imagen" type="file" />
    </div>
  );
};

export default CreateCourseLayout;
