/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';
import { pallette } from '../../../constants';
import { InputText, Button } from '../../../components';

const Container = styled.div`
  height: 100%;
`;

const Top = styled.div`
  display: flex;
  max-height: 52px;

  align-items: center;
  justify-content: space-between;

  .invisible {
    color: transparent;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const Content = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftContent = styled.div`
  background-color: blanchedalmond;
`;

const RightContent = styled.div`
  background-color: azure;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding: 0rem 72px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const FormActions = styled.div``;

const IconButtonContainer = styled.button`
  cursor: pointer;
  padding: 12px 16px;
  background: ghostwhite;
  border: none;
  min-height: 52px;
  svg {
    stroke: ${pallette.primary};
  }
  :hover {
    background: ${pallette.primary};
    svg {
      stroke: ghostwhite;
    }
  }
`;

const UserLayoutEdit = ({ user, back }) => {
  const dispatch = useDispatch();
  const { nombre, apellido, email } = useSelector(({ users }) => ({
    nombre: users.form.nombre,
    apellido: users.form.apellido,
  }));
  const handleInputChange = (name, value) => {
    dispatch(name, value);
  };
  return (
    <Container>
      <Top>
        <IconButtonContainer onClick={back}>
          <ArrowLeft size={24} />
        </IconButtonContainer>
        <p> Editar usuario </p>
        <p className="invisible"> - </p>
      </Top>
      <Content>
        <LeftContent>
          <Form>
            <FormContent>
              <InputText
                width="100%"
                name="nombre"
                onChange={handleInputChange}
                placeholder="Nombre"
                value={nombre}
              />
              <InputText
                width="100%"
                name="apellido"
                onChange={handleInputChange}
                placeholder="Apellido"
                value={apellido}
              />
              <InputText
                width="100%"
                name="email"
                onChange={handleInputChange}
                placeholder="Email"
                value={email}
              />
            </FormContent>
            <FormActions>
              <Button width="100%" text="Editar usuario" />
            </FormActions>
          </Form>
        </LeftContent>
        <RightContent>
          <p>id: {user.id}</p>
          <p>nombre: {user.nombre}</p>
          <p>apellido: {user.apellido}</p>
          <p>fechaNacimiento: {user.fechaNacimiento}</p>
          <p>email: {user.email}</p>
        </RightContent>
      </Content>
    </Container>
  );
};

export default UserLayoutEdit;
