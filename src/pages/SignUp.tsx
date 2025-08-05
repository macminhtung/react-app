import { useCallback } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/common/constants';
import { showToastSuccess } from '@/common/funcs';
import { useZodForm } from '@/components/form/hooks';
import { EItemFieldType } from '@/components/form/enums';
import { ButtonC } from '@/components/ui-customize';
import { useSignUpMutation } from '@/react-query/auth';

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: 'Minimum 6 characters' })
      .max(20, { message: 'Maximum 20 characters' }),
    confirmPassword: z.string(),
    firstName: z
      .string()
      .min(1, { message: 'Required' })
      .max(20, { message: 'Maximum 20 characters' }),
    lastName: z
      .string()
      .min(1, { message: 'Required' })
      .max(20, { message: 'Maximum 20 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const SignUpPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useSignUpMutation({
    onSuccess: () => {
      showToastSuccess(t('signUpSuccessfully'));
      navigate(ROUTE_PATH.SIGNIN);
    },
  });

  const { Form, ItemField } = useZodForm({
    schema: signUpSchema,
    defaultValues: { email: '', password: '', confirmPassword: '', firstName: '', lastName: '' },
  });

  const onSubmit = useCallback(
    ({ confirmPassword: _, ...rest }: z.infer<typeof signUpSchema>) => {
      mutateAsync({ payload: rest });
    },
    [mutateAsync]
  );

  return (
    <div className='size-full flex flex-col items-center gap-6'>
      <p className='text-4xl font-bold mb-10'>{t('signUp')}</p>
      <Form onSubmit={onSubmit} className='grid gap-6 w-full max-w-[20rem]'>
        <ItemField iType={EItemFieldType.INPUT} label={t('email')} fieldName='email' />

        <ItemField iType={EItemFieldType.PASSWORD} label={t('password')} fieldName='password' />

        <ItemField
          iType={EItemFieldType.PASSWORD}
          label={t('confirmPassword')}
          fieldName='confirmPassword'
        />

        <ItemField iType={EItemFieldType.INPUT} label={t('firstName')} fieldName='firstName' />

        <ItemField iType={EItemFieldType.INPUT} label={t('lastName')} fieldName='lastName' />

        <ButtonC type='submit' loading={isPending}>
          {t('submit')}
        </ButtonC>
      </Form>
      <div className='text-center'>
        <span>{t('Already have an account?')}</span>
        <ButtonC
          variant='link'
          onClick={() => navigate(ROUTE_PATH.SIGNIN)}
          className='font-bold text-xl'
        >
          {t('signIn')}
        </ButtonC>
      </div>
    </div>
  );
};

export default SignUpPage;
