import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from '../containers/users-layout/reducers';

/* const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};
 */
const reducers = combineReducers({
  users: usersReducer,
});

export default createStore(reducers, applyMiddleware(thunk));

/* export default () => {
  const store = );
  return { store };
};
 */
