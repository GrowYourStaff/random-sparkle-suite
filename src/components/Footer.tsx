import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/Untitled design (1).svg" 
                alt="Zenvve" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Scale your LinkedIn outreach with real, human-managed accounts. We handle prospecting, outreach, and deliver warm replies directly to you.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#why-zenvve" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#get-started" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a 
                  href="mailto:support@zenvve.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  support@zenvve.com
                </a>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Zenvve. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;