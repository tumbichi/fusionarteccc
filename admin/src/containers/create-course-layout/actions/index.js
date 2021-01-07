/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  TYPE_CHANGE_INPUT,
  /*  TYPE_LOADING_CREATE_COURSE,
  TYPE_SUCCESS_CREATE_COURSE,
  TYPE_FAILURE_CREATE_COURSE, */
} from './types';

export const changeInput = (name, value) => ({
  type: TYPE_CHANGE_INPUT,
  payload: { name, value },
});
export * from './types';
