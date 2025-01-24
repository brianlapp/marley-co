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

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Add this to handle CORS
        headers: {
          'Accept': 'application/json',
        }
      });

      console.log("Form submission response:", response);

      toast({
        title: "Thank you for subscribing!",
        description: "We'll keep you updated on our launch.",
      });
      setEmail("");
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
      className="w-full max-w-md space-y-2"
      method="post"
      data-id="A61C50BEC994754B1D79C5819EC1255C780C82AB3D8F428CF1A5AF96133138DAB6CEDFFE80FFDA652C40DF149AC51EF7E1005C93B2DF3FE45E54B61B3F985E93"
      action="https://www.createsend.com/t/subscribeerror?description="
    >
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          name="cm-tjdlthk-tjdlthk"
          id="fieldEmail"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-white/90 backdrop-blur-sm border-marley-primary/20"
          required
          maxLength={200}
          autoComplete="Email"
        />
        <Button
          type="submit"
          className="h-12 bg-[#FF5757] hover:bg-[#FF5757]/90 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="text-sm text-white/80">
        Get 25% off your first purchase when we launch!
      </p>
    </form>
  );
};