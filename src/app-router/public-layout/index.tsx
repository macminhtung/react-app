import { memo } from 'react';
import { Navigate } from 'react-router';
import { useAuthStore } from '@/stores';
import { ROUTE_PATH } from '@/common/constants';
import { AppWrapper } from '@/app-router/app-wrapper';

const PublicLayout = () => {
  const tokens = useAuthStore((state) => state.tokens);

  if (tokens.accessToken) return <Navigate to={ROUTE_PATH.DASHBOARD.ROOT} />;

  return <AppWrapper />;
};

export default memo(PublicLayout);
