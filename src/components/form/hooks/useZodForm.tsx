import { useCallback } from 'react';
import type { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import type { ZodSchema } from 'zod';
import {
  useForm,
  FormProvider,
  DefaultValues,
  FieldValues,
  SubmitHandler,
  UseFormProps,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormFieldC, type TItemFieldC } from '@/components/form';

type TFormProps<T extends FieldValues> = Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & { onSubmit: SubmitHandler<T | FieldValues> };

type TUseZodForm<T extends FieldValues> = UseFormProps<T> & {
  schema: ZodSchema<T>;
  defaultValues?: DefaultValues<T>;
  values?: T;
};

export const useZodForm = <T extends FieldValues>(props: TUseZodForm<T>) => {
  const { schema, mode = 'onBlur', ...rest } = props;
  const methods = useForm<T, unknown, T>({ resolver: zodResolver(schema), mode, ...rest });

  const ItemField = useCallback(
    (itemProps: TItemFieldC<T>) =>
      FormFieldC<T>({ ...itemProps, control: methods.control, schema }),
    [methods.control, schema]
  );

  const Form = useCallback(
    ({ onSubmit, ...rest }: TFormProps<T>) => (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} {...rest} />
      </FormProvider>
    ),
    [methods]
  );

  return { methods, Form, ItemField };
};
