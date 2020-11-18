import React from 'react';
import { FlexContainer as Container } from '../../layouts';
import CourseCard from '../../components/CourseCard';

const ListCoursesLayout = ({ category, goToCourse }) => {
  const courses = ['Dibujo', 'Canto', 'Danza'];

  const courseList = () => {
    return courses.map((nombre) => {
      return <CourseCard name={nombre} goToCourse={goToCourse} />;
    });
  };

  return (
    <Container>
      <div>ListCoursesLayout</div>
      <div>{category}</div>
      <div>{courseList()}</div>
    </Container>
  );
};

export default ListCoursesLayout;
