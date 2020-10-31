/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import ToolbarLayout from '../containers/toolbar-layout';
import Toolbar from '../components/Toolbar';

const HomePage = () => {
  const router = useRouter();

  const goToCourse = (course) => {
    router.push(`/cursos/${course}`);
  };

  return (
    <>
      <ToolbarLayout />
    </>
  );
};

export default HomePage;
