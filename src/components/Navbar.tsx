import React, { useState, useEffect } from 'react';
import { Infinity } from 'lucide-react';

const Navbar = () => {
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <Infinity className="h-8 w-8 text-gray-800" />
            <span className="ml-2 font-bold text-gray-800 text-xl tracking-tight">MOBIUS</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-blue-600 font-medium">Home</a>
          <a href="#about-us" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About Us</a>
          <a href="#plans" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Plans</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
          <a href="#privacy" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Privacy Policy</a>
          <div className="relative group">
            <a href="#more" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">More</a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 top-full">
              <a href="#resources" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Resources</a>
              <a href="#blog" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Blog</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Contact</a>
            </div>
          </div>
        </div>
        
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;