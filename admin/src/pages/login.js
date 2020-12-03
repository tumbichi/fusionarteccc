import React, { useEffect } from 'react';
import { auth } from '../services/firebase';

const Login = () => {
  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);
  }, []);
  return <>Login Page</>;
};

export default Login;
