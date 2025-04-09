import type { InputHTMLAttributes, ElementType } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { InputC } from '@/components/ui-customize';
import { SelectC, ISelectProps } from '@/components/ui-customize/select';
import type { Control } from 'react-hook-form';
import type { FieldPath, FieldValues } from 'react-hook-form';
import type { ZodObject, objectOutputType, objectInputType, ZodTypeAny, ZodArray } from 'zod';
import { z } from 'zod';

// eslint-disable-next-line react-refresh/only-export-components
export enum EItemType {
  INPUT = 'INPUT',
  SELECT = 'SELECT',
}

type TItemProps =
  | { iType: EItemType.INPUT; iProps?: InputHTMLAttributes<HTMLInputElement> }
  | { iType: EItemType.SELECT; iProps: ISelectProps };

export type TZodSchema =
  | ZodObject<
      FieldValues,
      'strip',
      ZodTypeAny,
      objectOutputType<FieldValues, ZodTypeAny, 'strip'>,
      objectInputType<FieldValues, ZodTypeAny, 'strip'>
    >
  | ZodArray<ZodTypeAny>;

const ITEM_FIELDS_MAP = {
  [EItemType.INPUT]: InputC,
  [EItemType.SELECT]: SelectC,
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
