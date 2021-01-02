// eslint-disable-next-line no-useless-return
import React, { useEffect } from 'react';
/* import { auth } from '../services/firebase'; */
import LoginContainer from '../containers/login-layout/index';

const Login = () => {
  useEffect(() => {
    /* const user = auth.currentUser; */
  }, []);

  return (
    <>
      <LoginContainer />
    </>
  );
};

export default Login;
