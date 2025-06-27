import { useCallback } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/common/constants';
import { useZodForm } from '@/components/form/hooks';
import { EItemFieldType } from '@/components/form/enums';
import { ButtonC } from '@/components/ui-customize';

const signInSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Minimum 2 characters' })
    .max(50, { message: 'Maximum 50 characters' })
    .email('Email invalid'),
  password: z
    .string()
    .min(6, { message: 'Minimum 6 characters' })
    .max(20, { message: 'Maximum 20 characters' }),
});

const SignInPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { Form, ItemField } = useZodForm({
    schema: signInSchema,
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = useCallback((values: z.infer<typeof signInSchema>) => {
    console.log(values);
  }, []);

  return (
    <div className='size-full flex flex-col items-center'>
      <p className='text-4xl font-bold mb-10'>{t('common.signIn')}</p>
      <Form onSubmit={onSubmit} className='grid gap-6 w-full max-w-[20rem]'>
        <ItemField iType={EItemFieldType.INPUT} label={t('common.username')} fieldName='username' />

        <ItemField
          iType={EItemFieldType.PASSWORD}
          label={t('common.password')}
          fieldName='password'
        />

        <ButtonC type='submit'>{t('common.submit')}</ButtonC>

        <div className='text-center'>
          <span>{t("common.Don't have an account?")}</span>
          <ButtonC
            variant='link'
            onClick={() => navigate(ROUTE_PATH.SIGNUP)}
            className='font-bold text-xl'
          >
            {t('common.signUp')}
          </ButtonC>
        </div>

        <div className='flex flex-col gap-2'>
          <ButtonC
            onClick={() => navigate(ROUTE_PATH.TEST_FORM)}
            className='font-bold text-xl'
            variant={'outline'}
          >
            Test Form Fields
          </ButtonC>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
