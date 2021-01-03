/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CourseStatus } from './models/status';
import { fetchCourses, selectCourse, changeInput } from './actions';
import {
  CoursesLayoutLoading,
  CoursesLayoutSuccess,
  CoursesLayoutFailure,
  CoursesLayoutEdit,
  CoursesLayoutDetails,
} from './components';

const CoursesLayout = () => {
  const dispatch = useDispatch();
  const { selectedCourse, status, data } = useSelector(({ courses }) => ({
    status: courses.status,
    data: courses.data,
    selectedCourse: courses.selected,
  }));

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const handleEditCourse = (course) => {
    dispatch(selectCourse({ course, status: CourseStatus.EDIT }));
  };
  const handleDetailsCourse = (course) => {};
  const handleDeleteCourse = (course) => {};
  const handleInputChange = (name, value) => {
    dispatch(changeInput(name, value));
  };

  switch (status) {
    case CourseStatus.LOADING:
      return <CoursesLayoutLoading />;
    case CourseStatus.SUCCESS:
      return (
        <CoursesLayoutSuccess
          courses={data}
          loading={false}
          onClickDelete={(row) => {
            console.log(`delete user: ${row.id}`);
          }}
          onClickEdit={handleEditCourse}
          onClickDetails={handleDetailsCourse}
        />
      );
    case CourseStatus.FAILURE:
      return <CoursesLayoutFailure />;
    case CourseStatus.EDIT:
      return (
        <CoursesLayoutEdit
          course={selectedCourse}
          onChangeInput={handleInputChange}
        />
      );
    case CourseStatus.DETAILS:
      return <CoursesLayoutDetails />;
    default:
      return <></>;
  }
};

export default CoursesLayout;
