import { useRouter } from 'next/router';

const CompraCursoPage = () => {
  const router = useRouter();

  const goToMercadoPago = (course) => {
    router.push(`/`); //url mercado pago
  };
  return <>COMPRAR CURSO</>;
};
export default CompraCursoPage;
