import {
  TYPE_FETCH_ROLES_SUCCESS,
  TYPE_FETCH_ROLES_FAILURE,
  TYPE_FETCH_ROLES_LOADING,
  TYPE_SELECTED_ROLE,
} from '../actions';

export enum RoleStatus {
  LOADING,
  SUCCESS,
  FAILURE,
}

const initialState = {
  data: [],
  status: RoleStatus.LOADING,
  error: null,
  selected: null,
};

const reducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case TYPE_FETCH_ROLES_SUCCESS:
      return {
        ...state,
        data: payload,
        status: RoleStatus.SUCCESS,
      };
    case TYPE_FETCH_ROLES_FAILURE:
      return {
        ...state,
        error: payload,
        status: RoleStatus.FAILURE,
      };
    case TYPE_FETCH_ROLES_LOADING:
      return {
        ...state,
        status: RoleStatus.LOADING,
      };
    case TYPE_SELECTED_ROLE:
      return {
        ...state,
        selected: payload,
      };
    default:
      return state;
  }
};

export default reducer;
