import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { storage } from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import curso from './reducers/curso.reducer';
import config from './reducers/curso.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const reducers = combineRedSucers({
  curso,
  config: persistReducer(persistConfig, config),
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};
