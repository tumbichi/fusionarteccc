/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CreateCourseStatus } from './models/status';
import {
  CreateCoursesLoading,
  CreateCourseSuccess,
  CreateCoursesFailure,
  CreateCourse,
} from './components';
import { changeInput } from './actions';

const CreateCourseLayout = () => {
  const { status } = useSelector((state) => {
    return { status: 0 };
  });
  const dispatch = useDispatch();

  const handleInputChange = (name, value) => {
    dispatch(changeInput(name, value));
  };
  // formData={formData}
  switch (status) {
    case CreateCourseStatus.CREATE:
      return <CreateCourse />;
    case CreateCourseStatus.LOADING:
      return <CreateCoursesLoading />;
    case CreateCourseStatus.SUCCESS:
      return <CreateCourseSuccess onChangeInput={handleInputChange} />;
    case CreateCourseStatus.FAILURE:
      return <CreateCoursesFailure />;
    default:
      return <>Puede ser pa </>;
  }
};

export default CreateCourseLayout;
