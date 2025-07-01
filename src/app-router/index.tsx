import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ROUTE_PATH } from '@/common/constants';
import NotFoundPage from '@/pages/NotFound';
import { AppContext, useAppContextValue } from '@/context/useAppContext';
import { AuthContext, useAuthContextValue } from '@/context/useAuthContext';
import PublicLayout from '@/app-router/public-layout';
import AuthenticatedLayout from '@/app-router/authenticated-layout';
import { SpinnerC } from '@/components/ui-customize';
import { Toaster } from '@/components/ui/sonner';

const SignInPage = lazy(() => import('@/pages/SignIn'));
const SignUpPage = lazy(() => import('@/pages/SignUp'));
const DashboardPage = lazy(() => import('@/pages/Dashboard'));
const ComponentsPage = lazy(() => import('@/pages/Components'));
const TestFormPage = lazy(() => import('@/pages/TestForm'));

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <AppContext.Provider value={useAppContextValue()}>
      <QueryClientProvider client={queryClient}>
        <Toaster position='top-right' />
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
                  <Route index path={ROUTE_PATH.COMPONENTS} element={<ComponentsPage />} />
                  <Route index path={ROUTE_PATH.TEST_FORM} element={<TestFormPage />} />
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
      </QueryClientProvider>
    </AppContext.Provider>
  );
};

export default AppRoutes;
