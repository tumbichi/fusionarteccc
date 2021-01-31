import { useRouter } from 'next/router';
import Head from 'next/head';
import SeeMoreCoursesContainer from '../containers/see-more-courses-layout';
import ListPurchasedCoursesContainer from '../containers/list-purchased-courses-layout';
import ToolbarContainer from '../containers/toolbar-layout';
import PageContainer from '../containers/page-container';
import Footer from '../components/Footer';
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
      <ToolbarContainer />
      <PageContainer containerStyle="h-auto">
        <SeeMoreCoursesContainer goToHome={goToHome} />
        <ListPurchasedCoursesContainer />
      </PageContainer>
      <Footer color="bg-primary" />
    </>
  );
};

export default MisCursosPage;
