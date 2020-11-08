const initialState = {
  id: 0,
  nombre: 'El pity',
  apellido: 'QuienTeConocePapa?',
  email: 'elpity@pitymail.com',
  contraseña: 'qwedsazxc',
  rol: 0,
  fechaCreacion: '07/10/1997',
  fotoPerfil: null,
  loginError: false,
  loginErrorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return {
        ...state,
      };
  }
};
