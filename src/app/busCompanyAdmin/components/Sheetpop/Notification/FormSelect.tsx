"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"

const items = [
  {
    id: "Joghn",
    label: "Joghn",
  },
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), ),
})
export function CheckboxReactHookFormMultipleUser() {
    const [selectAll, setSelectAll] = useState(false); // State to track Select All option
  
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        items: ["recents", "home"],
      },
    });
  
    // Function to handle Select All checkbox change
    const handleSelectAllChange = (checked: boolean) => {
      setSelectAll(checked); // Update Select All state
      const allItems = items.map(item => item.id); // Get IDs of all items
      form.setValue('items', checked ? allItems : []); // Set form value accordingly
    };
  
    return (
      <Form {...form}>
        <form className="">
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                <div className="mb-1">
                </div>
                <FormItem
                  key="selectAll"
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={selectAll}
                      onCheckedChange={handleSelectAllChange} // Handle Select All change
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">Select All</FormLabel>
                </FormItem>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>  )
}
