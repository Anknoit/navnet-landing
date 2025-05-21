import React from 'react';
import { Network, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Network className="h-6 w-6 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">NAVNET</span>
            </div>
            <p className="text-gray-400 mb-4">
              Advanced network fault detection for modern businesses. Predict and prevent network issues before they impact your operations.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
            </div> */}
          </div>
          
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary-500 transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-primary-500 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary-500 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">GDPR Compliance</a>
              </li>
            </ul>
          </div>
          */
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-primary-500 mr-2 mt-0.5" />
                <span className="text-gray-400">ankitjha8891@gmail.com</span>
              </li>
              {/* <li className="flex items-start">
                <Phone size={18} className="text-primary-500 mr-2 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li> */}
                          <div className="flex space-x-4">
              <a href="https://x.com/Anknoit" target="_blank" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={30} />
              </a>
              <a href="https://www.linkedin.com/in/ankit-jha-707825195/" target="_blank" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={30} />
              </a>
              <a href="https://github.com/Anknoit" target="_blank" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Github size={30} />
              </a>
            </div>
              {/* <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Tech Boulevard, San Francisco, CA 94107</span>
              </li> */}
            </ul>
          </div> }
        </div>
        
        <div className="border-t border-dark-700 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NAVNET. All rights reserved.
          </p> */}
          <div className="flex space-x-6">
            {/* <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">Cookies</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;