import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });
  
  async function onSubmit(data: NewsletterFormValues) {
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/newsletter', data);
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll get weekly design tips and inspiration in your inbox.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your email address"
                  className="bg-secondary w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground border border-white/10"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-opacity-90 text-white py-3 rounded-lg font-medium transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Get Weekly Design Inspo'}
        </Button>
      </form>
    </Form>
  );
}
