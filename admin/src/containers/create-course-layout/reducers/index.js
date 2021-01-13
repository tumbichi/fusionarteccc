/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { CreateCourseStatus } from '../models/status';
import {
  TYPE_LOADING_CREATE_COURSE,
  TYPE_SUCCESS_CREATE_COURSE,
  TYPE_FAILURE_CREATE_COURSE,
  TYPE_CREATE_NEW_COURSE,
  TYPE_CHANGE_INPUT,
} from '../actions';

const initialState = {
  status: CreateCourseStatus.CREATE,
  error: null,
  form: {
    title: '',
    description: '',
    duration: '',
    price: 0.0,
    image: null,
    categoryId: null,
    professor: 1,
    lessons: [],
  },
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
      };
    case TYPE_FAILURE_CREATE_COURSE:
      return {
        ...state,
        status: CreateCourseStatus.FAILURE,
        error: payload,
      };
    case TYPE_CREATE_NEW_COURSE:
      return {
        ...state,
        status: CreateCourseStatus.CREATE,
        form: {
          title: '',
          description: '',
          duration: '',
          price: 0.0,
          image: null,
          categoria: null,
          lessons: [],
        },
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
