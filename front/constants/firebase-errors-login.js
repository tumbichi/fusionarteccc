// eslint-disable-next-line import/prefer-default-export
export const AUTH_ERRORS_LOGIN = [
  {
    code: 'auth/internal-error',
    message: '¡Ups! Error inesperado, intente nuevamente',
  },
  {
    code: 'auth/invalid-email',
    message: 'Debe ingresar un email valido',
  },
  {
    code: 'auth/user-not-found',
    message: 'No existe el usuario que desea ',
  },
  {
    code: 'auth/too-many-requests',
    message: 'Usted intento demasiadas veces, por favor intente de nuevo mas tarde',
  },
  {
    code: 'auth/wrong-password',
    message: 'Contraseña incorrecta',
  },
];
