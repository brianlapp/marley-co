import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  const handleNavigation = (id: string) => {
    if (isContactPage) {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 pl-4 rounded-md text-marley-primary hover:text-marley-accent"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo container - centered on mobile, left-aligned on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:relative sm:left-0 sm:transform-none">
            <Link to="/">
              <img 
                src="/lovable-uploads/32dc9097-70f7-413a-b918-743a39b81fac.png" 
                alt="Marley Co. Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            <button 
              onClick={() => handleNavigation('about')} 
              className="text-marley-primary hover:text-marley-accent px-3 py-2 text-sm font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('features')} 
              className="text-marley-primary hover:text-marley-accent px-3 py-2 text-sm font-medium"
            >
              Features
            </button>
            <Link to="/contact" className="text-marley-primary hover:text-marley-accent px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Empty div to maintain spacing */}
          <div className="w-10 sm:hidden"></div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavigation('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-marley-primary hover:text-marley-accent"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('features')}
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