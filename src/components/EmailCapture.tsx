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

    // TODO: Integrate with Mailchimp
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll keep you updated on our launch.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-white/90 backdrop-blur-sm border-marley-primary/20"
          required
        />
        <Button
          type="submit"
          className="h-12 bg-[#F97316] hover:bg-[#F97316]/90 text-white"
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