import { memo } from 'react';
import { Navigate } from 'react-router';
import { useAppStore } from '@/store';
import { ROUTE_PATH } from '@/common/constants';
import { AppWrapper } from '@/app-router/app-wrapper';

const PublicLayout = () => {
  const accessToken = useAppStore((state) => state.accessToken);

  if (accessToken) return <Navigate to={ROUTE_PATH.DASHBOARD.ROOT} />;

  return <AppWrapper />;
};

export default memo(PublicLayout);
