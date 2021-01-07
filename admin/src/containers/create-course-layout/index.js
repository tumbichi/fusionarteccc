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
} from './components';
import { changeInput } from './actions';

const CreateCourseLayout = () => {
  const dispatch = useDispatch();
  /*  const { status, data } = useSelector(({ courses }) => {}); */

  const handleInputChange = (name, value) => {
    dispatch(changeInput(name, value));
  };

  switch (/* status */ CreateCourseStatus.SUCCESS) {
    case CreateCourseStatus.LOADING:
      return <CreateCoursesLoading />;
    case CreateCourseStatus.SUCCESS:
      return <CreateCourseSuccess onChangeInput={handleInputChange} />;
    case CreateCourseStatus.FAILURE:
      return <CreateCoursesFailure />;
    default:
      return <></>;
  }
};

export default CreateCourseLayout;
