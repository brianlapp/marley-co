import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import diaperBagHero from "@/assets/diaper-bag-hero.jpg";

export const GiveawayForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [parentStatus, setParentStatus] = useState("");

  useEffect(() => {
    // Load Campaign Monitor script
    const script = document.createElement('script');
    script.src = 'https://js.createsend1.com/javascript/copypastesubscribeformlogic.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
        action="https://www.createsend.com/t/subscribeerror?description=&redirect=https://positive-parenting-solutions-giveaway.lovable.app/giveaway-success"
        method="post"
        data-id="A61C50BEC994754B1D79C5819EC1255CFA28D1654E6F0CD6DD89EBC6584511957D64FA779A3911D0CBD6793EBFE3D860B8AC108077707263B7C565A5740BE030"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-marley-primary text-left block">
              First Name *
            </Label>
            <input
              id="firstName"
              name="cm-f-dtktuiu"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-accent-red/30 rounded-md focus:border-accent-red focus:ring-accent-red/20 focus:ring-2 focus:outline-none"
              placeholder="Enter your first name"
              maxLength={200}
            />
          </div>
          
          <div>
            <Label htmlFor="lastName" className="text-marley-primary text-left block">
              Last Name *
            </Label>
            <input
              id="lastName"
              name="cm-f-dtktudl"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-accent-red/30 rounded-md focus:border-accent-red focus:ring-accent-red/20 focus:ring-2 focus:outline-none"
              placeholder="Enter your last name"
              maxLength={200}
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="email" className="text-marley-primary text-left block">
            Email *
          </Label>
          <input
            id="email"
            name="cm-ttdljdt-ttdljdt"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-accent-red/30 rounded-md focus:border-accent-red focus:ring-accent-red/20 focus:ring-2 focus:outline-none js-cm-email-input qa-input-email"
            placeholder="Enter your email address"
            autoComplete="email"
            maxLength={200}
          />
        </div>
        
        <div>
          <Label htmlFor="parentStatus" className="text-marley-primary text-left block">
            I am... *
          </Label>
          <select
            id="parentStatus"
            name="cm-fo-dtktudr"
            required
            value={parentStatus}
            onChange={(e) => setParentStatus(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-accent-red/30 rounded-md focus:border-accent-red focus:ring-accent-red/20 focus:ring-2 focus:outline-none bg-white"
          >
            <option value="">Select your status</option>
            <option value="7256125">I'm Pregnant</option>
            <option value="7256126">I Gave Birth</option>
            <option value="7256127">Grandparent</option>
          </select>
        </div>

        
        <button
          type="submit"
          className="w-full h-12 lg:h-14 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold text-lg lg:text-xl rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 js-cm-submit-button"
        >
          ENTER
        </button>
        
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
