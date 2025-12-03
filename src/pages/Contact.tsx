import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-4 px-3 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">Contact Us</h1>
            <p className="text-[10px] text-muted-foreground font-body max-w-xl mx-auto">
              Get in touch for inquiries about our pure gold collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-4">
            {/* Contact Form */}
            <div className="bg-card rounded-lg shadow-sm p-3">
              <h2 className="text-xs font-heading font-semibold text-foreground mb-2">Send Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[9px]">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="text-[9px] h-7" {...field} />
                        </FormControl>
                        <FormMessage className="text-[8px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[9px]">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="text-[9px] h-7" {...field} />
                        </FormControl>
                        <FormMessage className="text-[8px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[9px]">Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 XXXXX XXXXX" className="text-[9px] h-7" {...field} />
                        </FormControl>
                        <FormMessage className="text-[8px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[9px]">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your inquiry..." 
                            className="min-h-[60px] text-[9px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[8px]" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-7 text-[9px] bg-gold text-foreground">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="bg-card rounded-lg shadow-sm p-3">
                <h2 className="text-xs font-heading font-semibold text-foreground mb-2">Contact Info</h2>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3 h-3 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-body font-medium text-foreground text-[9px]">Address</h3>
                      <p className="text-[8px] text-muted-foreground font-body">
                        Ring Rd, Malharganj, Indore
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-3 h-3 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-body font-medium text-foreground text-[9px]">Phone</h3>
                      <p className="text-[8px] text-muted-foreground font-body">+91 7314051261</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="w-3 h-3 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-body font-medium text-foreground text-[9px]">Email</h3>
                      <p className="text-[8px] text-muted-foreground font-body">info@swapniljewellers.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-sm p-3">
                <div className="flex items-start gap-2">
                  <Clock className="w-3 h-3 text-gold mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-body font-medium text-foreground text-[9px] mb-1">Business Hours</h3>
                    <div className="space-y-0.5 text-[8px] text-muted-foreground font-body">
                      <div className="flex justify-between">
                        <span>Mon - Sat:</span>
                        <span>10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>11:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-lg shadow-sm p-2">
            <h2 className="text-xs font-heading font-semibold text-foreground mb-2 px-1">Visit Our Store</h2>
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1234567890!2d75.8765432!3d22.7195678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjQiTiA3NcKwNTInMzUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
