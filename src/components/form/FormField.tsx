import type { ElementType, ComponentProps } from 'react';
import { z, ZodType } from 'zod';
import type { ZodObject, objectOutputType, objectInputType, ZodTypeAny, ZodArray } from 'zod';
import { type Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui';
import {
  InputC,
  SelectC,
  MultiSelectC,
  PasswordC,
  CheckboxC,
  SwitchC,
  RadioGroupC,
  DatePickerC,
  RangeDatePickerC,
} from '@/components/ui-customize';
import { EItemFieldType } from '@/components/form/enums';
import { cn } from '@/lib/utils';

type TItemProps =
  | { iType: EItemFieldType.INPUT; iProps?: ComponentProps<typeof InputC> }
  | { iType: EItemFieldType.PASSWORD; iProps?: ComponentProps<typeof PasswordC> }
  | { iType: EItemFieldType.SELECT; iProps: ComponentProps<typeof SelectC> }
  | { iType: EItemFieldType.MULTI_SELECT; iProps: ComponentProps<typeof MultiSelectC> }
  | { iType: EItemFieldType.TEXTAREA; iProps?: ComponentProps<typeof Textarea> }
  | { iType: EItemFieldType.CHECK_BOX; iProps?: ComponentProps<typeof CheckboxC> }
  | { iType: EItemFieldType.SWITCH; iProps?: ComponentProps<typeof SwitchC> }
  | { iType: EItemFieldType.RADIO_GROUP; iProps: ComponentProps<typeof RadioGroupC> }
  | { iType: EItemFieldType.DATE_PICKER; iProps?: ComponentProps<typeof DatePickerC> }
  | { iType: EItemFieldType.RANGE_DATE_PICKER; iProps?: ComponentProps<typeof RangeDatePickerC> };

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
  [EItemFieldType.MULTI_SELECT]: MultiSelectC,
  [EItemFieldType.TEXTAREA]: Textarea,
  [EItemFieldType.CHECK_BOX]: CheckboxC,
  [EItemFieldType.SWITCH]: SwitchC,
  [EItemFieldType.RADIO_GROUP]: RadioGroupC,
  [EItemFieldType.DATE_PICKER]: DatePickerC,
  [EItemFieldType.RANGE_DATE_PICKER]: RangeDatePickerC,
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
  const isHorizontal = [EItemFieldType.CHECK_BOX, EItemFieldType.SWITCH].includes(iType);

  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div
              className={cn(
                'flex gap-2 flex-col ',
                isHorizontal && 'flex-row-reverse justify-end items-center'
              )}
            >
              <FormLabel>{label}</FormLabel>
              <ItemField {...field} {...iProps} onBlur={() => field.onBlur()} />
            </div>
          </FormControl>
          {itemFieldDescription && <FormDescription>{itemFieldDescription}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
