import { Navigate } from 'react-router';
import { useAuthContext } from '@/context/auth-context';
import { ROUTE_PATH } from '@/common/constants';
import { AppWrapper } from '@/app-router/app-wrapper';

const AuthenticatedLayout = () => {
  const { accessToken } = useAuthContext();

  if (!accessToken) return <Navigate to={ROUTE_PATH.SIGNIN} />;

  return <AppWrapper />;
};

export default AuthenticatedLayout;
