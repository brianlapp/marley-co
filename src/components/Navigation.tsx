import { Link } from "react-router-dom";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/cab34784-9e56-4008-8fd0-49fbefe2dedd.png" 
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
        </div>
      </div>
    </nav>
  );
};