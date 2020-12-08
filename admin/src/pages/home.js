import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import DataGrid from '../components/DataGrid';
import { auth } from '../services';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user && !loading) {
      window.location = 'http://localhost:3000/login';
    }
  }, [user, loading]);
  return <DataGrid />;
};

export default Home;
