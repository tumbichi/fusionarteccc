/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { useRouter } from 'next/router';
import ToolbarLayout from '../containers/toolbar-layout';
import BannerContainer from '../containers/banner-layout';
import ListCoursesContainer from '../containers/list-courses-layout';
import AboutUsContainer from '../containers/about-us-layput';

const HomePage = () => {
  const router = useRouter();

  // eslint-disable-next-line no-unused-vars
  const goToCourse = (course) => {
    router.push(`/cursos/${course}`);
  };

  return (
    <>
      <Head>
        <title>Fuisionarte ccc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToolbarLayout />

      <BannerContainer />
      <ListCoursesContainer category="FUSIONADITOS KIDS" />
      <ListCoursesContainer category="FUSIONARTE JOVENES" />
      <ListCoursesContainer category="FUSIONARTE ADULTOS" />
      <AboutUsContainer />
    </>
  );
};

export default HomePage;
