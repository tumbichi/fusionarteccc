import React from 'react';
import {} from './styles';
import Button from '../../components/Button';

const InfoCourseLayout = ({ name, goToMercadoPago, goToCourse }) => {
  return (
    <div>
      <div>Curso de {name}</div>
      <Button text="comprar" onClick={goToMercadoPago} />
      <div>
        <Button text="Image" onClick={() => goToCourse(name)} />
      </div>
      <div>
        <div>duracion: 12h + icon</div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </div>
        <div>Contenido</div>
        <div>1. Personalidad y voz 2. Música y vegetación 3. Lectura de partituras 4. Grabación en estudio</div>
      </div>
    </div>
  );
};

export default InfoCourseLayout;
