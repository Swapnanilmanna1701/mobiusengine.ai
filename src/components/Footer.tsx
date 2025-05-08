import React from 'react';
import { Infinity, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Infinity className="h-8 w-8 text-white" />
              <span className="ml-2 font-bold text-white text-xl tracking-tight">MOBIUS</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered job application service helping professionals land their dream jobs faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about-us" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interview Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Job Market Insights</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">support@mobiusengine.ai</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+1 (888) 555-JOBS</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">1234 Innovation Drive, San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MobiusEngine.ai. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;