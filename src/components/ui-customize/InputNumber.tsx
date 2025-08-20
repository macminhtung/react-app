import type { ComponentProps } from 'react';
import { InputC } from '@/components/ui-customize';

type TInputNumberCProps = Omit<ComponentProps<typeof InputC>, 'type'> & {
  decimalLimit?: number;
};

export const InputNumberC = (props: TInputNumberCProps) => {
  const { decimalLimit, onChange, ...rest } = props;

  return (
    <InputC
      {...rest}
      type='number'
      onChange={(e) => {
        const regex = new RegExp(`^-?\\d*(?:\\.\\d{0,${decimalLimit}})?$`);
        const { value } = e.target;
        if ((value === '' || regex.test(value)) && onChange) onChange(e);
      }}
    />
  );
};
