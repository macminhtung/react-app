import { Outlet } from 'react-router';
import Header from '@/components/Header';

export const AppWrapper = () => {
  return (
    <div className='w-[100vw] h-full flex flex-col bg-background'>
      <Header />
      <Outlet />
    </div>
  );
};
