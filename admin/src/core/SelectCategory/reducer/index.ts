import {
  TYPE_FETCH_CATEGORIES_SUCCESS,
  TYPE_FETCH_CATEGORIES_FAILURE,
  TYPE_FETCH_CATEGORIES_LOADING,
  TYPE_SELECTED_CATEGORY,
} from '../actions';

export enum CategoryStatus {
  LOADING,
  SUCCESS,
  FAILURE,
}

const initialState = {
  data: [],
  status: CategoryStatus.LOADING,
  error: null,
  selected: null,
};

const reducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case TYPE_FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: payload,
        status: CategoryStatus.SUCCESS,
      };
    case TYPE_FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload,
        status: CategoryStatus.FAILURE,
      };
    case TYPE_FETCH_CATEGORIES_LOADING:
      return {
        ...state,
        status: CategoryStatus.LOADING,
      };
    case TYPE_SELECTED_CATEGORY:
      return {
        ...state,
        selected: payload,
      };
    default:
      return state;
  }
};

export default reducer;
