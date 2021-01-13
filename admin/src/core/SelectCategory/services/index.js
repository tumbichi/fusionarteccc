import { db } from '../../../services/firebase';
import { parseSnapshotToArray } from '../../../utils';

export const requestCategories = async () => {
  let snapshot;
  try {
    snapshot = await db.ref().child('Categorias').once('value');
  } catch (error) {
    return Promise.reject(error);
  }

  return Promise.resolve(parseSnapshotToArray(snapshot));
};
