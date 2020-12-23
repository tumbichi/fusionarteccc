import React from 'react';
import { useRouter } from 'next/router';
import LoginContainer from '../../containers/login-layout';

const LoginPage = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push(`/`);
  };
  return (
    <>
      <LoginContainer goToHome={goToHome} />
    </>
  );
};

export default LoginPage;
