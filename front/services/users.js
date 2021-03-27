import { parseSnapshotToArray } from '../utils/firebase-helper';
import { db } from './firebase';

// eslint-disable-next-line import/prefer-default-export
export const saveUser = async ({ id, email, nombre, apellido, fechaNacimiento, profileImageUrl }) => {
  let response;
  let fechaCreacion;
  let rolId;
  const ID_ROL_ALUMNOS = 2;

  /* const userId = db.ref().child('Usuarios').push().key; */
  // eslint-disable-next-line no-useless-catch
  db.ref()
    .child('Usuarios')
    .child(id)
    .set(
      {
        id,
        email,
        nombre,
        apellido,
        fechaNacimiento,
        fechaCreacion: new Date().toISOString(),
        profileImageUrl,
        rolId: ID_ROL_ALUMNOS,
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
      fechaCreacion,
      profileImageUrl,
      rolId,
    };
  }

  return response;
};

export const suscribeToUser = async (callback) => {
  db.ref()
    .child('Usuarios')
    .on('value', (snapshot) => {
      if (snapshot) {
        const arr = parseSnapshotToArray(snapshot);
        console.log('arrUsuarios', arr);
        callback(arr);
      }
    });
};
