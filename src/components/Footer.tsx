
    <footer className="bg-marley-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="flex flex-col items-center space-y-8">
          <img 
            src="/lovable-uploads/cab34784-9e56-4008-8fd0-49fbefe2dedd.png" 
            alt="Marley Co. Logo" 
            className="w-48 h-auto"
          />
          <div className="max-w-md w-full">
            <EmailCapture />
          </div>
        </div>
        <div className="text-center text-white/80 pt-8 border-t border-white/20">
          <p>© {new Date().getFullYear()} Marley Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};