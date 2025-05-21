import React, { useState, useEffect } from 'react';
import { Menu, X, Network } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Network className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-bold text-white">NAVNET</span>
          </div>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-primary-500 transition-colors">How It Works</a>
            {/* <a href="#testimonials" className="text-gray-300 hover:text-primary-500 transition-colors">Testimonials</a> */}
            {/* <a href="#pricing" className="text-gray-300 hover:text-primary-500 transition-colors">Pricing</a> */}
            <Button 
              variant="primary" 
              size="md"
              onClick={() => document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-primary-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-primary-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-300 hover:text-primary-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="text-gray-300 hover:text-primary-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <Button 
                variant="primary" 
                size="md"
                className="w-full"
                onClick={() => {
                  document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;