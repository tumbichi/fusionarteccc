import React from 'react';
import {} from './styles';
import CourseCard from '../../components/CourseCard';

const ListCoursesLayout = ({ category }) => {
  const courses = ['Dibujo', 'Canto', 'Danza'];

  const courseList = () => {
    return courses.map((nombre) => {
      return <CourseCard name={nombre} />;
    });
  };

  return (
    <>
      <div>ListCoursesLayout</div>
      <div>{category}</div>
      <div>{courseList()}</div>
    </>
  );
};

export default ListCoursesLayout;
