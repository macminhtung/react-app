import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useZodForm } from '@/components/form/hooks';
import { EItemFieldType } from '@/components/form/enums';
import { ButtonC } from '@/components/ui-customize';

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(6).max(20),
});

const SignInPage = () => {
  const { t } = useTranslation();
  const { methods, Form, ItemField } = useZodForm({
    schema: formSchema,
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log(values);
  }, []);

  return (
    <div className='p-6 w-[600px] flex flex-col items-center bg-amber-100'>
      <p className='text-4xl font-bold'>{t('common.signIn')}</p>
      <Form onSubmit={onSubmit}>
        <ItemField
          iType={EItemFieldType.INPUT}
          fieldName='username'
          label='UserName'
          control={methods.control}
        />

        <ItemField
          iType={EItemFieldType.PASSWORD}
          fieldName='password'
          label='Password'
          control={methods.control}
        />

        <ButtonC type='submit'>Submit</ButtonC>
      </Form>
    </div>
  );
};

export default SignInPage;
