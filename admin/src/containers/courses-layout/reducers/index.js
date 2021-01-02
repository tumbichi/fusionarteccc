/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { CourseStatus } from '../models/status';
import {
  TYPE_ERROR_FETCH_COURSES,
  TYPE_LOADING_FETCH_COURSES,
  TYPE_SUCCESS_FETCH_COURSES,
  TYPE_DETAILS_COURSE,
} from '../actions';

const initialState = {
  data: [],
  status: CourseStatus.LOADING,
  error: null,
  selected: null,
  form: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_LOADING_FETCH_COURSES:
      return {
        ...state,
        status: CourseStatus.LOADING,
      };
    case TYPE_SUCCESS_FETCH_COURSES:
      return {
        ...state,
        status: CourseStatus.SUCCESS,
        data: payload,
      };
    case TYPE_ERROR_FETCH_COURSES:
      return {
        ...state,
        status: CourseStatus.FAILURE,
        error: payload,
      };
    case TYPE_DETAILS_COURSE:
      return {
        ...state,
        status: payload.status,
        select: payload.course,
      };
    default:
      return state;
  }
};

export default reducer;
