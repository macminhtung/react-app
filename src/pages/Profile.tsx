import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useZodForm } from '@/components/form/hooks';
import { EItemFieldType } from '@/components/form/enums';
import { useAppStore } from '@/store';
import { ButtonC } from '@/components/ui-customize';
import { showToastSuccess, uploadImageToS3 } from '@/common/funcs';
import { useUpdateProfileMutation } from '@/react-query/auth';

const profileSchema = z.object({
  avatar: z.string().optional(),
  email: z.string().email(),
  firstName: z
    .string()
    .min(1, { message: 'Required' })
    .max(20, { message: 'Maximum 20 characters' }),
  lastName: z
    .string()
    .min(1, { message: 'Required' })
    .max(20, { message: 'Maximum 20 characters' }),
});

const ProfilePage = () => {
  const { t } = useTranslation();
  const authUser = useAppStore((state) => state.authUser);

  const { mutateAsync, isPending } = useUpdateProfileMutation({
    onSuccess: () => showToastSuccess(t('updatedSuccessfully')),
  });

  const { Form, ItemField } = useZodForm({ schema: profileSchema, defaultValues: authUser });

  const onSubmit = ({ email: _, avatar, ...rest }: z.infer<typeof profileSchema>) =>
    mutateAsync({ payload: { avatar: avatar || '', ...rest } });

  return (
    <div className='size-full flex flex-col items-center gap-6'>
      <p className='text-4xl font-bold mb-10'>{t('profile')}</p>
      <Form onSubmit={onSubmit} className='grid gap-6 w-full max-w-[20rem]'>
        <ItemField
          className='flex items-center'
          iType={EItemFieldType.UPLOAD_IMAGE}
          label=''
          fieldName='avatar'
          iProps={{ onUpload: uploadImageToS3 }}
        />

        <ItemField
          iType={EItemFieldType.INPUT}
          label={t('email')}
          fieldName='email'
          iProps={{ disabled: true }}
        />

        <ItemField iType={EItemFieldType.INPUT} label={t('firstName')} fieldName='firstName' />

        <ItemField iType={EItemFieldType.INPUT} label={t('lastName')} fieldName='lastName' />

        <ButtonC type='submit' loading={isPending}>
          {t('submit')}
        </ButtonC>
      </Form>
    </div>
  );
};

export default ProfilePage;
