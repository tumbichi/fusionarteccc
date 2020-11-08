import React from 'react';
import { useRouter } from 'next/router';
import LoginContainer from '../../containers/login-layout';

const LoginPage = () => {
  const router = useRouter();

  const goToMisCursos = () => {
    router.push(`/mis-cursos`);
  };
  return (
    <>
      <LoginContainer goToMisCursos={goToMisCursos} />
    </>
  );
};

export default LoginPage;
