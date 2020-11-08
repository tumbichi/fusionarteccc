import { login } from '../../services/auth';

export const TYPE_SAVE_LOGIN = 'SAVE_LOGIN';
export const TYPE_SET_ERROR = 'SET_ERROR';

export const saveLogin = (user) => {
  return {
    type: TYPE_SAVE_LOGIN,
    payload: user,
  };
};

export const setErrorLogin = (error) => {
  return {
    type: TYPE_SET_ERROR,
    payload: error,
  };
};

export const requestLogin = (email, password) => (dispatch) => {
  login(email, password)
    .then((response) => {
      const { uid, emailVerified, phoneNumber, photoURL, displayName } = response.user;
      dispatch(saveLogin({ uid, email, emailVerified, phoneNumber, photoURL, displayName }));
    })
    .catch(({ code, message }) => {
      dispatch(setErrorLogin({ code, message }));
    });
};
