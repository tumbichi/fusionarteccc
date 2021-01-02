/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { UserStatus } from '../models/status';
import {
  TYPE_LOADING_FETCH_USERS,
  TYPE_SUCCESS_FETCH_USERS,
  TYPE_ERROR_FETCH_USERS,
  TYPE_SELECTED_USER,
  TYPE_UNSELECTED_USER,
} from '../actions';

const initialState = {
  data: [],
  status: UserStatus.LOADING,
  error: null,
  selected: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_LOADING_FETCH_USERS:
      return {
        ...state,
        status: UserStatus.LOADING,
      };
    case TYPE_SUCCESS_FETCH_USERS:
      return {
        ...state,
        status: UserStatus.SUCCESS,
        data: payload,
      };
    case TYPE_ERROR_FETCH_USERS:
      return {
        ...state,
        status: UserStatus.FAILURE,
        error: payload,
      };
    case TYPE_SELECTED_USER:
      return {
        ...state,
        status: UserStatus.DETAILS,
        selected: payload,
      };
    case TYPE_UNSELECTED_USER:
      return {
        ...state,
        status: UserStatus.SUCCESS,
        selected: null,
      };
    default:
      return state;
  }
};

export default reducer;
