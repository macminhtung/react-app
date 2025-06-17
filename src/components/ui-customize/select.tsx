import type { ComponentProps, ReactNode } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ISelectOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export type TSelectProps = Omit<ComponentProps<typeof SelectPrimitive.Trigger>, 'onChange'> & {
  options: ISelectOption[];
  loading?: boolean;
  spinClassName?: string;
  placeholder?: ReactNode;
  onChange?: (value: string) => void;
};

export const SelectC = (props: TSelectProps) => {
  const { options = [], className, placeholder, loading, spinClassName, onChange, ...rest } = props;

  return (
    <Select
      onValueChange={onChange}
      defaultValue={placeholder ? undefined : options[0]?.value}
      disabled={loading}
    >
      <SelectTrigger
        className={cn(
          'relative w-40 min-h-10',
          className,
          `${loading && '[&>svg.lucide-chevron-down]:hidden'}`
        )}
        {...rest}
      >
        <SelectValue placeholder={placeholder} />
        {loading && (
          <Loader2
            className={cn('absolute right-[12px] animate-spin text-primary', spinClassName)}
          />
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(({ label, value, disabled }, idx) => (
            <SelectItem key={`${idx}-${value}`} value={value} disabled={disabled}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
