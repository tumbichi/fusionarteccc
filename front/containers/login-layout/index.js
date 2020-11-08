/* eslint-disable no-fallthrough */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState, useCallback } from 'react';
import { /* useSelector, */ useDispatch } from 'react-redux';
import { Container } from './styles';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
/* import { login } from '../../services/auth'; */
import { requestLogin } from '../../store/actions';
// eslint-disable-next-line no-unused-vars
const LoginLayout = ({ goToMisCursos }) => {
  const dispatch = useDispatch();
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');

  /* const user = useSelector(({user}) => user); */

  useEffect(() => {}, []);

  const handleLogin = () => {
    dispatch(requestLogin(inputEmail, inputPassword));
  };

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        console.log(name, value);
        setEmail(value);
        return;
      case 'password':
        console.log(name, value);
        setPassword(value);
      default:
        return;
    }
  }, []);

  return (
    <Container>
      <InputText name="email" placeholder="Email" value={inputEmail} onChange={handleChange} />
      <InputText
        name="password"
        type="password"
        value={inputPassword}
        placeholder="Contraseña"
        onChange={handleChange}
      />
      <Button text="Iniciar sesion" onClick={handleLogin} />
    </Container>
  );
};

export default LoginLayout;
