import { db } from './firebase';

// eslint-disable-next-line import/prefer-default-export
export const saveUser = async ({ id, email, nombre, apellido, fechaNacimiento }) => {
  let response;

  /* const userId = db.ref().child('Usuarios').push().key; */
  // eslint-disable-next-line no-useless-catch
  db.ref()
    .child('Usuarios')
    .child(id)
    .set(
      {
        email,
        nombre,
        apellido,
        fechaNacimiento,
        fechaCreacion: new Date(),
      },
      (error) => {
        if (error) {
          response = error;
        } else {
          response = null;
        }
      }
    );

  if (!response) {
    return {
      id,
      email,
      nombre,
      apellido,
      fechaNacimiento,
    };
  }

  return response;
};
