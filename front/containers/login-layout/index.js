/* eslint-disable no-fallthrough */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
/* import { login } from '../../services/auth'; */
import { requestLogin, setErrorLogin } from '../../store/actions';
import { FlexContainer as Container } from '../../layouts';
import { AUTH_ERRORS } from '../../constants/';

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

  const handleLogin = () => {
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

  const getMessageError = (messageCode) => {
    const error = AUTH_ERRORS.find(({ code }) => {
      return code === messageCode;
    });

    if (error) {
      return error.message;
    } else {
      console.log('messageCode', messageCode);
    }
  };

  return (
    <Container>
      <InputText name="email" placeholder="Email" value={inputEmail} onChange={handleChange} onFocus={handleFocus} />
      <InputText
        name="password"
        type="password"
        value={inputPassword}
        placeholder="Contraseña"
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {loginError ? <div>{getMessageError(loginError.code)}</div> : <div>{'-'}</div>}
      <Button text="Iniciar sesion" onClick={handleLogin} />
    </Container>
  );
};

export default LoginLayout;
