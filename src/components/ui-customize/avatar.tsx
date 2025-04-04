import type { ComponentProps, ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import { AvatarImageProps } from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';

interface IProps
  extends ComponentProps<
    ForwardRefExoticComponent<AvatarImageProps & RefAttributes<HTMLImageElement>>
  > {
  fallbackElm?: ReactNode;
}

export function AvatarC(props: IProps) {
  const { className, fallbackElm, ...rest } = props;
  return (
    <Avatar className={cn('border-2 border-primary', className)}>
      <AvatarImage {...rest} />
      {fallbackElm && <AvatarFallback>{fallbackElm}</AvatarFallback>}
    </Avatar>
  );
}
