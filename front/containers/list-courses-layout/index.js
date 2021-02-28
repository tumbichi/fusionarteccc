/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ImageContainer, LogoContainer, HeadContainer } from './styles';
import CourseCard from '../../components/CourseCard';

const ListCoursesLayout = ({ category, goToCourse, bgImage }) => {
  const courses = ['Dibujo', 'Canto', 'Danza'];

  const courseList = () => {
    return courses.map((nombre, index) => {
      return <CourseCard key={nombre + Math.random() * (index + 10)} name={nombre} goToCourse={goToCourse} />;
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
      <Container bgImage={bgImage}>{courseList()}</Container>
    </>
  );
};

export default ListCoursesLayout;
