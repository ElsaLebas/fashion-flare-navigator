
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would connect to a backend service
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter and exclusive offers soon.",
    });
    
    setEmail("");
  };
  
  return (
    <section className="py-16 bg-fashion-cream">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="section-title">Join Our Newsletter</h2>
        <p className="text-fashion-black mb-8">
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 border border-fashion-gray focus:border-fashion-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="bg-fashion-black text-white px-8 py-3 font-medium hover:bg-fashion-burgundy transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          By subscribing you agree to our Terms of Use and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
