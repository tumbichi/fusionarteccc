import React, { useCallback, useState } from 'react';
import { registerUser } from '../../services';
import { FlexContainer as Container } from '../../layouts';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

const RegisterLayout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleInputTextChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      // eslint-disable-next-line default-case
      switch (name) {
        case 'email':
          setEmail(value);
          return;
        case 'password':
          setPassword(value);
          return;
        case 'password2':
          setPassword2(value);
          return;
        case 'nombre':
          setNombre(value);
          return;
        case 'apellido':
          setApellido(value);
          return;
        case 'fechaNacimiento':
          setFechaNacimiento(value);
          // eslint-disable-next-line no-useless-return
          return;
      }
    },
    [setEmail, setPassword, setPassword2, setNombre, setApellido, setFechaNacimiento]
  );

  const handleErrors = ({ email, password, password2, nombre, apellido, fechaNacimiento }) => {
    if (!email) {
      return 'Ingrese un email';
    }
    if (!password) {
      return 'Ingrese contraseña';
    }
    if (!password2) {
      return 'Ingrese contraseña';
    }
    if (password !== password2) {
      return 'Las contraseñas no coinciden';
    }
    if (password.length < 6) {
      return 'Contraseña demasiado corta (mas de 6 caracteres)';
    }
    if (password.length > 20) {
      return 'Contraseña demasiado larga (menos de 20 caracteres)';
    }
    if (!nombre) {
      return 'Ingrese nombre';
    }
    if (nombre.length < 2) {
      return 'ingrese nombre valido';
    }
    if (!apellido) {
      return 'Ingrese apellido';
    }
    if (apellido.length < 3) {
      return 'Ingrese apellido valido';
    }
    if (!fechaNacimiento) {
      return 'Ingrese fecha de nacimiento';
    }
    if (!fechaNacimiento /* datejs */) {
      return 'Ingrese fecha de nacimiento valida';
    }
    return '';
  };

  const handleRegister = useCallback(() => {
    /*
    console.log('email', email);
    console.log('password', password);
    console.log('password2', password2);
    console.log('nombre', nombre);
    console.log('apellido', apellido);
    console.log('fechaNacimiento', fechaNacimiento);
   */
    const thereIsAnError = handleErrors({ email, password, password2, nombre, apellido, fechaNacimiento });
    if (thereIsAnError) {
      console.log(thereIsAnError);
    } else {
      registerUser({ email, password, password2, nombre, apellido, fechaNacimiento })
        .then((user) => {
          console.log('Usuario creado', user);
        })
        .catch((error) => {
          console.log('Error register user', error);
        });
    }
  }, [email, password, password2, nombre, apellido, fechaNacimiento]);

  return (
    <Container>
      <InputText type="email" name="email" placeholder="Email" value={email} onChange={handleInputTextChange} />
      <InputText
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={handleInputTextChange}
      />
      <InputText
        type="password"
        name="password2"
        placeholder="Confirme contraseña"
        value={password2}
        onChange={handleInputTextChange}
      />
      <InputText name="nombre" placeholder="Nombre" value={nombre} onChange={handleInputTextChange} />
      <InputText name="apellido" placeholder="Apellido" value={apellido} onChange={handleInputTextChange} />
      <InputText
        type="date"
        name="fechaNacimiento"
        placeholder="Fecha de nacimiento"
        value={fechaNacimiento}
        onChange={handleInputTextChange}
      />
      <Button text="Registrate" onClick={handleRegister} />
    </Container>
  );
};
export default RegisterLayout;
