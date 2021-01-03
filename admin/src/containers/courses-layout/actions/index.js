/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  TYPE_LOADING_FETCH_COURSES,
  TYPE_SUCCESS_FETCH_COURSES,
  TYPE_ERROR_FETCH_COURSES,
  TYPE_SELECT_COURSE,
  TYPE_CHANGE_INPUT,
  TYPE_UNSELECT_COURSE,
} from './types';

import { getAllCourses } from '../services';

export const setLoading = () => ({
  type: TYPE_LOADING_FETCH_COURSES,
});

export const setCourses = (courses) => ({
  type: TYPE_SUCCESS_FETCH_COURSES,
  payload: courses,
});

export const setError = (error) => ({
  type: TYPE_ERROR_FETCH_COURSES,
  payload: error,
});

export const fetchCourses = () => (dispatch) => {
  dispatch(setLoading());

  return getAllCourses()
    .then((courses) => {
      dispatch(setCourses(courses));
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const selectCourse = (payload) => ({
  type: TYPE_SELECT_COURSE,
  payload,
});

export const unselectCourse = () => ({
  type: TYPE_UNSELECT_COURSE,
});

export const changeInput = (name, value) => ({
  type: TYPE_CHANGE_INPUT,
  payload: { name, value },
});

export * from './types';
