/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  TYPE_CHANGE_INPUT,
  TYPE_LOADING_CREATE_COURSE,
  TYPE_SUCCESS_CREATE_COURSE,
  TYPE_FAILURE_CREATE_COURSE,
  TYPE_CREATE_NEW_COURSE,
} from './types';

export const setLoading = () => ({
  type: TYPE_LOADING_CREATE_COURSE,
});

export const setError = (error) => ({
  type: TYPE_FAILURE_CREATE_COURSE,
  payload: error,
});

export const createCourse = () => ({
  type: TYPE_SUCCESS_CREATE_COURSE,
});

export const changeInput = (name, value) => ({
  type: TYPE_CHANGE_INPUT,
  payload: { name, value },
});

export const createNewCourse = () => ({
  type: TYPE_CREATE_NEW_COURSE,
});

export * from './types';
