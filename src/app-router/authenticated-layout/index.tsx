import { memo } from 'react';
import { Navigate } from 'react-router';
import { useAppStore } from '@/store';
import { ROUTE_PATH } from '@/common/constants';
import { AppWrapper } from '@/app-router/app-wrapper';
import { useGetProfileQuery } from '@/react-query/auth';
import { AppLoading } from '@/components/AppLoading';

const AuthenticatedLayout = () => {
  const isAppLoading = useAppStore((state) => state.isAppLoading);
  const setIsAppLoading = useAppStore((state) => state.setIsAppLoading);
  const authUser = useAppStore((state) => state.authUser);
  const setAuthUser = useAppStore((state) => state.setAuthUser);
  const accessToken = useAppStore((state) => state.accessToken);

  // Get authProfile query
  useGetProfileQuery(
    {},
    {
      onSuccess: (data) => setAuthUser(data.getProfile),
      onLoading: (isLoading) => setIsAppLoading(isLoading),
      enabled: !!accessToken && !authUser.email,
    }
  );

  // CASE: UN-LOGGED ==> Navigate to signIn page
  if (!accessToken) return <Navigate to={ROUTE_PATH.SIGNIN} />;

  if (isAppLoading) return <AppLoading />;

  return <AppWrapper />;
};

export default memo(AuthenticatedLayout);
