'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date is required.",
  }),
});

export function CalendarForm({ onDateChange, disabledDates = [] }: { onDateChange: (date: Date | null) => void, disabledDates?: Date[] }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  if (!isClient) {
    return null;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-semibold w-full">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex font-semibold flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <div
                      className={cn(
                        "w-full flex items-center justify-between text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                    </div>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className={`w-auto font-semibold bg-white rounded-[1pc] z-[99999] p-0`} align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      onDateChange(date ?? null);
                    }}
                    disabled={(date) =>
                      date.getTime() < new Date().setHours(0, 0, 0, 0) || 
                      disabledDates.some(disabledDate => disabledDate.getTime() === date.getTime())
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
