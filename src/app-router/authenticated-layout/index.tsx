import { Outlet, Navigate } from 'react-router';
import { useAuthContext } from '@/context/auth-context';
import { ROUTE_PATH } from '@/common/constants';

const AuthenticatedLayout = () => {
  const { accessToken } = useAuthContext();

  if (!accessToken) return <Navigate to={ROUTE_PATH.SIGNIN} />;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthenticatedLayout;
