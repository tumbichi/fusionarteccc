/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';
import { changeInput } from '../actions';
import { pallette } from '../../../constants';
import { InputText, Button, Dropdown } from '../../../components';
import RolesDropdown from '../../../core/SelectRole';

const Container = styled.div`
  height: 100%;
`;

const Top = styled.div`
  display: flex;
  max-height: 52px;

  align-items: center;
  gap: 16px;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-content: center;
  align-items: center;
  padding: 32px 64px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

const FormActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;

const IconButtonContainer = styled.button`
  cursor: pointer;
  padding: 12px 16px;
  background: #ffffff;
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

const UserLayoutEdit = ({
  back,
  formData,
  onChangeDropdown,
  onChangeInput,
  onSubmit,
  user,
  roles,
  saving,
}) => {
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
        {saving ? (
          <p>is saving bro</p>
        ) : (
          <LeftContent>
            <Form onSubmit={onSubmit}>
              <FormContent>
                <InputText
                  width="100%"
                  name="nombre"
                  onChange={onChangeInput}
                  placeholder="Nombre"
                  value={formData.nombre}
                />
                <InputText
                  width="100%"
                  name="apellido"
                  onChange={onChangeInput}
                  placeholder="Apellido"
                  value={formData.apellido}
                />
                <InputText
                  width="100%"
                  name="email"
                  onChange={onChangeInput}
                  placeholder="Email"
                  value={formData.email}
                  disabled
                />
                <RolesDropdown
                  name="rolId"
                  value={formData.rolId}
                  onChange={onChangeDropdown}
                />
              </FormContent>
              <FormActions>
                <Button type="submit" width="100%" text="Editar usuario" />
              </FormActions>
            </Form>
          </LeftContent>
        )}
        <RightContent>
          <p>id: {user.id}</p>
          <p>nombre: {user.nombre}</p>
          <p>apellido: {user.apellido}</p>
          <p>fechaNacimiento: {user.fechaNacimiento}</p>
          <p>fecha de creacion: {user.fechaCreacion}</p>
          <p>email: {user.email}</p>
          {roles.length === 0 ? null : (
            <p>rol: {roles.find((rol) => user.rolId === rol.id).descripcion}</p>
          )}
        </RightContent>
      </Content>
    </Container>
  );
};

export default UserLayoutEdit;
