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
  input: z.string().optional(),
  password: z.string().optional(),
  textarea: z.string().optional(),
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
  const { Form, ItemField } = useZodForm({
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
    <div className='flex flex-col items-center w-full max-w-[800px]'>
      <p className='text-4xl font-bold mb-10'>TEST FORM FIELDS</p>
      <Form onSubmit={onSubmit} className='grid gap-6 w-full'>
        <div className='grid grid-cols-2 gap-6 max-md:grid-cols-1'>
          <div className='grid gap-6'>
            <ItemField iType={EItemFieldType.INPUT} label={'INPUT'} fieldName='input' />
            <ItemField iType={EItemFieldType.PASSWORD} label={'PASSWORD'} fieldName='password' />
            <ItemField iType={EItemFieldType.TEXTAREA} label={'TEXTAREA'} fieldName='textarea' />
            <ItemField
              iType={EItemFieldType.SELECT}
              label={'SELECT'}
              fieldName='select'
              iProps={{ options, placeholder: 'Select option', className: 'w-full' }}
            />
            <ItemField
              iType={EItemFieldType.MULTI_SELECT}
              label={'MULTI_SELECT'}
              fieldName='multiSelect'
              iProps={{ options }}
            />
          </div>
          <div className='grid gap-6'>
            <ItemField iType={EItemFieldType.CHECK_BOX} label={'CHECK_BOX'} fieldName='checkbox' />
            <ItemField iType={EItemFieldType.SWITCH} label={'SWITCH'} fieldName='switch' />
            <ItemField
              iType={EItemFieldType.RADIO_GROUP}
              label={'RADIO_GROUP'}
              fieldName='radioGroup'
              iProps={{ options }}
            />
            <ItemField
              iType={EItemFieldType.DATE_PICKER}
              label={'DATE_PICKER'}
              fieldName='datePicker'
              iProps={{ className: 'w-full' }}
            />
            <ItemField
              iType={EItemFieldType.RANGE_DATE_PICKER}
              label={'RANGE_DATE_PICKER'}
              fieldName='rangeDatePicker'
              iProps={{ className: 'w-full' }}
            />
          </div>
        </div>

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
