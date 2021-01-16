/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import ForgotContainer from '../../containers/forgot-password-layout';
import ToolbarContainer from '../../containers/toolbar-layout';

const Register = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push(`/auth/login`);
  };
  return (
    <>
      <ToolbarContainer /> {/* temporal */}
      <ForgotContainer goToLogin={goToLogin} />
    </>
  );
};
export default Register;
