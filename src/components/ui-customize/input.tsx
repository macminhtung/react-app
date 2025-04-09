import { Input } from '@/components/ui';
import { InputHTMLAttributes } from 'react';

export const InputC = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className, placeholder, onChange, ...rest } = props;

  return <Input className={className} placeholder={placeholder} onChange={onChange} {...rest} />;
};
