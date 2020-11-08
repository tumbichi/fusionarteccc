/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/tailwind.css';
import useRedux from '../store';

const MyApp = ({ Component, pageProps }) => {
  const { store, persistor } = useRedux();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
