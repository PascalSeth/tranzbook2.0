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
import { Place, locations } from '@/components/locationConstants/Locations';
  interface ComboboxFormProps {
    onLocationSelect: (location: string) => void;
  }
  export function ComboboxForm({ onLocationSelect, }: ComboboxFormProps) {
    const [open, setOpen] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState<Place | null>(null);

  const handleLocationSelect = (location: string) => {
    let foundLocation: Place | null = null;

    locations.forEach((country) => {
      const loc = country.locations.find((loc) => loc.capital === location);
      if (loc) {
        foundLocation = loc;
      }
    });

    setSelectedLocation(foundLocation);
    setOpen(false);
  };


  return (
    <div className="flex items-center w-full space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="w-full ">
            {selectedLocation ? <>{selectedLocation.capital}</> : <>From</>}
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 z-[99999] bg-white text-[#fdb022] font-semibold" side="top" align="start">
          <Command>
            <CommandInput placeholder="Choose Location" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {locations.flatMap((country) =>
                  country.locations.map((location) => (
                    <CommandItem
                      key={location.capital}
                      value={location.capital}
                      onSelect={() => handleLocationSelect(location.capital)}
                    >
                      {location.capital}
                    </CommandItem>
                  ))
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
