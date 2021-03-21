/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ImageContainer, LogoContainer, HeadContainer } from './styles';
import CourseCard from '../../components/CourseCard';

const ListCoursesLayout = ({ category, goToCourse, bgImage }) => {
  const courses = [
    {
      id: 0,
      idProfesor: 0,
      idCategoria: 0,
      idSubCategoria: 0,
      titulo: 'Voces 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 0,
      idProfesor: 0,
      idCategoria: 0,
      idSubCategoria: 0,
      titulo: 'Voces 2',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 0,
      idProfesor: 0,
      idCategoria: 0,
      idSubCategoria: 0,
      titulo: 'Voces 3',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 1,
      idProfesor: 1,
      idCategoria: 0,
      idSubCategoria: 1,
      titulo: 'Teatro 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 1,
      idProfesor: 2,
      idCategoria: 0,
      idSubCategoria: 2,
      titulo: 'Musica 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 0,
      idProfesor: 0,
      idCategoria: 1,
      idSubCategoria: 0,
      titulo: 'Voces olala 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 1,
      idProfesor: 1,
      idCategoria: 1,
      idSubCategoria: 1,
      titulo: 'Teatro olala 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 1,
      idProfesor: 2,
      idCategoria: 1,
      idSubCategoria: 2,
      titulo: 'Musica olala 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 0,
      idProfesor: 0,
      idCategoria: 2,
      idSubCategoria: 0,
      titulo: 'Voces hard 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 1,
      idProfesor: 1,
      idCategoria: 2,
      idSubCategoria: 1,
      titulo: 'Teatro hard 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
    {
      id: 1,
      idProfesor: 2,
      idCategoria: 2,
      idSubCategoria: 2,
      titulo: 'Musica hard 1',
      descripcion: '',
      urlImagen: '',
      duracion: '',
      fechaDeCreacion: '',
      precioCurso: '200',
    },
  ];
  const subCategorias = [
    { id: 0, descripcion: 'canto' },
    { id: 1, descripcion: 'teatro' },
    { id: 2, descripcion: 'musica' },
  ];
  const renderCourseListByCategory = (categoryIdToRender) => {
    const coursesByCategory = courses.filter(({ idCategoria }) => idCategoria === categoryIdToRender);
    const coursesBySubCategory = [];
    subCategorias.forEach(({ id }) =>
      coursesBySubCategory.push(coursesByCategory.filter(({ idSubCategoria }) => idSubCategoria === id))
    );
    return coursesBySubCategory.map((values, index) => {
      return (
        <CourseCard key={`CourseCard$$${index}`} title={subCategorias[index].descripcion} goToCourse={goToCourse}>
          {values.map(({ titulo }) => (
            <p>{titulo}</p>
          ))}
        </CourseCard>
      );
    });
  };

  const getContainer = () => {
    switch (bgImage) {
      case 'kids':
        return ImageContainer;
      case 'jovenes':
        return LogoContainer;
      case 'adultos':
        return LogoContainer;
      default:
        return ImageContainer;
    }
  };
  const Container = getContainer();
  return (
    <>
      <HeadContainer textColor={bgImage === 'jovenes' ? '#FAFAFA' : '#00947E'}>
        {(bgImage === 'jovenes' || bgImage === 'adultos') && <h1>{category}</h1>}
        {(bgImage === 'jovenes' || bgImage === 'adultos') && (
          <img alt="pattern of cources" src={`../static/images/${bgImage}.png`} />
        )}
      </HeadContainer>
      <Container bgImage={bgImage}>
        {bgImage === 'kids'
          ? renderCourseListByCategory(0)
          : bgImage === 'jovenes'
          ? renderCourseListByCategory(1)
          : bgImage === 'adultos'
          ? renderCourseListByCategory(2)
          : null}
      </Container>
    </>
  );
};

export default ListCoursesLayout;
