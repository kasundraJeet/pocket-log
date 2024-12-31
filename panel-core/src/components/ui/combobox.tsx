import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Generic Combobox Component
interface ComboboxProps<T> {
  items: T[]; // The list of items to display in the combobox
  value: string; // The currently selected value
  onValueChange: (value: string) => void; // Callback to handle value change
  placeholder?: string; // Custom placeholder text
  labelKey: string; // The key in the item to use as the label
  valueKey: string; // The key in the item to use as the value
}

export function Combobox<T>({
  items,
  value,
  onValueChange,
  placeholder = "Select an item...",
  labelKey,
  valueKey,
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? items.find((item) => item[valueKey] === value)?.[labelKey]
            : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandInput placeholder="Search ..." className="h-9" />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item[valueKey]}
                  value={item[valueKey].toString()}
                  onSelect={(currentValue) => {
                    onValueChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {item[labelKey]}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item[valueKey] ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
