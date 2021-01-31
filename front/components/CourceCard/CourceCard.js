/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Video, Clock } from 'react-feather';

const CourceCard = React.forwardRef(
  ({ onClick, href, titulo, idProfesor, duracion, urlImagen, containerStyle }, ref) => {
    const laNegra = 'La Negra';
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={` cursor-pointer rounded-md shadow-lg m-6 w-96 h-48 ${containerStyle}`}
      >
        <div
          className=" rounded-md bg-cover bg-center"
          alt="Imagen curso"
          style={{ backgroundImage: `url(${urlImagen})` }}
        >
          <div className="p-6 rounded-md text-white h-48 bg-black bg-opacity-50 flex flex-col justify-between">
            <div>
              <h1 className="text-xl tracking-wide font-bold">{titulo}</h1>
              <p className="font-semibold">
                Profesore&apos;: {idProfesor === 'J5It24U9TNSjaCZXRTobp4wvgwk1' ? laNegra : null}
              </p>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-1">
                <p>{duracion}</p>
                <Clock className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1">
                <p>12</p>
                <Video className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
);

CourceCard.defaultProps = {
  titulo: '',
  idProfesor: '',
  duracion: '',
  urlImagen: '',
  containerStyle: '',
};
CourceCard.propTypes = {
  titulo: PropTypes.string,
  idProfesor: PropTypes.string,
  duracion: PropTypes.string,
  urlImagen: PropTypes.string,
  containerStyle: PropTypes.string,
};

export default CourceCard;
