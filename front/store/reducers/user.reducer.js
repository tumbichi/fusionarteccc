import { TYPE_SET_USER, TYPE_SET_USERS } from '../actions/user.action';

const initialState = {
  users: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_SET_USERS:
      return {
        ...state,
        users: payload
      }
    default:
      return state;
  }
}