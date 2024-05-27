'use client'

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CountryDataType, Countrydata } from '@/app/admin/components/countryConstants';

interface ComboboxFormProps {
  selectedCountry: CountryDataType | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<CountryDataType | null>>;
}

export function ComboboxForm({ selectedCountry, setSelectedCountry }: ComboboxFormProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center z-[9999] space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            {selectedCountry ? <>{selectedCountry.Name}</> : <> Set Country</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 z-[99999]" side="top" align="start">
          <Command>
            <CommandInput placeholder="Choose Country..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {Countrydata.map((status) => (
                  <CommandItem
                    key={status.id}
                    value={status.id}
                    onSelect={(id) => {
                      setSelectedCountry(
                        Countrydata.find((country) => country.id === id) || null
                      );
                      setOpen(false);
                    }}
                  >
                    {status.Name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
