import type { ElementType } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  InputC,
  TInputCProps,
  SelectC,
  TMultipleSelectProps,
  PasswordC,
  TPasswordCProps,
} from '@/components/ui-customize';
import type { Control } from 'react-hook-form';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { ZodObject, objectOutputType, objectInputType, ZodTypeAny, ZodArray } from 'zod';
import { z, ZodType } from 'zod';
import { EItemFieldType } from '@/components/form/enums';

type TItemProps =
  | { iType: EItemFieldType.INPUT; iProps?: TInputCProps }
  | { iType: EItemFieldType.PASSWORD; iProps?: TPasswordCProps }
  | { iType: EItemFieldType.SELECT; iProps: TMultipleSelectProps };

export type TZodSchema =
  | ZodObject<
      FieldValues,
      'strip',
      ZodTypeAny,
      objectOutputType<FieldValues, ZodTypeAny, 'strip'>,
      objectInputType<FieldValues, ZodTypeAny, 'strip'>
    >
  | ZodArray<ZodTypeAny>
  | ZodType;

const ITEM_FIELDS_MAP = {
  [EItemFieldType.INPUT]: InputC,
  [EItemFieldType.PASSWORD]: PasswordC,
  [EItemFieldType.SELECT]: SelectC,
};

export type TFormField<T extends TZodSchema> = TItemProps & {
  control: Control<FieldValues, unknown, FieldValues>;
  fieldName: FieldPath<z.infer<T>>;
  label: string;
  itemFieldDescription?: string;
};

export const FormFieldC = <T extends TZodSchema>(props: TFormField<T>) => {
  const { iType, control, fieldName, label, iProps, itemFieldDescription } = props;

  const ItemField: ElementType = ITEM_FIELDS_MAP[iType];

  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <ItemField {...field} {...iProps} />
          </FormControl>
          {itemFieldDescription && <FormDescription>{itemFieldDescription}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
