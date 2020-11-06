import { TYPE_SET_CURSO } from '../actions/curso.action';

const initialState = {
  curso: null,
};

export default reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_SET_CURSO:
      return {
        ...state,
        curso: payload,
      };
    default:
      return state;
  }
};
