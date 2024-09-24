import React from 'react';

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-12 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Our loan application helps you explore various loan products and manage your finances effectively. Get started with our easy-to-use tools and resources.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2" /> 
            <a href="tel:+911234567890" className="hover:text-gray-300">+91 8179238754</a>
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2" /> 
            <a href="mailto:support@loanapp.com" className="hover:text-gray-300">support@loanapp.com</a>
          </p>
          <p className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" /> 
           hitec city , Hyderabad,Telangana
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-300" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-300" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-300" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-300" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Our Loan Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Personal Loan</li>
            <li>Home Loan</li>
            <li>Car Loan</li>
            <li>Education Loan</li>
            <li>Business Loan</li>
            <li>Gold Loan</li>
            <li>Two-Wheeler Loan</li>
            <li>Travel Loan</li>
            <li>Agriculture Loan</li>
            <li>Mortgage Loan</li>
          </ul>
        </div>
      </div>

      
      <div className="bg-green-900 text-white py-4 mt-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>© {new Date().getFullYear()} Loan Application App. All rights reserved.</p>
          <div className="space-x-4">
            <a
              href="/privacy-policy"
              className="text-white hover:text-gray-300 transition duration-200"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-white hover:text-gray-300 transition duration-200"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
          </div>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
