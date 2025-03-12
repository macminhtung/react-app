import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router';
import { Spinner } from 'flowbite-react';
import { ROUTE_PATH } from '@/common/constants';
import NotFoundPage from '@/pages/not-found';
import { AuthContext, useAuthContextValue } from '@/context/auth-context';
import PublicLayout from '@/app-router/public-layout';
import PrivateLayout from '@/app-router/private-layout';

const SignInPage = lazy(() => import('@/pages/signin'));
const SignUpPage = lazy(() => import('@/pages/signup'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthContext.Provider value={useAuthContextValue()}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route element={<PublicLayout />}>
              <Route index path={ROUTE_PATH.SIGNIN} element={<SignInPage />} />
              <Route index path={ROUTE_PATH.SIGNUP} element={<SignUpPage />} />
            </Route>

            {/* PRIVATE ROUTES */}
            <Route path={ROUTE_PATH.DASHBOARD.ROOT} element={<PrivateLayout />}>
              <Route index path={ROUTE_PATH.DASHBOARD.ROOT} element={<DashboardPage />} />
            </Route>

            {/* NOT FOUND ROUTES */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default AppRoutes;
