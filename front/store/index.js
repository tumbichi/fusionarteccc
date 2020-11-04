import { createStore, combineReducers , applyMiddleware } from 'redux';
import curso from './reducers/curso.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers(curso);

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
/* import { persistStore, persistReducer } from 'redux-persist';
 */
/* import thunk from 'redux-thunk';
 */
/* const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['drawerCollapse', 'onPagePost'],
};

const reducers = combineRedSucers({
  user: persistReducer(persistConfig, user),
  post,
  config: persistReducer(persistConfig, config),
});

/* const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
}; 

*/
