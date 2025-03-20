import { Navigate } from 'react-router';
import { useAuthContext } from '@/context/auth-context';
import { ROUTE_PATH } from '@/common/constants';
import { AppWrapper } from '@/app-router/app-wrapper';

const PublicLayout = () => {
  const { accessToken } = useAuthContext();

  if (accessToken) return <Navigate to={ROUTE_PATH.DASHBOARD.ROOT} />;

  return <AppWrapper />;
};

export default PublicLayout;
