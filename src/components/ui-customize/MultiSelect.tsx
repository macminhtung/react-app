import { useState, useCallback } from 'react';
import type { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { CheckIcon, XCircle, ChevronDown, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { ISelectOption } from '@/components/ui-customize';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

const multiSelectVariants = cva('m-1', {
  variants: {
    variant: {
      default: 'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
      inverted: 'inverted',
    },
  },
  defaultVariants: { variant: 'default' },
});

export type TMultiSelectCProps = VariantProps<typeof multiSelectVariants> & {
  options: ISelectOption[];
  value?: ISelectOption['value'][]; // Use for react-hook-form
  onChange?: Dispatch<SetStateAction<string[]>>; // Use for react-hook-form
  className?: string;
  placeholder?: string;
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void; // Use for searching
  maxShow?: number; // Maximum number of items to display [Optional - Defaults: 3]
};

export const MultiSelectC = (props: TMultiSelectCProps) => {
  const {
    options,
    onChange,
    variant,
    value = [],
    placeholder = 'Select options',
    maxShow = 3,
    className,
    onSearch,
  } = props;
  // const [open, setOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  // Toggle option value
  const toggleOptionValue = useCallback(
    (optionValue: string) => {
      const newSelectedValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((value) => value !== optionValue)
        : [...selectedValues, optionValue];
      setSelectedValues(newSelectedValues);
      if (onChange) onChange(newSelectedValues);
    },
    [onChange, selectedValues]
  );

  // Clear all selected values
  const handleClearAll = useCallback(() => {
    setSelectedValues([]);
    if (onChange) onChange([]);
  }, [onChange]);

  // Toggle select all checkbox
  const toggleSelectAllCheckbox = useCallback(() => {
    if (selectedValues.length === options.length) {
      handleClearAll();
    } else {
      const allValues = options.map((option) => option.value);
      setSelectedValues(allValues);
      if (onChange) onChange(allValues);
    }
  }, [handleClearAll, onChange, options, selectedValues.length]);

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className={cn(
            'flex w-full min-w-52 py-0 px-1 border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto',
            className
          )}
          asChild
        >
          {selectedValues.length > 0 ? (
            <div className='flex justify-between items-center w-full'>
              <div className='flex flex-wrap items-center'>
                {selectedValues.slice(0, maxShow).map((value, idx) => {
                  const option = options.find((o) => o.value === value);
                  return (
                    <Badge
                      key={`${idx}-${value}`}
                      className={cn(multiSelectVariants({ variant }), 'h-8 text-md')}
                    >
                      {option?.label}
                      <div className='ml-2 h-4 w-4 cursor-pointer'>
                        <XCircle
                          className='scale-[1.2]'
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleOptionValue(value);
                          }}
                        />
                      </div>
                    </Badge>
                  );
                })}
                {selectedValues.length > maxShow && (
                  <Badge
                    className={cn(
                      'bg-transparent text-foreground border-foreground/1 hover:bg-transparent h-8 text-md',
                      multiSelectVariants({ variant })
                    )}
                  >
                    {`+ ${selectedValues.length - maxShow} more`}
                  </Badge>
                )}
              </div>
              <div className='flex items-center justify-between [&_svg]:text-primary'>
                <XIcon
                  className='h-4 mx-2 cursor-pointer text-primary scale-[1.2]'
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClearAll();
                  }}
                />
                <Separator orientation='vertical' className='flex min-h-6 h-full' />
                <ChevronDown className='h-4 mx-2 cursor-pointer text-primary scale-[1.2]' />
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-between w-full mx-auto'>
              <span className='text-md text-primary'>{placeholder}</span>
              <ChevronDown className='h-4 cursor-pointer text-primary mx-2 scale-[1.2]' />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Command className='min-w-52' onChange={onSearch}>
          {onSearch && (
            <CommandInput className='min-h-10 [&_svg]:scale-[1.2]' placeholder='Search...' />
          )}
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem key='all' onSelect={toggleSelectAllCheckbox} className='cursor-pointer'>
                <div
                  className={cn(
                    'm-1 flex h-5 w-5 items-center justify-center rounded-sm border border-primary',
                    selectedValues.length === options.length
                      ? 'bg-primary text-primary dark:bg-background'
                      : 'opacity-50 [&_svg]:invisible'
                  )}
                >
                  <CheckIcon className='h-5 w-5' />
                </div>
                <span className='font-semibold'>Select All</span>
              </CommandItem>
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => toggleOptionValue(option.value)}
                    className='cursor-pointer'
                  >
                    <div
                      className={cn(
                        'm-1 flex h-5 w-5 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary dark:bg-background'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className='h-5 w-5' />
                    </div>
                    <span className='text-md'>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
