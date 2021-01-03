import { db } from '../../../services/firebase';
import { parseSnapshotToArray } from '../../../utils';

export const fetchAllUsers = async () => {
  let snapshot;
  try {
    snapshot = await db.ref().child('Usuarios').once('value');
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(parseSnapshotToArray(snapshot));
};

export const submitUserUpdate = async (id, userData) => {
  console.log('submitUserUpdate', id, userData);
  try {
    await db.ref().child('Usuarios').child(id).update({
      nombre: userData.nombre,
      apellido: userData.apellido,
      rolId: userData.rolId,
    });
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve();
};
