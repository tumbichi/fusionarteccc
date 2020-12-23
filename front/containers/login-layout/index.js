/* eslint-disable no-fallthrough */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import AlertWarningLabel from '../../components/Labels/AlertWarningLabel';
/* import { login } from '../../services/auth'; */
import { requestLogin, setErrorLogin } from '../../store/actions';
import { AUTH_ERRORS } from '../../constants';

// eslint-disable-next-line no-unused-vars
const LoginLayout = ({ goToMisCursos }) => {
  const dispatch = useDispatch();
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const loginError = useSelector(({ auth }) => {
    return auth.loginError;
  });

  useEffect(() => {
    if (loginError) {
      console.log('loginError', loginError.code);
      console.log();
    }
  }, [loginError]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(requestLogin(inputEmail, inputPassword));
  };

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
      default:
        // eslint-disable-next-line no-useless-return
        return;
    }
  }, []);

  const handleFocus = () => {
    if (loginError) {
      dispatch(setErrorLogin(null));
    }
  };

  // eslint-disable-next-line consistent-return
  const getMessageError = (messageCode) => {
    const error = AUTH_ERRORS.find(({ code }) => {
      return code === messageCode;
    });

    if (error) {
      return error.message;
    }
    // console.log('messageCode', messageCode);
  };

  return (
    <div className=" bg-withe flex flex-col justify-center items-center w-screen h-screen">
      <form
        className=" bg-secondary shadow-2xl rounded-lg py-8 flex flex-col items-center  px-8 w-full lg:w-1/3 lg:px-10"
        onSubmit={handleLogin}
      >
        <AlertWarningLabel
          containerStyle="my-8"
          show={1}
          messageLeft=""
          messageRigth={getMessageError(loginError)}
          typeOfLabel="bg-red-400"
        />

        <h1 className=" my-4 text-3xl text-primary font-extrabold">Fusionarte</h1>
        <InputText
          type="email"
          inputStyles=""
          name="email"
          placeholder="Email"
          value={inputEmail}
          onChange={handleChange}
          onFocus={handleFocus}
          containerStyle="w-full"
        />
        <InputText
          inputStyles=""
          name="password"
          type="password"
          value={inputPassword}
          placeholder="Contraseña"
          onChange={handleChange}
          onFocus={handleFocus}
          containerStyle="w-full"
        />
        <Button text="Iniciar sesion" color="secondary" type="submit" width="w-full py-3" />
      </form>
    </div>
  );
};

export default LoginLayout;
