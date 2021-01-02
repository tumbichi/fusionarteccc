/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  TYPE_LOADING_FETCH_USERS,
  TYPE_SUCCESS_FETCH_USERS,
  TYPE_ERROR_FETCH_USERS,
  TYPE_SELECTED_USER,
  TYPE_UNSELECTED_USER,
  TYPE_CHANGE_INPUT,
} from './types';

import { getAllUsers } from '../services';

export const setLoading = () => ({
  type: TYPE_LOADING_FETCH_USERS,
});

export const setUsers = (users) => ({
  type: TYPE_SUCCESS_FETCH_USERS,
  payload: users,
});

export const setError = (error) => ({
  type: TYPE_ERROR_FETCH_USERS,
  payload: error,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(setLoading());

  return getAllUsers()
    .then((users) => {
      dispatch(setUsers(users));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};

export const selectUser = (payload) => ({
  type: TYPE_SELECTED_USER,
  payload,
});

export const unselectUser = () => ({ type: TYPE_UNSELECTED_USER });

export const changeInput = (name, value) => ({
  type: TYPE_CHANGE_INPUT,
  payload: { name, value },
});
export * from './types';
