import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import curso from './reducers/curso.reducer';
import config from './reducers/config.reducer';
import capitulo from './reducers/capitulo.reducer';
import auth from './reducers/auth.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const reducers = combineReducers({
  auth,
  capitulo,
  config: persistReducer(persistConfig, config),
  curso,
});

/*  */
export default () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};
