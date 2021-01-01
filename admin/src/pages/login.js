// eslint-disable-next-line no-useless-return
import React, { useEffect } from 'react';
import { auth } from '../services/firebase';
import LoginContainer from '../containers/login-layout/index';

const Login = () => {
  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);
  }, []);

  return (
    <>
      <LoginContainer />
    </>
  );
};

export default Login;
