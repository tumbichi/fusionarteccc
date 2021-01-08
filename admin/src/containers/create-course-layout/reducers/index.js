/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { CreateCourseStatus } from '../models/status';
import {
  TYPE_LOADING_CREATE_COURSE,
  TYPE_SUCCESS_CREATE_COURSE,
  TYPE_FAILURE_CREATE_COURSE,
  TYPE_CHANGE_INPUT,
} from '../actions';

const initialState = {
  data: [],
  status: CreateCourseStatus.LOADING,
  error: null,
  selected: null,
  form: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_LOADING_CREATE_COURSE:
      return {
        ...state,
        status: CreateCourseStatus.LOADING,
      };
    case TYPE_SUCCESS_CREATE_COURSE:
      return {
        ...state,
        status: CreateCourseStatus.SUCCESS,
        payload,
      };
    case TYPE_FAILURE_CREATE_COURSE:
      return {
        ...state,
        status: CreateCourseStatus.FAILURE,
      };
    case TYPE_CHANGE_INPUT:
      return {
        ...state,
        form: {
          ...state.form,
          [payload.name]: payload.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
