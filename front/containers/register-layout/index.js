import React, { useCallback, useState } from 'react';
import { registerUser } from '../../services';
import { FlexContainer as Container, FormContainer, FlexRowContainer as FlexRow } from '../../layouts';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

const RegisterLayout = ({ goToHome }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [password2, setPassword2] = useState({ value: '', error: '' });
  const [nombre, setNombre] = useState({ value: '', error: '' });
  const [apellido, setApellido] = useState({ value: '', error: '' });
  const [fechaNacimiento, setFechaNacimiento] = useState({ value: '', error: '' });
  const handleInputTextChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      // eslint-disable-next-line default-case
      switch (name) {
        case 'email':
          setEmail((prevState) => {
            return { ...prevState, value, error: '' };
          });
          return;
        case 'password':
          setPassword((prevState) => {
            return { ...prevState, value, error: '' };
          });
          return;
        case 'password2':
          setPassword2((prevState) => {
            return { ...prevState, value, error: '' };
          });
          return;
        case 'nombre':
          setNombre((prevState) => {
            return { ...prevState, value, error: '' };
          });
          return;
        case 'apellido':
          setApellido((prevState) => {
            return { ...prevState, value, error: '' };
          });
          return;
        case 'fechaNacimiento':
          setFechaNacimiento((prevState) => {
            return { ...prevState, value, error: '' };
          });
          // eslint-disable-next-line no-useless-return
          return;
      }
    },
    [setEmail, setPassword, setPassword2, setNombre, setApellido, setFechaNacimiento]
  );

  // eslint-disable-next-line no-shadow
  const handleErrors = ({ email, password, password2, nombre, apellido, fechaNacimiento }) => {
    let isAnError = false;
    if (!email.value) {
      setEmail((prevState) => {
        return { ...prevState, error: 'Ingrese un email' };
      });
      isAnError = isAnError || true;
    }
    if (!password2.value) {
      setPassword2((prevState) => {
        return { ...prevState, error: 'Ingrese contraseña' };
      });
      isAnError = isAnError || true;
    }
    if (password.value !== password2.value) {
      setPassword((prevState) => {
        return { ...prevState, error: 'Las contraseñas no coinciden' };
      });
      isAnError = isAnError || true;
    }
    if (password.value.length < 6) {
      setPassword((prevState) => {
        return { ...prevState, error: 'Contraseña demasiado corta (mas de 6 caracteres)' };
      });
      isAnError = isAnError || true;
    }
    if (password.value.length > 20) {
      setPassword((prevState) => {
        return { ...prevState, error: 'Contraseña demasiado larga (menos de 20 caracteres)' };
      });
      isAnError = isAnError || true;
    }
    if (!password.value) {
      setPassword((prevState) => {
        return { ...prevState, error: 'Ingrese contraseña' };
      });
      isAnError = isAnError || true;
    }
    if (!nombre.value) {
      setNombre((prevState) => {
        return { ...prevState, error: 'Ingrese nombre' };
      });
      isAnError = isAnError || true;
    }
    if (nombre.length < 2) {
      setNombre((prevState) => {
        return { ...prevState, error: 'ingrese nombre valido' };
      });
      isAnError = isAnError || true;
    }
    if (!apellido.value) {
      setApellido((prevState) => {
        return { ...prevState, error: 'Ingrese apellido' };
      });
      isAnError = isAnError || true;
    }
    if (apellido.value.length < 3) {
      setApellido((prevState) => {
        return { ...prevState, error: 'Ingrese apellido valido' };
      });
      isAnError = isAnError || true;
    }
    if (!fechaNacimiento.value /* datejs */) {
      setFechaNacimiento((prevState) => {
        return { ...prevState, error: 'Ingrese fecha de nacimiento valida' };
      });
      isAnError = isAnError || true;
    }
    return isAnError;
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
      registerUser({
        email: email.value,
        password: password.value,
        password2: password2.value,
        nombre: nombre.value,
        apellido: apellido.value,
        fechaNacimiento: fechaNacimiento.value,
      })
        .then((user) => {
          console.log('Usuario creado', user);
          goToHome();
        })
        .catch((error) => {
          console.log('Error register user', error);
        });
    }
  }, [email, password, password2, nombre, apellido, fechaNacimiento]);

  return (
    <Container>
      <FormContainer>
        <FlexRow>
          <InputText
            name="nombre"
            placeholder="Nombre"
            value={nombre.value}
            onChange={handleInputTextChange}
            errorText={nombre.error}
          />
          <InputText
            name="apellido"
            placeholder="Apellido"
            value={apellido.value}
            onChange={handleInputTextChange}
            errorText={apellido.error}
          />
        </FlexRow>
        {console.log('ERROR EMAIL', email.error)}
        <InputText
          type="email"
          name="email"
          placeholder="Email"
          value={email.value}
          onChange={handleInputTextChange}
          errorText={email.error}
        />
        <FlexRow>
          <InputText
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password.value}
            onChange={handleInputTextChange}
            errorText={password.error}
          />
          <InputText
            type="password"
            name="password2"
            placeholder="Confirme contraseña"
            value={password2.value}
            onChange={handleInputTextChange}
            errorText={password2.error}
          />
        </FlexRow>
        <InputText
          type="date"
          name="fechaNacimiento"
          placeholder="Fecha de nacimiento"
          value={fechaNacimiento.value}
          onChange={handleInputTextChange}
          errorText={fechaNacimiento.error}
        />
        <Button text="Registrate" color="secondary" onClick={handleRegister} />
      </FormContainer>
    </Container>
  );
};
export default RegisterLayout;
