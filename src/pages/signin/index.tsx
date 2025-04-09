import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useZodForm, EItemType } from '@/components/form';

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const SignInPage = () => {
  const { t } = useTranslation();
  const { methods, ItemField } = useZodForm({ schema: formSchema });

  return (
    <div className='p-6 w-[600px] flex flex-col items-center bg-amber-100'>
      <p className='text-4xl font-bold'>{t('common.signIn')}</p>
      <ItemField
        iType={EItemType.INPUT}
        fieldName='username'
        label='UserName'
        control={methods.control}
      />
    </div>
  );
};

export default SignInPage;
