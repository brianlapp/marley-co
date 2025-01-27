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

    try {
      const form = e.target as HTMLFormElement;
      form.submit();
      
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
      className="w-full max-w-md mx-auto space-y-2 px-4 sm:px-0 js-cm-form"
      action="https://www.createsend.com/t/subscribeerror?description="
      method="post"
      id="subForm"
      data-id="A61C50BEC994754B1D79C5819EC1255C780C82AB3D8F428CF1A5AF96133138DAB6CEDFFE80FFDA652C40DF149AC51EF7E1005C93B2DF3FE45E54B61B3F985E93"
    >
      <div className="flex flex-col sm:flex-row w-full max-w-sm mx-auto items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <Input
          type="email"
          name="cm-tjdlthk-tjdlthk"
          id="fieldEmail"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-white/90 backdrop-blur-sm border-marley-primary/20 w-full js-cm-email-input qa-input-email"
          required
          maxLength={200}
          autoComplete="email"
          aria-label="Email subscription"
        />
        <Button
          type="submit"
          className="js-cm-submit-button h-12 bg-[#FF5757] hover:bg-[#FF5757]/90 text-white w-full sm:w-auto whitespace-nowrap"
          disabled={isLoading}
          aria-label={isLoading ? "Subscribing..." : "Subscribe to newsletter"}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="text-sm text-marley-primary/80 text-center mt-4">
        Sign up today and get $15 towards your next purchase with us
      </p>
    </form>
  );
};