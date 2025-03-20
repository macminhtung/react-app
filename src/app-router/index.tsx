import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router';
import { ROUTE_PATH } from '@/common/constants';
import NotFoundPage from '@/pages/not-found';
import { AuthContext, useAuthContextValue } from '@/context/auth-context';
import PublicLayout from '@/app-router/public-layout';
import AuthenticatedLayout from '@/app-router/authenticated-layout';
import { SpinnerC } from '@/components/ui-customize';

const SignInPage = lazy(() => import('@/pages/signin'));
const SignUpPage = lazy(() => import('@/pages/signup'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthContext.Provider value={useAuthContextValue()}>
        <Suspense
          fallback={
            <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
              <SpinnerC className='size-20' />
            </div>
          }
        >
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route element={<PublicLayout />}>
              <Route index path={ROUTE_PATH.SIGNIN} element={<SignInPage />} />
              <Route index path={ROUTE_PATH.SIGNUP} element={<SignUpPage />} />
            </Route>

            {/* PRIVATE ROUTES */}
            <Route
              index
              path={ROUTE_PATH.ROOT}
              element={<Navigate to={ROUTE_PATH.DASHBOARD.ROOT} />}
            />
            <Route path={ROUTE_PATH.DASHBOARD.ROOT} element={<AuthenticatedLayout />}>
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
