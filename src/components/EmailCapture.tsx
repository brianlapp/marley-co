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
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-2 px-4 sm:px-0"
      action="https://marleyco.us21.list-manage.com/subscribe/post?u=REPLACE_WITH_U_VALUE&amp;id=REPLACE_WITH_ID"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <div className="flex flex-col sm:flex-row w-full max-w-sm mx-auto items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <Input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
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
      
      {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_REPLACE_WITH_U_VALUE_AGAIN_HERE" tabIndex={-1} />
      </div>
    </form>
  );
};