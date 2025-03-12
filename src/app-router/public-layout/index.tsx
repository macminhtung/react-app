import { Outlet, Navigate } from 'react-router';
import { useAuthContext } from '@/context/auth-context';
import { ROUTE_PATH } from '@/common/constants';

const PublicLayout = () => {
  const { accessToken } = useAuthContext();

  if (accessToken) return <Navigate to={ROUTE_PATH.DASHBOARD.ROOT} />;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
