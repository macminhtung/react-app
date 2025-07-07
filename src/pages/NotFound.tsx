import { AvatarC } from '@/components/ui-customize';
import { MapPinX } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ROUTE_PATH } from '@/common/constants';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='flex flex-col size-full items-center gap-40 mt-20'>
      <AvatarC
        src='/logo.jpg'
        className={'rounded-[0.2rem] cursor-pointer size-60 max-md:size-30'}
        onClick={() => navigate(ROUTE_PATH.ROOT)}
      />
      <div className='flex items-end text-primary gap-6 animate-bounce max-md:flex-col max-md:items-center'>
        <MapPinX size={100} />
        <p className='font-medium text-6xl max-md:text-3xl'>{t('common.notFound')}</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
