import { Outlet } from 'react-router';
import Header from '@/components/Header';

export const AppWrapper = () => {
  return (
    <div className='max-w-[1800px] w-full h-full flex flex-col bg-background'>
      <Header />
      <div className='flex p-3 h-[calc(100vh-66px)] overflow-auto'>
        <div className='p-3 flex flex-1 justify-center h-fit'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
