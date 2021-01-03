/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import RegisterContainer from '../../containers/register-layout';
import ToolbarContainer from '../../containers/toolbar-layout';

const Register = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push(`/`);
  };
  return (
    <>
      <ToolbarContainer /> {/* temporal */}
      <RegisterContainer goToHome={goToHome} />
    </>
  );
};
export default Register;