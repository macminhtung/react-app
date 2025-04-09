import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { DefaultValues, UseFormProps } from 'react-hook-form';
import { FormFieldC, TFormField, TZodSchema } from '@/components/form';

type TUseFormC<T extends TZodSchema> = {
  schema: T;
  defaultValues?: DefaultValues<T>;
  values?: T;
} & UseFormProps;

export const useZodForm = <T extends TZodSchema>(props: TUseFormC<T>) => {
  const { schema, ...rest } = props;
  const methods = useForm({
    resolver: zodResolver(schema),
    ...rest,
  });

  const ItemField = useCallback(
    (props: TFormField<T>) => FormFieldC({ ...props, control: methods.control }),
    [methods.control]
  );

  return { methods, ItemField };
};
