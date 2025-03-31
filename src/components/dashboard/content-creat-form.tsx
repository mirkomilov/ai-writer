import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Loader2 } from 'lucide-react';
import { ContentCreatRequestParam } from '@/shared/types/content-creat-request-param';

type ContentCreateFormProps = {
  isLoading: boolean;
  onSubmit: (params: ContentCreatRequestParam) => void;
};

export default function ContentCreate({
  isLoading,
  onSubmit,
}: ContentCreateFormProps) {
  const [form, setForm] = useState<ContentCreatRequestParam>({
    title: '',
    description: '',
  });

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(form);
  };
  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="description">Description</Label>
        <Textarea
          placeholder="Type your description here."
          id="description"
          name="description"
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <Button disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Generate
      </Button>
    </form>
  );
}
