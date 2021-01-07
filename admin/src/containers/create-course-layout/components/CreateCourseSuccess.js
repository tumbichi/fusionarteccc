import React from 'react';
import InputText from '../../../components/InputText/index';

const CreateCourseSuccess = (onChangeInput) => {
  return (
    <div>
      <div>Crear curso</div>
      <InputText
        width="100%"
        name="tituloCurso"
        placeholder="Titulo"
        onChange={onChangeInput}
      />
      <InputText
        width="100%"
        name="descripcion"
        placeholder="Descripcion"
        onChange={onChangeInput}
      />
      <select>
        <option>cateogria 1</option>
        <option>cateogria 2</option>
      </select>
      <InputText
        width="100%"
        name="descripcion"
        placeholder="Precio"
        onChange={onChangeInput}
      />
      <select>
        <option>profesor 1</option>
        <option>profesor 2</option>
      </select>
      <InputText
        width="100%"
        name="imagen"
        placeholder="Imagen"
        type="file"
        onChange={onChangeInput}
      />
    </div>
  );
};

export default CreateCourseSuccess;
