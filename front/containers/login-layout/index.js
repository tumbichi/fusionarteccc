/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-fallthrough */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import AlertWarningLabel from '../../components/Labels/AlertWarningLabel';
/* import { login } from '../../services/auth'; */
import { requestLogin, setErrorLogin } from '../../store/actions';
import { getMessageError, isEmailError, isPasswordError } from '../../utils';
// eslint-disable-next-line no-unused-vars
const LoginLayout = ({ goToMisCursos }) => {
  const dispatch = useDispatch();
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  /*   const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState(''); */
  const { loginError, user } = useSelector(({ auth }) => {
    return { loginError: auth.loginError, user: auth.user };
  });
  const router = useRouter();

  useEffect(() => {
    if (loginError) {
      console.log('loginError', loginError.code);
      console.log('loginErrorMessage', loginError.message);
      getMessageError(loginError.code);
    }
  }, [loginError]);

  useEffect(() => {
    if (user) {
      goToMisCursos();
    }
  }, []);

  const goToRegister = () => {
    router.push(`/auth/register`);
  };
  const goToForgotPassword = () => {
    router.push(`/auth/forgot-password`);
  };

  // eslint-disable-next-line no-shadow
  /*   const handleErrors = ({ inputEmail, inputPassword }) => {
    let isAnError = false;
    if (inputEmail === '') {
      setEmailError('Debe ingresar un email.');
      isAnError = isAnError || true;
    }
    if (inputPassword === '') {
      setPasswordError('Debe ingresar una contraseña.');
      isAnError = isAnError || true;
    }
    return isAnError;
  }; */

  const handleLogin = (e) => {
    e.preventDefault();
    /* const thereIsAnError = handleErrors({ inputEmail, inputPassword });
    if (thereIsAnError) {
      // console.log('setemailerror', emailError);
    } else {
      setEmailError('');
      setPasswordError('');
      dispatch(requestLogin(inputEmail, inputPassword));
    } */
    dispatch(requestLogin(inputEmail, inputPassword));
  };

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
        /* setEmailError(''); */
        return;
      case 'password':
        setPassword(value);
      /* setPasswordError(''); */
      default:
        // eslint-disable-next-line no-useless-return
        return;
    }
  }, []);

  const handleError = (inputName) => {
    // eslint-disable-next-line default-case
    switch (inputName) {
      case 'email':
        if (isEmailError(loginError.code)) {
          return getMessageError(loginError.code);
        }
        break;
      case 'password':
        if (isPasswordError(loginError.code)) {
          return getMessageError(loginError.code);
        }
        break;
    }
    return null;
  };

  const handleFocus = () => {
    if (loginError) {
      dispatch(setErrorLogin(null));
    }
  };

  return (
    <div className=" bg-withe flex flex-col justify-center items-center w-screen height-toolbar">
      <form
        className=" bg-secondary shadow-2xl rounded-lg space-y-3 flex flex-col items-center  p-6 w-full lg:w-3/6 lg:px-10"
        onSubmit={handleLogin}
      >
        <AlertWarningLabel
          containerStyle=""
          show={loginError && !isEmailError(loginError.code) && !isPasswordError(loginError.code)}
          message={loginError ? getMessageError(loginError.code) : null}
        />
        <h1 className="text-4xl text-primary font-extrabold">Fusionarte</h1>
        <InputText
          type="email"
          name="email"
          placeholder="Email"
          value={inputEmail}
          onChange={handleChange}
          onFocus={handleFocus}
          containerStyle="w-full"
          errorText={loginError ? handleError('email') : null}
        />
        <InputText
          type="password"
          name="password"
          placeholder="Contraseña"
          value={inputPassword}
          onChange={handleChange}
          onFocus={handleFocus}
          containerStyle="w-full"
          errorText={loginError ? handleError('password') : null}
        />
        <button
          onClick={goToForgotPassword}
          type="button"
          className="text-primary text-sm text-left w-full focus:outline-none"
        >
          Olvidé mi contraseña
        </button>
        <Button text="Iniciar sesion" color="secondary" type="submit" width="w-full" />
        <Button
          text="No tenes cuenta? ¡Registrate!"
          color="tertiary"
          type="button"
          onClick={goToRegister}
          width="w-full"
        />
      </form>
    </div>
  );
};

export default LoginLayout;
