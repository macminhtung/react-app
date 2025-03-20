import { Outlet } from 'react-router';
import Header from '@/components/header';

export const AppWrapper = () => {
  return (
    <>
      <Header />
      <div className='w-[100vw] h-full flex-1 p-5'>
        <Outlet />
      </div>
    </>
  );
};
