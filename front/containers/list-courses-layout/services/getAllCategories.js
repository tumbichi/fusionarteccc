import { db } from '../../../services';
import { parseSnapshotToArray } from '../../../utils/firebase-helper';

export const getAllCategories = async () => {
  let snapshot;
  try {
    snapshot = await db.ref().children('Categorias').once('values');
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(parseSnapshotToArray(snapshot));
};
