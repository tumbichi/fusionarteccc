/* eslint-disable react/react-in-jsx-scope */
import ToolbarLayout from '../containers/toolbar-layout';
import Toolbar from '../components/Toolbar';
import { useRouter } from 'next/router';

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
