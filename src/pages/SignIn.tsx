import { useCallback } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAuthContext } from '@/context/useAuthContext';
import { ROUTE_PATH } from '@/common/constants';
import { useZodForm } from '@/components/form/hooks';
import { EItemFieldType } from '@/components/form/enums';
import { ButtonC } from '@/components/ui-customize';
import { useSignInMutation } from '@/react-query/auth';
import { manageTokens, EManageTokenType } from '@/common/funcs';

const signInSchema = z.object({
  email: z
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
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setTokens } = useAuthContext();

  const { Form, ItemField } = useZodForm({
    schema: signInSchema,
    defaultValues: { email: '', password: '' },
  });

  const { mutateAsync, isPending } = useSignInMutation({
    onSuccess: (data) => {
      setTokens(data.signIn);
      manageTokens({ type: EManageTokenType.SET, ...data.signIn });
      navigate(ROUTE_PATH.DASHBOARD.ROOT);
    },
  });

  const onSubmit = useCallback(
    (values: z.infer<typeof signInSchema>) => mutateAsync({ payload: values }),
    [mutateAsync]
  );

  return (
    <div className='size-full flex flex-col items-center gap-6'>
      <p className='text-4xl font-bold mb-10'>{t('common.signIn')}</p>
      <Form onSubmit={onSubmit} className='grid gap-6 w-full max-w-[20rem]'>
        <ItemField iType={EItemFieldType.INPUT} label={t('common.username')} fieldName='email' />

        <ItemField
          iType={EItemFieldType.PASSWORD}
          label={t('common.password')}
          fieldName='password'
        />

        <ButtonC type='submit' loading={isPending}>
          {t('common.signIn')}
        </ButtonC>
      </Form>
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
    </div>
  );
};

export default SignInPage;
