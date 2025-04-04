import { Outlet } from 'react-router';
import Header from '@/components/header';

export const AppWrapper = (props: { showHeader?: boolean }) => {
  const { showHeader } = props;

  return (
    <div className='w-[100vw] h-full flex flex-1 bg-background justify-center'>
      {showHeader && <Header />}
      <Outlet />
    </div>
  );
};
