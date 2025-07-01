import { useCallback } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/common/constants';
import { useZodForm } from '@/components/form/hooks';
import { EItemFieldType } from '@/components/form/enums';
import { ButtonC } from '@/components/ui-customize';

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: 'Minimum 2 characters' })
      .max(50, { message: 'Maximum 50 characters' }),
    password: z
      .string()
      .min(6, { message: 'Minimum 6 characters' })
      .max(20, { message: 'Maximum 20 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const SignUpPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { Form, ItemField } = useZodForm({
    schema: signUpSchema,
    defaultValues: { username: '', password: '', confirmPassword: '' },
  });

  const onSubmit = useCallback((values: z.infer<typeof signUpSchema>) => {
    console.log(values);
  }, []);

  return (
    <div className='size-full flex flex-col items-center gap-6'>
      <p className='text-4xl font-bold mb-10'>{t('common.signUp')}</p>
      <Form onSubmit={onSubmit} className='grid gap-6 w-full max-w-[20rem]'>
        <ItemField iType={EItemFieldType.INPUT} label={t('common.username')} fieldName='username' />

        <ItemField
          iType={EItemFieldType.PASSWORD}
          label={t('common.password')}
          fieldName='password'
        />

        <ItemField
          iType={EItemFieldType.PASSWORD}
          label={t('common.confirmPassword')}
          fieldName='confirmPassword'
        />

        <ButtonC type='submit'>{t('common.submit')}</ButtonC>
      </Form>
      <div className='text-center'>
        <span>{t('common.Already have an account?')}</span>
        <ButtonC
          variant='link'
          onClick={() => navigate(ROUTE_PATH.SIGNIN)}
          className='font-bold text-xl'
        >
          {t('common.signIn')}
        </ButtonC>
      </div>
    </div>
  );
};

export default SignUpPage;
