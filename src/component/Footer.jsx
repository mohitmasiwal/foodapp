import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* About section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are a team of passionate developers dedicated to creating quality software solutions. Our mission is to innovate and create a seamless experience for our users.
            </p>
          </div>

         
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-2">
              123, Software Lane, Tech City, TX 54321
            </p>
            <p className="text-gray-400 mb-2">Email: info@company.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-10 pt-5 text-center">
          <p className="text-gray-500">&copy; 2024 Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
