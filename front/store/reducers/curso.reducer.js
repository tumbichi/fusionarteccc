import { TYPE_SET_CURSO } from '../actions/curso.action';

const initialState = {
  id: null,
  titulo: 'Este es un titulo de prueba',
  image: '',
  idProfesor: 1,
  duracion: '5h',
  fechaCreacion: '23/11/2020',
  precio: '$1500,00',
  categoria: 'Arte',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_SET_CURSO:
      return {
        ...state,
        curso: payload,
      };
    default:
      return state;
  }
};
