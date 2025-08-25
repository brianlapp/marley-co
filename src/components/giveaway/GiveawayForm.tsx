import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

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
      <h3 className="text-2xl font-serif text-marley-dark text-center mb-6">
        Enter the Giveaway
      </h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-netlify="true">
        <input type="hidden" name="form-name" value="giveaway" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-marley-primary">
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
            <Label htmlFor="lastName" className="text-marley-primary">
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
          <Label htmlFor="email" className="text-marley-primary">
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
          <Label className="text-marley-primary">
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
          className="w-full h-12 bg-[#FF5757] hover:bg-[#FF5757]/90 text-white font-medium text-lg"
          disabled={isLoading}
        >
          {isLoading ? "Entering..." : "ENTER"}
        </Button>
        
        <p className="text-xs text-marley-accent text-center mt-4">
          By entering, you agree to receive emails from Marley Co. You can unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};