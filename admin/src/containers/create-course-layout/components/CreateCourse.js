/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-var */
/* eslint-disable one-var */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactSwipe from 'react-swipe';
import styled from 'styled-components';
import InputText from '../../../components/InputText/index';
import CategoryDropdown from '../../../core/SelectCategory';

export const ContainerCreate = styled.div`
  min-height: calc(100vh - 44px);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Swipe = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  visibility: hidden;
  position: relative;

  .swipe-wrap {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .swipe-wrap > div {
    background: orange;
    height: 100%;
    width: 100%;
    float: left;
    width: 100%;
    position: relative;
  }
`;

const StepOneContainer = styled.div`
  background: rebeccapurple;
  min-height: 100%;
  width: 100%;
`;

const StepTwoContainer = styled.div`
  background: wheat;
  min-height: 100%;
  width: 100%;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;
`;

const CreateCourseDefault = ({
  formData,
  onChangeInput,
  onAddFile,
  onChangeDropdown,
  onSubmit,
}) => {
  let reactSwipeEl = null;

  return (
    <ContainerCreate>
      <StepOneContainer>
        <ContainerForm>
          <h2>Crear curso</h2>
          <InputText
            width="100%"
            name="title"
            placeholder="Titulo"
            onChange={onChangeInput}
            value={formData.title}
            type="text"
          />
          <InputText
            width="100%"
            name="description"
            placeholder="Descripcion"
            onChange={onChangeInput}
            value={formData.description}
            type="text"
          />
          <img src={formData.image} alt="Hola padre" />
          <InputText
            width="100%"
            name="image"
            placeholder="Imagen"
            onChange={onAddFile}
            type="file"
            accept="image/*"
          />
          <p value={formData.duration} placeholder="Duracion" />
          <InputText
            width="100%"
            name="price"
            placeholder="Precio"
            onChange={onChangeInput}
            value={formData.price}
            type="number"
          />
          <CategoryDropdown
            name="categoryId"
            value={formData.categoryId}
            onChange={onChangeDropdown}
          />
          <button type="button" onClick={onSubmit}>
            CREAR
          </button>
        </ContainerForm>
      </StepOneContainer>
      <StepTwoContainer>
        <Swipe>
          <ReactSwipe
            className="swipe-wrap"
            swipeOptions={{ continuous: false, auto: 3000 }}
            ref={(el) => {
              reactSwipeEl = el;
            }}
          >
            <div>
              <ContainerForm>
                <h2>Crear curso</h2>
                <InputText
                  width="100%"
                  name="title"
                  placeholder="Titulo"
                  onChange={onChangeInput}
                  value={formData.title}
                  type="text"
                />
                <InputText
                  width="100%"
                  name="description"
                  placeholder="Descripcion"
                  onChange={onChangeInput}
                  value={formData.description}
                  type="text"
                />
                <img src={formData.image} alt="Hola padre" />
                <InputText
                  width="100%"
                  name="image"
                  placeholder="Imagen"
                  onChange={onAddFile}
                  type="file"
                  accept="image/*"
                />
                <p value={formData.duration} placeholder="Duracion" />
                <InputText
                  width="100%"
                  name="price"
                  placeholder="Precio"
                  onChange={onChangeInput}
                  value={formData.price}
                  type="number"
                />
                <CategoryDropdown
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={onChangeDropdown}
                />
                <button type="button" onClick={onSubmit}>
                  CREAR
                </button>
              </ContainerForm>
            </div>
            <div>PANE 2</div>
            <div>PANE 3</div>
          </ReactSwipe>
        </Swipe>
        <button type="button" onClick={() => reactSwipeEl.next()}>
          Next
        </button>
        <button type="button" onClick={() => reactSwipeEl.prev()}>
          Previous
        </button>
      </StepTwoContainer>
    </ContainerCreate>
  );
};

export default CreateCourseDefault;
