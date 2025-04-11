import { DetailedHTMLProps, FormHTMLAttributes, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { DefaultValues, UseFormProps } from 'react-hook-form';
import { FormProvider } from '@/components/ui';
import { FormFieldC, TFormField, TZodSchema } from '@/components/form';
import { z } from 'zod';

type TUseFormC<T extends TZodSchema> = {
  schema: T;
  defaultValues?: DefaultValues<z.infer<T>>;
  values?: z.infer<T>;
} & UseFormProps;

type TFormProps<T extends TZodSchema> = Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & { onSubmit: (values: z.infer<T>) => void };

export const useZodForm = <T extends TZodSchema>(props: TUseFormC<T>) => {
  const { schema, ...rest } = props;
  const methods = useForm({ resolver: zodResolver(schema), ...rest });

  const ItemField = useCallback(
    (props: TFormField<T>) => FormFieldC({ ...props, control: methods.control }),
    [methods.control]
  );

  const Form = useCallback(
    (props: TFormProps<T>) => {
      const { onSubmit, ...rest } = props;
      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} {...rest} />
        </FormProvider>
      );
    },
    [methods]
  );

  return { methods, Form, ItemField };
};
