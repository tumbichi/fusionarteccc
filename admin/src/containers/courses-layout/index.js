/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CourseStatus } from './models/status';
import {
  fetchCourses,
  selectCourse,
  changeInput,
  unselectCourse,
  createCourse,
} from './actions';
import {
  CoursesLayoutLoading,
  CoursesLayoutSuccess,
  CoursesLayoutFailure,
  CoursesLayoutEdit,
  CoursesLayoutDetails,
  CoursesLayoutCreate,
} from './components';

const CoursesLayout = () => {
  const dispatch = useDispatch();
  const router = useHistory();

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

  const handleDetailsCourse = (course) => {
    dispatch(selectCourse({ course, status: CourseStatus.DETAILS }));
  };

  const handleInputChange = (name, value) => {
    dispatch(changeInput(name, value));
  };

  const handleDeleteCourse = (course) => {};

  const handleBackToCourses = () => {
    dispatch(unselectCourse());
  };

  const handleToCreateCourse = () => {
    router.push('/create-course');
  };

  switch (status) {
    case CourseStatus.LOADING:
      return <CoursesLayoutLoading />;
    case CourseStatus.SUCCESS:
      return (
        <CoursesLayoutSuccess
          courses={data}
          loading={false}
          onClickCreate={handleToCreateCourse}
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
          onBack={handleBackToCourses}
          onChangeInput={handleInputChange}
        />
      );
    case CourseStatus.DETAILS:
      return (
        <CoursesLayoutDetails
          course={selectedCourse}
          onBack={handleBackToCourses}
          onChangeInput={handleInputChange}
        />
      );
    default:
      return <></>;
  }
};

export default CoursesLayout;
