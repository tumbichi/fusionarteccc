import { useRouter } from 'next/router';
import Head from 'next/head';
import InfoCourseContainer from '../../containers/info-course-layout';
import DetailsProfessorContainer from '../../containers/details-professor-layout';
/* eslint-disable react/react-in-jsx-scope */
const CompraCursoPage = () => {
  const router = useRouter();

  const goToMercadoPago = () => {
    router.push(`/`); // url mercado pago
  };
  return (
    <>
      <Head>
        <title>Curso: nombre curso</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <InfoCourseContainer/>
      <DetailsProfessorContainer/>

    </>
  );
};
export default CompraCursoPage;
