import { useTranslation } from 'react-i18next';
// import { Form } from '@/components/ui';

const SignInPage = () => {
  const { t } = useTranslation();
  return (
    <div className='p-6 w-[600px] flex flex-col items-center bg-amber-100'>
      <p className='text-4xl font-bold'>{t('common.signIn')}</p>
    </div>
  );
};

export default SignInPage;
