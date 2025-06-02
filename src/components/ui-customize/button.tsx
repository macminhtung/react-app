import { Button } from '@/components/ui';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type TOriginButtonProps = React.ComponentProps<typeof Button>;
type TButtonProps = TOriginButtonProps & {
  loading?: boolean;
  spinClassName?: string;
};

export function ButtonC(props: TButtonProps) {
  const { className, loading, children, spinClassName, ...rest } = props;
  return (
    <Button className={cn('hover:cursor-pointer', className)} {...rest}>
      {loading && <Loader2 className={cn('animate-spin text-white', spinClassName)} />}
      {children}
    </Button>
  );
}
