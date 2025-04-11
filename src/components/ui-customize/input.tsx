import { InputHTMLAttributes, ReactNode } from 'react';
import { Input } from '@/components/ui';

export type TInputCProps = InputHTMLAttributes<HTMLInputElement> & {
  startItem?: ReactNode;
  endItem?: ReactNode;
};

export const InputC = (props: TInputCProps) => {
  const { className, startItem, endItem, ...rest } = props;

  return (
    <div className='relative'>
      {startItem && <div className='absolute left-0'>{startItem}</div>}
      <Input className={`${startItem && 'pl-10'} ${endItem && 'pr-10'} ${className}`} {...rest} />
      {endItem && <div className='absolute right-0'>{endItem}</div>}
    </div>
  );
};
