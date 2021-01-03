/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { UserStatus } from '../models/status';
import {
  TYPE_LOADING_FETCH_USERS,
  TYPE_SUCCESS_FETCH_USERS,
  TYPE_ERROR_FETCH_USERS,
  TYPE_SELECTED_USER,
  TYPE_UNSELECTED_USER,
  TYPE_CHANGE_INPUT,
  TYPE_ON_SAVING,
  TYPE_UPDATE_USER,
} from '../actions';

const initialState = {
  data: [],
  status: UserStatus.LOADING,
  error: null,
  selected: null,
  form: null,
  saving: false,
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
        status: payload.status,
        selected: payload.user,
        form:
          payload.status === UserStatus.EDIT
            ? {
                nombre: payload.user.nombre,
                apellido: payload.user.apellido,
                email: payload.user.email,
                rolId: payload.user.rolId,
              }
            : null,
      };
    case TYPE_UNSELECTED_USER:
      return {
        ...state,
        status: UserStatus.SUCCESS,
        selected: null,
      };
    case TYPE_CHANGE_INPUT:
      return {
        ...state,
        form: {
          ...state.form,
          [payload.name]: payload.value,
        },
      };
    case TYPE_ON_SAVING:
      return {
        ...state,
        saving: payload,
      };
    case TYPE_UPDATE_USER: {
      let i;
      const currentUser = state.data.find((user, index) => {
        if (user.id === payload.id) {
          i = index;
        }
        return user.id === payload.id;
      });
      const newData = state.data;
      newData[i] = { ...currentUser, ...payload.userData };
      return {
        ...state,
        data: newData,
      };
    }
    default:
      return state;
  }
};

export default reducer;
