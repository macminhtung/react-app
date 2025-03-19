import { Outlet, Navigate } from 'react-router';
import { useAuthContext } from '@/context/auth-context';
import { ROUTE_PATH } from '@/common/constants';
import Header from '@/components/header';

const PublicLayout = () => {
  const { accessToken } = useAuthContext();

  if (accessToken) return <Navigate to={ROUTE_PATH.DASHBOARD.ROOT} />;

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
