/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import RegisterContainer from '../../containers/register-layout';
import ToolbarContainer from '../../containers/toolbar-layout';

const Register = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push(`/auth/login`);
  };
  return (
    <>
      <ToolbarContainer /> {/* temporal */}
      <RegisterContainer goToLogin={goToLogin} />
    </>
  );
};
export default Register;
