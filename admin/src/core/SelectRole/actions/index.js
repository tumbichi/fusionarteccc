import { requestRoles } from '../services';
import {
  TYPE_FETCH_ROLES_SUCCESS,
  TYPE_FETCH_ROLES_FAILURE,
  TYPE_FETCH_ROLES_LOADING,
  TYPE_SELECTED_ROLE,
} from './types';

export const setRoles = (roles) => ({
  type: TYPE_FETCH_ROLES_SUCCESS,
  payload: roles,
});

export const setError = (error) => ({
  type: TYPE_FETCH_ROLES_FAILURE,
  payload: error,
});

export const setLoading = () => ({
  type: TYPE_FETCH_ROLES_LOADING,
});

export const fetchRoles = () => (dispatch) => {
  dispatch(setLoading());

  requestRoles()
    .then((data) => {
      dispatch(setRoles(data));
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const selectRole = (role) => ({
  type: TYPE_SELECTED_ROLE,
  payload: role,
});

export * from './types';
