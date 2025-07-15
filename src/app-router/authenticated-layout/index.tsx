import { memo } from 'react';
import { Navigate } from 'react-router';
import { useAppStore, useAuthStore } from '@/stores';
import { ROUTE_PATH } from '@/common/constants';
import { AppWrapper } from '@/app-router/app-wrapper';
import { useGetAuthProfileQuery } from '@/react-query/auth';
import { AppLoading } from '@/components/AppLoading';

const AuthenticatedLayout = () => {
  const isAppLoading = useAppStore((state) => state.isAppLoading);
  const setIsAppLoading = useAppStore((state) => state.setIsAppLoading);
  const authUser = useAuthStore((state) => state.authUser);
  const setAuthUser = useAuthStore((state) => state.setAuthUser);
  const tokens = useAuthStore((state) => state.tokens);

  // Get authProfile query
  useGetAuthProfileQuery(
    {},
    {
      onSuccess: (data) => {
        const { avatar, ...rest } = data.getAuthProfile;
        setAuthUser({ avatar: avatar || '', ...rest });
      },
      onLoading: (isLoading) => setIsAppLoading(isLoading),
      enabled: !!tokens.accessToken && !authUser.email,
    }
  );

  // CASE: UN-LOGGED ==> Navigate to signIn page
  if (!tokens.accessToken) return <Navigate to={ROUTE_PATH.SIGNIN} />;

  if (isAppLoading) return <AppLoading />;

  return <AppWrapper />;
};

export default memo(AuthenticatedLayout);
