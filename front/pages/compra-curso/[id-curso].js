import { useRouter } from 'next/router';
import Head from 'next/head';
/* eslint-disable react/react-in-jsx-scope */
const CompraCursoPage = () => {
  const router = useRouter();
  const goToMercadoPago = () => {
    router.push(`/`); // url mercado pago
  };
  <Head>
    <title>Curso: nombre curso</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>;
  return <>COMPRAR CURSO</>;
};
export default CompraCursoPage;
