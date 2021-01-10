import React from 'react';
import InputText from '../../../components/InputText/index';

const CreateCourseDefault = (onChangeInput, formData) => {
  return (
    <div>
      {' '}
      <div>Crear curso</div>
      <InputText
        width="100%"
        name="tituloCurso"
        placeholder="Titulo"
        onChange={onChangeInput}
        value={formData.titulo}
      />
      <InputText
        width="100%"
        name="descripcion"
        placeholder="Descripcion"
        onChange={onChangeInput}
        value={formData.descripcion}
      />
      <InputText
        width="100%"
        name="descripcion"
        placeholder="Precio"
        onChange={onChangeInput}
        value={formData.precio}
      />
      {/*   <InputText
    width="100%"
    name="imagen"
    placeholder="Imagen"
    type="file"
    onChange={onChangeInput}
  /> */}
    </div>
  );
};

export default CreateCourseDefault;
