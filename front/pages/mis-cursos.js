import { useRouter } from 'next/router';
import Head from 'next/head';
import SeeMoreCoursesContainer from '../containers/see-more-courses-layout';
import ListPurchasedCoursesContainer from '../containers/list-purchased-courses-layout';
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

      <SeeMoreCoursesContainer/>
      <ListPurchasedCoursesContainer/>

    </>
  );
};

export default MisCursosPage;
