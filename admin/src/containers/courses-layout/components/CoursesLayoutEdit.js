/* eslint-disable react/prop-types */
import React from 'react';
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

const CoursesLayoutEdit = ({ course, onBack, onChangeInput }) => {
  return (
    <Container>
      <Top>
        <IconButtonContainer onClick={onBack}>
          <ArrowLeft size={24} />
        </IconButtonContainer>
        <p> Editar Curso </p>
        <p className="invisible"> - </p>
      </Top>
      <Content>
        <LeftContent>
          <Form>
            <FormContent>
              <InputText
                width="100%"
                name="tituloCurso"
                onChange={onChangeInput}
                placeholder="Titulo Curso"
                value={course.titulo}
              />
              <InputText
                width="100%"
                name="duracion"
                onChange={onChangeInput}
                placeholder="Duracion"
                value={course.duracion}
              />
              <InputText
                width="100%"
                name="precio"
                onChange={onChangeInput}
                placeholder="Precio"
                value={course.precio}
              />
            </FormContent>
            <FormActions>
              <Button width="100%" text="Editar usuario" />
            </FormActions>
          </Form>
        </LeftContent>
        <RightContent>
          <p>Titulo Curso: {course.titulo}</p>
          <p>Duracion: {course.duracion}</p>
          <p>Precio: {course.precio}</p>
        </RightContent>
      </Content>
    </Container>
  );
};
export default CoursesLayoutEdit;
