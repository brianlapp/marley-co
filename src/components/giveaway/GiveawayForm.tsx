import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import diaperBagHero from "@/assets/diaper-bag-hero.jpg";

interface GiveawayFormData {
  firstName: string;
  lastName: string;
  email: string;
  parentStatus: string;
}

export const GiveawayForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<GiveawayFormData>();
  
  const parentStatus = watch("parentStatus");

  const onSubmit = async (data: GiveawayFormData) => {
    setIsLoading(true);
    
    try {
      // Submit to our Netlify function which handles Campaign Monitor
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`.trim(),
          email: data.email,
          parentStatus: data.parentStatus,
          joinMailingList: true
        }),
      });

      if (response.ok) {
        toast({
          title: "Entry Successful!",
          description: "You're entered to win! Check your email for confirmation and bonus entry opportunities.",
        });
        // Reset form
        reset();
      } else {
        throw new Error("Form submission failed");
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
    <div className="w-full">
      <div className="text-center -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 p-3 lg:p-4 bg-accent-red rounded-t-3xl">
        <h3 className="font-headline text-2xl lg:text-4xl xl:text-5xl font-black text-white mb-1">
          Enter to Win!
        </h3>
        <p className="text-white/90 font-semibold text-sm lg:text-lg">
          Your dream diaper bag awaits
        </p>
      </div>
      
      <div className="-mx-6 lg:-mx-8 relative group">
        <img 
          src={diaperBagHero} 
          alt="Stylish Marley Co diaper bag in modern neutral color"
          className="w-full h-auto transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <form
        id="subForm"
        className="js-cm-form space-y-4"
        action="https://www.createsend.com/t/subscribeerror?description="
        method="post"
        data-id="A61C50BEC994754B1D79C5819EC1255CFA28D1654E6F0CD6DD89EBC6584511957D64FA779A3911D0CBD6793EBFE3D860B8AC108077707263B7C565A5740BE030"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-marley-primary text-left block">
              First Name *
            </Label>
            <Input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className="mt-1 border border-accent-red/30 focus:border-accent-red focus:ring-accent-red/20"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="lastName" className="text-marley-primary text-left block">
              Last Name *
            </Label>
            <Input
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              className="mt-1 border border-accent-red/30 focus:border-accent-red focus:ring-accent-red/20"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <Label htmlFor="email" className="text-marley-primary text-left block">
            Email *
          </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address"
                }
              })}
              className="mt-1 border border-accent-red/30 focus:border-accent-red focus:ring-accent-red/20"
              placeholder="Enter your email address"
              autoComplete="email"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Label className="text-marley-primary text-left block">
            I am... *
          </Label>
          <Select 
            onValueChange={(value) => setValue("parentStatus", value)}
            required
          >
            <SelectTrigger className="mt-1 border border-accent-red/30 focus:border-accent-red focus:ring-accent-red/20">
              <SelectValue placeholder="Select your status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pregnant">I'm Pregnant</SelectItem>
              <SelectItem value="gave-birth">I Gave Birth</SelectItem>
              <SelectItem value="grandparent">Grandparent</SelectItem>
            </SelectContent>
          </Select>
          {!parentStatus && (
            <p className="text-sm text-red-600 mt-1">Please select your status</p>
          )}
        </div>

        {/* Hidden Campaign Monitor fields */}
        <input type="hidden" name="cm-name" value={`${watch('firstName') || ''} ${watch('lastName') || ''}`.trim()} />
        <input type="hidden" name="cm-ttdljdt-ttdljdt" value={watch('email') || ''} />
        
        <Button
          type="submit"
          className="w-full h-12 lg:h-14 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold text-lg lg:text-xl rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Entering...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              ENTER
            </span>
          )}
        </Button>
        
        <div className="text-center mt-6 space-y-2">
          <p className="text-xs text-marley-accent">
            By entering, you agree to receive emails from Marley Co and accept our{" "}
            <a href="/privacy-policy" className="text-accent-red underline hover:text-accent-red/80 transition-colors">
              Privacy Policy
            </a>. Unsubscribe anytime.
          </p>
          <p className="text-xs text-accent-red font-medium">
            No purchase required • Takes under 30 seconds
          </p>
        </div>
      </form>
    </div>
  );
};
