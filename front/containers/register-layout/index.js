import React from 'react';
import { FlexContainer as Container } from '../../layouts';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

const RegisterLayout = () => {
  return (
    <Container>
      <InputText type="email" name="email" placeholder="Email" />
      <InputText type="password" name="password" placeholder="Contraseña" />
      <Button text="Registrar" />
    </Container>
  );
};
export default RegisterLayout;
