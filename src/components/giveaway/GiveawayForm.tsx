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
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<GiveawayFormData>();
  
  const parentStatus = watch("parentStatus");

  const onSubmit = async (data: GiveawayFormData) => {
    setIsLoading(true);
    
    try {
      // Create form data for Netlify
      const formData = new FormData();
      formData.append("form-name", "giveaway");
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("parentStatus", data.parentStatus);

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Entry Successful!",
          description: "You're entered to win! Check your email for confirmation and bonus entry opportunities.",
        });
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
      <div className="text-center mb-6">
        <h3 className="font-headline text-2xl lg:text-3xl font-bold text-marley-dark mb-2">
          Enter to Win!
        </h3>
        <p className="text-accent-red font-semibold text-base lg:text-lg">
          Your dream diaper bag awaits
        </p>
      </div>
      
      <div className="mb-6 -mx-6 lg:-mx-8 relative group">
        <img 
          src={diaperBagHero} 
          alt="Stylish Marley Co diaper bag in modern neutral color"
          className="w-full h-auto transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-netlify="true">
        <input type="hidden" name="form-name" value="giveaway" />
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-marley-primary text-left block">
              First Name *
            </Label>
            <Input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className="mt-1"
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
              className="mt-1"
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
            className="mt-1"
            placeholder="Enter your email address"
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
            <SelectTrigger className="mt-1">
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
        
        <Button
          type="submit"
          className="w-full h-12 lg:h-14 bg-gradient-to-r from-accent-red to-accent-red/90 hover:from-accent-red/90 hover:to-accent-red text-accent-red-foreground font-bold text-lg lg:text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
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
            By entering, you agree to receive emails from Marley Co. Unsubscribe anytime.
          </p>
          <p className="text-xs text-green-600 font-medium">
            No purchase required • Takes under 30 seconds
          </p>
        </div>
      </form>
    </div>
  );
};
