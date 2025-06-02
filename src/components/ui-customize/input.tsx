import { ReactNode } from 'react';
import { Input } from '@/components/ui';

type TOriginInputProps = React.ComponentProps<typeof Input>;
export type TInputCProps = TOriginInputProps & {
  startItem?: ReactNode;
  endItem?: ReactNode;
};

export const InputC = (props: TInputCProps) => {
  const { className, startItem, endItem, ...rest } = props;

  return (
    <div className='relative'>
      {startItem && <div className='absolute left-0'>{startItem}</div>}
      <Input
        className={`${startItem && 'pl-10'} ${endItem && 'pr-10'} ${className} border-gray-400`}
        {...rest}
      />
      {endItem && <div className='absolute top-[10px] right-[10px] cursor-pointer'>{endItem}</div>}
    </div>
  );
};
