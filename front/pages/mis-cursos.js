/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';

const MisCursosPage = () => {
  const router = useRouter();

  const goToCourse = (course) => {
    router.push(`/cursos/${course}`);
  };

  const goToHome = () => {
    router.push(`/`);
  };

  return <> MIS CURSOS</>;
};

export default MisCursosPage;
