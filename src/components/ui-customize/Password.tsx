import { useState } from 'react';
import { InputC, TInputCProps } from '@/components/ui-customize';
import EyeCloseIcon from '@/common/icons/eye-close.svg?react';

export type TPasswordCProps = Omit<TInputCProps, 'type' | 'endItem'>;

export const PasswordC = (props: TPasswordCProps) => {
  const [show] = useState(false);

  const { className, ...rest } = props;

  return (
    <InputC
      type={show ? undefined : 'password'}
      className={className}
      {...rest}
      endItem={EyeCloseIcon}
    />
  );
};
