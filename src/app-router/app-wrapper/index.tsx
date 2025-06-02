import { Outlet } from 'react-router';
import Header from '@/components/Header';

export const AppWrapper = () => {
  return (
    <div className='max-w-[1800px] w-full h-full flex flex-col bg-background'>
      <Header />
      <Outlet />
    </div>
  );
};
