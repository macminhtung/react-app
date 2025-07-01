import { Navigate } from 'react-router';
import { useAuthContext } from '@/context/useAuthContext';
import { ROUTE_PATH } from '@/common/constants';
import { AppWrapper } from '@/app-router/app-wrapper';

const PublicLayout = () => {
  const { tokens } = useAuthContext();

  if (tokens.accessToken) return <Navigate to={ROUTE_PATH.DASHBOARD.ROOT} />;

  return <AppWrapper />;
};

export default PublicLayout;
