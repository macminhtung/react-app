import { useState, ReactNode } from 'react';
import type { Dispatch, KeyboardEvent, SetStateAction, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { CheckIcon, XCircle, ChevronDown, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

export type TMultiSelectCProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> &
  VariantProps<typeof multiSelectVariants> & {
    defaultValue?: string[];
    placeholder?: string;
    options: { label: ReactNode; value: string }[];
    onChange?: Dispatch<SetStateAction<string[]>>; // Use for react-hook-form
    maxCount?: number; // Maximum number of items to display [Optional - Defaults: 3]
    modalPopover?: boolean; // The modality of the popover. When set to true, interaction with outside elements [Optional - Defaults: False]
  };

export const MultiSelectC = (props: TMultiSelectCProps) => {
  const {
    options,
    onChange,
    variant,
    defaultValue = [],
    placeholder = 'Select options',
    maxCount = 3,
    modalPopover = false,
    className,
    ...prev
  } = props;
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Handle searching
  const handleSearching = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsPopoverOpen(true);
    } else if (event.key === 'Backspace' && !event.currentTarget.value) {
      const newSelectedValues = [...selectedValues];
      newSelectedValues.pop();
      setSelectedValues(newSelectedValues);
      if (onChange) onChange(newSelectedValues);
    }
  };

  // Toggle option value
  const toggleOptionValue = (optionValue: string) => {
    const newSelectedValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((value) => value !== optionValue)
      : [...selectedValues, optionValue];
    setSelectedValues(newSelectedValues);
    if (onChange) onChange(newSelectedValues);
  };

  // Clear all selected values
  const handleClearAll = () => {
    setSelectedValues([]);
    if (onChange) onChange([]);
  };

  // Toggle popover modal
  const togglePopoverModal = () => setIsPopoverOpen((prev) => !prev);

  // Toggle select all checkbox
  const toggleSelectAllCheckbox = () => {
    if (selectedValues.length === options.length) {
      handleClearAll();
    } else {
      const allValues = options.map((option) => option.value);
      setSelectedValues(allValues);
      if (onChange) onChange(allValues);
    }
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} modal={modalPopover}>
      <PopoverTrigger>
        <Button
          {...prev}
          onClick={togglePopoverModal}
          className={cn(
            'flex w-full py-0 px-1 border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto',
            className
          )}
          asChild
        >
          {selectedValues.length > 0 ? (
            <div className='flex justify-between items-center w-full'>
              <div className='flex flex-wrap items-center'>
                {selectedValues.slice(0, maxCount).map((value, idx) => {
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
                {selectedValues.length > maxCount && (
                  <Badge
                    className={cn(
                      'bg-transparent text-foreground border-foreground/1 hover:bg-transparent h-8 text-md',
                      multiSelectVariants({ variant })
                    )}
                  >
                    {`+ ${selectedValues.length - maxCount} more`}
                  </Badge>
                )}
              </div>
              <div className='flex items-center justify-between [&_svg]:text-gray-900'>
                <XIcon
                  className='h-4 mx-2 cursor-pointer text-muted-foreground scale-[1.2]'
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClearAll();
                  }}
                />
                <Separator orientation='vertical' className='flex min-h-6 h-full' />
                <ChevronDown className='h-4 mx-2 cursor-pointer text-muted-foreground scale-[1.2]' />
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-between w-full mx-auto'>
              <span className='text-md text-muted-foreground'>{placeholder}</span>
              <ChevronDown className='h-4 cursor-pointer text-muted-foreground mx-2 scale-[1.2]' />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='w-auto p-0'
        align='start'
        onEscapeKeyDown={() => setIsPopoverOpen(false)}
      >
        <Command>
          <CommandInput
            className='min-h-10 [&_svg]:scale-[1.2]'
            placeholder='Search...'
            onKeyDown={handleSearching}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem key='all' onSelect={toggleSelectAllCheckbox} className='cursor-pointer'>
                <div
                  className={cn(
                    'mr-2 my-1 flex h-5 w-5 items-center justify-center rounded-sm border border-primary',
                    selectedValues.length === options.length
                      ? 'bg-primary text-white'
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
                        'mr-2 my-1 flex h-5 w-5 items-center justify-center rounded-sm border border-primary',
                        isSelected ? 'bg-primary text-white' : 'opacity-50 [&_svg]:invisible'
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
            <CommandGroup>
              <div className='flex gap-1 items-center justify-center h-9'>
                {selectedValues.length > 0 && (
                  <>
                    <CommandItem
                      onSelect={handleClearAll}
                      className='flex w-full justify-center cursor-pointer font-semibold'
                    >
                      Clear
                    </CommandItem>
                    <Separator orientation='vertical' className='flex min-h-7 h-full' />
                  </>
                )}
                <CommandItem
                  onSelect={() => setIsPopoverOpen(false)}
                  className='flex w-full justify-center cursor-pointer font-semibold'
                >
                  Close
                </CommandItem>
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
