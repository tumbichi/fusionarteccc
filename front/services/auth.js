import { auth } from './firebase';

export const login = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw error;
  }
};

export const register = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
};
