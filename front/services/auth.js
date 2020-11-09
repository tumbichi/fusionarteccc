import { auth } from './firebase';
import { saveUser } from './users';

export const login = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (user) => {
  let userCreatedAuth;
  // eslint-disable-next-line no-useless-catch
  try {
    userCreatedAuth = await auth.createUserWithEmailAndPassword(user.email, user.password);
  } catch (error) {
    throw error;
  }

  if (userCreatedAuth.user.uid) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await saveUser({ id: userCreatedAuth.user.uid, ...user });
    } catch (error) {
      throw error;
    }
  }

  throw new Error({ code: 'ErrorInesperado', message: 'Ha ocurrido un error inesperado' });
};
