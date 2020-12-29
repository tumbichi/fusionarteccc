import { AUTH_ERRORS } from '../constants';

export const getMessageError = (messageCode) => {
  const currentError = AUTH_ERRORS.find(({ code }) => {
    return code === messageCode;
  });

  if (currentError) {
    return currentError.message;
  }
  return null;
};

export const isEmailError = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return true;
    case 'auth/invalid-email':
      return true;
    case 'auth/user-not-found':
      return true;
    default:
      return false;
  }
};

export const isPasswordError = (errorCode) => {
  switch (errorCode) {
    case 'auth/invalid-password':
      return true;
    case 'auth/wrong-password':
      return true;
    default:
      return false;
  }
};
