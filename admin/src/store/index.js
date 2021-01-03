/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from '../containers/users-layout/reducers';
import coursesReducer from '../containers/courses-layout/reducers';
import rolesReducer from '../core/SelectRole/reducer';
/* const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};
 */
const reducers = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  roles: rolesReducer,
});

export default createStore(reducers, applyMiddleware(thunk));

/* export default () => {
  const store = );
  return { store };
};
 */
