// eslint-disable-next-line no-useless-return
import React, { useEffect } from 'react';
import { auth } from '../services/firebase';
import LoginContainer from '../containers/login-container/index';
import { Wrapper } from '../layouts';

const Login = () => {
  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);
  }, []);

  return (
    <Wrapper>
      <LoginContainer />
    </Wrapper>
  );
};

export default Login;
