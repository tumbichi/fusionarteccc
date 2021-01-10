import React, { useState, useCallback } from 'react';
import Button from '../../components/Button';
import InputText from '../../components/InputText';

const LoginLayout = ({ goToLogin }) => {
  const [inputEmail, setEmail] = useState('');
  const handleChange = useCallback(({ target }) => {
    setEmail(target.value);
  }, []);

  const handleSendPassword = () => {
    goToLogin();
  };

  return (
    <div className=" bg-withe flex flex-col justify-center items-center w-screen height-toolbar">
      <form
        className=" h-full justify-around bg-secondary shadow-2xl rounded-lg flex flex-col items-center  p-6 w-full lg:w-3/6 lg:px-10"
        onSubmit={handleSendPassword}
      >
        <h1 className=" text-primary text-lg font-semibold">
          Ingresa la de direccion de correo de la cuenta que deseas recuperar
        </h1>
        <InputText
          type="email"
          name="email"
          placeholder="Email"
          value={inputEmail}
          onChange={handleChange}
          containerStyle="w-full"
        />
        <Button text="Enviar contraseña" color="secondary" type="submit" width="w-full" />
      </form>
    </div>
  );
};

export default LoginLayout;
