import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 flex justify-center sm:justify-start">
            <img 
              src="/lovable-uploads/32dc9097-70f7-413a-b918-743a39b81fac.png" 
              alt="Marley Co. Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden sm:flex sm:space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-marley-primary hover:text-marley-accent px-3 py-2 text-sm font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-marley-primary hover:text-marley-accent px-3 py-2 text-sm font-medium"
            >
              Features
            </button>
            <Link to="/contact" className="text-marley-primary hover:text-marley-accent px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md text-marley-primary hover:text-marley-accent"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-marley-primary hover:text-marley-accent"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-marley-primary hover:text-marley-accent"
              >
                Features
              </button>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-marley-primary hover:text-marley-accent"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};