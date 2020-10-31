import { useRouter } from 'next/router';
import Head from 'next/head';
/* eslint-disable react/react-in-jsx-scope */

const MisCursosPage = () => {
  const router = useRouter();
  const goToCourse = (course) => {
    router.push(`/cursos/${course}`);
  };
  const goToHome = () => {
    router.push(`/`);
  };

  return (
    <>
      <Head>
        <title>Mis cursos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      MIS CURSOS
    </>
  );
};

export default MisCursosPage;
