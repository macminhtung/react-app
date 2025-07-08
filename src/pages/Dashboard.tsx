import { useTranslation } from 'react-i18next';
import ComponentsPage from '@/pages/Components';

const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col w-full'>
      <p className='mb-5 text-3xl font-medium'>{t('common.dashboard')}</p>
      <ComponentsPage />
    </div>
  );
};

export default DashboardPage;
