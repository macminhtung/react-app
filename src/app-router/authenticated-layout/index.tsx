import { memo } from 'react';
import { Navigate } from 'react-router';
import { useAuthSelector } from '@/context/useAuthContext';
import { useAppSelector } from '@/context/useAppContext';
import { ROUTE_PATH } from '@/common/constants';
import { AppWrapper } from '@/app-router/app-wrapper';
import { useGetAuthProfileQuery } from '@/react-query/auth';
import { AppLoading } from '@/components/AppLoading';

const AuthenticatedLayout = () => {
  const isAppLoading = useAppSelector((ctx) => ctx.isAppLoading);
  const setIsAppLoading = useAppSelector((ctx) => ctx.setIsAppLoading);
  const authUser = useAuthSelector((ctx) => ctx.authUser);
  const setAuthUser = useAuthSelector((ctx) => ctx.setAuthUser);
  const tokens = useAuthSelector((ctx) => ctx.tokens);

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
