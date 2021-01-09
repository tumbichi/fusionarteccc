import React from 'react';
import { useRouter } from 'next/router';
import LoginContainer from '../../containers/login-layout';
import ToolbarLayout from '../../containers/toolbar-layout';

const LoginPage = () => {
  const router = useRouter();

  const goToMisCursos = () => {
    router.push(`/mis-cursos`);
  };
  return (
    <>
      <ToolbarLayout />
      <LoginContainer goToMisCursos={goToMisCursos} />
    </>
  );
};

export default LoginPage;
