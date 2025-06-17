import { useCallback } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/common/constants';
import { useZodForm } from '@/components/form/hooks';
import { EItemFieldType } from '@/components/form/enums';
import { ButtonC } from '@/components/ui-customize';

const options = [
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
];

const signInSchema = z.object({
  input: z.string(),
  password: z
    .string()
    .min(6, { message: 'Minimum 6 characters' })
    .max(20, { message: 'Maximum 20 characters' }),
  textarea: z.string(),
  checkbox: z.boolean(),
  switch: z.boolean(),
  select: z.string(),
  multiSelect: z.array(z.string()).nullable(),
  radioGroup: z.string(),
  datePicker: z.date(),
  rangeDatePicker: z.object({ from: z.date(), to: z.date() }),
});

const TestFormPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { methods, Form, ItemField } = useZodForm({
    schema: signInSchema,
    defaultValues: {
      input: '',
      password: '',
      textarea: '',
      checkbox: false,
      select: '',
      switch: false,
      radioGroup: '',
      datePicker: undefined,
      rangeDatePicker: { from: undefined, to: undefined },
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof signInSchema>) => {
    console.log(values);
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <p className='text-4xl font-bold mb-10'>TEST FORM FIELDS</p>
      <Form onSubmit={onSubmit} className='grid gap-6 w-full max-w-[20rem]'>
        <ItemField
          control={methods.control}
          iType={EItemFieldType.INPUT}
          label={'INPUT'}
          fieldName='input'
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.PASSWORD}
          label={'PASSWORD'}
          fieldName='password'
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.TEXTAREA}
          label={'TEXTAREA'}
          fieldName='textarea'
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.SELECT}
          label={'SELECT'}
          fieldName='select'
          iProps={{ options, placeholder: 'Select option', className: 'w-full' }}
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.MULTI_SELECT}
          label={'MULTI_SELECT'}
          fieldName='multiSelect'
          iProps={{ options }}
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.CHECK_BOX}
          label={'CHECK_BOX'}
          fieldName='checkbox'
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.SWITCH}
          label={'SWITCH'}
          fieldName='switch'
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.RADIO_GROUP}
          label={'RADIO_GROUP'}
          fieldName='radioGroup'
          iProps={{ options }}
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.DATE_PICKER}
          label={'DATE_PICKER'}
          fieldName='datePicker'
          iProps={{ className: 'w-full' }}
        />

        <ItemField
          control={methods.control}
          iType={EItemFieldType.RANGE_DATE_PICKER}
          label={'RANGE_DATE_PICKER'}
          fieldName='rangeDatePicker'
          iProps={{ className: 'w-full' }}
        />

        <ButtonC type='submit'>{t('common.submit')}</ButtonC>

        <div className='text-center'>
          <ButtonC
            variant='outline'
            onClick={() => navigate(ROUTE_PATH.SIGNIN)}
            className='font-bold text-xl'
          >
            {t('common.signIn')}
          </ButtonC>
        </div>
      </Form>
    </div>
  );
};

export default TestFormPage;
