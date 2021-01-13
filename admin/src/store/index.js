/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from '../containers/users-layout/reducers';
import coursesReducer from '../containers/courses-layout/reducers';
import rolesReducer from '../core/SelectRole/reducer';
import createCourseReducer from '../containers/create-course-layout/reducers';
import categoriesReducer from '../core/SelectCategory/reducer';

const reducers = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  roles: rolesReducer,
  createCourse: createCourseReducer,
  categories: categoriesReducer,
});

export default createStore(reducers, applyMiddleware(thunk));
