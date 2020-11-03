/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import ToolbarLayout from '../containers/toolbar-layout';
import Toolbar from '../components/Toolbar';
import Head from 'next/head';

const HomePage = () => {
  const router = useRouter();

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
   </>
  );
};

export default HomePage;
