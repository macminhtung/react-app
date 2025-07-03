import { Navigate } from 'react-router';
import { useAuthContext } from '@/context/useAuthContext';
import { useAppContext } from '@/context/useAppContext';
import { ROUTE_PATH } from '@/common/constants';
import { Loader } from 'lucide-react';
import { AppWrapper } from '@/app-router/app-wrapper';
import { useGetAuthProfileQuery } from '@/react-query/auth';

const AuthenticatedLayout = () => {
  const { isAppLoading, setIsAppLoading } = useAppContext();
  const { tokens, authUser, setAuthUser } = useAuthContext();

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

  if (isAppLoading)
    return (
      <div className='flex h-full w-full items-center justify-between'>
        <Loader className='scale-[6] animate-spin-2s' />
      </div>
    );

  return <AppWrapper />;
};

export default AuthenticatedLayout;
