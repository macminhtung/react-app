import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useZodForm } from '@/components/form/hooks';
import { EItemFieldType } from '@/components/form/enums';
import { useAuthContext } from '@/context/useAuthContext';
import { ButtonC } from '@/components/ui-customize';

const profileSchema = z.object({
  avatar: z.string().optional(),
  email: z.string().email('Email invalid'),
  firstName: z
    .string()
    .min(1, { message: 'Minimum 1 characters' })
    .max(20, { message: 'Maximum 20 characters' }),
  lastName: z
    .string()
    .min(1, { message: 'Minimum 1 characters' })
    .max(20, { message: 'Maximum 20 characters' }),
});

const uploadImage = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('uploadedURL');
    }, 2000);
  });

const ProfilePage = () => {
  const { t } = useTranslation();
  const { authUser } = useAuthContext();

  const { Form, ItemField } = useZodForm({ schema: profileSchema, defaultValues: authUser });

  const onSubmit = (values: z.infer<typeof profileSchema>) => console.log(values);

  return (
    <div className='size-full flex flex-col items-center gap-6'>
      <p className='text-4xl font-bold mb-10'>{t('common.profile')}</p>
      <Form onSubmit={onSubmit} className='grid gap-6 w-full max-w-[20rem]'>
        <ItemField
          iType={EItemFieldType.UPLOAD_IMAGE}
          label={t('common.avatar')}
          fieldName='avatar'
          iProps={{ onUpload: uploadImage }}
        />

        <ItemField
          iType={EItemFieldType.INPUT}
          label={t('common.email')}
          fieldName='email'
          iProps={{ disabled: true }}
        />

        <ItemField
          iType={EItemFieldType.INPUT}
          label={t('common.firstName')}
          fieldName='firstName'
        />

        <ItemField iType={EItemFieldType.INPUT} label={t('common.lastName')} fieldName='lastName' />

        <ButtonC type='submit'>{t('common.submit')}</ButtonC>
      </Form>
    </div>
  );
};

export default ProfilePage;
