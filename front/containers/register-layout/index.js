import React, { useCallback, useState } from 'react';
import { registerUser } from '../../services';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { getMessageError, isEmailError, isPasswordError } from '../../utils';
import AlertWarningLabel from '../../components/Labels/AlertWarningLabel';
import { DEFAULT_PROFILE_IMAGE } from '../../constants';

// eslint-disable-next-line react/prop-types
const RegisterLayout = ({ goToLogin }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [password2, setPassword2] = useState({ value: '', error: '' });
  const [nombre, setNombre] = useState({ value: '', error: '' });
  const [apellido, setApellido] = useState({ value: '', error: '' });
  const [fechaNacimiento, setFechaNacimiento] = useState({ value: '', error: '' });
  const [serviceError, setServiceError] = useState('');
  const [modalState, setModalState] = useState(false);
  const handleInputTextChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setServiceError('');
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
    if (!fechaNacimiento.value){
      setFechaNacimiento((prevState) => {
        return { ...prevState, error: 'Ingrese fecha de nacimiento valida' };
      });
      isAnError = isAnError || true;
    }
    if (fechaNacimiento.value) {
      const currentYear = new Date().getFullYear();
      const yearBirth = fechaNacimiento.value.split('-');
      if (currentYear - yearBirth[0] < 3) {
        setFechaNacimiento((prevState) => {
          return { ...prevState, error: 'Ingrese fecha de nacimiento valida' };
        });
        isAnError = isAnError || true;
      }
    }
    return isAnError;
  };

  const handleErrorsAuth = (errorCode) => {
    if (isEmailError(errorCode)) {
      setEmail((prevState) => {
        return { ...prevState, error: getMessageError(errorCode) };
      });
    }
    if (isPasswordError(errorCode)) {
      setPassword((prevState) => {
        return { ...prevState, error: getMessageError(errorCode) };
      });
    }
    if (!isEmailError(errorCode) && !isPasswordError(errorCode)) {
      setServiceError(getMessageError(errorCode));
    }
  };

  const handleRegister = useCallback(() => {
    const thereIsAnError = handleErrors({ email, password, password2, nombre, apellido, fechaNacimiento });
    if (!thereIsAnError) {
      registerUser({
        email: email.value,
        password: password.value,
        password2: password2.value,
        nombre: nombre.value,
        apellido: apellido.value,
        fechaNacimiento: fechaNacimiento.value,
        profileImageUrl: DEFAULT_PROFILE_IMAGE,
      })
        .then((user) => {
          console.log('Usuario creado', user);
          setModalState(true);
        })
        .catch((error) => {
          handleErrorsAuth(error.code);
          console.log('Error register user', error);
        });
    }
  }, [email, password, password2, nombre, apellido, fechaNacimiento]);
  return (
    <div className="bg-withe flex flex-col justify-center items-center height-toolbar">
      <div className=" bg-secondary shadow-2xl rounded-lg space-y-3 flex flex-col p-6 w-full lg:w-3/6 lg:px-10">
        <AlertWarningLabel show={serviceError !== ''} message={serviceError} />
        <div className="flex w-full">
          <InputText
            name="nombre"
            placeholder="Nombre"
            value={nombre.value}
            onChange={handleInputTextChange}
            errorText={nombre.error}
            containerStyle="mx-4"
          />
          <InputText
            name="apellido"
            placeholder="Apellido"
            value={apellido.value}
            onChange={handleInputTextChange}
            errorText={apellido.error}
            containerStyle="mx-4"
          />
        </div>
        <InputText
          type="email"
          name="email"
          placeholder="Email"
          value={email.value}
          onChange={handleInputTextChange}
          errorText={email.error}
          containerStyle="mx-4"
        />
        <div className="flex w-full">
          <InputText
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password.value}
            onChange={handleInputTextChange}
            errorText={password.error}
            containerStyle="mx-4"
          />
          <InputText
            type="password"
            name="password2"
            placeholder="Confirme contraseña"
            value={password2.value}
            onChange={handleInputTextChange}
            errorText={password2.error}
            containerStyle="mx-4"
          />
        </div>
        <InputText
          type="date"
          name="fechaNacimiento"
          placeholder="Fecha de nacimiento"
          value={fechaNacimiento.value}
          onChange={handleInputTextChange}
          errorText={fechaNacimiento.error}
          containerStyle="mx-4"
        />
        <Button text="Registrate" color="secondary" onClick={handleRegister} />
      </div>
      <Modal width="w-125" show={modalState} onClose={() => setModalState(false)}>
        <div className="flex flex-col items-center justify-center w-full space-y-6">
          <h1 className="text-center text-grray-760 pb-3 pt-1 font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque pariatur autem, facere possimus laboriosam
            tempora animi voluptate.
          </h1>
          <Button text="Iniciar sesión" width="w-full" className="" type="button" onClick={goToLogin} />
        </div>
      </Modal>
    </div>
  );
};
export default RegisterLayout;
