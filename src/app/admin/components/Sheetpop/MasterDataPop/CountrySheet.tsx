import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { PlusCircle } from 'lucide-react';
import { ComboboxForm } from './ComboBox';

type Country = {
  id: string;
  name: string;
};

type Props = {
  onAddSuccess: () => void;
};

function CreateLocationForm({ onAddSuccess }: Props) {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Updated function to set name directly
  const handleLocationSelect = (location: string) => {
    setName(location); // Set the name to the selected location
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    setIsSubmitting(true);
    setError(null);
  
    try {
      const response = await fetch('/api/POST/Location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }), // Include the selected location in the request body
      });
  
      if (!response.ok) {
        throw new Error('Server error: ' + response.statusText);
      }
  
      const data = await response.json();
      console.log('Data received:', data);
      onAddSuccess();
      alert('Location created successfully!');
    } catch (error:any) {
      console.error('Error:', error);
      setError('Failed to create location: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Button className="text-[12px] bg-[#48A0FF] py-2 h-fit">
          <PlusCircle className="mr-1" size={12} /> Add Location
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[999]">
        <SheetHeader>
          <SheetTitle>Add Location</SheetTitle>
          <SheetFooter>Click save when you&apos;re done.</SheetFooter>
        </SheetHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="name" className="text-left">Name</Label>
              <ComboboxForm onLocationSelect={handleLocationSelect} />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Save changes'}
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default CreateLocationForm;
