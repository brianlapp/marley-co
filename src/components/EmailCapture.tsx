import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

export const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form submission started");
    console.log("Email value:", email);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      console.log("Form data:", Object.fromEntries(formData.entries()));
      console.log("Submitting to:", form.action);

      // Use fetch with proper CORS settings
      const response = await fetch("https://www.createsend.com/t/subscribeerror?description=", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
      });

      console.log("Form submission response:", response);

      if (response.ok) {
        toast({
          title: "Thank you for subscribing!",
          description: "We'll keep you updated on our launch.",
        });
        setEmail("");
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-md mx-auto space-y-2 px-4 sm:px-0"
      method="post"
      data-id="A61C50BEC994754B1D79C5819EC1255C780C82AB3D8F428CF1A5AF96133138DAB6CEDFFE80FFDA652C40DF149AC51EF7E1005C93B2DF3FE45E54B61B3F985E93"
      action="https://www.createsend.com/t/subscribeerror?description="
    >
      <div className="flex flex-col sm:flex-row w-full max-w-sm mx-auto items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <Input
          type="email"
          name="cm-tjdlthk-tjdlthk"
          id="email-capture"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-white/90 backdrop-blur-sm border-marley-primary/20 w-full"
          required
          maxLength={200}
          autoComplete="email"
          aria-label="Email subscription"
        />
        <Button
          type="submit"
          className="h-12 bg-[#FF5757] hover:bg-[#FF5757]/90 text-white w-full sm:w-auto whitespace-nowrap"
          disabled={isLoading}
          aria-label={isLoading ? "Subscribing..." : "Subscribe to newsletter"}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="text-sm text-white/80 text-center sm:whitespace-nowrap">
        Signup today & Get 25% off your first purchase when we launch!
      </p>
    </form>
  );
};