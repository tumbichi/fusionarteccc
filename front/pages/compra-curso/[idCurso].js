import { useRouter } from 'next/router';
import Head from 'next/head';
import InfoCourseContainer from '../../containers/info-course-layout';
import DetailsProfessorContainer from '../../containers/details-professor-layout';
import ToolbarContainer from '../../containers/toolbar-layout';
/* eslint-disable react/react-in-jsx-scope */
const CompraCursoPage = () => {
  const router = useRouter();

  const goToMercadoPago = () => {
    router.push(`/mercadoPago`); // url mercado pago
  };
  const goToCourse = (course) => {
    router.push(`/curso/${course}`);
  };
  const { idCurso } = router.query;
  return (
    <>
      <Head>
        <title>Curso: {idCurso}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToolbarContainer />

      <InfoCourseContainer name={idCurso} goToMercadoPago={goToMercadoPago} goToCourse={goToCourse} />
      <DetailsProfessorContainer />
    </>
  );
};
export default CompraCursoPage;
