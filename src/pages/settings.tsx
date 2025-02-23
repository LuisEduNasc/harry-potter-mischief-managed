import React from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

type House = {
  id: number;
  value: string;
  label: string;
};

const houses: House[] = [
  { id: 1, value: 'gryffindor', label: 'Gryffindor' },
  { id: 2, value: 'slytherin', label: 'Slytherin' },
  { id: 3, value: 'hufflepuff', label: 'Hufflepuff' },
  { id: 4, value: 'ravenclaw', label: 'Ravenclaw' },
];

export const Settings: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');

  return (
    <>
      <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white'>
        Select your favorite Harry Potter house
      </h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='w-[200px] justify-between'
          >
            {value
              ? houses.find((house) => house.value === value)?.label
              : 'Select house...'}
            <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput />
            <CommandList>
              <CommandEmpty>No house found.</CommandEmpty>
              <CommandGroup>
                {houses.map((house) => (
                  <CommandItem
                    key={house.value}
                    value={house.value}
                    onSelect={(currentValue: string) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === house.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {house.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};
