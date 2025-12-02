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
      
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-heading text-foreground mb-2">Contact Us</h1>
            <p className="text-xs text-muted-foreground font-body max-w-2xl mx-auto">
              Get in touch with us for any inquiries about our exquisite jewellery collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Contact Form */}
            <div className="bg-card rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-heading text-foreground mb-4">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="text-xs h-8" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="text-xs h-8" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Your phone number" className="text-xs h-8" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your inquiry..." 
                            className="min-h-[80px] text-xs"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-8 text-xs">Send Message</Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="bg-card rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-heading text-foreground mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5" />
                    <div>
                      <h3 className="font-body font-semibold text-foreground text-xs mb-0.5">Address</h3>
                      <p className="text-[10px] text-muted-foreground font-body">
                        Swapnil Jewellers<br />
                        Jewelry Store Location
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-gold mt-0.5" />
                    <div>
                      <h3 className="font-body font-semibold text-foreground text-xs mb-0.5">Phone</h3>
                      <p className="text-[10px] text-muted-foreground font-body">+91 12345 67890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-gold mt-0.5" />
                    <div>
                      <h3 className="font-body font-semibold text-foreground text-xs mb-0.5">Email</h3>
                      <p className="text-[10px] text-muted-foreground font-body">info@swapniljewellers.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-sm p-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold mt-0.5" />
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-xs mb-2">Business Hours</h3>
                    <div className="space-y-1 text-[10px] text-muted-foreground font-body">
                      <div className="flex justify-between">
                        <span>Monday - Saturday:</span>
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
          <div className="bg-card rounded-lg shadow-sm p-3">
            <h2 className="text-lg font-heading text-foreground mb-3 px-2">Visit Our Store</h2>
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977099450433!2d-122.41941548468196!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
