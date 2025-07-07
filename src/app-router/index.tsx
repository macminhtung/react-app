import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ROUTE_PATH } from '@/common/constants';
import NotFoundPage from '@/pages/NotFound';
import { AppContext, useAppContextValue } from '@/context/useAppContext';
import { AuthContext, useAuthContextValue } from '@/context/useAuthContext';
import PublicLayout from '@/app-router/public-layout';
import AuthenticatedLayout from '@/app-router/authenticated-layout';
import { Toaster } from '@/components/ui/sonner';
import { AppLoading } from '@/components/AppLoading';

const SignInPage = lazy(() => import('@/pages/SignIn'));
const SignUpPage = lazy(() => import('@/pages/SignUp'));
const DashboardPage = lazy(() => import('@/pages/Dashboard'));
const ComponentsPage = lazy(() => import('@/pages/Components'));
const ProfilePage = lazy(() => import('@/pages/Profile'));

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

const AppRoutes = () => {
  const appContextValue = useAppContextValue();
  const authContextValue = useAuthContextValue();

  return (
    <AppContext.Provider value={appContextValue}>
      <QueryClientProvider client={queryClient}>
        <Toaster position='top-right' />
        <BrowserRouter>
          <AuthContext.Provider value={authContextValue}>
            <Suspense fallback={<AppLoading />}>
              <Routes>
                {/* PUBLIC ROUTES */}
                <Route element={<PublicLayout />}>
                  <Route index path={ROUTE_PATH.SIGNIN} element={<SignInPage />} />
                  <Route index path={ROUTE_PATH.SIGNUP} element={<SignUpPage />} />
                  <Route index path={ROUTE_PATH.COMPONENTS} element={<ComponentsPage />} />
                </Route>

                {/* PRIVATE ROUTES */}
                <Route
                  index
                  path={ROUTE_PATH.ROOT}
                  element={<Navigate to={ROUTE_PATH.DASHBOARD.ROOT} />}
                />
                <Route path={ROUTE_PATH.DASHBOARD.ROOT} element={<AuthenticatedLayout />}>
                  <Route index path={ROUTE_PATH.DASHBOARD.ROOT} element={<DashboardPage />} />
                  <Route index path={ROUTE_PATH.DASHBOARD.PROFILE} element={<ProfilePage />} />
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
