import { TYPE_SAVE_LOGIN, TYPE_SET_ERROR } from '../actions';

const initialState = {
  id: 0,
  nombre: 'El pity',
  apellido: 'QuienTeConocePapa?',
  email: 'elpity@pitymail.com',
  contraseña: 'qwedsazxc',
  rol: 0,
  fechaCreacion: '07/10/1997',
  fotoPerfil: null,
  loginError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_SAVE_LOGIN:
      return {
        ...state,
        user: {
          ...payload,
        },
      };
    case TYPE_SET_ERROR:
      return {
        ...state,
        loginError: payload,
      };
    default:
      return state;
  }
};
