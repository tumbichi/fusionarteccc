import { requestCategories } from '../services';
import {
  TYPE_FETCH_CATEGORIES_SUCCESS,
  TYPE_FETCH_CATEGORIES_FAILURE,
  TYPE_FETCH_CATEGORIES_LOADING,
  TYPE_SELECTED_CATEGORY,
} from './types';

export const setCategories = (categories) => ({
  type: TYPE_FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const setError = (error) => ({
  type: TYPE_FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const setLoading = () => ({
  type: TYPE_FETCH_CATEGORIES_LOADING,
});

export const fetchCategories = () => (dispatch) => {
  dispatch(setLoading());

  requestCategories()
    .then((data) => {
      dispatch(setCategories(data));
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const selectCategory = (category) => ({
  type: TYPE_SELECTED_CATEGORY,
  payload: category,
});

export * from './types';
