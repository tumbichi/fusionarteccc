import { parseSnapshotToArray } from '../utils';
import { db } from './firebase';

// eslint-disable-next-line import/prefer-default-export
export const saveUser = async ({
  id,
  email,
  nombre,
  apellido,
  fechaNacimiento,
}) => {
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

export const getAllUsers = async () => {
  let snapshot;
  try {
    snapshot = await db.ref().child('Usuarios').once('value');
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(parseSnapshotToArray(snapshot));
};

export const getOneUser = async (id) => {
  let snapshot;
  try {
    snapshot = await db.ref().child('Usuarios').get(id);
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(parseSnapshotToArray(snapshot));
};

export const createUser = async () => {
  return null;
};

export const editUser = async () => {
  return null;
};

export const deleteUser = async () => {
  return null;
};
