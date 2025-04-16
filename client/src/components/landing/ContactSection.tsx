import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { apiRequest } from '@/lib/queryClient';

const contactSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name cannot exceed 100 characters' })
    .refine(name => /^[a-zA-Z\s'-]+$/.test(name), {
      message: 'Name should only contain letters, spaces, hyphens, and apostrophes'
    }),
  email: z.string()
    .email({ message: 'Please enter a valid email address' })
    .min(5, { message: 'Email is too short' })
    .max(254, { message: 'Email cannot exceed 254 characters' })
    .refine(email => {
      // Basic email format validation (more thorough than the built-in email validation)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }, { message: 'Please enter a valid email address' }),
  phone: z.string()
    .optional()
    .refine(phone => !phone || /^[0-9+\-\s()]{7,20}$/.test(phone), {
      message: 'Please enter a valid phone number'
    }),
  subject: z.string()
    .min(3, { message: 'Subject must be at least 3 characters long' })
    .max(150, { message: 'Subject cannot exceed 150 characters' })
    .refine(subject => !/^\s*$/.test(subject), { 
      message: 'Subject cannot be only whitespace'
    }),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(5000, { message: 'Message is too long (maximum 5000 characters)' })
    .refine(message => !/^\s*$/.test(message), {
      message: 'Message cannot be only whitespace'
    })
    .refine(message => {
      // Checking for repetitive characters that might indicate spam
      const repeatedCharRegex = /(.)\1{10,}/;
      return !repeatedCharRegex.test(message);
    }, { message: 'Message contains too many repeated characters' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });
  
  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // Send form data to the API
      await apiRequest('POST', '/api/contact', data);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Message failed to send",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-secondary/30 -z-10"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-primary text-glow">Touch</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to transform your online presence? Let's discuss your project.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="bg-secondary/50 border-white/10 focus:border-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
                              className="bg-secondary/50 border-white/10 focus:border-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+1 (123) 456-7890" 
                              className="bg-secondary/50 border-white/10 focus:border-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Project Inquiry" 
                              className="bg-secondary/50 border-white/10 focus:border-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project and requirements..." 
                            className="min-h-[120px] bg-secondary/50 border-white/10 focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </GlassCard>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div>
              <GlassCard className="p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mr-4 mt-1">
                      <i className="ri-map-pin-2-line text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Office Location</h4>
                      <p className="text-foreground/70">123 Innovation Drive, Suite 400<br />
                      Tech City, CA 94100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mr-4 mt-1">
                      <i className="ri-mail-line text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email Us</h4>
                      <p className="text-foreground/70">
                        <a href="#" className="hover:text-primary transition-colors">info@webysoft.com</a><br />
                        <a href="#" className="hover:text-primary transition-colors">support@webysoft.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center text-[#10B981] mr-4 mt-1">
                      <i className="ri-phone-line text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Call Us</h4>
                      <p className="text-foreground/70">
                        <a href="#" className="hover:text-primary transition-colors">+1 (555) 123-4567</a><br />
                        <span className="text-sm">Mon-Fri: 9AM - 6PM EST</span>
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <div className="text-center bg-primary/10 p-3 rounded-lg">
                      <span className="text-primary font-medium">Average response time: 2-3 hours</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}