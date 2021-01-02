import { db } from '../../../services/firebase';
import { parseSnapshotToArray } from '../../../utils';

export const getAllUsers = async () => {
  let snapshot;
  try {
    snapshot = await db.ref().child('Usuarios').once('value');
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(parseSnapshotToArray(snapshot));
};
